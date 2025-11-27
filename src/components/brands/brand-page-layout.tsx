'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface BrandPageLayoutProps {
    brand: {
        name: string;
        logo: string;
        description?: string;
    };
    heroImage: {
        imageUrl: string;
        imageHint?: string;
    } | undefined;
    children: React.ReactNode;
}

export function BrandPageLayout({ brand, heroImage, children }: BrandPageLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                {heroImage && (
                    <motion.div
                        className="absolute inset-0 z-0"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                    >
                        <Image
                            src={heroImage.imageUrl}
                            alt={`${brand.name} Hero Image`}
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    </motion.div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />

                {/* Content */}
                <div className="relative z-20 container px-4 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-2xl mb-8"
                    >
                        <div className="relative h-20 w-48 md:h-24 md:w-64">
                            <Image
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                fill
                                className="object-contain drop-shadow-lg"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg"
                    >
                        {brand.name}
                    </motion.h1>

                    {brand.description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md"
                        >
                            {brand.description}
                        </motion.p>
                    )}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-8 h-8" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Main Content */}
            <main className="flex-grow bg-background">
                {children}
            </main>
        </div>
    );
}
