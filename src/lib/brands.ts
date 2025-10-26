
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
    
    // Custom mapping for more user-friendly category names if needed
    const categoryMap: Record<string, string> = {
        'Switchgear': 'Switchgear',
        'Home Solution': 'Home Automation',
        // Add other mappings if product categories differ from display categories
    };

    const displayCategories = new Set<string>();
    categories.forEach(cat => {
        if (categoryMap[cat]) {
            displayCategories.add(categoryMap[cat]);
        } else {
            // Fallback for categories not in the map
            if (cat.includes('Switchgear')) displayCategories.add('Switchgear');
            if (cat.includes('Home')) displayCategories.add('Home Solution');
        }
    });

    // Add categories from the brand's static definition as well
     const staticBrand = brands.find(b => b.name === brandName);
     if(staticBrand?.staticCategories) {
        staticBrand.staticCategories.forEach(c => displayCategories.add(c));
     }

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
    staticCategories: ['Switchgear', 'Home Solution', 'Busbar'],
  },
  {
    id: 'socomec',
    name: 'Socomec',
    slug: 'socomec',
    logo: SocomecLogo,
    short_description: 'Specialist in low-voltage power switching, monitoring & protection.',
    productCount: getProductCount('Socomec'),
    categories: getCategoriesForBrand('Socomec'),
    staticCategories: ['Switchgear', 'Metering'],
  },
  {
    id: 'kei-cables',
    name: 'KEI Cables',
    slug: 'kei-cables',
    logo: KeiCablesLogo,
    short_description: 'Leading manufacturer of power and instrumentation cables.',
    productCount: getProductCount('KEI Cables'),
    categories: getCategoriesForBrand('KEI Cables'),
    staticCategories: ['Cables'],
  },
  {
    id: 'havells',
    name: 'Havells',
    slug: 'havells',
    logo: HavellsLogo,
    short_description: 'Major power distribution equipment manufacturer.',
    productCount: getProductCount('Havells'),
    categories: getCategoriesForBrand('Havells'),
    staticCategories: ['Switchgear', 'Lighting'],
  },
  {
    id: 'eaton',
    name: 'Eaton',
    slug: 'eaton',
    logo: EatonLogo,
    short_description: 'Power management company providing energy-efficient solutions.',
    productCount: getProductCount('Eaton'),
    categories: getCategoriesForBrand('Eaton'),
    staticCategories: ['Switchgear', 'Automation'],
  },
    {
    id: 'generic-electric',
    name: 'Generic Electric',
    slug: 'generic-electric',
    logo: SelecControlsLogo, // Using a placeholder logo
    short_description: 'Robust and reliable electrical solutions for various applications.',
    productCount: getProductCount('Generic Electric'),
    categories: getCategoriesForBrand('Generic Electric'),
    staticCategories: ['Switchgear'],
  },
  {
    id: 'generic-home',
    name: 'Generic Home',
    slug: 'generic-home',
    logo: SecureMetersLogo, // Using a placeholder logo
    short_description: 'Innovative smart home and automation products.',
    productCount: getProductCount('Generic Home'),
    categories: getCategoriesForBrand('Generic Home'),
    staticCategories: ['Home Solution'],
  },
];
