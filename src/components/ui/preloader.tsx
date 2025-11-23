'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2300); // Reduced slightly to sync with animation end

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            filter: "blur(0px)"
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                        className="relative w-64 h-24 md:w-80 md:h-32"
                    >
                        <Image
                            src="/navbar_logo.png"
                            alt="Hotstart Energy Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
