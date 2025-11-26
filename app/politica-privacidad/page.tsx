export default function PoliticaPrivacidad() {
  return (
    <main className="pt-32 px-6 pb-24 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1
        className="text-4xl font-bold mb-6"
        style={{ color: "var(--primary-green)" }}
      >
        Política de Privacidad
      </h1>

      <p className="mb-4">
        En <strong>Carla Martínez Arribas</strong> tratamos la información que
        nos facilitas con el fin de gestionar tus consultas, citas y solicitudes
        realizadas a través de nuestro sitio web.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Responsable del tratamiento
      </h2>
      <p>
        <strong>Nombre:</strong> Carla Martínez Arribas <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:carlinsmartinez@gmail.com"
          className="text-green-700 underline"
        >
          carlinsmartinez@gmail.com
        </a>{" "}
        <br />
        <strong>Ubicación:</strong> Barcelona, España
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Finalidad</h2>
      <p>
        La recogida y tratamiento de los datos personales tienen como finalidad
        principal atender las consultas y solicitudes de cita que los usuarios
        envíen a través del formulario de contacto.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Legitimación</h2>
      <p>
        La base legal para el tratamiento de tus datos es tu consentimiento,
        otorgado al marcar la casilla correspondiente antes de enviar el
        formulario.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Conservación de datos
      </h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para cumplir con la
        finalidad con la que fueron recogidos o mientras no se solicite su
        supresión por el interesado.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Destinatarios</h2>
      <p>
        No se cederán datos a terceros, salvo obligación legal o en caso de ser
        necesario para prestar el servicio solicitado.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión y otros
        derechos reconocidos por la normativa escribiendo a{" "}
        <a
          href="mailto:carlinsmartinez@gmail.com"
          className="text-green-700 underline"
        >
          carlinsmartinez@gmail.com
        </a>
        .
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Última actualización: Octubre 2025
      </p>
    </main>
  );
}
