'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DestinationCard } from '@/components/ui/card-21';

export function ProductGrid() {
  const filteredProducts = products;

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => {
          const image = PlaceHolderImages.find((p) => p.id === product.imageId);
          return (
            <div key={product.id} className="h-[400px]">
              <DestinationCard
                imageUrl={image?.imageUrl || ''}
                location={product.name}
                stats={product.brand}
                href={`/products/${product.id}`}
                themeColor="216 34% 47%"
              />
            </div>
          );
        })}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center col-span-full py-16">
            <p className="text-muted-foreground">No products match the filter.</p>
        </div>
      )}
    </>
  );
}
