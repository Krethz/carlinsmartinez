import type { Metadata } from "next";
import { Shield, User, Target, Database, Clock, Users, Lock, AlertCircle, FileText, Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Información sobre cómo tratamos tus datos personales según el RGPD y la LOPD. Dietista Nutricionista Carla Martínez en Barcelona.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidad() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6" style={{ backgroundColor: "var(--light-bg)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: "var(--primary-green)" }}
          >
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--primary-green)" }}
          >
            Política de Privacidad
          </h1>
          <p className="text-gray-600">
            Tu privacidad es importante. Aquí te explicamos cómo protegemos tus datos.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <User className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Responsable del Tratamiento
                </h2>
                <div className="text-gray-600 space-y-1">
                  <p><span className="font-medium text-gray-800">Identidad:</span> Carla Martínez Arribas</p>
                  <p><span className="font-medium text-gray-800">Actividad:</span> Dietista-Nutricionista (col.CAT002241)</p>
                  <p><span className="font-medium text-gray-800">Email:</span>{" "}
                    <a href="mailto:carla.martinez@codinucat.cat" className="underline" style={{ color: "var(--primary-green)" }}>
                      carla.martinez@codinucat.cat
                    </a>
                  </p>
                  <p><span className="font-medium text-gray-800">Teléfono:</span>{" "}
                    <a href="tel:+34636019161" className="underline" style={{ color: "var(--primary-green)" }}>
                      +34 636 019 161
                    </a>
                  </p>
                  <p><span className="font-medium text-gray-800">Ubicación:</span> Sant Quirze del Vallès, Barcelona</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Target className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Finalidad del Tratamiento
                </h2>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-coral)" }}>•</span>
                    Gestionar consultas y solicitudes de cita
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-coral)" }}>•</span>
                    Prestar servicios de asesoramiento nutricional
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-coral)" }}>•</span>
                    Realizar seguimiento de tu evolución
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-coral)" }}>•</span>
                    Mantener comunicación sobre tu tratamiento
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-coral)" }}>•</span>
                    Gestión administrativa y contable
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <FileText className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Legitimación
                </h2>
                <ul className="text-gray-600 space-y-2">
                  <li><span className="font-medium text-gray-800">Consentimiento:</span> Al enviar el formulario de contacto</li>
                  <li><span className="font-medium text-gray-800">Contrato:</span> Para la prestación de servicios nutricionales</li>
                  <li><span className="font-medium text-gray-800">Obligación legal:</span> Conservación de historiales clínicos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Database className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Datos Recopilados
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 text-gray-600">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-gray-800 text-sm">Identificación</p>
                    <p className="text-sm">Nombre, apellidos, DNI/NIE</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-gray-800 text-sm">Contacto</p>
                    <p className="text-sm">Email, teléfono, dirección</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-gray-800 text-sm">Salud</p>
                    <p className="text-sm">Historia clínica, antropometría</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-gray-800 text-sm">Económicos</p>
                    <p className="text-sm">Datos de facturación</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Clock className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Conservación de Datos
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium text-gray-800">Relación activa:</span> Mientras se presten los servicios</p>
                  <p><span className="font-medium text-gray-800">Historiales clínicos:</span> Mínimo 5 años</p>
                  <p><span className="font-medium text-gray-800">Datos fiscales:</span> 6 años</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Users className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Destinatarios
                </h2>
                <p className="text-gray-600 mb-2">
                  Tus datos no se ceden a terceros, excepto:
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Obligación legal (Hacienda, autoridades sanitarias)</li>
                  <li>• Proveedores de servicios necesarios</li>
                  <li>• Otros profesionales sanitarios (con tu consentimiento)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Lock className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Tus Derechos
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Acceso", "Rectificación", "Supresión", "Limitación", "Portabilidad", "Oposición"].map((right) => (
                    <span
                      key={right}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: "var(--light-bg)", color: "var(--primary-green)" }}
                    >
                      {right}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  Contacta a <a href="mailto:carla.martinez@codinucat.cat" className="underline" style={{ color: "var(--primary-green)" }}>carla.martinez@codinucat.cat</a> para ejercer tus derechos.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <AlertCircle className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Reclamaciones
                </h2>
                <p className="text-gray-600 text-sm">
                  Puedes presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--primary-green)" }}>Agencia Española de Protección de Datos</a> (C/ Jorge Juan, 6 - 28001 Madrid).
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--accent-gold)" }}
              >
                <Cookie className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--primary-green)" }}>
                  Cookies
                </h2>
                <p className="text-gray-600 text-sm">
                  Este sitio web solo utiliza cookies técnicas estrictamente necesarias. No utilizamos cookies de seguimiento o análisis.
                </p>
              </div>
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
