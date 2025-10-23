import React from 'react';
import {
  LegrandLogo,
  SocomecLogo,
  KeiCablesLogo,
  ElmeasureLogo,
  EatonLogo,
  HavellsLogo,
  SelecControlsLogo,
  SecureMetersLogo,
} from '@/components/logos';

const partners = [
  { name: 'Legrand', logo: LegrandLogo },
  { name: 'Socomec', logo: SocomecLogo },
  { name: 'KEI Cables', logo: KeiCablesLogo },
  { name: 'Elmeasure', logo: ElmeasureLogo },
  { name: 'Eaton', logo: EatonLogo },
  { name: 'Havells', logo: HavellsLogo },
  { name: 'Selec Controls', logo: SelecControlsLogo },
  { name: 'Secure Meters', logo: SecureMetersLogo },
];

export function BrandPartners() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8">Our Brand Partners</h2>
      <div className="relative">
        <div className="overflow-x-auto scrolling-touch">
          <div className="flex animate-scroll group-hover:pause">
            <div className="flex w-max space-x-12 pr-12">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <partner.logo className="h-12 w-auto object-contain grayscale transition duration-300 hover:grayscale-0" />
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