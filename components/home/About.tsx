import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfechos" },
    { icon: Award, value: "10+", label: "Años de Experiencia" },
    { icon: Heart, value: "95%", label: "Éxito en Resultados" }
  ];

  return (
    <section id="sobre-mí" className="py-24 px-6" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Nutricionista"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
              Sobre Mí
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Soy Carla Martínez, nutricionista certificada con más de 10 años de experiencia ayudando a personas a transformar sus vidas a través de la alimentación consciente y balanceada.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mi enfoque se basa en crear planes personalizados que no solo te ayuden a alcanzar tus objetivos, sino que también sean sostenibles y se adapten perfectamente a tu estilo de vida.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--accent-gold)' }} />
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--primary-green)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}