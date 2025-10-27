'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Legrand', logoUrl: 'https://www.legrand.com/themes/custom/legrand_ecat/logo.svg' },
  { name: 'Socomec', logoUrl: 'https://logo.clearbit.com/socomec.com' },
  { name: 'KEI Cables', logoUrl: 'https://logo.clearbit.com/kei-ind.com' },
  { name: 'Elmeasure', logoUrl: 'https://logo.clearbit.com/elmeasure.com' },
  { name: 'Eaton', logoUrl: 'https://logo.clearbit.com/eaton.com' },
  { name: 'Havells', logoUrl: 'https://logo.clearbit.com/havells.com' },
  { name: 'Selec Controls', logoUrl: 'https://logo.clearbit.com/selec.com' },
  { name: 'Secure Meters', logoUrl: 'https://logo.clearbit.com/securemeters.com' },
];

export function BrandPartners() {
  return (
    <section>
      <h2 className="text-lg font-bold text-center mb-4 text-foreground">Our Brand Partners</h2>
      <div className="relative">
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex animate-scroll group-hover:pause">
            <div className="flex w-max space-x-16 pr-16 items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image 
                    src={partner.logoUrl} 
                    alt={`${partner.name} logo`}
                    width={100} 
                    height={24} 
                    className="h-6 w-auto object-contain text-gray-500 transition duration-300 hover:text-black dark:invert"
                    style={{ color: 'transparent' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       <style jsx>{`
        .scrolling-touch { -webkit-overflow-scrolling: touch; }
        .overflow-x-auto::-webkit-scrollbar { display: none; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group-hover\\:pause:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
