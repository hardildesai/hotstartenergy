
import { brands } from '@/lib/brands';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductGrid } from '@/components/products/product-grid';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { KeiCablesPage } from '@/components/brands/kei-cables-page';

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.slug === params.slug);

  if (!brand) {
    notFound();
  }

  // Special page for KEI
  if (brand.slug === 'kei-cables') {
    return <KeiCablesPage brand={brand} />;
  }

  // Default page for other brands
  const brandProducts = products.filter(p => p.brand === brand.name);

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="h-24 w-48 flex-shrink-0 flex items-center justify-center bg-card p-4 rounded-lg border">
          <brand.logo className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{brand.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{brand.short_description}</p>
        </div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brandProducts.map((product) => {
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
      {brandProducts.length === 0 && (
        <div className="text-center col-span-full py-16">
            <p className="text-muted-foreground">No products found for this brand.</p>
        </div>
      )}

    </div>
  );
}
