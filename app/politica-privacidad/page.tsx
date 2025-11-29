export default function PoliticaPrivacidad() {
  return (
    <main className="pt-32 px-6 pb-24 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1
        className="text-4xl font-bold mb-6"
        style={{ color: "var(--primary-green)" }}
      >
        Política de Privacidad
      </h1>

      <p className="mb-6 text-gray-600">
        En conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPD), 
        te informamos sobre cómo tratamos tus datos personales.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        1. Responsable del Tratamiento
      </h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p>
          <strong>Identidad:</strong> Carla Martínez Arribas<br />
          <strong>Actividad:</strong> Dietista-Nutricionista (col.CAT002241)<br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:carla.martinez@codinucat.cat"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            carla.martinez@codinucat.cat
          </a><br />
          <strong>Teléfono:</strong>{" "}
          <a
            href="tel:+34636019161"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            +34 636 019 161
          </a><br />
          <strong>Ubicación:</strong> Sant Quirze del Vallès, Barcelona, España
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        2. Finalidad del Tratamiento
      </h2>
      <p className="mb-4">
        Los datos personales que nos proporciones serán tratados con las siguientes finalidades:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Gestionar las consultas y solicitudes de cita enviadas a través del formulario de contacto</li>
        <li>Prestar servicios de asesoramiento nutricional personalizado</li>
        <li>Realizar el seguimiento de tu evolución y progreso nutricional</li>
        <li>Mantener comunicación relacionada con tu tratamiento nutricional</li>
        <li>Gestión administrativa y contable de los servicios prestados</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        3. Legitimación
      </h2>
      <p className="mb-4">
        La base legal para el tratamiento de tus datos personales es:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Consentimiento del interesado:</strong> Al enviar el formulario de contacto o solicitar una cita, consientes expresamente el tratamiento de tus datos</li>
        <li><strong>Ejecución de un contrato:</strong> Para la prestación de los servicios de nutrición contratados</li>
        <li><strong>Cumplimiento de obligaciones legales:</strong> Conservación de historiales clínicos según normativa sanitaria</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        4. Datos Recopilados
      </h2>
      <p className="mb-4">
        Los datos que podemos recopilar incluyen:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Datos de identificación (nombre, apellidos, DNI/NIE)</li>
        <li>Datos de contacto (email, teléfono, dirección)</li>
        <li>Datos de salud (historia clínica, hábitos alimentarios, alergias, intolerancias, antropometría)</li>
        <li>Datos económicos (para facturación y cobro de servicios)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        5. Conservación de Datos
      </h2>
      <p className="mb-4">
        Los datos personales se conservarán:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Durante la relación profesional:</strong> Mientras se presten los servicios nutricionales</li>
        <li><strong>Historiales clínicos:</strong> Mínimo 5 años desde la última asistencia (según legislación sanitaria)</li>
        <li><strong>Datos fiscales:</strong> 6 años (según normativa tributaria)</li>
        <li><strong>Tras finalizar la relación:</strong> Hasta que solicites su supresión, salvo obligación legal de conservación</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        6. Destinatarios de los Datos
      </h2>
      <p className="mb-4">
        Tus datos personales no serán cedidos a terceros, excepto:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Cuando exista obligación legal (Hacienda, Seguridad Social, autoridades sanitarias)</li>
        <li>Proveedores de servicios necesarios para la prestación del servicio (plataforma de videollamadas, almacenamiento en la nube) que actúan como encargados de tratamiento bajo estrictas condiciones de confidencialidad</li>
        <li>Otros profesionales sanitarios, únicamente con tu consentimiento expreso y para tu beneficio terapéutico</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        7. Tus Derechos
      </h2>
      <p className="mb-4">
        Puedes ejercer los siguientes derechos en cualquier momento:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Acceso:</strong> Conocer qué datos personales tengo sobre ti</li>
        <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
        <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos (derecho al olvido)</li>
        <li><strong>Limitación:</strong> Solicitar que solo se conserven para el ejercicio de reclamaciones</li>
        <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
        <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
        <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento en cualquier momento</li>
      </ul>

      <p className="mb-4">
        Para ejercer estos derechos, puedes contactar mediante:
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:carla.martinez@codinucat.cat"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            carla.martinez@codinucat.cat
          </a><br />
          📱 Teléfono:{" "}
          <a
            href="tel:+34636019161"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            +34 636 019 161
          </a>
        </p>
      </div>

      <p className="mb-6">
        Deberás acreditar tu identidad mediante DNI/NIE. La respuesta se proporcionará en un plazo máximo de 1 mes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        8. Reclamaciones
      </h2>
      <p className="mb-4">
        Si consideras que tus derechos no han sido atendidos correctamente, puedes presentar una reclamación ante la 
        Agencia Española de Protección de Datos (AEPD):
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p>
          <strong>Agencia Española de Protección de Datos</strong><br />
          C/ Jorge Juan, 6<br />
          28001 – Madrid<br />
          Web:{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            www.aepd.es
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        9. Seguridad
      </h2>
      <p className="mb-4">
        Hemos implementado medidas técnicas y organizativas adecuadas para garantizar la seguridad de tus datos personales 
        y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, 
        la naturaleza de los datos y los riesgos a los que están expuestos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--primary-green)" }}>
        10. Cookies
      </h2>
      <p className="mb-4">
        Este sitio web no utiliza cookies de seguimiento o análisis. Solo se utilizan cookies técnicas estrictamente 
        necesarias para el funcionamiento de la web.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-300">
        <p className="text-sm text-gray-500">
          <strong>Última actualización:</strong> Noviembre 2025
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Nos reservamos el derecho de modificar esta Política de Privacidad. Los cambios serán publicados en esta página 
          con antelación suficiente a su aplicación.
        </p>
      </div>
    </main>
  );
}
