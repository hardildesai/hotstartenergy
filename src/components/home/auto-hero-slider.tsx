'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { BrandPartners } from './brand-partners';
import { TrustedBy } from './trusted-by';

const slides = [
  {
    id: 1,
    imageId: 'hero-1',
    title: 'Powering the Future with Precision and Control',
    description: 'Trust Hotstart Energy to energize industry with reliability, technical expertise, and world-class brand partners.',
    primaryAction: { text: 'Contact Us Now', href: '/contact' },
    secondaryAction: { text: 'View Products', href: '/products' },
  },
  {
    id: 2,
    imageId: 'hero-2',
    title: 'Your Partner in Electrical & Automation Solutions',
    description: 'We deliver end-to-end solutions, from switchgear and busbars to advanced industrial automation, powered by global leaders like Legrand and Socomec.',
    primaryAction: { text: 'Explore Our Solutions', href: '/products' },
    secondaryAction: { text: 'About Our Company', href: '/about' },
  },
  {
    id: 3,
    imageId: 'hero-3',
    title: 'Reliable Cables for Every Application',
    description: 'As authorized dealers for KEI Cables, we provide high-performance wiring solutions that form the backbone of India’s most demanding projects.',
    primaryAction: { text: 'Discover KEI Cables', href: '/brands/kei-cables' },
    secondaryAction: { text: 'Request a Quote', href: '/quote' },
  },
  {
    id: 4,
    imageId: 'hero-4',
    title: 'Innovative & Aesthetically Pleasing Designs',
    description: 'Experience the best of Legrand\'s innovative and beautifully engineered products. Visit our experience center to find the perfect fit for your project.',
    primaryAction: { text: 'Visit Our Experience Center', href: '/contact' },
    secondaryAction: { text: 'See Legrand Products', href: '/brands/legrand' },
  },
];

export function AutoHeroSlider() {
  const images = PlaceHolderImages;
  const [api, setApi] = React.useState<CarouselApi>()
  const [direction, setDirection] = React.useState<'forward' | 'backward'>('forward')

  React.useEffect(() => {
    if (!api) {
      return
    }

    const intervalId = setInterval(() => {
      if (direction === 'forward') {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          setDirection('backward')
          api.scrollPrev()
        }
      } else {
        if (api.canScrollPrev()) {
          api.scrollPrev()
        } else {
          setDirection('forward')
          api.scrollNext()
        }
      }
    }, 4000)

    return () => clearInterval(intervalId)
  }, [api, direction])

  return (
    <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-between">
      <Carousel
        setApi={setApi}
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: false,
        }}
      >
        <CarouselContent className="h-full -ml-0">
          {slides.map((slide, index) => {
            const image = images.find(img => img.id === slide.imageId);
            return (
              <CarouselItem key={slide.id} className="pl-0 h-full">
                <div className="relative h-full w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <div className="container px-4">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                        {slide.title}
                      </h1>
                      <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
                        {slide.description}
                      </p>
                      <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <GradientButton asChild>
                          <Link href={slide.primaryAction.href}>{slide.primaryAction.text}</Link>
                        </GradientButton>
                        <GradientButton asChild variant="variant">
                          <Link href={slide.secondaryAction.href}>{slide.secondaryAction.text}</Link>
                        </GradientButton>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-0 z-10 w-full pb-8 space-y-8 bg-background/80 backdrop-blur-sm">
        <BrandPartners />
        <TrustedBy />
      </div>
    </section>
  );
}
