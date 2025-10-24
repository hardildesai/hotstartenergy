import { AboutSection } from '@/components/home/about-section';
import { ProductCategoriesSection } from '@/components/home/product-categories-section';
import { Hero } from '@/components/home/hero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProductCategoriesSection />
    </div>
  );
}
