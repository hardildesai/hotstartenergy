'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
    { name: 'Adani Group', logoUrl: 'https://logo.clearbit.com/adani.com' },
    { name: 'K Raheja Corp', logoUrl: 'https://logo.clearbit.com/krahejacorp.com' },
    { name: 'Marine Electricals', logoUrl: 'https://logo.clearbit.com/marineelectricals.com' },
    { name: 'Cipla', logoUrl: 'https://logo.clearbit.com/cipla.com' },
    { name: 'Atlas Copco', logoUrl: 'https://logo.clearbit.com/atlascopco.com' },
];

export function TrustedByReveal() {
    return (
        <section className="py-12 w-full">
            <h2 className="text-xl font-bold text-center mb-10 text-foreground">Trusted By Leading Companies</h2>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
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
                                src={client.logoUrl}
                                alt={`${client.name} logo`}
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
