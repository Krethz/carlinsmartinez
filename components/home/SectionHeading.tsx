import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-80px" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
          isDark ? "text-peach/80" : "text-coral"
        }`}
      >
        <span className={`h-px w-8 ${isDark ? "bg-peach/50" : "bg-coral/60"}`} />
        {eyebrow}
      </span>
      <h2
        className={`font-display mt-4 text-4xl sm:text-5xl leading-[1.05] tracking-tight ${
          isDark ? "text-cream" : "text-olive-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${isDark ? "text-cream/70" : "text-olive-dark/70"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
