import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Video } from "lucide-react";

const benefits = [
  "Mejora tu salud y energía",
  "Hábitos saludables y sostenibles",
  "Planes 100% personalizados",
];

const specialties = [
  "Nutrición deportiva",
  "Vegetariana y vegana",
  "Embarazo",
  "Nutrición para bebés",
  "Educación alimentaria",
  "Antropometría ISAK",
];

const ringText = "nutrición vegetariana · deportiva · embarazo · infantil · ";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-olive-deep text-cream">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(60% 50% at 85% 20%, rgba(138, 155, 109, 0.45) 0%, transparent 70%),
            radial-gradient(50% 60% at 10% 90%, rgba(247, 224, 206, 0.12) 0%, transparent 70%),
            linear-gradient(160deg, #2c3621 0%, #3d4a2e 45%, #566441 100%)
          `,
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 pt-32 sm:pt-36 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[100svh]">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-peach/25 bg-white/5 px-4 py-1.5 text-xs sm:text-sm tracking-wide text-peach/90 backdrop-blur"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-peach animate-pulse" />
            Dietista-Nutricionista · col. CAT002241
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl tracking-tight"
          >
            Nutrición que se adapta a{" "}
            <span className="italic text-peach">tu vida</span>, no al revés.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg sm:text-xl text-cream/75 leading-relaxed"
          >
            Planes personalizados que se adaptan a tu estilo de vida para alcanzar tus objetivos de
            salud y bienestar.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm text-cream/85">
                <span className="w-5 h-5 rounded-full bg-peach/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-peach" />
                </span>
                {benefit}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => scrollTo("contacto")}
              className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-peach px-8 py-4 text-base font-semibold text-olive-deep shadow-[0_10px_40px_rgba(247,224,206,0.25)] transition-all hover:bg-cream"
            >
              Agenda tu visita
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("servicios")}
              className="cursor-pointer inline-flex items-center justify-center rounded-full border border-cream/25 px-8 py-4 text-base font-medium text-cream transition-colors hover:bg-white/10"
            >
              Ver servicios
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative mx-auto w-full max-w-[340px] sm:max-w-[420px]"
        >
          <div className="relative aspect-square">
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow" aria-hidden>
              <defs>
                <path id="ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
              </defs>
              <text className="fill-peach/70" style={{ fontSize: 10.5, letterSpacing: 2.2 }}>
                <textPath href="#ring">{ringText.repeat(2)}</textPath>
              </text>
            </svg>

            <div className="absolute inset-[13%] rounded-full bg-peach/10 blur-2xl" />
            <img
              src="/images/logo_beige.png"
              alt="Carlin Smart Martínez - Nutricionista"
              className="absolute inset-[14%] w-[72%] h-[72%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 sm:-left-8 bottom-[14%] flex items-center gap-3 rounded-2xl bg-ivory px-4 py-3 text-olive-dark shadow-2xl"
            >
              <span className="w-9 h-9 rounded-xl bg-olive/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-olive" />
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold">Presencial</span>
                Sant Quirze del Vallès
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 sm:-right-6 top-[12%] flex items-center gap-3 rounded-2xl bg-olive px-4 py-3 text-peach shadow-2xl border border-peach/15"
            >
              <span className="w-9 h-9 rounded-xl bg-peach/15 flex items-center justify-center">
                <Video className="w-4 h-4" />
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold">Online</span>
                estés donde estés
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-cream/10 bg-olive-deep/60 py-5 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...specialties, ...specialties, ...specialties, ...specialties].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 font-display text-lg sm:text-xl italic text-cream/70 whitespace-nowrap">
              {item}
              <span className="text-peach not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
