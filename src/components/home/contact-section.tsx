import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FlowButton } from '../ui/flow-button';

export function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20 border-t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Power Your Next Project?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Our team of experts is here to help you find the right electrical solutions for your needs. Get in touch for a detailed consultation or a competitive quote.
        </p>
        <div className="mt-8">
          <FlowButton text="Get In Touch" href="/contact" />
        </div>
      </div>
    </section>
  );
}
