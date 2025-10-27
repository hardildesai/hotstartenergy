'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const productCategories = [
    {
        category: 'Panel Meters & Energy Meters',
        products: [
            {
                title: 'Countis Energy Meter',
                description: 'Displays energy and power consumed (kWh and kW). Suitable for single-phase load metering and direct connections up to 80A. RS485 communication models available.',
                imageId: 'socomec-countis-meter'
            },
            {
                title: 'MULTIS Single And Three Phase Energy And Multifunction Meters',
                description: 'Feature-rich dual source energy metering in a sturdy polycarbonate housing. Resistant to high shock and pollution. Displays up to 3 parameters on LCD, with others in scroll mode. Programmable CT and PT.',
                imageId: 'socomec-multis-meter'
            },
            {
                title: 'DIRIS Digiware Voltage And Current Monitoring Meters',
                description: 'A complete, dedicated solution for metering, monitoring, and analyzing voltage with a single point of protection. Ensures no hazardous voltage on cabinet doors and is adapted for all network types.',
                imageId: 'socomec-diris-digiware'
            }
        ]
    },
    {
        category: 'Changeovers & Automatic Transfer Switches',
        products: [
            {
                title: 'Manual Changeover Switch',
                description: 'Manually operated 3 and 4 pole open transition transfer switching from 63A to 3200A. Features three stable, padlockable positions to protect loads from network interference. IEC 60947-6-1 compliant.',
                imageId: 'socomec-manual-changeover'
            },
             {
                title: 'Load Break Switch',
                description: 'Manually and remotely operated 3 and 4 pole versions, from 63A to 5000A. A robust, compact design with high performance, line-load interchangeability, and integrated terminal spreaders.',
                imageId: 'socomec-load-break'
            },
            {
                title: 'Bypass Switch',
                description: 'Manually operated 3 and 4 pole open transition transfer switching equipment from 63A to 3200A. Provides three stable positions, built-in mechanical interlocks, and padlock capability for ultimate safety.',
                imageId: 'socomec-bypass-switch'
            },
            {
                title: 'Automatic Transfer Switch (ATS)',
                description: 'Conforming to IEC 60947-6-1, these 3 or 4 pole switches with positive break indication are operated automatically or remotely. Features an external controller and incorporates supply redundancy without extra wiring.',
                imageId: 'socomec-ats'
            }
        ]
    }
];

const whySocomec = [
  'Value-added services ensuring availability of critical installations.',
  'Expertise and proximity of specialists ensure equipment reliability.',
  'Products conform to both International and National Standards.',
  'State-of-the-art manufacturing facility in Gurgaon.',
];

export function SocomecPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'socomec-hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Socomec Power Switching Solutions"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4 flex flex-col items-center">
          <Image src={brand.logo} alt={`${brand.name} logo`} width={160} height={60} className="h-20 w-auto mb-6 dark:invert" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your Power. Our Expertise.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Delivering high-performance low voltage power equipment and value-added services to ensure the availability of your critical installations.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Managing Power with Unrivaled Expertise Since 1965
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            SOCOMEC is committed to delivering a wide range of value-added services to ensure the availability of your critical installation, the safety of your site operations, and the performance optimisation of your low voltage equipment during its life cycle. With more than 370 experts, we drive solutions tailored to your specific needs.
          </p>
        </div>
      </section>
      
      {/* Product Portfolio */}
      {productCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/20' : 'bg-background'}`}>
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{category.category}</h2>
            </div>
            <div className="space-y-8">
                    {category.products.map((product, productIndex) => {
                        const image = PlaceHolderImages.find(p => p.id === product.imageId);
                        const isReversed = productIndex % 2 !== 0;
                        return (
                            <motion.div 
                            key={productIndex} 
                            className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center bg-card p-6 rounded-lg shadow-sm border`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className={`space-y-3 ${isReversed ? 'md:order-2' : ''}`}>
                                    <h3 className="text-xl font-bold">{product.title}</h3>
                                    <p className="text-muted-foreground text-sm">{product.description}</p>
                                    <Button asChild size="sm">
                                        <Link href="/contact">Enquire Now</Link>
                                    </Button>
                                </div>
                                <div className={`text-center ${isReversed ? 'md:order-1' : ''}`}>
                                {image && (
                                    <div className="bg-white p-2 rounded-lg shadow-md inline-block">
                                        <div className="relative h-48 w-48">
                                            <Image 
                                                src={image.imageUrl}
                                                alt={product.title}
                                                fill
                                                className="object-contain"
                                                sizes="192px"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    </div>
                                )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
      ))}


      {/* Why Choose Socomec */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Why Choose Socomec?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                   With a state-of-the-art factory in Gurgaon and a global network of experts, Socomec guarantees reliability, durability, and performance for your low voltage equipment.
                </p>
                <ul className="space-y-3 pt-2 inline-grid sm:grid-cols-2 gap-x-12 gap-y-3 text-left">
                {whySocomec.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-16 md:py-24 text-center bg-gray-50/50 dark:bg-gray-900/20 border-t">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Get a Quote for Socomec Products
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    As authorized partners, we provide competitive pricing and expert support for the entire Socomec portfolio. Contact us for your project requirements.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/quote?product=socomec">Request a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>

    </div>
  );
}
