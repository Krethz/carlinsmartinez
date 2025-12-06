import type { Metadata } from "next";

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
    <main className="pt-32 px-6 pb-24 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1
        className="text-4xl font-bold mb-6"
        style={{ color: "var(--primary-green)" }}
      >
        Términos y Condiciones
      </h1>

      <p className="mb-6 text-gray-600">
        Al contratar cualquiera de los servicios ofrecidos, aceptas los siguientes términos y condiciones de pago y cancelación.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: "var(--primary-green)" }}>
        Política de Pagos
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="font-bold mb-3">Primera Visita</h3>
        <p className="mb-3">
          Una vez <strong>programada la primera visita</strong>, será necesario realizar un pago anticipado del{" "}
          <strong>50% del importe total de la sesión</strong> mediante transferencia bancaria.
        </p>
        <p>
          El <strong>50% restante deberá abonarse al finalizar la primera visita</strong>.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="font-bold mb-3">Seguimientos y Entregas de Pauta</h3>
        <p>
          El pago correspondiente a la entrega de la pauta y a las sesiones de seguimiento se efectuará{" "}
          <strong>al término de cada una</strong>, pudiendo realizarse:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>En efectivo (sesiones presenciales)</li>
          <li>Mediante transferencia bancaria (sesiones online y presenciales)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "var(--primary-green)" }}>
        Datos Bancarios
      </h2>

      <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg mb-6">
        <p className="text-sm text-gray-600 mb-3">Número de cuenta para transferencias:</p>
        <p className="text-3xl font-mono font-bold text-center mb-4" style={{ color: "var(--primary-green)" }}>
          ES44 2100 0362 1402 0077 3521
        </p>
        <p className="text-sm text-gray-700 text-center">
          <strong>Importante:</strong> El importe de la reserva deberá ingresarse indicando el{" "}
          <strong>nombre y apellidos</strong> de la persona que solicita el servicio.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700 font-semibold">
          Nota: La reserva se considerará confirmada una vez recibido el comprobante de pago.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "var(--primary-green)" }}>
        Política de Cancelación
      </h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
        <h3 className="font-bold mb-3">
          Cancelación con Antelación
        </h3>
        <p className="mb-3">
          En caso de no poder asistir a la visita agendada, <strong>deberá comunicarse la cancelación o cambio con un mínimo de 24 horas de antelación</strong>, con el fin de poder reprogramar la sesión en otro día y horario disponibles.
        </p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
        <h3 className="font-bold mb-3">
          Cancelación Tardía o Inasistencia
        </h3>
        <p>
          De no realizarse dicho aviso dentro del plazo establecido (24 horas), o en caso de no asistir a la cita sin previo aviso, <strong>se perderá el importe correspondiente a la reserva</strong>.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "var(--primary-green)" }}>
        Reprogramación de Citas
      </h2>

      <p className="mb-4">
        Las citas pueden ser reprogramadas siempre y cuando se comunique con la antelación mínima de 24 horas.
        Se buscará un nuevo horario disponible que se ajuste a las necesidades del cliente.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" style={{ color: "var(--primary-green)" }}>
        Contacto
      </h2>

      <p className="mb-4">
        Para cualquier consulta relacionada con pagos, cancelaciones o reprogramaciones, puedes contactar a través de:
      </p>

      <ul className="space-y-2 mb-6">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:carla.martinez@codinucat.cat"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            carla.martinez@codinucat.cat
          </a>
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          <a
            href="tel:+34636019161"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            +34 636 019 161
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/carlinsmartinez"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--primary-green)" }}
          >
            @carlinsmartinez
          </a>
        </li>
      </ul>

      <p className="mt-12 text-sm text-gray-500 border-t pt-6">
        Última actualización: Noviembre 2025
      </p>
    </main>
  );
}
