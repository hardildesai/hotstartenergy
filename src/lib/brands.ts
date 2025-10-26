
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

const getCategoriesForBrand = (brandName: string): string[] => {
    const brandProducts = products.filter(p => p.brand === brandName);
    const categories = new Set(brandProducts.map(p => p.category));
    
    const categoryMap: Record<string, string> = {
        'Switchgear': 'Switchgear',
        'Home Solution': 'Home Automation',
    };

    const displayCategories = new Set<string>();
    categories.forEach(cat => {
        if (categoryMap[cat]) {
            displayCategories.add(categoryMap[cat]);
        }
    });

    // Manually add static categories as per original logic if needed
    if (brandName === 'Legrand') displayCategories.add('Busbar');
    if (brandName === 'Socomec') displayCategories.add('Metering');
    if (brandName === 'KEI Cables') displayCategories.add('Cables');
    if (brandName === 'Havells') displayCategories.add('Lighting');
    if (brandName === 'Eaton') displayCategories.add('Automation');

    return Array.from(displayCategories);
};


export const brands: Brand[] = [
  {
    id: 'legrand',
    name: 'Legrand',
    slug: 'legrand',
    logo: LegrandLogo,
    short_description: 'Global leader in electrical infrastructure & busbar systems.',
    productCount: getProductCount('Legrand'),
    categories: getCategoriesForBrand('Legrand'),
  },
  {
    id: 'socomec',
    name: 'Socomec',
    slug: 'socomec',
    logo: SocomecLogo,
    short_description: 'Specialist in low-voltage power switching, monitoring & protection.',
    productCount: getProductCount('Socomec'),
    categories: getCategoriesForBrand('Socomec'),
  },
  {
    id: 'kei-cables',
    name: 'KEI Cables',
    slug: 'kei-cables',
    logo: KeiCablesLogo,
    short_description: 'Leading manufacturer of power and instrumentation cables.',
    productCount: getProductCount('KEI Cables'),
    categories: getCategoriesForBrand('KEI Cables'),
  },
  {
    id: 'havells',
    name: 'Havells',
    slug: 'havells',
    logo: HavellsLogo,
    short_description: 'Major power distribution equipment manufacturer.',
    productCount: getProductCount('Havells'),
    categories: getCategoriesForBrand('Havells'),
  },
  {
    id: 'eaton',
    name: 'Eaton',
    slug: 'eaton',
    logo: EatonLogo,
    short_description: 'Power management company providing energy-efficient solutions.',
    productCount: getProductCount('Eaton'),
    categories: getCategoriesForBrand('Eaton'),
  },
    {
    id: 'generic-electric',
    name: 'Generic Electric',
    slug: 'generic-electric',
    logo: SelecControlsLogo, // Using a placeholder logo
    short_description: 'Robust and reliable electrical solutions for various applications.',
    productCount: getProductCount('Generic Electric'),
    categories: getCategoriesForBrand('Generic Electric'),
  },
  {
    id: 'generic-home',
    name: 'Generic Home',
    slug: 'generic-home',
    logo: SecureMetersLogo, // Using a placeholder logo
    short_description: 'Innovative smart home and automation products.',
    productCount: getProductCount('Generic Home'),
    categories: getCategoriesForBrand('Generic Home'),
  },
];
