'use client';

import { useRouter } from 'next/navigation';
import { productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TravelCard } from '@/components/ui/card-7';

export function ProductCategoriesSection() {
  const router = useRouter();

  const handleCardClick = (categoryId: string) => {
    if (categoryId === 'cables-wires') {
      router.push('/brands/kei-cables');
    } else if (categoryId === 'lighting-accessories') {
        router.push('/brands/havells');
    }
    else {
      router.push(`/products?category=${categoryId}`);
    }
  };

  return (
    <section id="products-solutions" className="w-full py-16 md:py-24 bg-background">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
