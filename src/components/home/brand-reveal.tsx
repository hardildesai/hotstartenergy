'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { brands } from '@/lib/brands';

export function BrandReveal() {
    return (
        <section className="py-12 w-full">
            <h2 className="text-xl font-bold text-center mb-10 text-foreground">Our Brand Partners</h2>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {brands.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 128px, 160px"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
