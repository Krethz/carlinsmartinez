import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, FileText, Video, CreditCard, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const onlineProcess = [
  {
    title: "Reserva tu cita",
    description: "Escríbeme y encontraremos juntos/as el día y la hora que mejor se acomoden a tu agenda.",
    icon: Calendar,
  },
  {
    title: "Cuestionario inicial",
    description:
      "Antes de nuestra sesión recibirás un formulario sencillo. Me ayudará a conocer tu historia clínica, tus hábitos y tus metas para poder preparar la consulta de la mejor manera.",
    icon: FileText,
  },
  {
    title: "Consulta online personalizada",
    description:
      "Nos veremos por videollamada (Zoom, Google Meet, Jitsi u otra plataforma a tu elección). Será un espacio para hablar en profundidad, resolver todas tus dudas y diseñar una pauta ajustada a tus necesidades.",
    icon: Video,
  },
  {
    title: "Pago fácil y seguro",
    description: "Podrás realizarlo cómodamente por transferencia bancaria.",
    icon: CreditCard,
  },
  {
    title: "Seguimiento cercano",
    description:
      "Acompañaré tu progreso mediante registros, medidas y fotos (si lo deseas), para adaptar el plan de manera continua y que logres tus objetivos con seguridad.",
    icon: Clock,
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-olive-dark py-24 md:py-32 px-5 sm:px-6">
      <div className="grain absolute inset-0" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sage/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="dark"
            eyebrow="Consulta online"
            title={
              <>
                ¿Cómo <span className="italic text-peach">funciona</span>?
              </>
            }
            description="Todo el acompañamiento, sin moverte de casa. Así es el proceso paso a paso."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <Image
              src="/images/IMG_6182.jpeg"
              alt="Alimentación saludable y nutrición"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>

          <div className="mt-8 rounded-3xl border border-cream/10 bg-white/5 p-6">
            <p className="text-cream/70 text-sm">
              Para más información sobre tarifas, pagos y política de cancelación:
            </p>
            <Link
              href="/terminos-condiciones"
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-semibold text-olive-deep transition-colors hover:bg-cream"
            >
              Ver términos y condiciones
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <ol className="lg:col-span-7 relative">
          <span className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-peach/40 via-peach/20 to-transparent" aria-hidden />
          {onlineProcess.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <span className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-olive border border-peach/20 flex items-center justify-center text-peach shadow-lg">
                <item.icon className="w-6 h-6" />
              </span>
              <div className="pt-1">
                <span className="font-display italic text-peach/60 text-sm">Paso {String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl text-cream mt-1">{item.title}</h3>
                <p className="mt-2 text-cream/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
