import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Target, Clock, Salad } from "lucide-react";

const benefits = [
  { icon: Heart, text: "Mejora tu salud y energía" },
  { icon: Target, text: "Planes 100% personalizados" },
  { icon: Clock, text: "Resultados visibles en semanas" },
  { icon: Salad, text: "Alimentación equilibrada y deliciosa" },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("sobre-mí")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pb-28"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(123, 166, 90, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(86, 100, 65, 0.6) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(138, 155, 109, 0.3) 0%, transparent 70%),
          linear-gradient(160deg, #3d4a2e 0%, #566441 25%, #6b8050 50%, #7a9466 75%, #566441 100%)
        `,
      }}
    >
      {/* Animated floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Large decorative blurs */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#8fa97a]/30 to-transparent rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#d4af37]/20 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-[80px]" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 sm:mb-8"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "var(--accent-gold)" }} />
          <span className="text-white/90 text-sm font-medium">Nutricionista Certificada</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Transforma Tu Vida
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent-gold) 0%, #f5d77a 50%, var(--accent-gold) 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Con Nutrición
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/85 mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Planes personalizados que se adaptan a tu estilo de vida para alcanzar
          tus objetivos de salud y bienestar
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                style={{
                  background: "linear-gradient(135deg, var(--accent-gold) 0%, #f5d77a 100%)",
                }}
              >
                <benefit.icon className="w-5 h-5 text-[#3d4a2e]" />
              </div>
              <span className="text-white/90 text-sm font-medium text-center leading-snug">
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="cursor-pointer rounded-full px-8 py-6 text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)]"
            style={{
              background: "linear-gradient(135deg, var(--accent-gold) 0%, #f5d77a 50%, var(--accent-gold) 100%)",
              color: "#3d4a2e",
            }}
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Agenda Tu Consulta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
            }}
            onClick={scrollToAbout}
          >
            Conocer Más
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned relative to section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 2, duration: 1.5, repeat: Infinity }
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex z-20"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
