import React from "react";
import { motion } from "framer-motion";
import { Apple, Activity, Baby, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Apple,
      title: "Pérdida de Peso",
      description: "Planes personalizados para alcanzar tu peso ideal de forma saludable y sostenible.",
      color: "#E8B86D"
    },
    {
      icon: Activity,
      title: "Nutrición Deportiva",
      description: "Maximiza tu rendimiento atlético con una alimentación diseñada para tus objetivos.",
      color: "#4A7C59"
    },
    {
      icon: Baby,
      title: "Nutrición Infantil",
      description: "Acompaña el crecimiento saludable de tus hijos con hábitos alimenticios adecuados.",
      color: "#E8B86D"
    },
    {
      icon: Utensils,
      title: "Planes Vegetarianos",
      description: "Alimentación plant-based balanceada que cubre todas tus necesidades nutricionales.",
      color: "#4A7C59"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
            Mis Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones nutricionales personalizadas para cada etapa de tu vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: service.color + '20' }}
                  >
                    <service.icon size={32} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary-green)' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}