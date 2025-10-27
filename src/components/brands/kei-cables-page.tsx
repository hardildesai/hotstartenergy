
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Download, Power, Shield, Zap } from 'lucide-react';
import { KeiCablesLogo } from '../logos';

const productPortfolio = [
  { title: 'Power Cables (LV, MV, HV)', description: 'For reliable energy transmission in industrial and utility networks.', icon: Power },
  { title: 'Control Cables', description: 'For signaling and control circuits in automation systems.', icon: Zap },
  { title: 'Instrumentation Cables', description: 'For precise signal transmission with minimal interference.', icon: Shield },
  { title: 'Flexible & House Wires', description: 'For residential, commercial, and appliance wiring.', icon: Power },
  { title: 'Specialty Cables', description: 'Including rubber cables, solar cables, and fire-resistant variants.', icon: Zap },
];

const featuredProducts = [
    {
        title: 'HV Power Cable',
        description: 'Built for high performance, KEI HV wire ensures safe and efficient power transmission. These cables are designed to handle high voltage with reliability, making them ideal for demanding industrial and commercial applications.',
        imageId: 'kei-hv-cable',
        imageCaption: 'HV POWER CABLE'
    },
    {
        title: 'LV Power & Control Cable',
        description: 'KEI LV wire and cable are ideal for low-voltage power needs. The LV Power & Control Cable ensures efficient performance and safety, making it perfect for residential, commercial, and industrial use.',
        imageId: 'kei-lv-cable',
        imageCaption: 'LV POWER & CONTROL CABLE'
    }
];

const whyKei = [
  'Global standards with CE, KEMA, and UL certifications.',
  'Trusted across infrastructure, oil & gas, and renewable energy sectors.',
  'State-of-the-art manufacturing for long-term reliability.',
  'High customer satisfaction and industry-wide approval.',
];

export function KeiCablesPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'kei-hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="KEI Cables industrial application"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4 flex flex-col items-center">
            <brand.logo className="h-20 w-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Quality Cables for Every Application
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Hotstart Energy is your authorized dealer for KEI Cables, delivering performance and reliability for India’s most demanding projects.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Your Trusted Partner for KEI Wires & Cables
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            As a leading distributor, Hotstart Energy provides access to KEI’s extensive range of high-quality cables. We ensure authentic products, technical support, and competitive pricing for all your project needs.
          </p>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">KEI Cables Product Portfolio</h2>
          </div>
           <div className="space-y-12">
                {featuredProducts.map((product, index) => {
                    const image = PlaceHolderImages.find(p => p.id === product.imageId);
                    return (
                        <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card p-8 rounded-lg shadow-sm border">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">{product.title}</h3>
                                <p className="text-muted-foreground">{product.description}</p>
                                <Button asChild variant="destructive">
                                    <Link href="/contact">Learn More</Link>
                                </Button>
                            </div>
                            <div className="text-center">
                               {image && (
                                 <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                                    <div className="relative h-64 w-64">
                                        <Image 
                                            src={image.imageUrl}
                                            alt={product.title}
                                            fill
                                            className="object-contain"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <KeiCablesLogo className="h-8 mx-auto" />
                                        <p className="text-sm font-semibold text-foreground mt-2">{product.imageCaption}</p>
                                    </div>
                                 </div>
                               )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Why Choose KEI */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Unmatched Quality and Performance
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    KEI Industries is one of the world's leading cable manufacturers, renowned for its commitment to quality, innovation, and sustainability. Their products form the backbone of critical infrastructure globally.
                </p>
                <ul className="space-y-3 pt-2">
                {whyKei.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="text-center p-8 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications & Downloads</h3>
                <p className="text-muted-foreground mb-6">Access detailed product catalogues and datasheets to find the perfect cable for your needs.</p>
                <Button asChild size="lg">
                    <Link href="/contact?query=kei-datasheet">
                        <Download className="mr-2 h-5 w-5" /> Download Datasheets
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-16 md:py-24 text-center bg-gray-50/50 dark:bg-gray-900/20 border-t">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Get the Best Prices on KEI Cables
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Contact us today for a competitive quote on your bulk or project-based cable requirements. Our team is ready to assist you.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/quote?product=kei-cables">Request a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>

    </div>
  );
}
