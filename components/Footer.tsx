import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-white"
      style={{ backgroundColor: "var(--primary-green)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3
              className="font-bold text-lg mb-3"
              style={{ color: "var(--accent-gold)" }}
            >
              Carla Martínez
            </h3>
            <p className="text-sm opacity-90">
              Dietista-Nutricionista colegiada<br />
              col.CAT002241
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-bold text-lg mb-3"
              style={{ color: "var(--accent-gold)" }}
            >
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#servicios"
                  className="opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-bold text-lg mb-3"
              style={{ color: "var(--accent-gold)" }}
            >
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+34636019161"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  <Phone className="w-4 h-4" />
                  +34 636 019 161
                </a>
              </li>
              <li>
                <a
                  href="mailto:carla.martinez@codinucat.cat"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  <Mail className="w-4 h-4" />
                  carla.martinez@codinucat.cat
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/carlinsmartinez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-pointer"
                  style={{ color: "var(--light-bg)" }}
                >
                  <Instagram className="w-4 h-4" />
                  @carlinsmartinez
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid var(--secondary-green)" }}
        >
          <p className="text-sm opacity-80" style={{ color: "var(--light-bg)" }}>
            © {new Date().getFullYear()} Carla Martínez Arribas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
