
'use client';

import React from 'react';
import Image from 'next/image';
import { brands } from '@/lib/brands';
import { cn } from '@/lib/utils';

export function BrandPartners() {
  const partners = brands;

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-center mb-8 text-foreground">Our Brand Partners</h2>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          "[mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
        )}
      >
        <div className="flex w-max animate-scroll group-hover:pause">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 px-12">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  width={180} 
                  height={40} 
                  className="h-10 w-auto object-contain text-gray-500 transition duration-300 hover:text-black dark:invert"
                  style={{ color: 'transparent' }}
                />
              </div>
            ))}
        </div>
      </div>
       <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group-hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
