'use client';

import React from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Adani Group', logoUrl: 'https://logo.clearbit.com/adani.com' },
  { name: 'K Raheja Corp', logoUrl: 'https://logo.clearbit.com/krahejacorp.com' },
  { name: 'Marine Electricals', logoUrl: 'https://logo.clearbit.com/marineelectricals.com' },
  { name: 'Cipla', logoUrl: 'https://logo.clearbit.com/cipla.com' },
  { name: 'Atlas Copco', logoUrl: 'https://logo.clearbit.com/atlascopco.com' },
];

export function TrustedBy() {
  return (
    <section>
      <h2 className="text-lg font-bold text-center mb-4 text-foreground">Trusted By Leading Companies</h2>
      <div className="relative">
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex animate-scroll-reverse group-hover:pause">
            <div className="flex w-max space-x-16 pr-16 items-center">
              {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
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
