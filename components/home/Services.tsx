import React from "react";
import { motion } from "framer-motion";
import { Activity, Trophy, Baby, Leaf, Utensils, BookOpen, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Activity,
      title: "Consulta de Nutrición Deportiva",
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
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      icon: Trophy,
      title: "Consulta de Nutrición Deportiva de Competición",
      description: "Este servicio está dirigido a deportistas de élite, semiprofesionales o amateurs con alta exigencia competitiva que necesitan un abordaje más técnico, individualizado y estratégico.",
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
      images: [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      icon: Baby,
      title: "Consulta de Nutrición en el Embarazo",
      description: "Acompañamiento nutricional para cuidar de ti y de tu bebé en cada etapa del embarazo.",
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
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      icon: Leaf,
      title: "Consulta de Nutrición Vegetariana y Vegana",
      description: "Asesoramiento nutricional para llevar una alimentación 100% vegetal equilibrada y adaptada a ti.",
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
      images: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      icon: Baby,
      title: "Consulta de Nutrición para bebés",
      description: "Acompañamiento nutricional en la etapa más importante del desarrollo.",
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
      footer: "Una consulta pensada para acompañarte sin juicios, con información actualizada y adaptada a tu realidad. Trabajaremos con calma, con evidencia y con respeto por los ritmos del bebé y de la familia."
    },
    {
      id: 6,
      icon: BookOpen,
      title: "Educación alimentaria y cambio de hábitos",
      description: "Este servicio está diseñado para quienes desean aprender a alimentarse mejor, crear rutinas sostenibles y cuidar su salud a largo plazo, sin dietas estrictas ni prohibiciones.",
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
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      icon: Ruler,
      title: "Antropometría",
      description: "El servicio de antropometría permite conocer con precisión las características físicas y la composición corporal de cada paciente.",
      fullDescription: "Mediante la medición de diferentes parámetros, como peso, talla, perímetros corporales y pliegues cutáneos, es posible determinar la proporción de masa muscular y grasa corporal.",
      pricing: [
        { item: "Primera antropometría", detail: "", price: "50€" },
        { item: "Antropometría de seguimiento", detail: "", price: "40€" }
      ],
      subtitle: "Esta información es esencial para elaborar un plan de alimentación individualizado, acorde con los objetivos, condiciones de salud y requerimientos específicos de cada persona.",
      includes: [
        "Para garantizar la exactitud de las mediciones, se solicita a los pacientes acudir con ropa deportiva o prendas ligeras y ajustadas, que permitan realizar la evaluación de manera cómoda y precisa."
      ],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&h=300&fit=crop"
      ]
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
            Servicios y Tarifas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultas nutricionales personalizadas para cada objetivo
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Sidebar with icon and title */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-start" style={{ backgroundColor: 'var(--light-bg)' }}>
                      <div 
                        className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'var(--primary-green)' + '20' }}
                      >
                        <service.icon size={32} style={{ color: 'var(--primary-green)' }} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 leading-tight" style={{ color: 'var(--primary-green)' }}>
                        {service.id}. {service.title}
                      </h3>
                      
                      {/* Pricing Table */}
                      <div className="border border-gray-300 rounded-none overflow-hidden mb-6">
                        <table className="w-full">
                          <tbody>
                            {service.pricing.map((price, idx) => (
                              <tr key={idx} className={idx < service.pricing.length - 1 ? "border-b border-gray-300" : ""}>
                                <td className="p-3 text-sm text-center">
                                  <div className="font-semibold">{price.item}</div>
                                  {price.detail && (
                                    <div className="text-xs text-gray-600 mt-1">{price.detail}</div>
                                  )}
                                </td>
                                <td className="p-3 text-sm font-bold text-center border-l border-gray-300">
                                  {price.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="md:col-span-3 p-8">
                      <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                        {service.description}
                      </p>
                      
                      {service.fullDescription && (
                        <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                          {service.fullDescription}
                        </p>
                      )}

                      {service.subtitle && (
                        <p className="font-semibold mb-3 text-gray-900">
                          {service.subtitle}
                        </p>
                      )}

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-900">¿Qué incluye?</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-1" style={{ color: 'var(--primary-green)' }}>•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.footer && (
                        <p className="text-sm text-gray-700 leading-relaxed text-justify italic mt-4">
                          {service.footer}
                        </p>
                      )}

                      {/* Images */}
                      {service.image && (
                        <div className="mt-6">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="rounded-lg w-full max-w-md mx-auto object-cover"
                          />
                        </div>
                      )}
                      {service.images && (
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          {service.images.map((img, idx) => (
                            <img 
                              key={idx}
                              src={img} 
                              alt={`${service.title} ${idx + 1}`}
                              className="rounded-lg w-full h-32 object-cover"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}