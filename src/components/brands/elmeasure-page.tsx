'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import React from 'react';
import { ProductRevealCard } from '../ui/product-reveal-card';
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '../ui/badge';
import { BrandPageLayout } from './brand-page-layout';
import { motion, AnimatePresence } from 'framer-motion';

const productCategories = [
    {
        category: 'Source Changeover Switches',
        products: [
            {
                title: 'Automatic Transfer Switches (ATS)',
                description: 'Reliable automatic switching between power sources for continuous supply.',
                details: 'Ensures seamless transfer of power between primary and backup sources. Ideal for critical applications requiring uninterrupted power supply.',
                imageId: 'cat-switchgear',
                url: '#',
            },
            {
                title: 'Manual Transfer Switches (MTS)',
                description: 'Robust manual switching solutions for safe power source management.',
                details: 'Allows manual selection between two power sources. Designed for safety and durability in industrial and commercial settings.',
                imageId: 'cat-switchgear',
                url: '#',
            },
            {
                title: 'Automatic Changeover with Current Limiter (ACCL)',
                description: 'Intelligent changeover with overload protection and current limiting features.',
                details: 'Automatically switches to generator supply during power failure and limits the load to a pre-set value, preventing generator overload.',
                imageId: 'cat-switchgear',
                url: '#',
            },
            {
                title: 'Solenoid-Based Automatic Transfer Switch',
                description: 'High-speed transfer switch using solenoid mechanism for fast switching.',
                details: 'Utilizes a solenoid drive for rapid transfer operations, suitable for sensitive electronic equipment.',
                imageId: 'cat-switchgear',
                url: '#',
            },
            {
                title: 'Static Transfer Switches',
                description: 'Solid-state transfer switches for instantaneous power switching.',
                details: 'Provides ultra-fast transfer times (typically <4ms) using SCR technology, ensuring zero interruption for critical loads.',
                imageId: 'cat-switchgear',
                url: '#',
            },
        ]
    },
    {
        category: 'Energy and Power Monitors',
        products: [
            {
                title: 'DC Energy Meters',
                description: 'Precision metering for DC power systems and renewable energy applications.',
                details: 'Accurate measurement of DC voltage, current, power, and energy. Essential for solar PV systems, battery monitoring, and telecom applications.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'Branch Circuit Power Monitors',
                description: 'Multi-channel monitoring for high-density power distribution units.',
                details: 'Monitors multiple circuits simultaneously, ideal for data centers and commercial buildings to track energy usage at the branch circuit level.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'Basic Meters',
                description: 'Cost-effective digital meters for basic electrical parameter monitoring.',
                details: 'Reliable measurement of voltage, current, and frequency. Suitable for control panels and general-purpose monitoring.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'Power Quality Monitors',
                description: 'Advanced monitoring of power quality events and disturbances.',
                details: 'Detects sags, swells, harmonics, and transients. Helps in diagnosing power quality issues and preventing equipment failure.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'Multi-Functional Energy Meters',
                description: 'Comprehensive metering solution for all electrical parameters.',
                details: 'Measures V, I, F, PF, KW, KVA, KVAR, and energy. Features communication ports for BMS integration.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'Power Quality Analysers',
                description: 'In-depth analysis of power quality with detailed reporting and logging.',
                details: 'High-end analyzers for detailed harmonic analysis, waveform capture, and compliance reporting.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'Portable Power Quality Analyzers',
                description: 'Handheld analyzers for on-site power quality audits and troubleshooting.',
                details: 'Portable and rugged design for field use. capturing and analyzing power quality data at various locations.',
                imageId: 'cat-meters',
                url: '#',
            },
            {
                title: 'IoT Energy Meters',
                description: 'Smart meters with built-in IoT connectivity for remote monitoring.',
                details: 'Cloud-connected meters for real-time data access and analytics. Enables remote energy management and billing.',
                imageId: 'cat-meters',
                url: '#',
            },
        ]
    }
];

type Product = typeof productCategories[0]['products'][0] & { category: string };

const whyElmeasure = [
    'Innovator in energy management and smart metering solutions.',
    'Pioneers in Automatic Changeover with Current Limiter (ACCL) technology.',
    'Comprehensive range of power quality and monitoring devices.',
    'Dedicated to energy conservation and efficiency.',
];

export function ElmeasurePage({ brand }: { brand: Brand }) {
    const heroImage = PlaceHolderImages.find(p => p.id === 'elmeasure-hero') || PlaceHolderImages.find(p => p.id === 'hero-bg');
    const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

    const handleEnquire = () => {
        window.location.href = '/contact';
    };

    const handleViewDetails = (product: Product) => {
        setSelectedProduct(product);
    };

    const getProductImage = (product: Product) => {
        return PlaceHolderImages.find(p => p.id === product.imageId)?.imageUrl || '/placeholder.svg'
    }

    return (
        <BrandPageLayout
            brand={{
                name: "Smart Energy Management & Protection",
                logo: brand.logo,
                description: "Innovator in energy management, offering advanced metering, protection, and changeover solutions for efficient power usage."
            }}
            heroImage={heroImage}
        >
            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Intelligent Energy Solutions
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-8">
                        Elmeasure is a leader in energy management, known for its innovative approach to metering and protection. From basic meters to advanced IoT-enabled solutions and robust changeover switches, Elmeasure empowers you to manage energy efficiently.
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        <Link href="/contact">Explore Solutions</Link>
                    </Button>
                </div>
            </section>

            {/* Product Portfolio */}
            <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
                {productCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-secondary/30' : 'bg-background'}`}>
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block border-b-4 border-primary pb-2">{category.category}</h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                                {category.products.map((product, productIndex) => {
                                    const image = PlaceHolderImages.find(p => p.id === product.imageId);

                                    return (
                                        <motion.div
                                            key={product.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: productIndex * 0.1 }}
                                            className="h-full"
                                        >
                                            <ProductRevealCard
                                                name={product.title}
                                                image={image?.imageUrl}
                                                description={product.description}
                                                category={category.category}
                                                onAdd={handleEnquire}
                                                onViewDetails={() => handleViewDetails({ ...product, category: category.category })}
                                                className="w-full h-full"
                                            />
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                ))}

                <DialogContent
                    className="sm:max-w-4xl bg-background p-0 overflow-hidden"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                >
                    {selectedProduct && (
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="relative h-64 md:h-full bg-muted">
                                <Image
                                    src={getProductImage(selectedProduct)}
                                    alt={selectedProduct.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col h-full">
                                <Badge variant="secondary" className="w-fit mb-4">{selectedProduct.category}</Badge>
                                <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
                                <p className="text-muted-foreground mb-6 text-sm flex-grow">{selectedProduct.description}</p>

                                <div className="flex gap-4 mb-6">
                                    <Button variant="outline" className="flex-1"><Download className="w-4 h-4 mr-2" /> Datasheet</Button>
                                    <Button asChild className="flex-1">
                                        <Link href="/quote">Get Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                    </Button>
                                </div>

                                <Tabs defaultValue="description" className="w-full">
                                    <TabsList className="w-full grid grid-cols-2">
                                        <TabsTrigger value="description">Description</TabsTrigger>
                                        <TabsTrigger value="specifications">Specs</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="description" className="text-sm text-foreground/80 mt-4 h-40 overflow-y-auto pr-2 custom-scrollbar">
                                        {selectedProduct.details}
                                    </TabsContent>
                                    <TabsContent value="specifications" className="text-sm text-foreground/80 mt-4 h-40 overflow-y-auto pr-2 custom-scrollbar">
                                        {selectedProduct.details}
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>


            {/* Why Choose Elmeasure */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Why Choose Elmeasure?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Elmeasure is committed to providing cutting-edge solutions for energy management and protection. Their products are designed to enhance efficiency, ensure safety, and provide actionable insights into your power usage.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 text-left pt-4">
                            {whyElmeasure.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 border border-secondary/50">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-foreground/90 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 text-center bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Optimize Your Energy with Elmeasure
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80 mb-10">
                        Contact us today to learn more about Elmeasure's range of energy meters and changeover switches. We provide expert advice and competitive pricing.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        <Link href="/quote?product=elmeasure">Request a Quote</Link>
                    </Button>
                </div>
            </section>
        </BrandPageLayout>
    );
}
