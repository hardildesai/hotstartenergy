
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

const getCategoriesForBrand = (brandName: string, staticCategories: string[] = []): string[] => {
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

    // Add categories from the brand's static definition as well
    staticCategories.forEach(c => displayCategories.add(c));

    return Array.from(displayCategories);
};


export const brands: Brand[] = [
  {
    id: 'legrand',
    name: 'Legrand',
    slug: 'legrand',
    logo: (props) => LegrandLogo(props),
    short_description: 'Global leader in electrical infrastructure & busbar systems.',
    productCount: getProductCount('Legrand'),
    categories: getCategoriesForBrand('Legrand', ['Busbar']),
  },
  {
    id: 'socomec',
    name: 'Socomec',
    slug: 'socomec',
    logo: (props) => SocomecLogo(props),
    short_description: 'Specialist in low-voltage power switching, monitoring & protection.',
    productCount: getProductCount('Socomec'),
    categories: getCategoriesForBrand('Socomec', ['Metering']),
  },
  {
    id: 'kei-cables',
    name: 'KEI Cables',
    slug: 'kei-cables',
    logo: (props) => KeiCablesLogo(props),
    short_description: 'Leading manufacturer of power and instrumentation cables.',
    productCount: getProductCount('KEI Cables'),
    categories: getCategoriesForBrand('KEI Cables', ['Cables']),
  },
  {
    id: 'havells',
    name: 'Havells',
    slug: 'havells',
    logo: (props) => HavellsLogo(props),
    short_description: 'Major power distribution equipment manufacturer.',
    productCount: getProductCount('Havells'),
    categories: getCategoriesForBrand('Havells', ['Lighting']),
  },
  {
    id: 'eaton',
    name: 'Eaton',
    slug: 'eaton',
    logo: (props) => EatonLogo(props),
    short_description: 'Power management company providing energy-efficient solutions.',
    productCount: getProductCount('Eaton'),
    categories: getCategoriesForBrand('Eaton', ['Automation']),
  },
    {
    id: 'generic-electric',
    name: 'Generic Electric',
    slug: 'generic-electric',
    logo: (props) => SelecControlsLogo(props), // Using a placeholder logo
    short_description: 'Robust and reliable electrical solutions for various applications.',
    productCount: getProductCount('Generic Electric'),
    categories: getCategoriesForBrand('Generic Electric'),
  },
  {
    id: 'generic-home',
    name: 'Generic Home',
    slug: 'generic-home',
    logo: (props) => SecureMetersLogo(props), // Using a placeholder logo
    short_description: 'Innovative smart home and automation products.',
    productCount: getProductCount('Generic Home'),
    categories: getCategoriesForBrand('Generic Home'),
  },
];
