import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Leaf, Dumbbell, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const formacion = [
  "Grado en Nutrición Humana y Dietética (Universidad de Vic)",
  "Health Coach (Institute For Integrative Nutrition, NY)",
  "Formación en nutrición y suplementación deportiva (CEAN)",
  "Acreditación ISAK I y II en Antropometría",
  "Curso en Análisis de Datos Antropométricos – G-SE (Francis Holway)",
  "Curso de experto en Trastornos de la Conducta Alimentaria (Norte Salud - Griselda Herrero)",
  "Curso de Experto en Asesoría y Consejería en Lactancia Materna (ISNUT)",
  "Técnica de Sala Fitness (ANEF)",
  "Instructora de Pilates (STOTT PILATES)",
];

const pillars = [
  { icon: Leaf, label: "Nutrición vegetariana", text: "En todas las etapas de la vida" },
  { icon: Dumbbell, label: "Nutrición deportiva", text: "Fitness, pilates y rendimiento" },
  { icon: HeartHandshake, label: "Sin juicios", text: "Cercano, flexible y basado en evidencia" },
];

export default function About() {
  return (
    <section id="sobre-mí" className="relative py-24 md:py-32 px-5 sm:px-6 bg-cream overflow-x-clip">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="relative mx-auto max-w-[420px]">
            <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2.5rem] border border-olive/30" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-olive/10 shadow-[0_30px_60px_rgba(44,54,33,0.2)]">
              <Image
                src="/images/profile_photo.jpg"
                alt="Carla Martínez - Dietista Nutricionista"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-olive px-6 py-3 text-sm text-peach shadow-xl">
              <span className="font-display italic text-base">Carla Martínez</span>
              <span className="mx-2 opacity-50">·</span>
              col. CAT002241
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Sobre mí"
            title={
              <>
                Hola, soy <span className="italic text-olive">Carla</span>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 space-y-5 text-base sm:text-lg text-olive-dark/80 leading-relaxed"
          >
            <p>
              Me llamo Carla Martínez y soy Dietista-Nutricionista. Mi trabajo se centra en dos áreas que me
              apasionan: la nutrición vegetariana en todas las etapas de la vida y la nutrición deportiva. Esta
              segunda pasión no es casualidad: practico ejercicio físico desde pequeña, y esa vivencia personal es
              la que me llevó a formarme también como técnica de sala fitness e instructora de pilates, además de
              especializarme en nutrición deportiva. Entender el movimiento desde dentro me permite acompañar a
              quienes entrenan con una mirada más completa, que une la alimentación y la actividad física de forma
              coherente. Puedes visitarme en Sant Quirze del Vallès o, si lo prefieres, seguir el proceso online
              desde donde te encuentres.
            </p>
            <p>
              Creo en un acompañamiento cercano y sin juicios, adaptado a tus circunstancias y objetivos, ya sea que
              busques mejorar tu salud en el día a día o dar un paso más en tu rendimiento deportivo.
            </p>
            <p className="font-display text-xl sm:text-2xl italic text-olive leading-snug border-l-2 border-coral/60 pl-5">
              No trabajo con dietas milagro ni restricciones sin sentido.
            </p>
            <p>
              Mi enfoque se apoya en la evidencia científica y busca soluciones prácticas, realistas y sostenibles
              en el tiempo, que encajen de verdad con tu estilo de vida y te ayuden a avanzar con seguridad.
            </p>
          </motion.div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-ivory p-5 border border-olive/10"
              >
                <span className="w-10 h-10 rounded-2xl bg-olive text-peach flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </span>
                <p className="mt-4 font-semibold text-olive-deep">{pillar.label}</p>
                <p className="mt-1 text-sm text-olive-dark/65">{pillar.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-6 h-6 text-olive" />
              <h3 className="font-display text-2xl text-olive-deep">Formación</h3>
            </div>
            <ul className="divide-y divide-olive/10 rounded-3xl bg-ivory border border-olive/10 overflow-hidden">
              {formacion.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 px-5 py-4 text-sm sm:text-base text-olive-dark/85"
                >
                  <span className="font-display text-coral/80 tabular-nums min-w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
