import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { ProductCategoriesSection } from '@/components/home/product-categories-section';
import AnimatedSections from '@/components/ui/animated-sections-1';
import { BrandPartners } from '@/components/home/brand-partners';
import { TrustedBy } from '@/components/home/trusted-by';

export default function Home() {
  return (
    <div className="flex flex-col">
      <AnimatedSections />
      <div className="bg-background/80 backdrop-blur-sm py-8 space-y-8">
        <BrandPartners />
        <TrustedBy />
      </div>
      <AboutSection />
      <ProductCategoriesSection />
      <ContactSection />
    </div>
  );
}
