'use client';

import Image from 'next/image';
import Link from 'next/link';
import { productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ProductCategoriesSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find(
              (p) => p.id === category.imageId
            );
            return (
              <Card
                key={category.id}
                className="group overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-accent/20 hover:shadow-lg"
              >
                <div className="relative h-56 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {category.description}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 h-auto mt-4 self-start text-accent"
                  >
                    <Link href={`/products?category=${category.id}`}>
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
