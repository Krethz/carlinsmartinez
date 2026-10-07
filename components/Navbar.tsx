"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Inicio", id: "inicio" },
  { label: "Sobre mí", id: "sobre-mí" },
  { label: "Servicios", id: "servicios" },
  { label: "Testimonios", id: "testimonios" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const solid = !isHomePage || isScrolled || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (!isHomePage) {
      router.push(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-ivory/90 backdrop-blur-xl border-b border-olive/10 shadow-[0_4px_20px_rgba(44,54,33,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav>
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4">
          <button
            onClick={() => (isHomePage ? scrollToSection("inicio") : router.push("/"))}
            className={`cursor-pointer font-display text-xl sm:text-2xl tracking-tight transition-colors ${
              solid ? "text-olive-dark" : "text-cream"
            }`}
          >
            Carla Martínez
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  solid
                    ? "text-olive-dark/80 hover:text-olive-dark hover:bg-olive/10"
                    : "text-cream/85 hover:text-cream hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contacto")}
              className={`cursor-pointer hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:gap-2.5 ${
                solid ? "bg-olive text-peach hover:bg-olive-dark" : "bg-peach text-olive-dark hover:bg-cream"
              }`}
            >
              Agenda tu visita
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              className={`cursor-pointer lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                solid ? "text-olive-dark hover:bg-olive/10" : "text-cream hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-olive/10 px-3 pb-4 pt-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer block w-full text-left px-4 py-3 rounded-2xl font-display text-xl text-olive-dark hover:bg-olive/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contacto")}
              className="cursor-pointer mt-2 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-olive text-peach px-5 py-4 font-semibold"
            >
              Agenda tu visita
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
