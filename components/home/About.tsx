import React from "react";
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
    <section id="sobre-mí" className="py-24 px-6" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl opacity-20"
                   style={{ backgroundColor: 'var(--accent-gold)' }} />
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop"
                alt="Carla Martínez - Dietista Nutricionista"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--primary-green)' }}>
              Carla Martínez
            </h1>
            <p className="text-lg mb-2" style={{ color: 'var(--primary-green)', fontStyle: 'italic' }}>
              Tecnóloga Alimentaria
            </p>
            <p className="text-base text-gray-600 mb-8">
              Dietista Nutricionista col.CAT002241
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify">
              Soy Carla Martínez, Dietista-Nutricionista especializada en nutrición vegetariana a lo largo de las distintas etapas del ciclo vital y en nutrición deportiva. Atiendo de forma presencial en Sant Quirze del Vallès y también ofrezco consultas online, para que cuidarte sea posible estés donde estés.
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify">
              Mi propósito es acompañarte en el camino hacia una mejor salud, más vitalidad y un mayor rendimiento, ya sea en tu día a día o en tu rendimiento deportivo, siempre desde un enfoque cercano, adaptado a ti, flexible y libre de juicios.
            </p>
            
            <p className="text-base text-gray-700 mb-8 leading-relaxed text-justify">
              Trabajo basándome en la evidencia científica, lejos de dietas milagro y restricciones innecesarias. Defiendo una nutrición práctica, realista y sostenible, que se ajuste a tu estilo de vida y te permita avanzar de manera segura y consciente.
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