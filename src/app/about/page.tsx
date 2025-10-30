
import { AboutHero } from '@/components/about/about-hero';
import { Milestones } from '@/components/about/milestones';
import { OurStory } from '@/components/about/our-story';
import { OurValues } from '@/components/about/our-values';
import { BrandPartners } from '@/components/home/brand-partners';
import { TrustedBy } from '@/components/home/trusted-by';
import { GradientButton } from '@/components/ui/gradient-button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const coreExpertise = [
  'Electrical Power and Control Systems',
  'Industrial Automation',
  'Energy Monitoring and Management Systems',
  'Busbar Trunking and Power Distribution Solutions',
  'Smart Lighting and Metering Integration',
];

const projectHighlights = [
    'Delivered and installed Busbar Trunking Systems for K. Raheja’s developments in Airoli and Kharadi (Pune).',
    'Executed advanced electrical solutions for Adani Group facilities in Hyderabad and Noida.',
    'Ongoing projects in sectors spanning pharmaceuticals, manufacturing, and commercial real estate.'
];

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Milestones />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Powering Industries with Smart Solutions
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Hotstart Energy’s strength lies in combining product distribution with technical engineering services. The company partners with top-tier global brands to deliver trusted products backed by local support.
                    </p>
                     <ul className="space-y-3 pt-2">
                        {coreExpertise.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-8">
                     <BrandPartners />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trusted by the Industry’s Leaders</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Over the years, HSEPL has successfully partnered with major Indian industrial and infrastructure leaders. Its engineering and supply solutions are integrated into projects that define urban and industrial power landscapes.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Major Clients Include</h3>
                    <TrustedBy />
                </div>

                 <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Project Highlights</h3>
                    <ul className="space-y-3 pt-2">
                        {projectHighlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <OurValues />

        <section className="py-16 md:py-24 text-center bg-background">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Driving the Energy Future
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Hotstart Energy Pvt. Ltd. continues to evolve with India’s growing industrial and energy needs — focusing on sustainability, smart automation, and high-efficiency power systems. With an expanding presence and a talented, motivated team, HSEPL is poised to lead the next wave of India’s electrical innovation.
                </p>
                 <div className="mt-8">
                    <GradientButton asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </GradientButton>
                </div>
            </div>
        </section>

    </div>
  );
}
