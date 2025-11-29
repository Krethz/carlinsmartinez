import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Video, CreditCard, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  const onlineProcess = [
    {
      step: "1",
      title: "Reserva tu cita",
      description: "Escríbeme y encontraremos juntos/as el día y la hora que mejor se acomoden a tu agenda.",
      icon: Calendar
    },
    {
      step: "2",
      title: "Cuestionario inicial",
      description: "Antes de nuestra sesión recibirás un formulario sencillo. Me ayudará a conocer tu historia clínica, tus hábitos y tus metas para poder preparar la consulta de la mejor manera.",
      icon: FileText
    },
    {
      step: "3",
      title: "Consulta online personalizada",
      description: "Nos veremos por videollamada (Zoom, Google Meet, Jitsi u otra plataforma a tu elección). Será un espacio para hablar en profundidad, resolver todas tus dudas y diseñar una pauta ajustada a tus necesidades.",
      icon: Video
    },
    {
      step: "4",
      title: "Pago fácil y seguro",
      description: "Podrás realizarlo cómodamente por transferencia bancaria.",
      icon: CreditCard
    },
    {
      step: "5",
      title: "Seguimiento cercano",
      description: "Acompañaré tu progreso mediante registros, medidas y fotos (si lo deseas), para adaptar el plan de manera continua y que logres tus objetivos con seguridad.",
      icon: Clock
    }
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Online Consultation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: 'var(--primary-green)' }}>
            ¿Cómo funciona la Consulta online?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {onlineProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--primary-green)' }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary-green)' }}>
                          {item.step}. {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop"
              alt="Consulta online"
              className="rounded-lg w-full max-w-lg mx-auto object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Payment and Cancellation Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: 'var(--primary-green)' }}>
            Pagos y Política de Cancelación de Visita
          </h2>

          <Card className="border-none shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--primary-green)' }} />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Una vez <strong>programada la primera visita</strong>, será necesario realizar un pago anticipado del <strong>50% del importe total de la sesión</strong> mediante transferencia bancaria. <strong>El 50% restante deberá abonarse al finalizar la primera visita.</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CreditCard className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--primary-green)' }} />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El pago correspondiente a la entrega de la pauta y a las sesiones de seguimiento se efectuará al término de cada una, pudiendo realizarse en efectivo (sesiones presenciales) o mediante transferencia bancaria (sesiones online y presenciales).
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold mb-3" style={{ color: 'var(--primary-green)' }}>
                    Número de cuenta bancaria:
                  </h4>
                  <p className="text-2xl font-mono font-bold text-center" style={{ color: 'var(--primary-green)' }}>
                    ES44 2100 0362 1402 0077 3521
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    El importe de la reserva deberá ingresarse en el siguiente número de cuenta, indicando el nombre y los apellidos de la persona que solicita el servicio.
                  </p>
                  <p className="text-sm text-gray-700 text-center mt-4 font-semibold">
                    Nota: La reserva se considerará confirmada una vez recibido el comprobante de pago.
                  </p>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t border-gray-200">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--primary-green)' }} />
                  <div>
                    <h4 className="font-bold mb-3" style={{ color: 'var(--primary-green)' }}>
                      Política de Cancelación:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      En caso de no poder asistir a la visita agendada, <strong>deberá comunicarse la cancelación o cambio con un mínimo de 24 horas de antelación</strong>, con el fin de poder reprogramar la sesión en otro día y horario disponibles.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      De no realizarse dicho aviso dentro del plazo establecido, <strong>se perderá el importe correspondiente a la reserva.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
