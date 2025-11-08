
'use client';

import React from 'react';
import Image from 'next/image';
import { brands } from '@/lib/brands';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from '@/lib/utils';

export function BrandPartners() {
  const partners = brands;

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  return (
    <section className="py-8 w-full">
      <h2 className="text-xl font-bold text-center mb-8 text-foreground">Our Brand Partners</h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-8">
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="pl-8 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="h-16 flex items-center justify-center p-4">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  width={150} 
                  height={40} 
                  className="h-10 w-auto object-contain text-gray-500 dark:invert"
                  style={{ color: 'transparent' }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
