"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden pointer-events-auto"
                            style={{ width: "90vw", maxWidth: "850px" }}
                        >
                            {/* Header with gradient */}
                            <div
                                className="relative p-3 sm:p-8 text-white"
                                style={{
                                    background: "linear-gradient(135deg, var(--gradient-start) 0%, var(--primary-green) 100%)"
                                }}
                            >
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="flex flex-col items-center gap-3 text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                        <service.icon size={32} className="text-white" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{service.title}</h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-3 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)] sm:max-h-[calc(85vh-180px)]">
                                {/* Description */}
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {service.fullDescription && (
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {service.fullDescription}
                                    </p>
                                )}

                                {/* Pricing Table */}
                                <div className="mb-8">
                                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ color: "var(--primary-green)" }}>
                                        💰 Tarifas
                                    </h3>
                                    <div className="bg-gray-50 rounded-2xl overflow-x-auto overflow-y-visible">
                                        {service.pricing.map((price, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex justify-between items-center gap-2 p-3 sm:p-4 min-w-[280px] ${idx < service.pricing.length - 1 ? "border-b border-gray-200" : ""
                                                    }`}
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <span className="font-medium text-sm sm:text-base">{price.item}</span>
                                                    {price.detail && (
                                                        <span className="text-xs sm:text-sm text-gray-500 block">{price.detail}</span>
                                                    )}
                                                </div>
                                                <span
                                                    className="text-lg sm:text-xl font-bold whitespace-nowrap"
                                                    style={{ color: "var(--primary-green)" }}
                                                >
                                                    {price.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* What's included */}
                                <div className="mb-6">
                                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ color: "var(--primary-green)" }}>
                                        {service.subtitle || "✨ ¿Qué incluye?"}
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span
                                                    className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: "var(--accent-coral)" }}
                                                />
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {service.footer && (
                                    <p className="text-sm text-gray-600 italic border-l-4 pl-4 py-2"
                                        style={{ borderColor: "var(--accent-gold)" }}>
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
                                    <div className="mt-6 flex justify-center">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 justify-items-center">
                                            {service.images.map((img, idx) => (
                                                <div key={idx} className="relative w-[300px] h-[300px]">
                                                    <Image
                                                        src={img}
                                                        alt={`${service.title} ${idx + 1}`}
                                                        fill
                                                        className="rounded-xl object-cover object-center shadow-md hover:shadow-lg transition-shadow"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <div className="mt-8 text-center">
                                    <button
                                        onClick={() => {
                                            onClose();
                                            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="cursor-pointer px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
                                        style={{
                                            background: "linear-gradient(135deg, var(--gradient-start) 0%, var(--primary-green) 100%)"
                                        }}
                                    >
                                        Reservar Consulta
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
