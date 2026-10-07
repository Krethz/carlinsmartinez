import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Calendar, Instagram, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Modal from "@/components/ui/modal";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full h-13 rounded-2xl border border-olive/15 bg-ivory px-5 py-3.5 text-olive-deep placeholder:text-olive-dark/40 outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Teléfono", text: "+34 636 019 161", link: "tel:+34636019161" },
    { icon: Mail, label: "Email", text: "carla.martinez@codinucat.cat", link: "mailto:carla.martinez@codinucat.cat" },
    { icon: Instagram, label: "Instagram", text: "@carlinsmartinez", link: "https://instagram.com/carlinsmartinez", external: true },
  ];

  return (
    <>
      <section id="contacto" className="py-24 md:py-32 px-5 sm:px-6 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Contacto"
            title={
              <>
                Agenda tu <span className="italic text-olive">visita</span>
              </>
            }
            description="Da el primer paso hacia una vida más saludable. Estoy aquí para ayudarte."
          />

          <div className="mt-14 grid lg:grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 relative overflow-hidden rounded-[2rem] bg-olive-dark p-8 sm:p-10 text-cream flex flex-col"
            >
              <div className="grain absolute inset-0" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-sage/25 blur-2xl" />

              <div className="relative">
                <p className="font-display text-3xl leading-tight">
                  Reserva directamente <span className="italic text-peach">online</span>
                </p>
                <p className="mt-3 text-cream/70">
                  Elige el día y la hora que mejor te vayan desde mi calendario.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3.5 font-semibold text-olive-deep transition-colors hover:bg-cream"
                >
                  <Calendar className="w-5 h-5" />
                  Reservar cita online
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              <ul className="relative mt-10 lg:mt-auto pt-10 space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.label}>
                    <a
                      href={info.link}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-white/5 px-4 py-3.5 transition-colors hover:bg-white/10"
                    >
                      <span className="w-10 h-10 shrink-0 rounded-xl bg-peach/15 text-peach flex items-center justify-center">
                        <info.icon className="w-4 h-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-cream/50">{info.label}</span>
                        <span className="block truncate text-cream">{info.text}</span>
                      </span>
                      <ArrowUpRight className="ml-auto w-4 h-4 shrink-0 text-cream/40 transition-colors group-hover:text-peach" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-7 rounded-[2rem] bg-cream border border-olive/10 p-6 sm:p-10"
            >
              <p className="font-display text-2xl text-olive-deep">O escríbeme un mensaje</p>
              <p className="mt-1 text-sm text-olive-dark/60">Te responderé lo antes posible.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={inputClass}
                />
                <textarea
                  placeholder="Cuéntame sobre tus objetivos..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={`${inputClass} min-h-36 resize-y`}
                />

                <div className="text-sm text-olive-dark/70">
                  <label htmlFor="privacy" className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-0.5 w-4 h-4 accent-[var(--primary-green)]"
                    />
                    <span>
                      He leído y acepto la{" "}
                      <a href="/politica-privacidad" className="text-olive font-medium underline underline-offset-2 hover:opacity-80">
                        Política de Privacidad
                      </a>
                      .
                    </span>
                  </label>

                  <p className="mt-3 text-xs text-olive-dark/50 leading-relaxed">
                    Información básica sobre protección de datos: Responsable:{" "}
                    <strong>Carla Martínez Arribas</strong>. Finalidad: gestionar las consultas y solicitudes de cita
                    enviadas a través de este formulario. Legitimación: consentimiento del interesado. Destinatarios:
                    no se cederán datos a terceros, salvo obligación legal. Derechos: puedes acceder, rectificar y
                    suprimir tus datos escribiendo a{" "}
                    <a href="mailto:carla.martinez@codinucat.cat" className="text-olive underline underline-offset-2">
                      carla.martinez@codinucat.cat
                    </a>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-full bg-olive px-6 py-4 text-base font-semibold text-peach transition-colors hover:bg-olive-dark disabled:opacity-60"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : submitSuccess ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      ¡Mensaje enviado!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Reserva tu cita"
      >
        <div className="w-full h-full max-w-full">
          <iframe
            src="https://calendar.app.google/N2Y9ZpTiPkZDrTTL8"
            style={{ border: 0, maxWidth: '100%' }}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Reserva de Cita"
          ></iframe>
        </div>
      </Modal>
    </>
  );
}
