import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const LIMITS = { name: 100, email: 254, phone: 30, message: 4000 } as const;

const hits = new Map<string, number[]>();

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const ip = forwarded.split(',')[0]?.trim();
    if (ip) return ip;
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      const fresh = times.filter((t) => now - t < WINDOW_MS);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  }
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function plainText(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: NextRequest) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Inténtalo más tarde.' },
      { status: 429 }
    );
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'El envío de email no está configurado' },
        { status: 500 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return badRequest('Solicitud no válida');
    }

    if (!body || typeof body !== 'object') {
      return badRequest('Solicitud no válida');
    }

    const { name, email, phone, message } = body as Record<string, unknown>;

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return badRequest('Faltan campos requeridos');
    }
    if (phone !== undefined && phone !== null && typeof phone !== 'string') {
      return badRequest('Solicitud no válida');
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return badRequest('Faltan campos requeridos');
    }
    if (
      trimmedName.length > LIMITS.name ||
      trimmedEmail.length > LIMITS.email ||
      trimmedPhone.length > LIMITS.phone ||
      trimmedMessage.length > LIMITS.message
    ) {
      return badRequest('Algún campo supera la longitud permitida');
    }
    if (!EMAIL_RE.test(trimmedEmail)) {
      return badRequest('El email no es válido');
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safePhone = escapeHtml(trimmedPhone);
    const safeMessage = escapeHtml(trimmedMessage);

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Carla Martínez <contacto@carlinsmartinez.com>',
      to: ['carlamartinez.nutricion@gmail.com'],
      replyTo: trimmedEmail,
      subject: `Nueva consulta de ${plainText(trimmedName)}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #566441;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #566441;
              }
              .value {
                margin-top: 5px;
                white-space: pre-wrap;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📧 Nueva Consulta desde el Formulario Web</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nombre:</div>
                  <div class="value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${safeEmail}</div>
                </div>
                <div class="field">
                  <div class="label">📱 Teléfono:</div>
                  <div class="value">${safePhone || 'No proporcionado'}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="value">${safeMessage}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
