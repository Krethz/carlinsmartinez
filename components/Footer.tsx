import Link from "next/link";
import { Phone, Mail, Instagram, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Sobre mí", href: "/#sobre-mí" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Contacto", href: "/#contacto" },
];

const legal = [
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Términos y Condiciones", href: "/terminos-condiciones" },
];

const contact = [
  { icon: Phone, text: "+34 636 019 161", href: "tel:+34636019161" },
  { icon: Mail, text: "carla.martinez@codinucat.cat", href: "mailto:carla.martinez@codinucat.cat" },
  { icon: Instagram, text: "@carlinsmartinez", href: "https://instagram.com/carlinsmartinez", external: true },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-deep text-cream">
      <div className="grain absolute inset-0" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-20 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-14 border-b border-cream/10">
          <p className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            ¿Empezamos a cuidarte <span className="italic text-peach">juntas</span>?
          </p>
          <Link
            href="/#contacto"
            className="group inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-peach px-7 py-4 font-semibold text-olive-deep transition-colors hover:bg-cream"
          >
            Agenda tu visita
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-10 py-14">
          <div className="md:col-span-5 flex items-start gap-4">
            <img src="/images/logo_beige.png" alt="" className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-display text-2xl">Carla Martínez</p>
              <p className="mt-1 text-sm text-cream/60">
                Dietista-Nutricionista colegiada
                <br />
                col. CAT002241
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-peach/70 mb-4">Enlaces</p>
            <ul className="space-y-2.5 text-sm">
              {[...links, ...legal].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/75 hover:text-peach transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-peach/70 mb-4">Contacto</p>
            <ul className="space-y-3 text-sm">
              {contact.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-cream/75 hover:text-peach transition-colors"
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pt-6 border-t border-cream/10 text-xs text-cream/50 text-center sm:text-left">
          © {new Date().getFullYear()} Carla Martínez Arribas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
