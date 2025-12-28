"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      router.push(`/#${id}`);
    } else {
      // If on home page, scroll to section
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${!isHomePage || isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <button
          onClick={() => isHomePage ? scrollToSection("hero") : router.push("/")}
          className="cursor-pointer text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap"
          style={{ color: !isHomePage || isScrolled ? "#2D5F3F" : "white" }}
        >
          Carla Martínez
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {["Inicio", "Sobre Mí", "Servicios", "Testimonios", "Contacto"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className={`cursor-pointer font-medium hover:opacity-70 transition-opacity ${!isHomePage || isScrolled ? "text-gray-700" : "text-white"
                  }`}
              >
                {item}
              </button>
            )
          )}
          <Button
            onClick={() => scrollToSection("contacto")}
            className="cursor-pointer rounded-full px-6"
            style={{ backgroundColor: "#E8DCC8", color: "#596856" }}
          >
            Agenda tu visita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="cursor-pointer lg:hidden p-1 flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className={!isHomePage || isScrolled ? "text-gray-700" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}
            />
          ) : (
            <Menu
              size={24}
              className={!isHomePage || isScrolled ? "text-gray-700" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 space-y-1 border-t border-gray-100">
          {["Inicio", "Sobre Mí", "Servicios", "Testimonios", "Contacto"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="cursor-pointer block w-full text-left px-6 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
