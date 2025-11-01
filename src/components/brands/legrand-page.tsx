'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const productCategories = [
    {
        category: 'Power',
        products: [
            {
                title: 'DMX³ ACBs (Air Circuit Breaker)',
                description: 'Optimized performance from 630A to 6300A with microprocessor-based protection.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/power/air-circuit-breakers-acb/dmx'
            },
            {
                title: 'DPX³ & DRX MCCBs (Moulded Case Circuit Breakers)',
                description: 'Comprehensive range from 16A to 1250A with various breaking capacities and protection units.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/power/moulded-case-circuit-breakers-mccb/dpx'
            },
            {
                title: 'CTX³ Contactors and Mini Contactors',
                description: 'From 6A to 800A with integrated auxiliary contacts for reliable switching.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/power/contactors/ctx'
            },
            {
                title: 'RTX³ Thermal Overload Relays',
                description: 'Thermal protection from 0.1A to 800A with integrated auxiliary contacts.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/power/thermal-overload-relays/rtx'
            },
            {
                title: 'Alpican Capacitors',
                description: 'Compact, self-healing resin and gas-filled capacitors for power factor correction.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/power/capacitors/alpican'
            },
            {
                title: 'PMX Meters',
                description: 'Digital multifunction meters to track, manage, and enhance energy efficiency.',
                imageId: 'cat-meters',
                url: 'https://www.legrand.co.in/products/power/measurement-monitoring-and-supervision/pmx-meters'
            },
            {
                title: 'Zucchini™ Busbar Trunking System',
                description: 'Advanced solution for distributing power from 25A to 5000A in any building.',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co.in/products/busbar-trunking-system/zucchini'
            }
        ]
    },
    {
        category: 'Protection',
        products: [
            {
                title: 'DX³ MCBs (Miniature Circuit Breakers)',
                description: '0.5A to 125A capacities with color-coded indication and biconnected terminals.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/protection/miniature-circuit-breakers-mcb/dx'
            },
            {
                title: 'DX³ RCCBs (Residual Current Circuit Breakers)',
                description: 'Ensures protection against earth leakage with various sensitivities.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/protection/residual-current-circuit-breakers-rccb/dx'
            },
            {
                title: 'RCBO & RCD Blocks',
                description: 'Combined MCB/RCCB for comprehensive protection against overload, short-circuits, and earth leakage.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/protection/rcbo-and-rcd-add-on-blocks/rcbo'
            },
            {
                title: 'Time Switches',
                description: 'Digital and analog time switches for precise, programmable control of circuits.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/protection/time-switches'
            },
            {
                title: 'Surge Protection Devices (SPDs)',
                description: 'Protection for main distribution boards against lightning and overvoltage.',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/protection/surge-protection-devices-spd'
            }
        ]
    },
    {
        category: 'Distribution Boards',
        products: [
            {
                title: 'Ekinoxe³ SPN Distribution Boards',
                description: 'Elegant and safe DBs for flush or surface mounting, from 4 to 20 ways.',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co.in/products/distribution-boards/single-pole-and-neutral-spn-dbs/ekinoxe'
            },
            {
                title: 'Ekinoxe³ TPN & Phase Selector DBs',
                description: 'Fully insulated busbars and reversible doors for industrial and commercial use.',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co.in/products/distribution-boards/three-pole-and-neutral-tpn-dbs/ekinoxe'
            },
            {
                title: 'Ekinox Metra Plug & Socket DBs',
                description: 'Suitable for dedicated protection of appliances like ACs and geysers.',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co.in/products/distribution-boards/plug-socket-dbs/ekinox-metra'
            }
        ]
    },
    {
        category: 'Wiring Accessories',
        products: [
            {
                title: 'Arteor™',
                description: 'A versatile range with minimalist design, inspired by modern technology. Available in round & square shapes with a rich choice of cover plates.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/arteor'
            },
            {
                title: 'Myrius Regular™',
                description: 'Simple, sleek, and smooth, Myrius offers a classic black and white look with anti-bacterial properties. Ideal for homes, offices, and healthcare environments.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/myrius-regular'
            },
            {
                title: 'Myrius™',
                description: 'Inspired by you, crafted by us. The Myrius range combines technology and design aesthetics with myriad patterns, including the Motifs series of plates and switches.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/myrius'
            },
            {
                title: 'Mylinc™',
                description: 'Reveals smartness in modular switches with a screw-less finish and alignment perfection for ultimate convenience.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/mylinc'
            },
            {
                title: 'Lyncus™',
                description: 'Modern, minimalist, and beveled design that suits any requirement from residential to commercial buildings.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/lyncus'
            },
            {
                title: 'Allzy™',
                description: 'The all-rounder switch with a wide range of ergonomics and finishes to satisfy the most demanding customers.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/allzy'
            },
            {
                title: 'Britzy™',
                description: 'The "No Problem Switch" that is versatile and suits any requirement in terms of design and function.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/britzy'
            }
        ]
    },
    {
        category: 'Cable Management',
        products: [
            {
                title: 'CABLOFIL® Wire Mesh Cable Trays',
                description: 'Increase contractor productivity and reduce installation costs. Cablofil creates neat and orderly pathways, ideal for open installations. Available in various materials and sizes.',
                imageId: 'cat-cables',
                url: 'https://www.legrand.co.in/products/cable-management/wire-mesh-cable-trays/cablofil'
            },
            {
                title: 'Pop-Up Boxes',
                description: 'Equipped with a "push and slide" locking system to avoid accidental opening. Designed to be equipped with Arteor/Myrius socket outlets, available in multiple configurations and elegant finishes.',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co.in/products/cable-management/pop-up-boxes'
            },
            {
                title: 'Floor Boxes',
                description: 'Durable solutions for raised floors, screed, tiles, and marbles. Available in various sizes with options for heavy-duty applications and accessories for fitting wiring accessories.',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co.in/products/cable-management/floor-boxes'
            },
            {
                title: 'Raceways and Junction Boxes',
                description: 'PVC and Galvanized sheet raceways confirming to EN 50 085-2-2, compatible with Cat.6 cabling systems. Supplied in various sizes with matching junction boxes.',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co.in/products/cable-management/raceways-and-junction-boxes'
            },
            {
                title: 'DLP U-PVC & Aluminium Trunking Systems',
                description: 'Flexible trunking systems with base, covers, partitions, and finishing accessories. Suitable for mounting Arteor wiring accessories in a variety of sizes.',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co.in/products/cable-management/trunking-and-branching/dlp-u-pvc-trunking'
            }
        ]
    },
     {
        category: 'Plugs & Socket',
        products: [
            {
                title: 'P-17 Tempra Plug, Sockets',
                description: 'Built as per IEC 61439-3, these include surface mounting sockets, panel mounted angle sockets, mobile sockets, and straight plugs. Available from 16A to 125A in various frame sizes with IP44 and IP66/67 protection.',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co.in/products/plugs-sockets/p17-tempra-pro'
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
            <div className={cn(
                "grid md:grid-cols-2 gap-8",
                category.products.length % 2 !== 0 && "md:[&>*:last-child]:col-span-2 md:[&>*:last-child]:justify-self-center md:[&>*:last-child]:w-1/2"
            )}>
                {category.products.map((product, productIndex) => {
                    const image = PlaceHolderImages.find(p => p.id === product.imageId);
                    const isLeftCard = productIndex % 2 === 0;

                    return (
                        <motion.div 
                        key={productIndex} 
                        className="bg-card p-6 rounded-lg shadow-sm border flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="grid md:grid-cols-2 gap-6 items-center flex-grow">
                                <div className={`text-center ${isLeftCard ? 'md:order-2' : 'md:order-1'}`}>
                                    {image && (
                                        <div className="bg-white p-2 rounded-lg shadow-md inline-block">
                                            <div className="relative h-40 w-40">
                                                <Image 
                                                    src={image.imageUrl}
                                                    alt={product.title}
                                                    fill
                                                    className="object-contain"
                                                    sizes="160px"
                                                    data-ai-hint={image.imageHint}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className={`space-y-3 ${isLeftCard ? 'md:order-1' : 'md:order-2'}`}>
                                    <h3 className="text-lg font-bold">{product.title}</h3>
                                    <p className="text-muted-foreground text-sm flex-grow">{product.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t flex items-center justify-center gap-2">
                                <Button asChild size="sm">
                                    <Link href="/contact">Enquire Now</Link>
                                </Button>
                                <Button asChild size="sm" variant="outline">
                                    <Link href={product.url} target="_blank" rel="noopener noreferrer">Know More</Link>
                                </Button>
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

    