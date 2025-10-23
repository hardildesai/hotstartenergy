import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1581093450021-9a41386a3b1f?q=80&w=2070&auto=format&fit=crop"
        alt="Modern building at night"
        fill
        className="object-cover"
        priority
        data-ai-hint="modern building night"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Powering the <span className="text-accent">future</span> with precision and control
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
            Trust Hotstart Energy to energize industry with reliability, technical expertise, and world-class brand partners.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Contact us now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/projects">See our projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}