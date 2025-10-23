import React from 'react';
import {
  AdaniLogo,
  KRahejaLogo,
  MarineElectricalsLogo,
  CiplaLogo,
  AtlasCopcoLogo,
} from '@/components/logos';

const clients = [
  { name: 'Adani Group', logo: AdaniLogo },
  { name: 'K Raheja Corp', logo: KRahejaLogo },
  { name: 'Marine Electricals', logo: MarineElectricalsLogo },
  { name: 'Cipla', logo: CiplaLogo },
  { name: 'Atlas Copco', logo: AtlasCopcoLogo },
];

export function TrustedBy() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8">Trusted By Leading Companies</h2>
      <div className="relative">
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex animate-scroll-reverse group-hover:pause">
            <div className="flex w-max space-x-16 pr-16">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <client.logo className="h-12 w-auto object-contain grayscale transition duration-300 hover:grayscale-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrolling-touch { -webkit-overflow-scrolling: touch; }
        .overflow-x-auto::-webkit-scrollbar { display: none; }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
        .group-hover\\:pause:hover .animate-scroll-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}