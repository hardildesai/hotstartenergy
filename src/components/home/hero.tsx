'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';
import { BrandPartners } from './brand-partners';
import { TrustedBy } from './trusted-by';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';

const heroImages = [
  'hero-carousel-1',
  'hero-carousel-2',
  'hero-carousel-3',
  'hero-carousel-4',
  'hero-carousel-5',
  'hero-carousel-6',
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const carouselImages = PlaceHolderImages.filter(p => heroImages.includes(p.id));

  return (
    <section className="relative h-screen min-h-[700px] w-full flex flex-col">
      <Carousel
        className="absolute inset-0 w-full h-full"
        plugins={[plugin.current]}
      >
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                priority={index === 0}
                data-ai-hint={image.imageHint}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10 flex flex-col items-center text-center text-foreground h-full">
        <div className="container px-4 flex flex-col justify-end flex-grow pb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Powering the <span className="text-accent">future</span> with
            precision and control
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            Trust Hotstart Energy to energize industry with reliability,
            technical expertise, and world-class brand partners.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GradientButton asChild>
              <Link href="/contact">Contact us now</Link>
            </GradientButton>
            <GradientButton asChild variant="variant">
              <Link href="/products">View Products</Link>
            </GradientButton>
          </div>
        </div>
        <div className="w-full pb-8 space-y-8 bg-background/80 backdrop-blur-sm">
          <BrandPartners />
          <TrustedBy />
        </div>
      </div>
    </section>
  );
}
