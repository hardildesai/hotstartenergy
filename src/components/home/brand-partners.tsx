'use client';

import React from 'react';
import Image from 'next/image';
import { brands } from '@/lib/brands';

export function BrandPartners() {
  const partners = brands;

  return (
    <section className="py-8 w-full">
      <h2 className="text-xl font-bold text-center mb-8 text-foreground">Our Brand Partners</h2>
      <div className="relative">
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex animate-scroll-reverse group-hover:pause">
            <div className="flex w-max space-x-24 pr-24 items-center">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={150}
                    height={40}
                    className={`${partner.id === 'kei-cables' ? 'w-[250px] h-1 object-fill' : 'w-auto h-16 object-contain'}`}
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
        }
        /* Removed pause on hover as per request to keep it moving */
      `}</style>
    </section>
  );
}
