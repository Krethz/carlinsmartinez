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
      name: "Sara Villaverde",
      rating: 5,
      text: "Desde hace 1 año sigo una dieta pescetariana y Carla me ha dado opciones al tener gran conocimiento de dieta vegetariana. Además, mi objetivo era saber qué comer antes y después de hacer deporte para maximizar el rendimiento y también he notado cambios en mi cuerpo, está más tonificado. En cualquier momento puedo consultarle dudas que me resuelve sin tener que concertar una cita. La recomiendo! :)",
    },
    {
      name: "Irene Vicent",
      rating: 5,
      text: "Desde el primer día que visité a Carla estoy encantada. Me ha ayudado no sólo a mejorar mi alimentación sino también en mi rendimiento. He notado cambios muy positivos en muy poco tiempo gracias a su ayuda. Es una gran profesional, atenta a la hora de resolver cualquier duda. En cuanto a los menús, son muy variados y adaptados a tu día a día. Sin duda la recomiendo al 100% y volvería a repetir 100 veces más! No puedo estar más contenta! Gracias Carlins por tu ayuda!!!"
    }, {
      name: "Verónica S.",
      rating: 5,
      text: "Acudí a Carla para mejorar mi rendimiento en los entrenos de fuerza y mi composición corporal, y se han cumplido ambos objetivos 💪 La pauta que me mandó es súper variada, da muchas opciones y resuelve todas tus dudas sin problema y ágilmente. Se preocupa verdaderamente por tu salud y bienestar, la recomiendo sin lugar a dudas!…",
    },
    {
      name: "Sergi Alloza Crespo",
      rating: 5,
      text: "Todo un placer trabajar con Carla. Excelente profesional y persona, cercana y atenta a los objetivos que propuse. No solo en las citas personales sino también en la distancia se procupa por el estado y el seguimiento del plan acordado. Sin duda alguna volveré siempre que necesite asesoramiento. Gracies!!"
    }, {
      name: "Inés López Coll",
      rating: 5,
      text: "Muy contenta y agradecida con Carla. Acudí a ella para llevar una dieta vegetariana saludable y me ayudó muchísimo. Siempre atenta, dedicada y amable. ¡Aprendí mucho! Gracias Carla :)",
    }, {
      name: "María Mercedes Pérez",
      rating: 5,
      text: "Super contenta con la ayuda y el acompañamiento desde el minuto uno, desde hace más de un año Carla me ha guiado con mi alimentación y mi rendimiento, adaptándose a todos los cambios que han surgido en el camino y facilitando las herramientas para aprender a escuchar mi cuerpo, entender qué es lo mejora para mi y aprender a tomar mejores decisiones en cuanto a nutrición.",
    }, {
      name: "Laura Cortell",
      rating: 5,
      text: "Carla me ha ayudado a ir alcanzando pequeños objetivos que me han hecho mejorar el rendimiento físico en CrossFit, la recuperación, alimentación y el bienestar físico en general, incluso a superar mis expectativas personales. Se nota la vocación, pasión y dedicación en su trabajo, proporciona una excelente atención con sesiones personalizadas y seguimiento que te ayudan a mantener la motivación y el foco.",
    }, {
      name: "Montserrat Taulé Segarra",
      rating: 5,
      text: "Carla es una gran profesional de la nutrición y te ayuda a conseguir tus objetivos siempre desde una perspectiva basada en la salud. Es cercana, empática y se implica mucho con sus pacientes. ¡Es un 10!",
    },
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
