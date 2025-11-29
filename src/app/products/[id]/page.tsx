import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { Metadata } from 'next';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const image = PlaceHolderImages.find((p) => p.id === product.imageId);

  return {
    title: `${product.name} | ${product.brand} | Hotstart Energy`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${product.brand} | Hotstart Energy`,
      description: product.description,
      images: image ? [
        {
          url: image.imageUrl,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === product.imageId);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: image?.imageUrl,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.hotstartenergy.com/products/${product.id}`,
      priceCurrency: 'INR',
      price: '0', // Price on request
      availability: 'https://schema.org/InStock',
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.hotstartenergy.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.hotstartenergy.com/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://www.hotstartenergy.com/products/${product.id}`,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          {image && (
            <Card className="overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src={image.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </Card>
          )}
        </div>
        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>
          <h2 className="mt-2 text-xl text-muted-foreground">{product.brand}</h2>

          <p className="mt-6 text-base text-foreground/80">{product.description}</p>

          <Separator className="my-8" />

          <h3 className="text-xl font-semibold mb-4">Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="p-3 bg-muted/50 rounded-md">
                <p className="font-medium text-muted-foreground">{key}</p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
