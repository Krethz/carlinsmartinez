import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Calendar, Instagram } from "lucide-react";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

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
    { icon: Phone, text: "+34 636 019 161", link: "tel:+34636019161" },
    { icon: Mail, text: "carla.martinez@codinucat.cat", link: "mailto:carla.martinez@codinucat.cat" },
    { icon: Instagram, text: "@carlinsmartinez", link: "https://instagram.com/carlinsmartinez" },
  ];

  return (
    <>
      <section id="contacto" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--primary-green)" }}
            >
              Agenda tu visita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Da el primer paso hacia una vida más saludable. Estoy aquí para
              ayudarte
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: "var(--primary-green)" }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reservar Cita Online
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Tu Nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Tu Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Tu Teléfono"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Cuéntame sobre tus objetivos..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="min-h-32"
                      />
                    </div>

                    {/* ✅ Cláusula de Protección de Datos */}
                    <div className="mt-4 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="privacy"
                          required
                          className="mt-1 accent-[var(--primary-green)]"
                        />
                        <label htmlFor="privacy">
                          He leído y acepto la{" "}
                          <a
                            href="/politica-privacidad"
                            className="text-[var(--primary-green)] underline hover:opacity-80"
                          >
                            Política de Privacidad
                          </a>
                          .
                        </label>
                      </div>

                      <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                        Información básica sobre protección de datos: Responsable:{" "}
                        <strong>Carla Martínez Arribas</strong>. Finalidad:
                        gestionar las consultas y solicitudes de cita enviadas a
                        través de este formulario. Legitimación: consentimiento
                        del interesado. Destinatarios: no se cederán datos a
                        terceros, salvo obligación legal. Derechos: puedes
                        acceder, rectificar y suprimir tus datos escribiendo a{" "}
                        <a
                          href="mailto:carla.martinez@codinucat.cat"
                          className="text-[var(--primary-green)] underline"
                        >
                          carla.martinez@codinucat.cat
                        </a>
                        .
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer w-full h-12 text-lg rounded-full mt-4"
                      style={{ backgroundColor: "var(--primary-green)" }}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : submitSuccess ? (
                        "¡Mensaje Enviado!"
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--primary-green)" }}
                >
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--primary-green)" + "20" }}
                      >
                        <info.icon
                          className="w-5 h-5"
                          style={{ color: "var(--primary-green)" }}
                        />
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.icon === Instagram ? "_blank" : undefined}
                          rel={info.icon === Instagram ? "noopener noreferrer" : undefined}
                          className="text-gray-700 text-lg hover:text-[var(--primary-green)] transition-colors"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-gray-700 text-lg">{info.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
                  alt="Alimentos saludables"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Reserva tu Cita"
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
