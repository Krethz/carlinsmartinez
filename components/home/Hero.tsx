import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("sobre-mí")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #566441 0%, #7a9466 50%, #8a9b6d 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-0 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-0 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Transforma Tu Vida
            <br />
            <span style={{ color: "var(--accent-gold)" }}>Con Nutrición</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto font-light"
        >
          Planes personalizados que se adaptan a tu estilo de vida para alcanzar
          tus objetivos de salud y bienestar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-medium"
            style={{
              backgroundColor: "var(--accent-gold)",
              color: "var(--primary-green)",
            }}
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Agenda Tu Consulta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer rounded-full px-8 py-6 text-lg font-medium bg-transparent text-white border-white hover:bg-white/10"
            onClick={scrollToAbout}
          >
            Conocer Más
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
