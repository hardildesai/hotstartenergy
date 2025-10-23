'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FlowButton } from '../ui/flow-button';

const highlights = [
    'Authorized Channel Partner for Global Electrical Brands',
    'End-to-End Power Distribution & Automation Solutions',
    'Serving Industrial, Commercial & Infrastructure Projects',
];

export function AboutSection() {
    // Using one of the existing industrial images as a placeholder.
    const image = PlaceHolderImages.find(p => p.id === 'prod-mv-switchgear');

    return (
        <section className="w-full bg-gray-50/50 dark:bg-gray-900/20 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-lg shadow-md overflow-hidden">
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
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                            Powering Reliable Electrical Solutions for Every Industry
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Hotstart Energy Pvt. Ltd. is an authorized channel partner for leading global brands like Legrand, Socomec, KEI, Havells, Selec, and Eaton. We deliver reliable electrical products and integrated energy solutions tailored to modern industrial, commercial, and infrastructure needs.
                            </p>
                            <p>
                                Our expertise spans power distribution, switchgear, busbar trunking systems, and automation, ensuring efficiency, safety, and innovation at every step — from design to delivery.
                            </p>
                        </div>
                        <ul className="space-y-3 pt-2">
                            {highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <FlowButton text="Learn More About Us" href="/about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
