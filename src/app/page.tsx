import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { ProductCategoriesSection } from '@/components/home/product-categories-section';
import { AutoHeroSlider } from '@/components/home/auto-hero-slider';

export default function Home() {
  return (
    <div className="flex flex-col">
      <AutoHeroSlider />
      <AboutSection />
      <ProductCategoriesSection />
      <ContactSection />
    </div>
  );
}
