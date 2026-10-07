"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PricingItem {
    item: string;
    detail: string;
    price: string;
}

interface Service {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    fullDescription?: string;
    subtitle?: string;
    pricing: PricingItem[];
    includes: string[];
    footer?: string;
    image?: string;
    images?: string[];
}

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-ivory rounded-[1.75rem] sm:rounded-[2rem] shadow-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden pointer-events-auto"
                            style={{ width: "92vw", maxWidth: "860px" }}
                        >
                            <div className="relative overflow-hidden bg-olive-dark px-6 py-6 sm:px-10 sm:py-8 text-cream">
                                <div className="grain absolute inset-0" />
                                <button
                                    onClick={onClose}
                                    aria-label="Cerrar"
                                    className="cursor-pointer absolute top-3 right-3 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="relative flex items-center gap-4 pr-12">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-peach text-olive-dark flex items-center justify-center">
                                        <service.icon size={26} />
                                    </div>
                                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">{service.title}</h2>
                                </div>
                            </div>

                            <div className="px-5 py-6 sm:p-10 overflow-y-auto max-h-[calc(90vh-110px)] sm:max-h-[calc(85vh-130px)]">
                                <p className="font-display text-xl text-olive-deep mb-4 leading-snug">
                                    {service.description}
                                </p>

                                {service.fullDescription && (
                                    <p className="text-olive-dark/75 mb-8 leading-relaxed">
                                        {service.fullDescription}
                                    </p>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-4">
                                        Tarifas
                                    </h3>
                                    <div className="rounded-3xl border border-olive/10 bg-cream overflow-x-auto">
                                        {service.pricing.map((price, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex justify-between items-center gap-3 px-5 py-4 min-w-[260px] ${idx < service.pricing.length - 1 ? "border-b border-olive/10" : ""
                                                    }`}
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <span className="font-medium text-olive-deep">{price.item}</span>
                                                    {price.detail && (
                                                        <span className="text-sm text-olive-dark/55 block">{price.detail}</span>
                                                    )}
                                                </div>
                                                <span className="font-display text-2xl text-olive whitespace-nowrap">
                                                    {price.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-base sm:text-lg font-semibold text-olive-deep mb-4 leading-snug">
                                        {service.subtitle || "¿Qué incluye?"}
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="mt-0.5 w-5 h-5 rounded-full bg-olive/10 text-olive flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3" />
                                                </span>
                                                <span className="text-olive-dark/80 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {service.footer && (
                                    <p className="font-display text-lg italic text-olive leading-snug border-l-2 border-coral/60 pl-5 py-1">
                                        {service.footer}
                                    </p>
                                )}

                                {/* Images */}
                                {service.image && (
                                    <div className="mt-6 relative w-full h-64">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="rounded-2xl object-cover"
                                        />
                                    </div>
                                )}
                                {service.images && (
                                    <div className="mt-8">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                            {service.images.map((img, idx) => (
                                                <div key={idx} className="w-full aspect-square overflow-hidden rounded-2xl">
                                                    <Image
                                                        src={img}
                                                        alt={`${service.title} ${idx + 1}`}
                                                        width={300}
                                                        height={300}
                                                        className="object-cover w-full h-full"
                                                        style={{
                                                            objectPosition: img.includes('andreu_jump') ? 'top' : 'center'
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <div className="mt-10 text-center">
                                    <button
                                        onClick={() => {
                                            onClose();
                                            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-full bg-olive text-peach font-semibold text-lg transition-colors hover:bg-olive-dark"
                                    >
                                        Agenda tu visita
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )
            }
        </AnimatePresence >
    );
}
