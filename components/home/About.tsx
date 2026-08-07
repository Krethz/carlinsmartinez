import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function About() {
  const formacion = [
    "Grado en Ciencia y Tenología de los Alimentos (Universidad de Barcelona)",
    "Grado en Nutrición Humana y Dietética (Universidad de Vic)",
    "Health Coach (Institute For Integrative Nutrition, NY)",
    "Formación en nutrición y suplementación deportiva (CEAN)",
    "Acreditación ISAK I y II en Antropometría",
    "Curso en Análisis de Datos Antropométricos – G-SE (Francis Holway)",
    "Curso de experto en Trastornos de la Conducta Alimentaria (Norte Salud- Griselda Herrero)"
  ];

  return (
    <section id="sobre-mí" className="py-16 md:py-24 px-4 sm:px-6" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px]">
              <Image
                src="/images/profile_photo.jpg"
                alt="Carla Martínez - Dietista Nutricionista"
                fill
                className="object-cover object-top shadow-lg hover:shadow-xl transition-shadow duration-300"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--primary-green)' }}>
              Carla Martínez
            </h1>
            <p className="text-lg mb-2" style={{ color: 'var(--primary-green)', fontStyle: 'italic' }}>
              Dietista Nutricionista col.CAT002241
            </p>
            <p className="text-base text-gray-600 mb-8">
              Tecnóloga Alimentaria
            </p>

            <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify">
              Soy Carla Martínez, Dietista-Nutricionista especializada en nutrición vegetariana a lo largo de las distintas etapas del ciclo vital y en nutrición deportiva. Atiendo de forma presencial en Sant Quirze del Vallès y también ofrezco consultas online, para que cuidarte sea posible estés donde estés.
            </p>

            <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify">
            Me llamo Carla Martínez y soy Dietista-Nutricionista. Mi trabajo se centra en dos áreas que me apasionan: la nutrición vegetariana en todas las etapas de la vida y la nutrición deportiva. Puedes visitarme en mi consulta de Sant Quirze del Vallès o, si lo prefieres, seguir el proceso online desde donde te encuentres.
            </p>

            <p className="text-base text-gray-700 mb-8 leading-relaxed text-justify">
            No trabajo con dietas milagro ni restricciones sin sentido. Mi enfoque se apoya en la evidencia científica y busca soluciones prácticas, realistas y sostenibles en el tiempo, que encajen de verdad con tu estilo de vida y te ayuden a avanzar con seguridad.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6" style={{ color: 'var(--primary-green)' }} />
                <h3 className="text-2xl font-bold" style={{ color: 'var(--primary-green)' }}>
                  FORMACIÓN:
                </h3>
              </div>
              <ul className="space-y-2">
                {formacion.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary-green mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}