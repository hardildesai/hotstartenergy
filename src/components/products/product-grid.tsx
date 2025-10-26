'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProductGrid() {
  const filteredProducts = products;

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => {
          const image = PlaceHolderImages.find((p) => p.id === product.imageId);
          return (
            <Card key={product.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              {image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.brand} - {product.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </div>
            </Card>
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
