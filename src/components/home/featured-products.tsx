import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  const featured = products.slice(0, 3);

  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Top-tier solutions for industrial and residential needs.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => {
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
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/products">
            See All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
