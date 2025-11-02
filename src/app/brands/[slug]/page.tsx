
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
import { LegrandPage } from '@/components/brands/legrand-page';
import { SocomecPage } from '@/components/brands/socomec-page';
import { Clock } from 'lucide-react';

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
  
  // Special page for Legrand
  if (brand.slug === 'legrand') {
    return <LegrandPage brand={brand} />;
  }

  // Special page for Socomec
  if (brand.slug === 'socomec') {
    return <SocomecPage brand={brand} />;
  }

  // "Coming Soon" page for other brands
  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="h-24 w-48 flex-shrink-0 flex items-center justify-center bg-card p-4 rounded-lg border">
          <Image src={brand.logo} alt={`${brand.name} logo`} width={120} height={40} className="h-14 w-auto object-contain dark:invert" />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{brand.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{brand.short_description}</p>
        </div>
      </div>
      
      <div className="text-center col-span-full py-16 bg-card border rounded-lg">
        <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold">Coming Soon</h2>
        <p className="text-muted-foreground mt-2">Products for {brand.name} will be available shortly.</p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/brands">Explore Other Brands</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
