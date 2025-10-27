'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Download, Power, Shield, Zap } from 'lucide-react';
import { KeiCablesLogo } from '../logos';
import { motion } from 'framer-motion';

const productPortfolio = [
  { title: 'Power Cables (LV, MV, HV)', description: 'For reliable energy transmission in industrial and utility networks.', icon: Power },
  { title: 'Control Cables', description: 'For signaling and control circuits in automation systems.', icon: Zap },
  { title: 'Instrumentation Cables', description: 'For precise signal transmission with minimal interference.', icon: Shield },
  { title: 'Flexible & House Wires', description: 'For residential, commercial, and appliance wiring.', icon: Power },
  { title: 'Specialty Cables', description: 'Including rubber cables, solar cables, and fire-resistant variants.', icon: Zap },
];

const featuredProducts = [
    {
        title: 'HV Power Cable',
        description: 'Built for high performance, KEI HV wire ensures safe and efficient power transmission. These cables are designed to handle high voltage with reliability, making them ideal for demanding industrial and commercial applications.',
        imageId: 'kei-hv-cable',
        imageCaption: 'KEI HV Power Cables'
    },
    {
        title: 'LV Power & Control Cable',
        description: 'KEI LV wire and cable are ideal for low-voltage power needs. The LV Power & Control Cable ensures efficient performance and safety, making it perfect for residential, commercial, and industrial use.',
        imageId: 'kei-lv-cable',
        imageCaption: 'KEI LV Power & Control Cable'
    },
    {
        title: 'Building Wires',
        description: 'KEI building wires are crafted for secure and efficient electrical connections in homes and offices. The building wires offer high durability and superior insulation, ensuring long-lasting performance and safety for everyday use.',
        imageId: 'kei-building-wires',
        imageCaption: 'KEI Building Wires'
    },
    {
        title: 'Solar Cables',
        description: 'KEI solar cable is designed for reliable and efficient energy transmission in solar power systems. These Solar Cables ensure durability, UV resistance, and safety, making them ideal for sustainable energy solutions in residential and commercial setups.',
        imageId: 'kei-solar-cables',
        imageCaption: 'KEI Solar Cables'
    },
    {
        title: 'Flexible Single And Multi Core Wires',
        description: 'KEI flexible cable is built for versatile use in residential, commercial, and industrial setups. These flexible single and multi core wires offer excellent conductivity, durability, and ease of installation, ensuring reliable performance in various applications.',
        imageId: 'kei-flexible-wires',
        imageCaption: 'KEI Flexible single core and multi core Wires'
    },
    {
        title: 'EHV Power Cable',
        description: 'KEI EHV wire and KEI EHV cable are designed for efficient power transmission at extremely high voltages. These EHV power cables ensure superior insulation, reliability, and safety, making them ideal for large-scale industrial and infrastructure projects.',
        imageId: 'kei-ehv-cable',
        imageCaption: 'KEI EHV Power Cable'
    },
    {
        title: 'Telecom Cables',
        description: 'KEI telecom cables are engineered to ensure seamless and reliable data and voice transmission. Designed for durability and high performance, these telecom cables provide efficient connectivity, making them ideal for modern communication networks.',
        imageId: 'kei-telecom-cables',
        imageCaption: 'KEI Telecom Cables'
    },
    {
        title: 'Instrumentation Cables',
        description: 'KEI instrumentation cable is designed for precise signal transmission in industrial applications. These cables ensure accuracy, reliability, and durability, making them essential for controlling and monitoring processes in various industries.',
        imageId: 'kei-instrumentation-cables',
        imageCaption: 'KEI Instrumentation Cables'
    },
    {
        title: 'Fire Survival Cables',
        description: 'KEI fire survival cables are designed to maintain circuit integrity during fire emergencies. These cables ensure safety and reliability in critical applications, making them ideal for fire-prone environments in residential, commercial, and industrial setups.',
        imageId: 'kei-fire-survival-cables',
        imageCaption: 'KEI Fire Survival Cables'
    }
];

const whyKei = [
  'Global standards with CE, KEMA, and UL certifications.',
  'Trusted across infrastructure, oil & gas, and renewable energy sectors.',
  'State-of-the-art manufacturing for long-term reliability.',
  'High customer satisfaction and industry-wide approval.',
];

export function KeiCablesPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'kei-hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="KEI Cables industrial application"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4 flex flex-col items-center">
            <brand.logo className="h-20 w-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Quality Cables for Every Application
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Hotstart Energy is your authorized dealer for KEI Cables, delivering performance and reliability for India’s most demanding projects.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Your Trusted Partner for KEI Wires & Cables
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            As a leading distributor, Hotstart Energy provides access to KEI’s extensive range of high-quality cables. We ensure authentic products, technical support, and competitive pricing for all your project needs.
          </p>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">KEI Cables Product Portfolio</h2>
          </div>
           <div className="space-y-12">
                {featuredProducts.map((product, index) => {
                    const image = PlaceHolderImages.find(p => p.id === product.imageId);
                    const isReversed = index % 2 !== 0;
                    return (
                        <motion.div 
                          key={index} 
                          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card p-8 rounded-lg shadow-sm border`}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className={`space-y-4 ${isReversed ? 'md:order-2' : ''}`}>
                                <h3 className="text-2xl font-bold">{product.title}</h3>
                                <p className="text-muted-foreground">{product.description}</p>
                                <Button asChild variant="destructive">
                                    <Link href="/contact">Learn More</Link>
                                </Button>
                            </div>
                            <div className={`text-center ${isReversed ? 'md:order-1' : ''}`}>
                               {image && (
                                 <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                                    <div className="relative h-64 w-64">
                                        <Image 
                                            src={image.imageUrl}
                                            alt={product.title}
                                            fill
                                            className="object-contain"
                                            sizes="256px"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <KeiCablesLogo className="h-8 mx-auto" />
                                        <p className="text-sm font-semibold text-foreground mt-2">{product.imageCaption}</p>
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

      {/* Why Choose KEI */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Unmatched Quality and Performance
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    KEI Industries is one of the world's leading cable manufacturers, renowned for its commitment to quality, innovation, and sustainability. Their products form the backbone of critical infrastructure globally.
                </p>
                <ul className="space-y-3 pt-2 inline-grid sm:grid-cols-2 gap-x-12 gap-y-3 text-left">
                {whyKei.map((item, index) => (
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
                    Get the Best Prices on KEI Cables
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Contact us today for a competitive quote on your bulk or project-based cable requirements. Our team is ready to assist you.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/quote?product=kei-cables">Request a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>

    </div>
  );
}
