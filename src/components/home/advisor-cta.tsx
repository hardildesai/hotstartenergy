import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Lightbulb } from 'lucide-react';

export function AdvisorCta() {
  const advisorImage = PlaceHolderImages.find((p) => p.id === 'advisor-background');

  return (
    <section className="relative overflow-hidden rounded-lg bg-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground">
                    <Lightbulb className="h-4 w-4 text-accent" />
                    <span>AI-Powered Advice</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Not Sure Where to Start?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Let our AI-powered Solution Advisor help you. Describe your project requirements, and we'll suggest the optimal switchgear solutions for you.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/advisor">Try the Advisor</Link>
                </Button>
            </div>
            <div className="relative h-64 md:h-full">
                {advisorImage && (
                    <Image
                        src={advisorImage.imageUrl}
                        alt={advisorImage.description}
                        fill
                        className="object-cover rounded-md"
                        data-ai-hint={advisorImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r" />
            </div>
        </div>
    </section>
  );
}
