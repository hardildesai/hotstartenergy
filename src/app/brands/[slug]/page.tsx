
import { brands } from '@/lib/brands';
import { notFound } from 'next/navigation';
import { KeiCablesPage } from '@/components/brands/kei-cables-page';
import { LegrandPage } from '@/components/brands/legrand-page';
import { SocomecPage } from '@/components/brands/socomec-page';
import { ElmeasurePage } from '@/components/brands/elmeasure-page';
import { ComingSoon } from '@/components/ui/coming-soon';

import { Metadata } from 'next';

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return {
      title: 'Brand Not Found',
    };
  }

  return {
    title: `${brand.name} Products | Hotstart Energy`,
    description: `Explore our range of ${brand.name} products. We offer competitive pricing and expert support for all ${brand.name} solutions.`,
    openGraph: {
      title: `${brand.name} Products | Hotstart Energy`,
      description: `Explore our range of ${brand.name} products. We offer competitive pricing and expert support for all ${brand.name} solutions.`,
      images: [
        {
          url: brand.logo,
          width: 800,
          height: 600,
          alt: `${brand.name} Logo`,
        },
      ],
    },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const jsonLd = {
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
        name: 'Brands',
        item: 'https://www.hotstartenergy.com/#brands',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: brand.name,
        item: `https://www.hotstartenergy.com/brands/${brand.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Special page for KEI */}
      {brand.slug === 'kei-cables' && <KeiCablesPage brand={brand} />}

      {/* Special page for Legrand */}
      {brand.slug === 'legrand' && <LegrandPage brand={brand} />}

      {/* Special page for Socomec */}
      {brand.slug === 'socomec' && <SocomecPage brand={brand} />}

      {/* Special page for Elmeasure */}
      {brand.slug === 'elmeasure' && <ElmeasurePage brand={brand} />}

      {/* "Coming Soon" page for other brands */}
      {!['kei-cables', 'legrand', 'socomec', 'elmeasure'].includes(brand.slug) && (
        <ComingSoon brandName={brand.name} brandLogo={brand.logo} />
      )}
    </>
  );
}
