'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FlowButton } from '../ui/flow-button';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';

const expertiseList = [
    'Power distribution systems and advanced switchgear',
    'Busbar trunking solutions for scalable, efficient installations',
    'Industrial automation and control engineering',
    'Customizable solutions—from design consultation to on-site implementation'
];

export function AboutSection() {
    // Using one of the existing industrial images as a placeholder.
    const image = PlaceHolderImages.find(p => p.id === 'prod-mv-switchgear');

    return (
        <section id="about-us" className="w-full bg-gray-50/50 dark:bg-gray-900/20 py-16 md:py-24 scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="relative aspect-square md:aspect-[4/3] rounded-lg shadow-md overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt="Engineers working on an electrical panel"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                    </motion.div>
                    <div className="space-y-6">
                        <Badge variant="outline">Inside Hotstart Energy</Badge>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                           Powering Reliable Electrical Solutions for Every Industry
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Hotstart Energy Pvt. Ltd. stands at the forefront of industrial progress as an authorized channel partner for global leaders such as Legrand, Socomec, KEI, Havells, Selec, and Eaton. We deliver best-in-class electrical products and integrated energy solutions, purpose-built for today’s industrial, commercial, and infrastructure environments.
                            </p>
                        </div>
                         <div className="space-y-3 pt-2">
                            <p className="font-semibold text-foreground">Our team’s expertise spans:</p>
                            <ul className="space-y-3">
                                {expertiseList.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-4">
                            <FlowButton text="Learn More About Us" href="/about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
