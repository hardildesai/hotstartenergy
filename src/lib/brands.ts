
import type { Brand } from './types';
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
import { products } from './data';

const getProductCount = (brandName: string) => products.filter(p => p.brand === brandName).length;

export const brands: Brand[] = [
  {
    id: 'legrand',
    name: 'Legrand',
    slug: 'legrand',
    logo: LegrandLogo,
    short_description: 'Global leader in electrical infrastructure & busbar systems.',
    productCount: getProductCount('Legrand'),
    categories: ['Switchgear', 'Home Solution', 'Busbar'],
  },
  {
    id: 'socomec',
    name: 'Socomec',
    slug: 'socomec',
    logo: SocomecLogo,
    short_description: 'Specialist in low-voltage power switching, monitoring & protection.',
    productCount: getProductCount('Socomec'),
    categories: ['Switchgear', 'Metering'],
  },
  {
    id: 'kei-cables',
    name: 'KEI Cables',
    slug: 'kei-cables',
    logo: KeiCablesLogo,
    short_description: 'Leading manufacturer of power and instrumentation cables.',
    productCount: getProductCount('KEI Cables'),
    categories: ['Cables'],
  },
  {
    id: 'havells',
    name: 'Havells',
    slug: 'havells',
    logo: HavellsLogo,
    short_description: 'Major power distribution equipment manufacturer.',
    productCount: getProductCount('Havells'),
    categories: ['Switchgear', 'Lighting'],
  },
  {
    id: 'eaton',
    name: 'Eaton',
    slug: 'eaton',
    logo: EatonLogo,
    short_description: 'Power management company providing energy-efficient solutions.',
    productCount: getProductCount('Eaton'),
    categories: ['Switchgear', 'Automation'],
  },
    {
    id: 'generic-electric',
    name: 'Generic Electric',
    slug: 'generic-electric',
    logo: SelecControlsLogo, // Using a placeholder logo
    short_description: 'Robust and reliable electrical solutions for various applications.',
    productCount: getProductCount('Generic Electric'),
    categories: ['Switchgear'],
  },
  {
    id: 'generic-home',
    name: 'Generic Home',
    slug: 'generic-home',
    logo: SecureMetersLogo, // Using a placeholder logo
    short_description: 'Innovative smart home and automation products.',
    productCount: getProductCount('Generic Home'),
    categories: ['Home Solution'],
  },
];
