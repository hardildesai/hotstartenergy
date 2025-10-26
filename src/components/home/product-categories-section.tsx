'use client';

import { useRouter } from 'next/navigation';
import { productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TravelCard } from '@/components/ui/card-7';
import { toast } from 'sonner';

export function ProductCategoriesSection() {
  const router = useRouter();

  const handleCardClick = (categoryId: string) => {
    toast.success("Redirecting to products...", {
      description: `Showing products for category: ${categoryId}`,
    });
    router.push(`/products?category=${categoryId}`);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Products & Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our complete range of electrical distribution and automation
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find(
              (p) => p.id === category.imageId
            );
            return (
              <TravelCard
                key={category.id}
                imageUrl={image?.imageUrl || ''}
                imageAlt={category.title}
                title={category.title}
                location="Global Shipping"
                overview={category.description}
                price={0} // Mock price, can be dynamic
                pricePeriod="Request Quote"
                onBookNow={() => handleCardClick(category.id)}
                aria-label={`View products in ${category.title}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
