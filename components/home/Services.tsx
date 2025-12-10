"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Trophy, Baby, Leaf, BookOpen, Ruler, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import ServiceModal from "./ServiceModal";

interface PricingItem {
  item: string;
  detail: string;
  price: string;
}

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription?: string;
  subtitle?: string;
  pricing: PricingItem[];
  includes: string[];
  footer?: string;
  image?: string;
  images?: string[];
  startingPrice: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: Activity,
      title: "Nutrición Deportiva",
      description: "Ideal para personas activas que buscan mejorar su rendimiento, energía y recuperación.",
      fullDescription: "Este servicio está diseñado para quienes practican deporte de forma regular (fitness, running, ciclismo, pádel, CrossFit, etc.) y quieren optimizar su alimentación para rendir mejor, sentirse con más energía y cuidar su salud general.",
      pricing: [
        { item: "Primera visita", detail: "(con antropometría, según valoración)", price: "80€" },
        { item: "Entrega de pauta", detail: "(2 semanas después)", price: "50€" },
        { item: "Seguimientos", detail: "(con antropometría, según valoración)", price: "60€" }
      ],
      includes: [
        "Valoración nutricional inicial",
        "Plan de alimentación personalizado adaptado a tu deporte, horarios y objetivos",
        "Recomendaciones prácticas para antes, durante y después del entrenamiento",
        "Ajustes mensuales según evolución y feedback"
      ],
      startingPrice: "80€",
      images: [
        "/images/running.webp",
        "/images/bicycle.webp"
      ]
    },
    {
      id: 2,
      icon: Trophy,
      title: "Nutrición de Competición",
      description: "Para deportistas de élite o amateurs con alta exigencia competitiva.",
      fullDescription: "Este servicio está dirigido a deportistas de élite, semiprofesionales o amateurs con alta exigencia competitiva que necesitan un abordaje más técnico, individualizado y estratégico.",
      pricing: [
        { item: "Primera visita", detail: "(con antropometría)", price: "120€" },
        { item: "Entrega de pauta", detail: "(2 semanas después)", price: "80€" },
        { item: "Mensualidad", detail: "", price: "100€" }
      ],
      includes: [
        "Evaluación nutricional y antropométrica avanzada (opcional ISAK II)",
        "Planes nutricionales detallados adaptados a fases de entrenamiento y competición",
        "Estrategias específicas para optimizar rendimiento, recuperación y composición corporal",
        "Periodización nutricional",
        "Suplementación basada en evidencia (si es necesario)",
        "Revisión y ajustes frecuentes (semanales/ quincenales/mensuales según plan)",
        "Coordinación con otros profesionales (entrenador, fisio, psicólogo etc.) si se requiere"
      ],
      startingPrice: "120€",
      images: [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      icon: Baby,
      title: "Nutrición en el Embarazo",
      description: "Acompañamiento nutricional para cuidar de ti y de tu bebé en cada etapa.",
      fullDescription: "Durante el embarazo, las necesidades nutricionales cambian significativamente, y una alimentación adecuada puede marcar la diferencia en tu bienestar y en el desarrollo saludable de tu bebé.",
      subtitle: "En esta consulta trabajaremos juntas para:",
      pricing: [
        { item: "Primera visita", detail: "", price: "80€" },
        { item: "Entrega de pauta", detail: "(2 semanas después)", price: "50€" },
        { item: "Seguimientos", detail: "", price: "60€" }
      ],
      includes: [
        "Cubrir tus requerimientos nutricionales según el trimestre de gestación.",
        "Prevenir y abordar síntomas comunes como náuseas, fatiga, estreñimiento o acidez.",
        "Controlar el aumento de peso de forma saludable.",
        "Adaptar la alimentación a situaciones especiales (embarazo vegetariano, diabetes gestacional, etc.)",
        "Prepararte nutricionalmente para el parto y la lactancia."
      ],
      footer: "Con un enfoque realista, personalizado y sin restricciones innecesarias. Te acompañaré con cercanía y evidencia científica para que vivas esta etapa con tranquilidad y confianza.",
      startingPrice: "80€",
      images: [
        "/images/pregnancy_1.jpg",
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521999693109-d9001e71e72a?w=500&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      icon: Leaf,
      title: "Nutrición Vegetariana y Vegana",
      description: "Asesoramiento para una alimentación 100% vegetal equilibrada y adaptada a ti.",
      fullDescription: "Esta consulta está dirigida a personas que siguen (o quieren empezar) una alimentación vegetariana o vegana, tanto si es por motivos éticos, de salud o sostenibilidad.",
      pricing: [
        { item: "Primera visita", detail: "", price: "80€" },
        { item: "Entrega de pauta", detail: "(2 semanas después)", price: "50€" },
        { item: "Seguimientos", detail: "", price: "60€" }
      ],
      subtitle: "Te ayudaré a:",
      includes: [
        "Planificar una alimentación vegetal completa, variada y sin carencias",
        "Cubrir tus necesidades de proteínas, hierro, calcio, B12, omega-3 y otros nutrientes clave",
        "Revisar o complementar tu alimentación actual para mejorar tu energía, digestión o rendimiento",
        "Adaptar la dieta a diferentes etapas de la vida: embarazo, lactancia, infancia, deporte…"
      ],
      footer: "Con una visión práctica, respetuosa y basada en evidencia científica, trabajaremos un plan nutricional que se ajuste a tus valores, estilo de vida y objetivos.",
      startingPrice: "80€",
      images: [
        "/images/puree.jpg",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
        "/images/toast.jpg"
      ]
    },
    {
      id: 5,
      icon: Baby,
      title: "Nutrición para Bebés",
      description: "Acompañamiento en la etapa más importante del desarrollo de tu bebé.",
      fullDescription: "La nutrición en los primeros años de vida sienta las bases de la salud futura. Por eso, esta consulta está diseñada para acompañarte en cada paso de la alimentación de tu bebé, desde los primeros días de vida hasta el segundo año.",
      pricing: [
        { item: "Primera visita", detail: "", price: "80€" },
        { item: "Seguimientos", detail: "", price: "60€" }
      ],
      subtitle: "Ya sea que estés en etapa de lactancia o a punto de iniciar la alimentación complementaria, resolveremos tus dudas y planificaremos una alimentación segura, equilibrada y adaptada a tu familia.",
      includes: [
        "Asesoramiento básico en lactancia materna, artificial o mixta",
        "Inicio de la alimentación complementaria (BLW, BLISS, purés o método mixto)",
        "Planificación de menús y estructura de comidas",
        "Selección de alimentos adecuados por edad y textura",
        "Consejos prácticos para organizar las comidas y crear hábitos saludables desde el inicio"
      ],
      footer: "Una consulta pensada para acompañarte sin juicios, con información actualizada y adaptada a tu realidad. Trabajaremos con calma, con evidencia y con respeto por los ritmos del bebé y de la familia.",
      startingPrice: "80€",
      images: [
        "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop"
      ]
    },
    {
      id: 6,
      icon: BookOpen,
      title: "Educación Alimentaria",
      description: "Aprende a alimentarte mejor y crea rutinas sostenibles sin dietas estrictas.",
      fullDescription: "Este servicio está diseñado para quienes desean aprender a alimentarse mejor, crear rutinas sostenibles y cuidar su salud a largo plazo, sin dietas milagro y prohibiciones.",
      pricing: [
        { item: "Primera visita", detail: "", price: "70€" },
        { item: "Entrega de pauta", detail: "(2 semanas después)", price: "40€" },
        { item: "Seguimientos", detail: "", price: "60€" }
      ],
      subtitle: "¿En qué consiste?",
      includes: [
        "Evaluación inicial: revisamos tu historia clínica, tu rutina y jornada laboral, tus hábitos actuales y tus objetivos.",
        "Educación nutricional: aprenderás a planificar tus comidas, leer etiquetas, elegir alimentos y organizar tu despensa.",
        "Plan de alimentación flexible: una pauta práctica y adaptada a tu día a día, que podrás ajustar fácilmente sin sentir restricciones.",
        "Estrategia de cambio de hábitos: herramientas sencillas para incorporar poco a poco mejoras reales y duraderas.",
        "Acompañamiento y seguimiento: juntos iremos valorando tus progresos y ajustando el plan según tu evolución."
      ],
      startingPrice: "70€",
      images: [
        "/images/puree.jpg",
        "/images/toast.jpg",
        "https://images.unsplash.com/photo-1620005322693-012a87a071d7?w=500&auto=format&fit=crop"
      ]
    },
    {
      id: 7,
      icon: Ruler,
      title: "Antropometría",
      description: "Conoce con precisión tu composición corporal y características físicas.",
      fullDescription: "El servicio de antropometría permite conocer con precisión las características físicas y la composición corporal de cada paciente. Mediante la medición de diferentes parámetros, como peso, talla, perímetros corporales y pliegues cutáneos, es posible determinar la proporción de masa muscular y grasa corporal.",
      pricing: [
        { item: "Primera antropometría", detail: "", price: "50€" },
        { item: "Antropometría de seguimiento", detail: "", price: "40€" }
      ],
      subtitle: "Esta información es esencial para elaborar un plan de alimentación individualizado, acorde con los objetivos, condiciones de salud y requerimientos específicos de cada persona.",
      includes: [
        "Para garantizar la exactitud de las mediciones, se solicita a los pacientes acudir con ropa deportiva o prendas ligeras y ajustadas, que permitan realizar la evaluación de manera cómoda y precisa."
      ],
      startingPrice: "50€",
      images: [
        "/images/body_measurement_2.jpg",
        "/images/sports_nutrition_1.jpg",
        "/images/body_measurement_5.jpg"
      ]
    }
  ];

  return (
    <>
      <section id="servicios" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--primary-green)" }}
            >
              Servicios y tarifas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consultas nutricionales personalizadas para cada objetivo
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(22, 163, 74, 0.05) 0%, rgba(34, 197, 94, 0.1) 100%)"
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, var(--gradient-start) 0%, var(--primary-green) 100%)"
                      }}
                    >
                      <service.icon size={28} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-2 transition-colors"
                      style={{ color: "var(--primary-green)" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}