import { Hero } from '@/components/home/hero';
import { FeaturedProducts } from '@/components/home/featured-products';
import { AdvisorCta } from '@/components/home/advisor-cta';
import { BlogPreview } from '@/components/home/blog-preview';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4">
        <FeaturedProducts />
        <Separator className="my-16" />
        <AdvisorCta />
        <Separator className="my-16" />
        <BlogPreview />
      </div>
    </div>
  );
}
