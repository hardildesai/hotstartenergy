
import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { ProductCategoriesSection } from '@/components/home/product-categories-section';
import AnimatedSections from '@/components/ui/animated-sections-1';
import { BrandPartners } from '@/components/home/brand-partners';
import { TrustedBy } from '@/components/home/trusted-by';

export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen w-full z-0">
        <AnimatedSections />
      </div>
      <div className="relative z-10 bg-background">
        <div className="bg-background py-8 space-y-8">
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
