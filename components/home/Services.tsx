"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Trophy, Baby, Leaf, BookOpen, Ruler, ArrowUpRight, MessageCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import ServiceModal from "./ServiceModal";
import SectionHeading from "./SectionHeading";

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
        "/images/cristina_lunge.jpeg",
        "/images/bicycle.webp",
        "/images/andreu_jump.jpeg",
        "/images/carla_yoga.jpg"
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
        "/images/aleix_clean.jpeg",
        "/images/competi1.jpeg",
        "/images/competi2.jpeg",
        "/images/worm.jpeg",
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
        "/images/embarazo_2.jpeg",
        "/images/ecografia.jpg",
        "/images/nutri_embarazo_2.jpeg",
        "/images/nutri_embarazo_1.jpeg"
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
        "/images/IMG_6267.jpg",
        "/images/toast.jpg",
        "/images/vegan_nutrition_5.jpg",
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
        "/images/nutri_bebe_1.webp",
        "/images/nutri_bebe_2.webp",
        "/images/nutri_bebe_3.webp",
        "/images/nutri_bebe_4.webp"
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
        "/images/educacion_1.jpg",
        "/images/IMG_6231.JPG",
        "/images/educacion_alimentaria.jpeg",
        "/images/vegan_nutrition_4.jpg",
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
        "/images/body_measurement_5.jpg",
        "/images/antropometria4.jpg"
      ]
    }
  ];

  return (
    <>
      <section id="servicios" className="py-24 md:py-32 px-5 sm:px-6 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Servicios y tarifas"
              title={
                <>
                  Un plan para <span className="italic text-olive">cada objetivo</span>
                </>
              }
            />
            <p className="max-w-sm text-olive-dark/70 leading-relaxed">
              Consultas nutricionales personalizadas, presenciales u online. Toca cualquier servicio para ver
              tarifas y qué incluye.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {services.map((service, index) => {
              const cover = service.images?.[0] ?? service.image;
              const featured = index === 0;

              return (
                <motion.button
                  type="button"
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
                  viewport={{ once: true, margin: "-60px" }}
                  onClick={() => setSelectedService(service)}
                  className={`group cursor-pointer relative overflow-hidden rounded-[2rem] text-left bg-olive-dark ${
                    featured ? "sm:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  {cover && (
                    <Image
                      src={cover}
                      alt={service.title}
                      fill
                      sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-deep via-olive-deep/55 to-olive-deep/5" />

                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="w-11 h-11 rounded-2xl bg-ivory/90 backdrop-blur flex items-center justify-center text-olive">
                      <service.icon className="w-5 h-5" />
                    </span>
                    <span className="rounded-full bg-olive-deep/60 backdrop-blur px-3 py-1.5 text-xs font-medium text-peach">
                      desde {service.startingPrice}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3
                      className={`font-display text-cream leading-tight ${
                        featured ? "text-3xl sm:text-4xl" : "text-2xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-2 text-cream/75 text-sm leading-relaxed ${
                        featured ? "max-w-md sm:text-base" : "line-clamp-2"
                      }`}
                    >
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-peach">
                      Ver detalles
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.button>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              viewport={{ once: true, margin: "-60px" }}
              className="sm:col-span-2 relative overflow-hidden rounded-[2rem] bg-peach p-7 sm:p-8 flex flex-col justify-between"
            >
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-coral/15" />
              <div className="relative">
                <p className="font-display text-3xl text-olive-deep leading-tight">
                  ¿No sabes cuál <span className="italic">elegir</span>?
                </p>
                <p className="mt-3 text-olive-dark/75 max-w-sm">
                  Escríbeme, cuéntame tu caso y te recomendaré la consulta que mejor encaja contigo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="relative cursor-pointer self-start mt-6 inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-semibold text-peach transition-colors hover:bg-olive-dark"
              >
                <MessageCircle className="w-4 h-4" />
                Hablemos
              </button>
            </motion.div>
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