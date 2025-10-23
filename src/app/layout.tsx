import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Hotstart Energy',
  description: 'Powering the future with precision and control',
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hotstart Energy Pvt. Ltd.",
  "url": "https://www.hotstartenergy.com",
  "logo": "https://www.hotstartenergy.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-xxxxxxxxxx",
    "contactType": "customer service",
    "email": "info@hotstartenergy.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A-501, XYZ Industrial Park",
    "addressLocality": "Ahmedabad",
    "postalCode": "3800xx",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/hotstart-energy",
    "https://www.instagram.com/hotstart_energy",
    "https://www.youtube.com/channel/UC...-...",
    "https://www.facebook.com/hotstartenergy"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={cn("font-body antialiased", spaceGrotesk.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}