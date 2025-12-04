import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 🔄 EDITA ESTAS RESEÑAS CON LAS REALES DE GOOGLE
  const reviews = [
    {
      name: "María González",
      rating: 5,
      text: "Carla es una profesional excepcional. Me ayudó a mejorar mis hábitos alimenticios de forma realista y sostenible. He perdido 12kg y me siento mejor que nunca.",
      date: "Hace 2 meses"
    },
    {
      name: "Jordi Martínez",
      rating: 5,
      text: "Como deportista necesitaba mejorar mi nutrición y rendimiento. Carla diseñó un plan perfecto que se adapta a mis entrenamientos. Los resultados han sido increíbles.",
      date: "Hace 1 mes"
    },
    {
      name: "Laura Fernández",
      rating: 5,
      text: "Excelente profesional y muy cercana. Me ha enseñado a comer de forma saludable sin renunciar a disfrutar de la comida. El seguimiento es constante.",
      date: "Hace 3 semanas"
    },
    {
      name: "Carlos Ruiz",
      rating: 5,
      text: "Muy contento con los resultados. Carla me ayudó con problemas digestivos que arrastraba desde hacía años. Su enfoque integral marca la diferencia.",
      date: "Hace 1 semana"
    },
    {
      name: "Anna Soler",
      rating: 5,
      text: "La mejor decisión que pude tomar. Plan vegetariano personalizado, fácil de seguir y delicioso. He mejorado mis análisis y tengo más energía que nunca.",
      date: "Hace 2 semanas"
    },
    {
      name: "David López",
      rating: 5,
      text: "Profesional, empática y con un conocimiento impresionante. Me ayudó a alcanzar mis objetivos de forma saludable. Las consultas son muy completas.",
      date: "Hace 1 mes"
    },
    {
      name: "Marta Sánchez",
      rating: 5,
      text: "Carla me ayudó a mejorar mi relación con la comida. Su enfoque no es restrictivo sino educativo. He aprendido a comer bien y los resultados hablan por sí solos.",
      date: "Hace 3 meses"
    },
    {
      name: "Pere Vidal",
      rating: 5,
      text: "Recomendable al 100%. Plan adaptado a mis necesidades y horarios. Carla es muy profesional y el trato es cercano. Los cambios se notan.",
      date: "Hace 2 semanas"
    },
    {
      name: "Cristina Morales",
      rating: 5,
      text: "Excelente dietista-nutricionista. Me ha ayudado con la nutrición deportiva y los resultados son evidentes. Muy profesional, atenta y con un seguimiento impecable.",
      date: "Hace 1 mes"
    },
    {
      name: "Marc Torres",
      rating: 5,
      text: "La mejor nutricionista con la que he trabajado. Planes personalizados, fáciles de seguir y efectivos. Su conocimiento en antropometría es brutal.",
      date: "Hace 3 semanas"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonios"
      className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: "var(--light-bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--primary-green)" }}
          >
            Lo que opinan de mí
          </h2>
        </motion.div>


        <div className="relative">
          {/* Navigation Arrows - Always visible */}
          <button
            onClick={prevReview}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            style={{ color: "var(--primary-green)" }}
            aria-label="Reseña anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            style={{ color: "var(--primary-green)" }}
            aria-label="Siguiente reseña"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Container */}
          <div className="px-12 md:px-20">
            <div className="relative overflow-visible">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-2xl mx-auto"
                >
                  <Card
                    className="border-none shadow-xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                  >
                    <CardContent className="p-6 md:p-10">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 md:w-6 md:h-6 fill-current"
                            style={{ color: "var(--accent-gold)" }}
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center italic">
                        &ldquo;{reviews[currentIndex].text}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="text-center">
                        <div
                          className="font-bold text-lg mb-1"
                          style={{ color: "var(--primary-green)" }}
                        >
                          {reviews[currentIndex].name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {reviews[currentIndex].date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-8"
                  : "hover:opacity-75"
                  }`}
                style={{
                  backgroundColor:
                    index === currentIndex
                      ? "var(--primary-green)"
                      : "#d1d5db",
                }}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>

          {/* Google Link */}
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/op254skqtwE18gWZ9?g_st=am"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--primary-green)] transition-colors font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
