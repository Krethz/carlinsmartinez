import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#2D5F3F] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3">Carla Martínez</h3>
            <p className="text-sm opacity-80">
              Dietista-Nutricionista colegiada<br />
              col.CAT002241
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#servicios" className="opacity-80 hover:opacity-100 transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="opacity-80 hover:opacity-100 transition">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="opacity-80 hover:opacity-100 transition">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="opacity-80 hover:opacity-100 transition">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="tel:+34636019161" className="hover:opacity-100 transition">
                  +34 636 019 161
                </a>
              </li>
              <li>
                <a href="mailto:carla.martinez@codinucat.cat" className="hover:opacity-100 transition">
                  carla.martinez@codinucat.cat
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/carlinsmartinez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition"
                >
                  @carlinsmartinez
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Carla Martínez Arribas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
