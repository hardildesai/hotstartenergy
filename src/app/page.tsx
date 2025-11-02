
import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { ProductCategoriesSection } from '@/components/home/product-categories-section';
import AnimatedSections from '@/components/ui/animated-sections-1';
import { BrandPartners } from '@/components/home/brand-partners';
import { TrustedBy } from '@/components/home/trusted-by';
import type { Metadata } from 'next';
import { SmoothScrollToAnchor } from '@/components/ui/smooth-scroll-to-anchor';

export const metadata: Metadata = {
  title: "Hotstart Energy Pvt. Ltd. | Electrical, Automation & Power Solutions",
  description: "Hotstart Energy is a leading provider of electrical, automation, and power distribution solutions. As an authorized partner for top global brands, we deliver reliable products and integrated energy solutions for industrial, commercial, and infrastructure projects across India."
}

export default function Home() {
  return (
    <div className="relative">
      <SmoothScrollToAnchor />
      <div className="sticky top-0 h-screen w-full z-0">
        <AnimatedSections />
      </div>
      <div className="relative z-10 bg-background">
        <div className="bg-background py-4 space-y-4">
          <BrandPartners />
          <TrustedBy />
        </div>
        <AboutSection />
        <ProductCategoriesSection />
        <ContactSection />
      </div>
    </div>
  );
}
