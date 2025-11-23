
import { brands } from '@/lib/brands';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ProductGrid } from '@/components/products/product-grid';
import Image from 'next/image';
import { SmoothScrollToAnchor } from '@/components/ui/smooth-scroll-to-anchor';
import { Suspense } from 'react';

export default function ProductsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <SmoothScrollToAnchor />
      </Suspense>
      <div className="container mx-auto px-4 py-12 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Browse all our products or select a brand to view their specific catalog.
          </p>
        </div>

        <ProductGrid />

        <div id="brands" className="text-center my-16 md:my-24 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight">Explore by Brand</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Find official products from Legrand, Socomec, KEI, and Havells — filter by category, voltage and application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <Link href={`/brands/${brand.slug}`} key={brand.id} className="group block">
              <Card className="flex flex-col h-full group transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-1.5">
                <CardHeader className="items-center text-center pt-8 pb-4">
                  <div className="h-16 flex items-center justify-center">
                    <Image src={brand.logo} alt={`${brand.name} logo`} width={120} height={30} className="h-10 w-auto text-foreground transition-colors group-hover:text-primary dark:invert" />
                  </div>
                  <CardTitle className="pt-4 text-lg font-semibold">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-4 pb-4">
                  <p className="text-sm text-muted-foreground">{brand.short_description}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {brand.categories.slice(0, 2).map(category => (
                      <Badge key={category} variant="secondary" className="font-normal">{category}</Badge>
                    ))}
                    {brand.categories.length > 2 && <Badge variant="secondary" className="font-normal">+{brand.categories.length - 2}</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="justify-center pb-6 pt-2">
                  <div className="text-xs text-muted-foreground group-hover:text-accent">
                    {brand.productCount} products <ArrowRight className="inline-block ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

    