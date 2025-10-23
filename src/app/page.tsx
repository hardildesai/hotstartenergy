import { Hero } from '@/components/home/hero';
import { BrandPartners } from '@/components/home/brand-partners';
import { TrustedBy } from '@/components/home/trusted-by';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-16 space-y-16">
        <BrandPartners />
        <TrustedBy />
      </div>
    </div>
  );
}