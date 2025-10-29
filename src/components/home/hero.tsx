
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';
import { BrandPartners } from './brand-partners';
import { TrustedBy } from './trusted-by';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const image = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-between">
      {image && (
         <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={image.imageHint}
        />
      )}
      
      <div className="relative z-10 flex flex-col items-center justify-end flex-grow text-center text-white pb-16">
        <div className="container px-4">
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
      
      <div className="relative z-10 w-full pb-8 space-y-8 bg-background/80 backdrop-blur-sm">
          <BrandPartners />
          <TrustedBy />
      </div>
    </section>
  );
}
