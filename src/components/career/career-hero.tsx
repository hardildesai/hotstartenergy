'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export function CareerHero() {
  const image = PlaceHolderImages.find((p) => p.id === 'career-hero');

  return (
    <section className="relative h-[600px] w-full flex items-center justify-center text-center text-white">
      {image && (
        <Image
          src={image.imageUrl}
          alt="Industrial automation"
          fill
          className="object-cover"
          priority
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Empowering Innovation. Energizing Growth.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
          At Hotstart Energy Pvt. Ltd., we’re transforming electrical power distribution and automation through expertise, technology, and teamwork. Be part of a company that powers industries — and your career — to new heights.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
                <Link href="#openings">View Current Openings</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                <Link href="mailto:hotstartenergy@gmail.com?subject=Resume Submission">Submit Your Resume</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
