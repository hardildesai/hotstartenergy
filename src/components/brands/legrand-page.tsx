
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co.in/products/power/air-circuit-breakers-acb/dmx',
                attributes: ['Frame Size', 'Poles: 3P/4P', '50-100kA', 'Fixed/Draw-out']
            },
            {
                title: 'DMX SP (Standard)',
                description: 'Standard range ACBs optimized for essential protection needs.',
                details: 'Reliable protection for standard applications. Available in various frame sizes and breaking capacities.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['Standard Range', 'Reliable Protection']
            },
            {
                title: 'ACB Accessories',
                description: 'Comprehensive range of accessories including coils and motors.',
                details: 'Enhance ACB functionality with shunt trips, closing coils, undervoltage releases, and motor operators.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co.in/products/power/moulded-case-circuit-breakers-mccb/dpx',
                attributes: ['16-1600A', 'Integrated Metering', 'Electronic Trip Unit']
            },
            {
                title: 'DPX³ Thermal-Mag',
                description: 'Robust thermal-magnetic MCCBs for reliable circuit protection.',
                details: 'Adjustable thermal and magnetic settings. Suitable for distribution and motor protection.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['Thermal-Magnetic', 'Adjustable Settings']
            },
            {
                title: 'DRX (Fixed/Standard)',
                description: 'Compact and economical MCCBs for standard applications.',
                details: 'Fixed thermal and magnetic settings. Ideal for building and standard industrial applications.',
                imageId: 'legrand-drx-new',
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
                imageId: 'legrand-ctx3-new',
                url: 'https://www.legrand.co_in/products/power/contactors/ctx',
                attributes: ['AC-3 Rating', 'Various Coil Voltages', '3P/4P']
            },
            {
                title: 'RTX³ Overload Relays',
                description: 'Thermal overload relays for precise motor protection.',
                details: 'Direct mounting on CTX3 contactors. Class 10A tripping class.',
                imageId: 'legrand-rtx3-new',
                url: 'https://www.legrand.co_in/products/power/thermal-overload-relays/rtx',
                attributes: ['Thermal Protection', 'Direct Mounting']
            },
            {
                title: 'MPX³ MPCB',
                description: 'Motor Protection Circuit Breakers for switching and protection.',
                details: 'Combines motor control, disconnect, and overload/short-circuit protection in one device.',
                imageId: 'legrand-mpx3-new',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/power/measurement-monitoring-and-supervision/pmx-meters',
                attributes: ['MFM', 'VAF', 'RS485']
            },
            {
                title: 'ALPX Capacitors',
                description: 'Cylindrical and box-type capacitors for power factor correction.',
                details: 'High-quality capacitors for improving system efficiency and reducing energy costs.',
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/power/capacitors/alpican',
                attributes: ['Cylindrical/Box', 'PFC', 'Various KVAR']
            },
            {
                title: 'APFC Controllers',
                description: 'Automatic Power Factor Correction controllers.',
                details: 'Intelligent control of capacitor banks to maintain desired power factor.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/protection/miniature-circuit-breakers-mcb/dx',
                attributes: ['10kA+', 'B/C/D Curves', '1P-4P']
            },
            {
                title: 'MCB RX³ (Resi 6kA)',
                description: 'Reliable MCBs designed specifically for residential protection.',
                details: '6kA breaking capacity. C curve protection for household circuits.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['Residential', '6kA', 'C Curve']
            },
            {
                title: 'RCCB / ELCB',
                description: 'Residual Current Circuit Breakers for earth leakage protection.',
                details: 'Sensitivity: 30mA, 100mA, 300mA. Protects against electric shock and fire hazards.',
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/protection/residual-current-circuit-breakers-rccb/dx',
                attributes: ['30mA/100mA/300mA', 'Earth Leakage']
            },
            {
                title: 'RCBO (Combo)',
                description: 'Combined MCB and RCCB for comprehensive circuit protection.',
                details: 'Overload, short-circuit, and earth leakage protection in a single device.',
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/protection/rcbo-and-rcd-add-on-blocks/rcbo',
                attributes: ['Combo Protection', 'Compact']
            },
            {
                title: 'Isolators',
                description: 'Switch disconnectors for safe circuit isolation.',
                details: 'Used for isolating circuits during maintenance. Available in various pole configurations.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/distribution-boards/single-pole-and-neutral-spn-dbs/ekinoxe',
                attributes: ['SPN', 'Residential', 'Metal/Glazed Door']
            },
            {
                title: 'Ekinox³ TPN DB',
                description: 'Three Pole & Neutral DBs for commercial and industrial distribution.',
                details: 'Robust construction with ample wiring space. IP43/IP54 options.',
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/distribution-boards/three-pole-and-neutral-tpn-dbs/ekinoxe',
                attributes: ['TPN', 'Commercial', 'IP43/IP54']
            },
            {
                title: 'Ekinox³ VTPN DB',
                description: 'Vertical TPN DBs for high-density distribution requirements.',
                details: 'Vertical arrangement of MCBs for space saving and organized wiring.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['Vertical TPN', 'High Density']
            },
            {
                title: 'Flexy DB',
                description: 'Flexible distribution boards for versatile mounting and configuration.',
                details: 'Adaptable design for various site conditions and requirements.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['Flexible', 'Versatile']
            },
            {
                title: 'Metal/Plastic Enclosures',
                description: 'Robust enclosures for standalone modular devices.',
                details: 'Available in metal and plastic versions with different IP ratings.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/plugs-sockets/p17-tempra-pro',
                attributes: ['IP44/IP66/IP67', '16A-125A', '2P+E to 3P+N+E']
            },
            {
                title: 'Hypra Series',
                description: 'Heavy-duty plugs and sockets for extreme conditions.',
                details: 'Rubber and plastic material options. Designed for high impact resistance.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/wiring-accessories/allzy',
                attributes: ['Matte Finish', 'Economy', 'White/Black']
            },
            {
                title: 'Britzy (Glossy / Budget)',
                description: 'Glossy finish switches offering value and reliability.',
                details: 'The "No Problem Switch". Simple, durable, and budget-friendly.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/wiring-accessories/lyncus',
                attributes: ['Curved', 'Sleek', 'White/Grey']
            },
            {
                title: 'Mylinc (Standard Modular)',
                description: 'Smart modular switches with screw-less finish.',
                details: 'Alignment perfection and safety. A standard for modern homes.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: 'https://www.legrand.co_in/products/wiring-accessories/arteor',
                attributes: ['Luxury', 'Premium Materials', 'Round/Square']
            },
            {
                title: 'Myrius NextGen (Patterned)',
                description: 'Designer switches with unique patterns and motifs.',
                details: 'IMD technology for long-lasting patterns. Anti-bacterial options available.',
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
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
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['160kVA - 16MVA', 'Cast Resin', 'Green T.HE']
            }
        ]
    },
    // --- Power Protection & Switching ---
    {
        group: 'Power Protection & Switching',
        category: 'Air Circuit Breakers (ACB)',
        products: [
            {
                title: 'DMX3 ACB',
                description: 'Air Circuit Breakers from 630A to 6300A.',
                details: 'Rating: 630 Amp to 6300 Amp (50/65/100 KA). 3P & 4P. Microprocessor LSI / LSIG. Available in Fixed / Draw out versions.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['630A-6300A', '50/65/100 KA', 'Microprocessor LSI/LSIG']
            },
            {
                title: 'DMX-SP ACB',
                description: 'Optimized Air Circuit Breakers up to 2500A.',
                details: 'Rating: 630 Amp to 2500 Amp (50 KA). 3P & 4P. Microprocessor LSI / LSIG. Available in Fixed / Draw out versions.',
                imageId: 'legrand-placeholder',
                url: '#',
                attributes: ['630A-2500A', '50 KA', 'Microprocessor LSI/LSIG']
            }
        ]
    },
    {
        group: 'Power Protection & Switching',
        category: 'Molded Case Circuit Breakers (MCCB)',
        products: [
            {
                title: 'DPX3 MCCB',
                description: 'High performance MCCBs for power distribution.',
                details: 'Rating: 16 Amp to 1250 Amp (16 to 100 KA). 3P & 4P. Thermal Magnetic LSI/ LSIG protection.',
                imageId: 'legrand-placeholder', // Using DMX-SP image as it contains DPX3 too or placeholder
                url: '#',
                attributes: ['16A-1250A', '16-100 KA', 'Thermal Magnetic']
            },
            {
                title: 'DPX3 Electronic MCCB',
                description: 'Electronic release MCCBs for precise protection.',
                details: 'Rating: 250 Amp to 1600 Amp (36 to 100 KA). 3P & 4P. Microprocessor LSI/ LSIG protection.',
                imageId: 'legrand-placeholder', // Using DRX image which has DPX3
                url: '#',
                attributes: ['250A-1600A', '36-100 KA', 'Microprocessor LSI/LSIG']
            },
            {
                title: 'DRX MCCB',
                description: 'Robust MCCBs for standard applications.',
                details: 'Rating: 16 Amp to 630 Amp (10 to 50 KA). 3P & 4P. Thermal Magnetic & Microprocessor LSI / LSIG.',
                imageId: 'legrand-drx-new',
                url: '#',
                attributes: ['16A-630A', '10-50 KA', 'Thermal Magnetic']
            }
        ]
    },
    {
        group: 'Power Protection & Switching',
        category: 'Contactors & Relays',
        products: [
            {
                title: 'CTX3 Contactor',
                description: 'Power contactors for motor control and switching.',
                details: 'Type-AC1 & AC3. 3-Pole: 9A to 800A. 4-Pole: 40A to 900A.',
                imageId: 'legrand-ctx3-new',
                url: '#',
                attributes: ['9A-800A', 'AC1 & AC3', '3P & 4P']
            },
            {
                title: 'RTX3 Overload Relay',
                description: 'Thermal overload relays for motor protection.',
                details: 'OLR - 3/4 Pole. Suitable for overload thermal protection.',
                imageId: 'legrand-rtx3-new',
                url: '#',
                attributes: ['Thermal Overload', '3/4 Pole', 'Motor Protection']
            },
            {
                title: 'MPX3 MPCB',
                description: 'Motor Protection Circuit Breakers.',
                details: 'Rating: 0.02 to 45 KW @415V. 0.1A to 100A. Breaking capacity: 15/20/50/100KA.',
                imageId: 'legrand-mpx3-new',
                url: '#',
                attributes: ['0.1A-100A', '15-100 KA', 'Motor Protection']
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
                imageId: 'legrand-placeholder',
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

    React.useEffect(() => {
        // Handle initial hash scroll with offset
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const offset = 180; // Adjust for sticky header
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth'
                    });
                }, 100); // Small delay to ensure rendering
            }
        }

        const handleScroll = () => {
            const sections = ['components', 'bbt', 'tta-panels'];
            // Trigger point: when the section hits the top third of the viewport
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            const sectionNameMap: Record<string, 'Components' | 'BBT' | 'TTA Panels'> = {
                'components': 'Components',
                'bbt': 'BBT',
                'tta-panels': 'TTA Panels'
            };

            let currentSection: 'Components' | 'BBT' | 'TTA Panels' = 'Components';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    const absoluteTop = top + window.scrollY;

                    if (scrollPosition >= absoluteTop) {
                        currentSection = sectionNameMap[section];
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getProductImage = (product: Product) => {
        return PlaceHolderImages.find(p => p.id === product.imageId)?.imageUrl || '/placeholder.svg'
    }



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

            {/* Wrapper for sticky context */}
            <div className="relative">
                {/* Navigation Bar */}
                <section className="pt-28 pb-4 sticky top-0 z-30 border-b backdrop-blur-md bg-background/80">
                    <div className="container mx-auto px-4 flex justify-center gap-4">
                        <div className="flex p-1 bg-secondary/30 rounded-xl">
                            {(['Components', 'BBT', 'TTA Panels'] as const).map((section) => (
                                <button
                                    key={section}
                                    onClick={() => {
                                        const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
                                        if (element) {
                                            const offset = 180; // Adjust for sticky header
                                            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                            window.scrollTo({
                                                top: elementPosition - offset,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
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

                {/* Components Section */}
                <div id="components" className="scroll-mt-48">
                    {
                        Object.entries(productCategories.filter(c => !['Industry (Power Distribution)', 'Building (Rising Mains)', 'Lighting Distribution', 'Transformers', 'TTA Panels'].includes(c.group || '')).reduce((acc, category) => {
                            const group = category.group || 'Other';
                            if (!acc[group]) acc[group] = [];
                            acc[group].push(category);
                            return acc;
                        }, {} as Record<string, typeof productCategories>)).map(([group, categories], groupIndex) => (
                            <div key={group} className="mb-16 pt-16">
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
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
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
                                                                imageFit="contain"
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
                    }
                </div>

                {/* BBT Section */}
                <div id="bbt" className="scroll-mt-48">
                    {
                        Object.entries(productCategories.filter(c => ['Industry (Power Distribution)', 'Building (Rising Mains)', 'Lighting Distribution', 'Transformers'].includes(c.group || '')).reduce((acc, category) => {
                            const group = category.group || 'Other';
                            if (!acc[group]) acc[group] = [];
                            acc[group].push(category);
                            return acc;
                        }, {} as Record<string, typeof productCategories>)).map(([group, categories], groupIndex) => (
                            <div key={group} className="mb-16 pt-16">
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
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
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
                                                                imageFit="contain"
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
                    }
                </div>

                {/* TTA Panels Section */}
                <div id="tta-panels" className="scroll-mt-48 mb-24">
                    {
                        productCategories.filter(c => c.category === 'TTA Panels').map((category, categoryIndex) => (
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
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
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
                                                        imageFit="contain"
                                                    />
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </section>
                        ))
                    }
                </div>
            </div>

            {/* Product Details Dialog */}
            {/* Product Details Dialog */}
            <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
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
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-8 flex flex-col h-full">
                                <Badge variant="secondary" className="w-fit mb-4">{selectedProduct.category}</Badge>
                                <DialogTitle className="text-2xl font-bold mb-2">{selectedProduct.title}</DialogTitle>
                                <p className="text-muted-foreground mb-6 text-sm">{selectedProduct.description}</p>

                                {selectedProduct.attributes && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProduct.attributes.map((attr, i) => (
                                            <Badge key={i} variant="outline" className="text-xs">{attr}</Badge>
                                        ))}
                                    </div>
                                )}

                                <div className="flex gap-4 mb-6">
                                    <Button asChild className="w-full">
                                        <Link href="/quote">Get Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                    </Button>
                                </div>

                                <div className="text-sm text-foreground/80 mt-4 h-40 overflow-y-auto pr-2 custom-scrollbar">
                                    <h4 className="font-semibold mb-2">Product Details</h4>
                                    {selectedProduct.details}
                                </div>
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

