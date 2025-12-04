
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
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '../ui/badge';
import { BrandPageLayout } from './brand-page-layout';

const productCategories = [
  {
    category: 'Panel Meters & Energy Meters',
    products: [
      {
        title: 'Countis Energy Meter',
        description: 'Displays energy and power consumed (kWh and kW). Suitable for single-phase load metering and direct connections up to 80A. RS485 communication models available.',
        details: 'The COUNTIS E is a modular active and reactive electrical energy meter designed for single and three-phase networks. It allows direct connection up to 80 A and is compliant with MID and IEC standards. The meter features a clear LCD display, and some versions include pulse outputs or RS485 Modbus communication for integration into energy management systems.',
        imageId: 'socomec-countis-new'
      },
      {
        title: 'MULTIS Single And Three Phase Energy And Multifunction Meters',
        description: 'Feature-rich dual source energy metering in a sturdy polycarbonate housing. Resistant to high shock and pollution. Displays up to 3 parameters on LCD, with others in scroll mode. Programmable CT and PT.',
        details: 'The MULTIS range offers a comprehensive set of measurements for monitoring electrical installations. These panel-mounted digital meters are suitable for low and medium voltage networks. They measure all key electrical parameters: V, U, I, P, Q, S, F, PF. Some models offer advanced features like dual-source energy metering, harmonics analysis, and communication ports (RS485).',
        imageId: 'socomec-multis-new'
      },
      {
        title: 'DIRIS Digiware Voltage And Current Monitoring Meters',
        description: 'A complete, dedicated solution for metering, monitoring, and analyzing voltage with a single point of protection. Ensures no hazardous voltage on cabinet doors and is adapted for all network types.',
        details: 'DIRIS Digiware is a revolutionary modular system for power monitoring. It combines voltage measurement modules with a variety of current sensor modules (solid-core, split-core, flexible) to create a customized and scalable monitoring solution. The system is easy to install, with RJ45 connections, and provides high-accuracy data for energy efficiency and power quality analysis.',
        imageId: 'socomec-diris-new'
      }
    ]
  },
  {
    category: 'Changeovers & Automatic Transfer Switches',
    products: [
      {
        title: 'Manual Changeover Switch',
        description: 'Manually operated 3 and 4 pole open transition transfer switching from 63A to 3200A. Features three stable, padlockable positions to protect loads from network interference. IEC 60947-6-1 compliant.',
        details: 'SIRCO M and SIRCO VM1 are manually operated multipolar load break switches. They make and break under load conditions and provide safety isolation for any low voltage circuit. They are designed for 415 VAC network changeover applications. The range includes 3 and 4 pole versions from 63A to 3200A. The three stable positions (I, 0, II) are fully isolated and padlockable, preventing any unwanted network coupling.',
        imageId: 'socomec-manual-changeover-new'
      },
      {
        title: 'Load Break Switch',
        description: 'Manually and remotely operated 3 and 4 pole versions, from 63A to 5000A. A robust, compact design with high performance, line-load interchangeability, and integrated terminal spreaders.',
        details: 'The SIRCO M and SIRCO are manually and remotely operated modular load break switches. They provide safety isolation by switching on and off under load conditions for any low voltage circuit. With a robust design, they offer high performance and are suitable for a wide range of applications from 63A to 5000A.',
        imageId: 'socomec-load-break-new'
      },
      {
        title: 'Bypass Switch',
        description: 'Manually operated 3 and 4 pole open transition transfer switching equipment from 63A to 3200A. Provides three stable positions, built-in mechanical interlocks, and padlock capability for ultimate safety.',
        details: 'This combination of three interlocked load break switches allows the bypass of a UPS or other equipment for maintenance, without interrupting the power supply to the load. It ensures a safe transition between the source and the bypass line, with a robust mechanical interlock system.',
        imageId: 'socomec-bypass-new'
      },
      {
        title: 'Automatic Transfer Switch (ATS)',
        description: 'Conforming to IEC 60947-6-1, these 3 or 4 pole switches with positive break indication are operated automatically or remotely. Features an external controller and incorporates supply redundancy without extra wiring.',
        details: 'SOCOMEC\'s ATyS range provides automatic or remote transfer between two power sources. They are designed for reliability and performance, ensuring continuity of power for critical applications. The range covers currents from 40A to 6300A and includes models with integrated controllers (ATyS p, d, g) or for use with external controllers (ATyS t, M). They feature stable positions and positive break indication for enhanced safety.',
        imageId: 'socomec-ats-new'
      }
    ]
  }
];

type Product = typeof productCategories[0]['products'][0] & { category: string };

const whySocomec = [
  'Value-added services ensuring availability of critical installations.',
  'Expertise and proximity of specialists ensure equipment reliability.',
  'Products conform to both International and National Standards.',
  'State-of-the-art manufacturing facility in Gurgaon.',
];

export function SocomecPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'socomec-hero');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleEnquire = () => {
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
    <BrandPageLayout
      brand={{
        name: "Your Power. Our Expertise.",
        logo: brand.logo,
        description: "Delivering high-performance low voltage power equipment and value-added services to ensure the availability of your critical installations."
      }}
      heroImage={heroImage}
    >
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Managing Power with Unrivaled Expertise Since 1965
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            SOCOMEC is committed to delivering a wide range of value-added services to ensure the availability of your critical installation, the safety of your site operations, and the performance optimisation of your low voltage equipment during its life cycle. With more than 370 experts, we drive solutions tailored to your specific needs.
          </p>
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
                    <ProductRevealCard
                      key={productIndex}
                      name={product.title}
                      image={image?.imageUrl}
                      description={product.description}
                      category={category.category}
                      onAdd={handleEnquire}
                      onViewDetails={(e) => handleViewDetails(e, { ...product, category: category.category })}
                      className="w-full h-full"
                      imageFit="contain"
                    />
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col h-full">
                <Badge variant="secondary" className="w-fit mb-4">{selectedProduct.category}</Badge>
                <DialogTitle className="text-2xl font-bold mb-2">{selectedProduct.title}</DialogTitle>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">{selectedProduct.description}</p>

                <div className="flex gap-4 mb-6">
                  <Button asChild className="w-full">
                    <Link href="/quote">Get Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>

                <div className="text-sm text-foreground/80 mt-4 h-40 overflow-y-auto pr-2 custom-scrollbar">
                  <h4 className="font-semibold mb-2">Product Details</h4>
                  <p className="whitespace-pre-wrap">{selectedProduct.details}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>


      {/* Why Choose Socomec */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Socomec?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a state-of-the-art factory in Gurgaon and a global network of experts, Socomec guarantees reliability, durability, and performance for your low voltage equipment.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left pt-4">
              {whySocomec.map((item, index) => (
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
            Ready to Upgrade Your Power Systems?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80 mb-10">
            Get in touch with our experts for a customized solution and competitive pricing.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <Link href="/quote?product=socomec">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </BrandPageLayout>
  );
}




