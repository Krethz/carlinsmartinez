import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar email
    const data = await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>', // Cambiar después de verificar dominio
      to: ['carlamartinez.nutricion@gmail.com'],
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
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
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Teléfono:</div>
                  <div class="value">${phone || 'No proporcionado'}</div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
