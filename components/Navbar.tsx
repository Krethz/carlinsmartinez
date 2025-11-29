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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !isHomePage || isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => isHomePage ? scrollToSection("hero") : router.push("/")}
          className="text-2xl font-bold tracking-tight"
          style={{ color: !isHomePage || isScrolled ? "#2D5F3F" : "white" }}
        >
          Carla Martínez
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Inicio", "Sobre Mí", "Servicios", "Testimonios", "Contacto"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className={`cursor-pointer font-medium hover:opacity-70 transition-opacity ${
                  !isHomePage || isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item}
              </button>
            )
          )}
          <Button
            onClick={() => scrollToSection("contacto")}
            className="rounded-full px-6"
            style={{ backgroundColor: "#E8DCC8", color: "#596856" }}
          >
            Agendar Cita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={!isHomePage || isScrolled ? "text-gray-700" : "text-white"} />
          ) : (
            <Menu className={!isHomePage || isScrolled ? "text-gray-700" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3 max-w-7xl mx-auto px-6">
          {["Inicio", "Sobre Mí", "Servicios", "Testimonios", "Contacto"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
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
