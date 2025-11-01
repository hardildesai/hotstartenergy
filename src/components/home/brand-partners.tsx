'use client';

import React from 'react';
import Image from 'next/image';
import { brands } from '@/lib/brands';

export function BrandPartners() {
  const partners = brands;
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-center mb-8 text-foreground">Our Brand Partners</h2>
      <div className="relative">
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex animate-scroll group-hover:pause">
            <div className="flex w-max space-x-24 pr-24 items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
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
