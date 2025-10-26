import { CareerHero } from '@/components/career/career-hero';
import { JobOpenings } from '@/components/career/job-openings';
import { LifeAtHsepl } from '@/components/career/life-at-hsepl';
import { BrandPartners } from '@/components/home/brand-partners';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const whyHseplPoints = [
  'Exposure to global electrical brands and cutting-edge projects',
  'Hands-on learning with power control systems and automation',
  'Flat, collaborative work culture fostering growth',
  'Commitment to safety, quality, and innovation',
];

export default function CareerPage() {
  return (
    <div>
      <CareerHero />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Build Your Career with Hotstart Energy?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At HSEPL, we believe that excellence begins with people. Our team of skilled engineers, technical specialists, and project professionals work collaboratively to deliver high-performance power and automation solutions across India.
                </p>
                <p>
                  Whether you’re in design, integration, logistics, or operations, we offer an environment where innovation meets opportunity — backed by our partnerships with industry leaders like Legrand, Socomec, KEI, Secure Meters, and more.
                </p>
              </div>
              <ul className="space-y-3 pt-2">
                {whyHseplPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
             <LifeAtHsepl />
          </div>
        </div>
      </section>

      <section id="openings" className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Open Positions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find your next opportunity in our growing team.
            </p>
          </div>
          <JobOpenings />
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Internship and Graduate Opportunities
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We welcome passionate engineering graduates interested in power distribution, control systems, and industrial automation. Our internship and training programs offer real-world exposure to electrical design, project execution, and client interaction.
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg">
                            <Link href="mailto:careers@hotstartenergy.com?subject=Application for Internship">
                                Apply for Internship
                            </Link>
                        </Button>
                    </div>
                </div>
                 <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Ready to Join Us?
                    </h2>
                     <p className="text-muted-foreground leading-relaxed">
                        Email your CV and cover letter to <a href="mailto:hotstartenergy@gmail.com" className="text-accent font-medium hover:underline">hotstartenergy@gmail.com</a> with the subject line: <strong>Application – [Position Name]</strong>.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Our team will get in touch with shortlisted candidates. We look forward to powering your career with HSEPL.
                    </p>
                </div>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Have questions about careers at Hotstart Energy? Contact our HR department.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Mail className="h-8 w-8 text-accent mb-2"/>
                    <h3 className="font-semibold">HR Department</h3>
                    <a href="mailto:careers@hotstartenergy.com" className="text-muted-foreground hover:text-primary">careers@hotstartenergy.com</a>
                </div>
                <div className="flex flex-col items-center">
                    <MapPin className="h-8 w-8 text-accent mb-2"/>
                    <h3 className="font-semibold">Pune Office</h3>
                    <p className="text-muted-foreground">Office No. 203, K. Square, K. P. Shroff Rd, Baner, Pune 411045</p>
                </div>
                <div className="flex flex-col items-center">
                    <MapPin className="h-8 w-8 text-accent mb-2"/>
                    <h3 className="font-semibold">Ahmedabad Office</h3>
                    <p className="text-muted-foreground">Times Square 1, Thaltej-Shilaj Road, Ahmedabad - 380059</p>
                </div>
            </div>
        </div>
       </section>

        <div className="py-16 bg-gray-50/50 dark:bg-gray-900/20">
            <div className="container mx-auto px-4">
                 <BrandPartners />
            </div>
        </div>
    </div>
  );
}
