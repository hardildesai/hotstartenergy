
import { AboutSection } from '@/components/home/about-section';

import { ProductCategoriesSection } from '@/components/home/product-categories-section';
import AnimatedSections from '@/components/ui/animated-sections-1';
import { BrandReveal } from '@/components/home/brand-reveal';
import { TrustedByReveal } from '@/components/home/trusted-by-reveal';
import type { Metadata } from 'next';
import { SmoothScrollToAnchor } from '@/components/ui/smooth-scroll-to-anchor';
import { Suspense } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ContactSection } from '@/components/home/contact-section';

export const metadata: Metadata = {
  title: "Hotstart Energy - Premier Industrial Automation & Electrical Solutions Partner",
  description: "Explore our comprehensive range of industrial automation, switchgear, and power distribution products. Authorized distributor for Legrand, Socomec, KEI, and Havells in India."
}

export default function Home() {
  return (
    <div className="relative">
      <Suspense fallback={null}>
        <SmoothScrollToAnchor />
      </Suspense>
      <div className="sticky top-0 h-screen w-full z-0">
        <AnimatedSections />
      </div>
      <div className="relative z-10 bg-background">
        <ScrollReveal className="bg-background py-4 space-y-4">
          <BrandReveal />
          <TrustedByReveal />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProductCategoriesSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </div>
    </div>
  );
}
