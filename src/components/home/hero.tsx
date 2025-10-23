import Image from 'next/image';
import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';
import { BrandPartners } from './brand-partners';
import { TrustedBy } from './trusted-by';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex flex-col">
      <Image
        src="https://images.unsplash.com/photo-1581093450021-9a41386a3b1f?q=80&w=2070&auto=format&fit=crop"
        alt="Modern building at night"
        fill
        className="object-cover"
        priority
        data-ai-hint="modern building night"
      />
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10 flex flex-col items-center text-center text-foreground h-full">
        <div className="container px-4 flex flex-col justify-end flex-grow pb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Powering the <span className="text-accent">future</span> with precision and control
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            Trust Hotstart Energy to energize industry with reliability, technical expertise, and world-class brand partners.
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
