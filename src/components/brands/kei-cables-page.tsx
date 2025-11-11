
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Download, Power, Shield, Zap, ExternalLink, ArrowRight } from 'lucide-react';
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

const productCategories = [
    {
        category: 'Power Cables',
        products: [
            {
                title: 'HV Power Cable',
                description: 'Built for high performance, KEI HV wire ensures safe and efficient power transmission. These cables are designed to handle high voltage with reliability, making them ideal for demanding industrial and commercial applications.',
                details: 'KEI HV power cables are manufactured using high-quality conductors and insulation to withstand high voltage stress. They are suitable for underground and overhead applications in power transmission and distribution networks. Features include low dielectric loss, high reliability, and long service life. Available in various configurations including single-core and multi-core, with aluminum or copper conductors.',
                imageId: 'kei-hv-cable',
            },
            {
                title: 'LV Power & Control Cable',
                description: 'KEI LV wire and cable are ideal for low-voltage power needs. The LV Power & Control Cable ensures efficient performance and safety, making it perfect for residential, commercial, and industrial use.',
                details: 'KEI Low Voltage (LV) cables are designed for a wide range of applications, including power distribution and control circuits. They are manufactured with high-purity copper or aluminum conductors and high-grade PVC or XLPE insulation. These cables offer excellent electrical, mechanical, and thermal properties, ensuring safe and reliable operation.',
                imageId: 'kei-lv-cable',
            },
            {
                title: 'EHV Power Cable',
                description: 'KEI EHV wire and KEI EHV cable are designed for efficient power transmission at extremely high voltages. These EHV power cables ensure superior insulation, reliability, and safety, making them ideal for large-scale industrial and infrastructure projects.',
                details: 'Extra-High Voltage (EHV) cables from KEI are engineered for bulk power transmission over long distances. They feature advanced insulation systems (like XLPE) and robust sheathing to handle voltages from 66 kV up to 400 kV. These cables are critical for national power grids and large industrial complexes, offering minimal power loss and maximum reliability.',
                imageId: 'kei-ehv-cable',
            },
        ]
    },
    {
        category: 'Building & Specialty Wires',
        products: [
            {
                title: 'Building Wires',
                description: 'KEI building wires are crafted for secure and efficient electrical connections in homes and offices. The building wires offer high durability and superior insulation, ensuring long-lasting performance and safety for everyday use.',
                details: 'KEI\'s range of building wires includes flame-retardant (FR), flame-retardant low-smoke (FRLS), and zero-halogen flame-retardant (ZHFR) options. These wires are designed for use in conduits and fixed installations, providing safety against electrical shocks and fires in residential and commercial buildings. They are flexible, easy to install, and meet all relevant national and international standards.',
                imageId: 'kei-building-wires',
            },
            {
                title: 'Flexible Single And Multi Core Wires',
                description: 'KEI flexible cable is built for versatile use in residential, commercial, and industrial setups. These flexible single and multi core wires offer excellent conductivity, durability, and ease of installation, ensuring reliable performance in various applications.',
                details: 'These versatile flexible cables are designed for applications requiring high flexibility, such as in control panels, machinery, and appliances. Available in single-core and multi-core configurations, they are made with finely stranded copper conductors and a flexible PVC sheath, making them easy to handle and install in tight spaces.',
                imageId: 'kei-flexible-wires',
            },
            {
                title: 'Fire Survival Cables',
                description: 'KEI fire survival cables are designed to maintain circuit integrity during fire emergencies. These cables ensure safety and reliability in critical applications, making them ideal for fire-prone environments in residential, commercial, and industrial setups.',
                details: 'Also known as fire-resistant cables, these are designed to continue operating for a specified period during a fire. They are essential for critical systems like fire alarms, emergency lighting, and public address systems. KEI\'s fire survival cables use special materials that form a ceramic-like insulation layer when exposed to fire, ensuring circuit integrity.',
                imageId: 'kei-fire-survival-cables',
            }
        ]
    },
    {
        category: 'Specialty Cables',
        products: [
             {
                title: 'Solar Cables',
                description: 'KEI solar cable is designed for reliable and efficient energy transmission in solar power systems. These Solar Cables ensure durability, UV resistance, and safety, making them ideal for sustainable energy solutions in residential and commercial setups.',
                details: 'Specifically designed for photovoltaic systems, KEI solar cables are UV-resistant, weather-resistant, and flame-retardant. They can withstand the harsh outdoor conditions of solar installations and offer excellent performance over a wide temperature range. These cables connect solar panels to inverters, ensuring minimal energy loss.',
                imageId: 'kei-solar-cables',
            },
            {
                title: 'Telecom Cables',
                description: 'KEI telecom cables are engineered to ensure seamless and reliable data and voice transmission. Designed for durability and high performance, these telecom cables provide efficient connectivity, making them ideal for modern communication networks.',
                details: 'KEI manufactures a variety of telecommunication cables, including jelly-filled telephone cables, CATV coaxial cables, and LAN cables. These products are designed for high-speed data and clear voice transmission with minimal interference, supporting the infrastructure of modern communication networks.',
                imageId: 'kei-telecom-cables',
            },
            {
                title: 'Instrumentation Cables',
                description: 'KEI instrumentation cable is designed for precise signal transmission in industrial applications. These cables ensure accuracy, reliability, and durability, making them essential for controlling and monitoring processes in various industries.',
                details: 'Instrumentation cables are vital for process control in industries like oil & gas, power generation, and manufacturing. KEI\'s range includes shielded and unshielded cables, available in pairs, triads, or quads. They are designed to protect low-level signals from electrical noise and interference, ensuring accurate measurement and control.',
                imageId: 'kei-instrumentation-cables',
            }
        ]
    }
];

type Product = typeof productCategories[0]['products'][0] & { category: string };


const whyKei = [
  'Global standards with CE, KEMA, and UL certifications.',
  'Trusted across infrastructure, oil & gas, and renewable energy sectors.',
  'State-of-the-art manufacturing for long-term reliability.',
  'High customer satisfaction and industry-wide approval.',
];

export function KeiCablesPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'kei-hero');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = '/contact';
  };
  
  const handleViewDetails = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  const getProductImage = (product: Product) => {
      return PlaceHolderImages.find(p => p.id === product.imageId)?.imageUrl || '/placeholder.svg'
  }


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
            <Image src={brand.logo} alt={`${brand.name} logo`} width={160} height={60} className="h-20 w-auto mb-6 dark:invert" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Quality Cables for Every Application
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Hotstart Energy is your authorized partner for KEI Cables, delivering performance and reliability for India’s most demanding projects.
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
            As a leading solutions provider, Hotstart Energy provides access to KEI’s extensive range of high-quality cables. We ensure authentic products, technical support, and competitive pricing for all your project needs.
          </p>
        </div>
      </section>

       {/* Product Portfolio */}
      <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
        {productCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/20' : 'bg-background'}`}>
                <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {category.products.map((product, productIndex) => {
                        const image = PlaceHolderImages.find(p => p.id === product.imageId);
                        
                        return (
                           <ProductRevealCard
                                key={productIndex}
                                name={product.title}
                                image={image?.imageUrl}
                                description={product.description}
                                category={category.category}
                                onAdd={handleEnquire}
                                onViewDetails={(e) => handleViewDetails(e, {...product, category: category.category})}
                                className="w-full h-full"
                           />
                        )
                    })}
                </div>
                </div>
            </section>
        ))}

        <DialogContent 
            className="sm:max-w-4xl bg-background p-0"
            onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                     <Image
                        src={getProductImage(selectedProduct)}
                        alt={selectedProduct.title}
                        fill
                        className="object-cover rounded-l-lg"
                    />
                </div>
                <div className="p-8 flex flex-col">
                    <Badge variant="secondary" className="w-fit">{selectedProduct.category}</Badge>
                    <h2 className="text-2xl font-bold mt-2">{selectedProduct.title}</h2>
                    <p className="text-muted-foreground mt-2 text-sm">{selectedProduct.description}</p>
                    
                    <div className="flex gap-4 my-6">
                        <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Download PDF</Button>
                        <Button asChild>
                            <Link href="/quote">Get a Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                        </Button>
                    </div>

                    <Tabs defaultValue="description" className="w-full flex-grow">
                        <TabsList>
                            <TabsTrigger value="description">Description</TabsTrigger>
                            <TabsTrigger value="specifications">Specifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="text-sm text-foreground/80 mt-4 h-48 overflow-y-auto">
                           <p className="whitespace-pre-wrap">{selectedProduct.details}</p>
                        </TabsContent>
                        <TabsContent value="specifications" className="text-sm text-foreground/80 mt-4 h-48 overflow-y-auto">
                            <p className="whitespace-pre-wrap">{selectedProduct.details}</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
          )}
        </DialogContent>
      </Dialog>


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

    

    
