import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Video, CreditCard, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

          {/* Button to payment policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Para más información sobre tarifas, pagos y política de cancelación:
            </p>
            <Button
              onClick={() => window.location.href = '/terminos-condiciones'}
              className="rounded-full px-8 py-6"
              style={{ backgroundColor: 'var(--primary-green)' }}
            >
              Ver Términos y Condiciones
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
