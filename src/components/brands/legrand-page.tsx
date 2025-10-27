'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const productCategories = [
    {
        category: 'Power',
        products: [
            {
                title: 'DMX³ ACBs (Air Circuit Breaker)',
                description: 'Optimized performance from 630A to 6300A with microprocessor-based protection.',
                imageId: 'prod-circuit-breaker'
            },
            {
                title: 'DPX³ & DRX MCCBs (Moulded Case Circuit Breakers)',
                description: 'Comprehensive range from 16A to 1250A with various breaking capacities and protection units.',
                imageId: 'prod-circuit-breaker'
            },
            {
                title: 'CTX³ Contactors and Mini Contactors',
                description: 'From 6A to 800A with integrated auxiliary contacts for reliable switching.',
                imageId: 'cat-switchgear'
            },
            {
                title: 'RTX³ Thermal Overload Relays',
                description: 'Thermal protection from 0.1A to 800A with integrated auxiliary contacts.',
                imageId: 'cat-switchgear'
            },
            {
                title: 'Alpican Capacitors',
                description: 'Compact, self-healing resin and gas-filled capacitors for power factor correction.',
                imageId: 'cat-switchgear'
            },
            {
                title: 'PMX Meters',
                description: 'Digital multifunction meters to track, manage, and enhance energy efficiency.',
                imageId: 'cat-meters'
            },
            {
                title: 'Zucchini™ Busbar Trunking System',
                description: 'Advanced solution for distributing power from 25A to 5000A in any building.',
                imageId: 'cat-busbar'
            }
        ]
    },
    {
        category: 'Protection',
        products: [
            {
                title: 'DX³ MCBs (Miniature Circuit Breakers)',
                description: '0.5A to 125A capacities with color-coded indication and biconnected terminals.',
                imageId: 'prod-circuit-breaker'
            },
            {
                title: 'DX³ RCCBs (Residual Current Circuit Breakers)',
                description: 'Ensures protection against earth leakage with various sensitivities.',
                imageId: 'prod-circuit-breaker'
            },
            {
                title: 'RCBO & RCD Blocks',
                description: 'Combined MCB/RCCB for comprehensive protection against overload, short-circuits, and earth leakage.',
                imageId: 'prod-circuit-breaker'
            },
            {
                title: 'Time Switches',
                description: 'Digital and analog time switches for precise, programmable control of circuits.',
                imageId: 'cat-switchgear'
            },
            {
                title: 'Surge Protection Devices (SPDs)',
                description: 'Protection for main distribution boards against lightning and overvoltage.',
                imageId: 'cat-switchgear'
            }
        ]
    },
    {
        category: 'Distribution Boards',
        products: [
            {
                title: 'Ekinoxe³ SPN Distribution Boards',
                description: 'Elegant and safe DBs for flush or surface mounting, from 4 to 20 ways.',
                imageId: 'prod-lv-panel'
            },
            {
                title: 'Ekinoxe³ TPN & Phase Selector DBs',
                description: 'Fully insulated busbars and reversible doors for industrial and commercial use.',
                imageId: 'prod-lv-panel'
            },
            {
                title: 'Ekinox Metra Plug & Socket DBs',
                description: 'Suitable for dedicated protection of appliances like ACs and geysers.',
                imageId: 'prod-lv-panel'
            }
        ]
    },
    {
        category: 'Wiring Accessories',
        products: [
            {
                title: 'Arteor™',
                description: 'A versatile range with minimalist design, inspired by modern technology.',
                imageId: 'prod-legrand-switch'
            },
            {
                title: 'Myrius™ & Myrius Nextgen',
                description: 'Simple, sleek, and smooth design in classic black and white, now with anti-bacterial properties.',
                imageId: 'prod-legrand-switch'
            },
            {
                title: 'Mylinc™, Lyncus™, Allzy™, Britzy™',
                description: 'A wide collection of switches offering smart design, safety, and reliability for every need.',
                imageId: 'prod-legrand-switch'
            }
        ]
    },
    {
        category: 'Cable Management',
        products: [
            {
                title: 'CABLOFIL® Wire Mesh Cable Trays',
                description: 'Create neat, orderly, and easy-to-install pathways for cables.',
                imageId: 'cat-cables'
            },
            {
                title: 'Pop-up & Floor Boxes',
                description: 'Discreet and elegant solutions for providing power and data access from the floor.',
                imageId: 'prod-legrand-socket'
            },
            {
                title: 'Raceways & DLP Trunking Systems',
                description: 'uPVC and Aluminium trunking systems for flexible cable routing.',
                imageId: 'cat-busbar'
            },
            {
                title: 'P-17 Tempra Plugs & Sockets',
                description: 'Industrial plugs and sockets with IP44 and IP66/67 protection.',
                imageId: 'prod-legrand-socket'
            }
        ]
    }
];

const whyLegrand = [
  'Global specialist in electrical and digital building infrastructures.',
  'Pioneer of Miniature Circuit Breakers in India.',
  'Solutions that offer superior technology and high aesthetic value.',
  'Wide range of products for residential, commercial, and industrial sectors.',
];

export function LegrandPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'legrand-hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Legrand smart home solutions"
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
            Excellence in Innovation, Aesthetics, and Engineering
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Global specialist in electrical and digital building infrastructures, offering innovative, high-quality solutions for all sectors.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The Legrand Experience Center
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We invite you to visit our Legrand Experience Center to witness the best of Legrand. This helps you choose the right products by experiencing them firsthand, appreciating the innovation, aesthetics, and engineering that define the Legrand Group.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us to Visit</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Product Portfolio */}
      {productCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/20' : 'bg-background'}`}>
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{category.category}</h2>
            </div>
            <div className="space-y-12">
                    {category.products.map((product, productIndex) => {
                        const image = PlaceHolderImages.find(p => p.id === product.imageId);
                        const isReversed = productIndex % 2 !== 0;
                        return (
                            <motion.div 
                            key={productIndex} 
                            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card p-8 rounded-lg shadow-sm border`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className={`space-y-4 ${isReversed ? 'md:order-2' : ''}`}>
                                    <h3 className="text-2xl font-bold">{product.title}</h3>
                                    <p className="text-muted-foreground">{product.description}</p>
                                    <Button asChild>
                                        <Link href="/contact">Enquire Now</Link>
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


      {/* Why Choose Legrand */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Why Choose Legrand?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    For decades, Legrand has been at the forefront of the electrical industry. Their enriched understanding of customer needs helps them design products that deliver superior technology and meet high aesthetic standards.
                </p>
                <ul className="space-y-3 pt-2 inline-grid sm:grid-cols-2 gap-x-12 gap-y-3 text-left">
                {whyLegrand.map((item, index) => (
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
                    Get a Quote for Legrand Products
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    As authorized partners, we provide competitive pricing and expert support for the entire Legrand portfolio. Contact us for your project requirements.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/quote?product=legrand">Request a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>

    </div>
  );
}
