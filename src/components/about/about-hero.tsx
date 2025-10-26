'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function AboutHero() {
  const image = PlaceHolderImages.find((p) => p.id === 'about-hero');

  return (
    <section className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
      {image && (
        <Image
          src={image.imageUrl}
          alt="Abstract representation of electrical connections and progress"
          fill
          className="object-cover"
          priority
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Building India’s Future, One Connection at a Time
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
          Since our founding, Hotstart Energy Pvt. Ltd. has been dedicated to powering industries through cutting-edge electrical and automation solutions. Our journey is defined by innovation, integrity, and industrial progress.
        </p>
      </div>
    </section>
  );
}
