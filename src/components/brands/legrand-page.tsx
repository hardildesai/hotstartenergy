
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Zap, ExternalLink, Download, ArrowRight } from 'lucide-react';
import React from 'react';
import { ProductRevealCard } from '../ui/product-reveal-card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '../ui/badge';
import { BrandPageLayout } from './brand-page-layout';
import { motion, AnimatePresence } from 'framer-motion';

const productCategories = [
    // --- Industrial Switchgear ---
    {
        group: 'Industrial Switchgear',
        category: 'Air Circuit Breakers (ACB)',
        products: [
            {
                title: 'DMX³ (630A - 6300A)',
                description: 'High-performance ACBs for efficient power distribution and protection.',
                details: 'Frame Size: 3, Poles: 3P/4P, Breaking Capacity: 50kA - 100kA, Mounting: Fixed/Draw-out.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/power/air-circuit-breakers-acb/dmx',
                attributes: ['Frame Size', 'Poles: 3P/4P', '50-100kA', 'Fixed/Draw-out']
            },
            {
                title: 'DMX SP (Standard)',
                description: 'Standard range ACBs optimized for essential protection needs.',
                details: 'Reliable protection for standard applications. Available in various frame sizes and breaking capacities.',
                imageId: 'prod-circuit-breaker',
                url: '#',
                attributes: ['Standard Range', 'Reliable Protection']
            },
            {
                title: 'ACB Accessories',
                description: 'Comprehensive range of accessories including coils and motors.',
                details: 'Enhance ACB functionality with shunt trips, closing coils, undervoltage releases, and motor operators.',
                imageId: 'prod-circuit-breaker',
                url: '#',
                attributes: ['Coils', 'Motors', 'Auxiliaries']
            }
        ]
    },
    {
        group: 'Industrial Switchgear',
        category: 'Moulded Case Breakers (MCCB)',
        products: [
            {
                title: 'DPX³ Electronic (Metering)',
                description: 'Smart MCCBs with integrated metering and advanced protection.',
                details: 'Rating: 16A - 1600A. Features built-in measurement of voltage, current, and power.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/power/moulded-case-circuit-breakers-mccb/dpx',
                attributes: ['16-1600A', 'Integrated Metering', 'Electronic Trip Unit']
            },
            {
                title: 'DPX³ Thermal-Mag',
                description: 'Robust thermal-magnetic MCCBs for reliable circuit protection.',
                details: 'Adjustable thermal and magnetic settings. Suitable for distribution and motor protection.',
                imageId: 'prod-circuit-breaker',
                url: '#',
                attributes: ['Thermal-Magnetic', 'Adjustable Settings']
            },
            {
                title: 'DRX (Fixed/Standard)',
                description: 'Compact and economical MCCBs for standard applications.',
                details: 'Fixed thermal and magnetic settings. Ideal for building and standard industrial applications.',
                imageId: 'prod-circuit-breaker',
                url: '#',
                attributes: ['Fixed Settings', 'Compact', 'Economical']
            }
        ]
    },
    {
        group: 'Industrial Switchgear',
        category: 'Motor Control & Protection',
        products: [
            {
                title: 'CTX³ Contactors',
                description: '3-pole and 4-pole contactors for motor control and switching.',
                details: 'AC-3 Rating up to 800A. Wide range of coil voltages available.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co_in/products/power/contactors/ctx',
                attributes: ['AC-3 Rating', 'Various Coil Voltages', '3P/4P']
            },
            {
                title: 'RTX³ Overload Relays',
                description: 'Thermal overload relays for precise motor protection.',
                details: 'Direct mounting on CTX3 contactors. Class 10A tripping class.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co_in/products/power/thermal-overload-relays/rtx',
                attributes: ['Thermal Protection', 'Direct Mounting']
            },
            {
                title: 'MPX³ MPCB',
                description: 'Motor Protection Circuit Breakers for switching and protection.',
                details: 'Combines motor control, disconnect, and overload/short-circuit protection in one device.',
                imageId: 'cat-switchgear',
                url: '#',
                attributes: ['Motor Protection', 'High Breaking Capacity']
            }
        ]
    },
    {
        group: 'Industrial Switchgear',
        category: 'Power Quality & Metering',
        products: [
            {
                title: 'PMX Panel Meters',
                description: 'Digital multifunction meters and VAF meters for panel mounting.',
                details: 'Measure and monitor electrical parameters with high accuracy. RS485 communication option.',
                imageId: 'cat-meters',
                url: 'https://www.legrand.co_in/products/power/measurement-monitoring-and-supervision/pmx-meters',
                attributes: ['MFM', 'VAF', 'RS485']
            },
            {
                title: 'ALPX Capacitors',
                description: 'Cylindrical and box-type capacitors for power factor correction.',
                details: 'High-quality capacitors for improving system efficiency and reducing energy costs.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co_in/products/power/capacitors/alpican',
                attributes: ['Cylindrical/Box', 'PFC', 'Various KVAR']
            },
            {
                title: 'APFC Controllers',
                description: 'Automatic Power Factor Correction controllers.',
                details: 'Intelligent control of capacitor banks to maintain desired power factor.',
                imageId: 'cat-switchgear',
                url: '#',
                attributes: ['Automatic Control', 'Digital Display']
            }
        ]
    },

    // --- Modular Protection (MCB-DB) ---
    {
        group: 'Modular Protection (MCB-DB)',
        category: 'Modular Devices',
        products: [
            {
                title: 'MCB DX³ (10kA+)',
                description: 'High-performance MCBs for industrial and commercial applications.',
                details: 'Breaking capacity 10kA and above. Available in B, C, and D curves.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co_in/products/protection/miniature-circuit-breakers-mcb/dx',
                attributes: ['10kA+', 'B/C/D Curves', '1P-4P']
            },
            {
                title: 'MCB RX³ (Resi 6kA)',
                description: 'Reliable MCBs designed specifically for residential protection.',
                details: '6kA breaking capacity. C curve protection for household circuits.',
                imageId: 'prod-circuit-breaker',
                url: '#',
                attributes: ['Residential', '6kA', 'C Curve']
            },
            {
                title: 'RCCB / ELCB',
                description: 'Residual Current Circuit Breakers for earth leakage protection.',
                details: 'Sensitivity: 30mA, 100mA, 300mA. Protects against electric shock and fire hazards.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co_in/products/protection/residual-current-circuit-breakers-rccb/dx',
                attributes: ['30mA/100mA/300mA', 'Earth Leakage']
            },
            {
                title: 'RCBO (Combo)',
                description: 'Combined MCB and RCCB for comprehensive circuit protection.',
                details: 'Overload, short-circuit, and earth leakage protection in a single device.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co_in/products/protection/rcbo-and-rcd-add-on-blocks/rcbo',
                attributes: ['Combo Protection', 'Compact']
            },
            {
                title: 'Isolators',
                description: 'Switch disconnectors for safe circuit isolation.',
                details: 'Used for isolating circuits during maintenance. Available in various pole configurations.',
                imageId: 'prod-circuit-breaker',
                url: '#',
                attributes: ['Isolation', 'Safety']
            }
        ]
    },
    {
        group: 'Modular Protection (MCB-DB)',
        category: 'Distribution Boards',
        products: [
            {
                title: 'Ekinox³ SPN DB',
                description: 'Single Pole & Neutral distribution boards for residential use.',
                details: 'Elegant design, easy installation. Available in various way configurations.',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co_in/products/distribution-boards/single-pole-and-neutral-spn-dbs/ekinoxe',
                attributes: ['SPN', 'Residential', 'Metal/Glazed Door']
            },
            {
                title: 'Ekinox³ TPN DB',
                description: 'Three Pole & Neutral DBs for commercial and industrial distribution.',
                details: 'Robust construction with ample wiring space. IP43/IP54 options.',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co_in/products/distribution-boards/three-pole-and-neutral-tpn-dbs/ekinoxe',
                attributes: ['TPN', 'Commercial', 'IP43/IP54']
            },
            {
                title: 'Ekinox³ VTPN DB',
                description: 'Vertical TPN DBs for high-density distribution requirements.',
                details: 'Vertical arrangement of MCBs for space saving and organized wiring.',
                imageId: 'prod-lv-panel',
                url: '#',
                attributes: ['Vertical TPN', 'High Density']
            },
            {
                title: 'Flexy DB',
                description: 'Flexible distribution boards for versatile mounting and configuration.',
                details: 'Adaptable design for various site conditions and requirements.',
                imageId: 'prod-lv-panel',
                url: '#',
                attributes: ['Flexible', 'Versatile']
            },
            {
                title: 'Metal/Plastic Enclosures',
                description: 'Robust enclosures for standalone modular devices.',
                details: 'Available in metal and plastic versions with different IP ratings.',
                imageId: 'prod-lv-panel',
                url: '#',
                attributes: ['Enclosure', 'IP Rated']
            }
        ]
    },
    {
        group: 'Modular Protection (MCB-DB)',
        category: 'Industrial Plugs & Sockets',
        products: [
            {
                title: 'P17 Tempra Pro',
                description: 'Industrial plugs and sockets for demanding environments.',
                details: 'IP44 (Splash-proof) and IP66/67 (Watertight) options. Amperage: 16A, 32A, 63A, 125A.',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co_in/products/plugs-sockets/p17-tempra-pro',
                attributes: ['IP44/IP66/IP67', '16A-125A', '2P+E to 3P+N+E']
            },
            {
                title: 'Hypra Series',
                description: 'Heavy-duty plugs and sockets for extreme conditions.',
                details: 'Rubber and plastic material options. Designed for high impact resistance.',
                imageId: 'prod-legrand-socket',
                url: '#',
                attributes: ['Heavy Duty', 'Rubber/Plastic']
            }
        ]
    },

    // --- Wiring Devices (Switches) ---
    {
        group: 'Wiring Devices (Switches)',
        category: 'Eco / Economy',
        products: [
            {
                title: 'Allzy (Matte / All-rounder)',
                description: 'Versatile switches with a modern matte finish.',
                details: 'The all-rounder switch range. Available in White and Matt Black.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co_in/products/wiring-accessories/allzy',
                attributes: ['Matte Finish', 'Economy', 'White/Black']
            },
            {
                title: 'Britzy (Glossy / Budget)',
                description: 'Glossy finish switches offering value and reliability.',
                details: 'The "No Problem Switch". Simple, durable, and budget-friendly.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co_in/products/wiring-accessories/britzy',
                attributes: ['Glossy', 'Budget', 'Reliable']
            }
        ]
    },
    {
        group: 'Wiring Devices (Switches)',
        category: 'Mid-Segment',
        products: [
            {
                title: 'Lyncus (Curved / Sleek)',
                description: 'Sleek switches with a distinct curved design.',
                details: 'Minimalist and beveled design. Available in White and Chic Grey.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co_in/products/wiring-accessories/lyncus',
                attributes: ['Curved', 'Sleek', 'White/Grey']
            },
            {
                title: 'Mylinc (Standard Modular)',
                description: 'Smart modular switches with screw-less finish.',
                details: 'Alignment perfection and safety. A standard for modern homes.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co_in/products/wiring-accessories/mylinc',
                attributes: ['Modular', 'Screw-less', 'Standard']
            }
        ]
    },
    {
        group: 'Wiring Devices (Switches)',
        category: 'High-End / Premium',
        products: [
            {
                title: 'Arteor (Luxury / Materials)',
                description: 'Luxury switches with premium materials and finishes.',
                details: 'Available in wood, leather, mirror, and metal finishes. Round and square shapes.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co_in/products/wiring-accessories/arteor',
                attributes: ['Luxury', 'Premium Materials', 'Round/Square']
            },
            {
                title: 'Myrius NextGen (Patterned)',
                description: 'Designer switches with unique patterns and motifs.',
                details: 'IMD technology for long-lasting patterns. Anti-bacterial options available.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co_in/products/wiring-accessories/myrius',
                attributes: ['Patterned', 'Motifs', 'Anti-bacterial']
            }
        ]
    },
    {
        group: 'Wiring Devices (Switches)',
        category: 'IoT / Smart Home',
        products: [
            {
                title: 'Living Now (Full Touch / Netatmo)',
                description: 'Revolutionary full-touch switches with smart connectivity.',
                details: 'Connected functions for light, shutter, and power control. Works with Netatmo.',
                imageId: 'prod-legrand-switch',
                url: '#',
                attributes: ['Full Touch', 'IoT', 'Netatmo', 'Smart Home']
            }
        ]
    },

    // --- BBT (Busbar Trunking Systems) ---
    {
        group: 'Industry (Power Distribution)',
        category: 'Zucchini SCP (Super Compact)',
        products: [
            {
                title: 'Zucchini SCP',
                description: 'Super Compact busbar for high power distribution.',
                details: 'Sandwich Construction, 630A-6300A, Horizontal Run. Ideal for industrial power distribution.',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co_in/products/busbar-trunking-system/zucchini',
                attributes: ['Sandwich Construction', '630A-6300A', 'Horizontal Run']
            }
        ]
    },
    {
        group: 'Industry (Power Distribution)',
        category: 'Zucchini XCP (High Performance)',
        products: [
            {
                title: 'Zucchini XCP',
                description: 'High performance busbar for heavy industry applications.',
                details: 'Fire Resistant (IEC 60331), IP65 protection. Designed for demanding environments.',
                imageId: 'cat-busbar',
                url: '#',
                attributes: ['Heavy Industry', 'Fire Resistant', 'IP65']
            }
        ]
    },
    {
        group: 'Industry (Power Distribution)',
        category: 'Zucchini MS (Medium Power)',
        products: [
            {
                title: 'Zucchini MS',
                description: 'Medium power busbar for decentralized distribution.',
                details: 'Rating: 63A-160A. Flexible solution for medium power requirements.',
                imageId: 'cat-busbar',
                url: '#',
                attributes: ['63A-160A', 'Decentralized']
            }
        ]
    },
    {
        group: 'Building (Rising Mains)',
        category: 'Zucchini MR (Medium Rating)',
        products: [
            {
                title: 'Zucchini MR',
                description: 'Vertical riser specific busbar with tap-offs.',
                details: 'Rating: 160A-1000A. Perfect for rising mains in commercial buildings.',
                imageId: 'cat-busbar',
                url: '#',
                attributes: ['160A-1000A', 'Vertical Riser', 'Tap-offs']
            }
        ]
    },
    {
        group: 'Lighting Distribution',
        category: 'LB Plus',
        products: [
            {
                title: 'LB Plus',
                description: 'Busbar system for lighting distribution with plug-in tap-offs.',
                details: 'Rating: 25A-63A. Efficient power distribution for lighting systems.',
                imageId: 'cat-busbar',
                url: '#',
                attributes: ['25A-63A', 'Lighting', 'Plug-in Tap-offs']
            }
        ]
    },
    {
        group: 'Transformers',
        category: 'Cast Resin Transformers',
        products: [
            {
                title: 'Green T.HE Transformers',
                description: 'High efficiency cast resin transformers.',
                details: 'Rating: 160kVA - 16MVA. Eco-friendly and reliable power transformation.',
                imageId: 'cat-switchgear',
                url: '#',
                attributes: ['160kVA - 16MVA', 'Cast Resin', 'Green T.HE']
            }
        ]
    },
    {
        group: 'TTA Panels',
        category: 'TTA Panels',
        products: [
            {
                title: 'XL³ Low Voltage Panels',
                description: 'Type Tested Assemblies (TTA) for safe and reliable power distribution.',
                details: 'Fully tested switchboard systems ensuring maximum safety and continuity of service. Compliant with IEC 61439 standards.',
                imageId: 'prod-lv-panel',
                url: '#',
                attributes: ['TTA', 'IEC 61439', 'Safe']
            }
        ]
    }
];

type Product = typeof productCategories[0]['products'][0] & { category: string, attributes?: string[] };

const whyLegrand = [
    'Global specialist in electrical and digital building infrastructures.',
    'Pioneer of Miniature Circuit Breakers in India.',
    'Solutions that offer superior technology and high aesthetic value.',
    'Wide range of products for residential, commercial, and industrial sectors.',
];

export function LegrandPage({ brand }: { brand: Brand }) {
    const heroImage = PlaceHolderImages.find(p => p.id === 'legrand-hero');
    const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
    const [activeSection, setActiveSection] = React.useState<'Components' | 'BBT' | 'TTA Panels'>('Components');

    const handleEnquire = () => {
        window.location.href = '/contact';
    };

    const handleViewDetails = (product: Product) => {
        setSelectedProduct(product);
    };

    const getProductImage = (product: Product) => {
        return PlaceHolderImages.find(p => p.id === product.imageId)?.imageUrl || '/placeholder.svg'
    }

    const filteredCategories = productCategories.filter(category => {
        const bbtGroups = ['Industry (Power Distribution)', 'Building (Rising Mains)', 'Lighting Distribution', 'Transformers'];
        const ttaGroups = ['TTA Panels'];

        if (activeSection === 'BBT') return bbtGroups.includes(category.group || '');
        if (activeSection === 'TTA Panels') return ttaGroups.includes(category.group || '');

        // Default to Components
        return !bbtGroups.includes(category.group || '') && !ttaGroups.includes(category.group || '');
    });

    return (
        <BrandPageLayout
            brand={{
                name: "Excellence in Innovation, Aesthetics, and Engineering",
                logo: brand.logo,
                description: "Global specialist in electrical and digital building infrastructures, offering innovative, high-quality solutions for all sectors."
            }}
            heroImage={heroImage}
        >
            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        The Legrand Experience Center
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-8">
                        We invite you to visit our Legrand Experience Center to witness the best of Legrand. This helps you choose the right products by experiencing them firsthand, appreciating the innovation, aesthetics, and engineering that define the Legrand Group.
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        <Link href="/contact">Contact Us to Visit</Link>
                    </Button>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-background sticky top-[64px] z-30 border-b backdrop-blur-md bg-background/80">
                <div className="container mx-auto px-4 flex justify-center gap-4">
                    <div className="flex p-1 bg-secondary/30 rounded-xl">
                        {(['Components', 'BBT', 'TTA Panels'] as const).map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeSection === section ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {activeSection === section && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{section}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Portfolio */}
            <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeSection === 'Components' || activeSection === 'BBT' ? (
                            // Grouped rendering for Components and BBT
                            Object.entries(filteredCategories.reduce((acc, category) => {
                                const group = category.group || 'Other';
                                if (!acc[group]) acc[group] = [];
                                acc[group].push(category);
                                return acc;
                            }, {} as Record<string, typeof filteredCategories>)).map(([group, categories], groupIndex) => (
                                <div key={group} className="mb-16">
                                    <div className="container mx-auto px-4 mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-primary/80 border-l-4 border-primary pl-4">{group}</h2>
                                    </div>
                                    {categories.map((category, categoryIndex) => (
                                        <section key={category.category} className={`py-12 ${categoryIndex % 2 !== 0 ? 'bg-secondary/20' : 'bg-background'}`}>
                                            <div className="container mx-auto px-4">
                                                <div className="text-center mb-10">
                                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight inline-block pb-2">{category.category}</h3>
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
                                </div>
                            ))
                        ) : (
                            // Standard rendering for BBT and TTA Panels
                            filteredCategories.map((category, categoryIndex) => (
                                <section key={category.category} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-secondary/30' : 'bg-background'}`}>
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
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>

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

                                {selectedProduct.attributes && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProduct.attributes.map((attr, i) => (
                                            <Badge key={i} variant="outline" className="text-xs">{attr}</Badge>
                                        ))}
                                    </div>
                                )}

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


            {/* Why Choose Legrand */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Why Choose Legrand?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            For decades, Legrand has been at the forefront of the electrical industry. Their enriched understanding of customer needs helps them design products that deliver superior technology and meet high aesthetic standards.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 text-left pt-4">
                            {whyLegrand.map((item, index) => (
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
                        Get a Quote for Legrand Products
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80 mb-10">
                        As authorized partners, we provide competitive pricing and expert support for the entire Legrand portfolio. Contact us for your project requirements.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        <Link href="/quote?product=legrand">Request a Quote</Link>
                    </Button>
                </div>
            </section>
        </BrandPageLayout>
    );
}
