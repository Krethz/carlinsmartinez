import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const review = reviews[currentIndex];
  const initials = review.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <section id="testimonios" className="py-24 md:py-32 px-5 sm:px-6 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Testimonios"
            title={
              <>
                Lo que <span className="italic text-olive">opinan</span> de mí
              </>
            }
          />
          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              className="cursor-pointer w-12 h-12 rounded-full border border-olive/20 text-olive flex items-center justify-center transition-colors hover:bg-olive hover:text-peach"
              aria-label="Reseña anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="cursor-pointer w-12 h-12 rounded-full bg-olive text-peach flex items-center justify-center transition-colors hover:bg-olive-dark"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className="relative rounded-[2.5rem] bg-ivory border border-olive/10 shadow-[0_30px_60px_rgba(44,54,33,0.08)] p-8 sm:p-12 md:p-16 min-h-[420px] sm:min-h-[380px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <Quote className="absolute top-8 right-8 sm:top-10 sm:right-12 w-16 h-16 sm:w-24 sm:h-24 text-peach" strokeWidth={1} />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                ))}
              </div>

              <blockquote className="font-display text-xl sm:text-2xl md:text-[1.75rem] leading-snug text-olive-deep max-w-4xl">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-olive text-peach flex items-center justify-center font-semibold">
                  {initials}
                </span>
                <div>
                  <p className="font-semibold text-olive-deep">{review.name}</p>
                  <p className="text-sm text-olive-dark/60">Reseña en Google</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-10 bg-olive" : "w-2 bg-olive/20 hover:bg-olive/40"
                }`}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>

          <a
            href="https://maps.app.goo.gl/op254skqtwE18gWZ9?g_st=am"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-olive-deep transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
