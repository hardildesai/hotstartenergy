'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';
import { BrandPartners } from './brand-partners';
import { TrustedBy } from './trusted-by';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import test1 from '../../../public/test2.jpg'
import test2 from '../../../public/test2.jpg'
import test3 from '../../../public/test3.jpg'
import test4 from '../../../public/test4.jpg'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Hero() {
  const images = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));
  const heroImages = [test1, test2, test3, test4];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="relative mt-[14vh] mb-[20vh] h-screen min-h-[700px] w-full flex flex-col justify-between">
      <Carousel className="w-[100vw] max-h-64 my-auto mx-auto" plugins={[plugin.current]}>
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="h-full">
              <Card>
                <CardContent className="p-0 h-full w-full">
                  <div className="max-h-[50vw] max-md:max-h-full w-full">
                      <Image
                        src={heroImages[index]}
                        alt={`Hero image ${index + 1}`}
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-end flex-grow text-center text-white pb-16">        <div className="container px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Powering the <span className="text-accent">future</span> with
            precision and control
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
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
      </div>

      <div className="relative mt-[12vh] z-10 w-full pb-8 space-y-8 bg-background/80 backdrop-blur-sm">
          <BrandPartners />
          <TrustedBy />
      </div>
    </section>
  );
}
