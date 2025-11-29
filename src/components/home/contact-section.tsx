'use client';

import { Badge } from '@/components/ui/badge';
import { Mail, Building, Phone } from 'lucide-react';
import Link from 'next/link';

import { OfficeMap } from '@/components/ui/office-map';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Our team can respond in real time.',
    contact: 'hotstartenergy@gmail.com',
    href: 'mailto:hotstartenergy@gmail.com',
  },
  {
    icon: Building,
    title: 'Visit Our Office',
    description: 'Visit our location in real life.',
    contact: 'Office No. 203, K. Square, Baner, Pune',
    href: 'https://maps.app.goo.gl/w1iYfBfL4J9jY9aY7',
  },
  {
    icon: Phone,
    title: 'Call Us Directly',
    description: 'Available during working hours.',
    contact: '+91-99211-88399',
    href: 'tel:+919921188399',
  },
];

export function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            Reach Out To Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            We&apos;d love to Hear From You.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Or just reach out manually to{' '}
            <a
              href="mailto:hotstartenergy@gmail.com"
              className="text-primary hover:underline"
            >
              hotstartenergy@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-muted-foreground mb-4">{method.description}</p>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>

        <OfficeMap />
      </div>
    </section>
  );
}

