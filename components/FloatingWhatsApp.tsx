"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
    const phoneNumber = "34636019161"; // Número sin el símbolo +
    const message = "¡Hola! Me gustaría obtener más información sobre tus servicios de nutrición.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Pulse effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-green-500"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main button */}
            <div
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-green-500/50"
                style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
            >
                {/* WhatsApp Official Logo */}
                <svg
                    className="w-9 h-9 sm:w-10 sm:h-10"
                    viewBox="0 0 175.216 175.552"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="whatsapp-gradient"
                            x1="85.915"
                            x2="86.535"
                            y1="32.567"
                            y2="137.092"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#57d163" />
                            <stop offset="1" stopColor="#23b33a" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#whatsapp-gradient)"
                        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.927z"
                    />
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                    />
                </svg>
            </div>

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none"
            >
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
                    ¿Necesitas ayuda? ¡Escríbeme!
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                        <div className="border-8 border-transparent border-l-gray-900" />
                    </div>
                </div>
            </motion.div>
        </motion.a>
    );
}
