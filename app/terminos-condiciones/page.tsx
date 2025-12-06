import type { Metadata } from "next";
import { FileText, CreditCard, Building2, XCircle, Calendar, Phone, Mail, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Política de pagos, cancelaciones y reprogramación de citas con la Dietista Nutricionista Carla Martínez en Barcelona.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosCondiciones() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6" style={{ backgroundColor: "var(--light-bg)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: "var(--primary-green)" }}
          >
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--primary-green)" }}
          >
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">
            Información sobre pagos, cancelaciones y política de citas.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Primera Visita */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <CreditCard className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--primary-green)" }}>
                  Política de Pagos
                </h2>

                <div className="space-y-4">
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "var(--light-bg)" }}
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">Primera Visita</h3>
                    <p className="text-gray-600 text-sm">
                      Una vez programada, se requiere un <span className="font-semibold">pago anticipado del 50%</span> mediante transferencia bancaria. El 50% restante se abona al finalizar la sesión.
                    </p>
                  </div>

                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "var(--light-bg)" }}
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">Seguimientos</h3>
                    <p className="text-gray-600 text-sm">
                      El pago se realiza al término de cada sesión. Disponible en efectivo (presenciales) o transferencia bancaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Datos Bancarios */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Building2 className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--primary-green)" }}>
                  Datos Bancarios
                </h2>

                <div
                  className="rounded-xl p-6 text-center"
                  style={{ backgroundColor: "var(--primary-green)" }}
                >
                  <p className="text-white/80 text-sm mb-2">IBAN para transferencias</p>
                  <p className="text-white font-mono text-lg sm:text-xl font-bold tracking-wider">
                    ES44 2100 0362 1402 0077 3521
                  </p>
                </div>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  Indica tu <span className="font-medium">nombre y apellidos</span> en el concepto de la transferencia.
                </p>
              </div>
            </div>
          </section>

          {/* Cancelación */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-coral)" }}
              >
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--primary-green)" }}>
                  Política de Cancelación
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-4 border-2"
                    style={{ borderColor: "var(--primary-green)", backgroundColor: "var(--light-bg)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">✓</span>
                      <h3 className="font-semibold text-gray-800">Con +24h</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Cancela o reprograma tu cita sin coste alguno.
                    </p>
                  </div>

                  <div
                    className="rounded-xl p-4 border-2"
                    style={{ borderColor: "var(--accent-coral)", backgroundColor: "#fef2f2" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">✗</span>
                      <h3 className="font-semibold text-gray-800">Menos de 24h</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Se pierde el importe de la reserva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reprogramación */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Calendar className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Reprogramación de Citas
                </h2>
                <p className="text-gray-600">
                  Las citas pueden reprogramarse siempre que avises con al menos <span className="font-semibold">24 horas de antelación</span>. Buscaremos un nuevo horario que se ajuste a tus necesidades.
                </p>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "var(--primary-green)" }}
          >
            <h2 className="text-xl font-semibold mb-6 text-white text-center">
              ¿Tienes dudas? Contáctame
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+34636019161"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+34 636 019 161</span>
              </a>
              <a
                href="mailto:carla.martinez@codinucat.cat"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://instagram.com/carlinsmartinez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">@carlinsmartinez</span>
              </a>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Última actualización: Noviembre 2025</p>
        </div>
      </div>
    </main>
  );
}
