
import { brands } from '@/lib/brands';
import { notFound } from 'next/navigation';
import { KeiCablesPage } from '@/components/brands/kei-cables-page';
import { LegrandPage } from '@/components/brands/legrand-page';
import { SocomecPage } from '@/components/brands/socomec-page';
import { ElmeasurePage } from '@/components/brands/elmeasure-page';
import { ComingSoon } from '@/components/ui/coming-soon';

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

  // Special page for Elmeasure
  if (brand.slug === 'elmeasure') {
    return <ElmeasurePage brand={brand} />;
  }

  // "Coming Soon" page for other brands
  return <ComingSoon brandName={brand.name} brandLogo={brand.logo} />;
}
