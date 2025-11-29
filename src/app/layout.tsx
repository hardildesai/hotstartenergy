import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { Toaster } from "@/components/ui/toaster"
import { Titillium_Web } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';
import { CountdownOverlay } from '@/components/launch/countdown-overlay';
import { LaunchGuard } from '@/components/launch/launch-guard';


const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-titillium-web',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hotstartenergy.com'),
  title: {
    default: 'Hotstart Energy | Electrical, Automation & Power Solutions',
    template: '%s | Hotstart Energy'
  },
  description: 'Hotstart Energy is a leading provider of electrical, automation, and power distribution solutions. Authorized partner for Legrand, Socomec, KEI, and Havells.',
  keywords: ['Electrical Solutions', 'Industrial Automation', 'Power Distribution', 'Switchgear', 'Legrand', 'Socomec', 'KEI', 'Havells', 'Energy Management', 'Pune'],
  authors: [{ name: 'Hotstart Energy' }],
  creator: 'Hotstart Energy',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.hotstartenergy.com',
    title: 'Hotstart Energy | Electrical, Automation & Power Solutions',
    description: 'Leading provider of electrical, automation, and power distribution solutions in India.',
    siteName: 'Hotstart Energy',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Hotstart Energy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotstart Energy | Electrical, Automation & Power Solutions',
    description: 'Leading provider of electrical, automation, and power distribution solutions in India.',
    images: ['/opengraph-image.png'],
    creator: '@hotstartenergy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hotstart Energy Pvt. Ltd.",
  "url": "https://www.hotstartenergy.com",
  "logo": "https://www.hotstartenergy.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-99211-88399",
    "contactType": "customer service",
    "email": "hotstartenergy@gmail.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No. 203, K. Square, K. P. Shroff Rd, Baner",
    "addressLocality": "Pune",
    "postalCode": "411045",
    "addressRegion": "Maharashtra",
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
      <body
        className={cn("font-body antialiased", titilliumWeb.variable)}
        suppressHydrationWarning
      >
        <LaunchGuard>
          <ScrollToTop />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <SonnerToaster richColors />
          <SpeedInsights />
          <FloatingWhatsApp />
        </LaunchGuard>
      </body>
    </html>
  );
}
