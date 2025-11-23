
import type { Brand } from './types';
import { products } from './data';

const getProductCount = (brandName: string) => products.filter(p => p.brand === brandName).length;

const getCategoriesForBrand = (brandName: string, staticCategories: string[] = []): string[] => {
  const brandProducts = products.filter(p => p.brand === brandName);
  const categories = new Set(brandProducts.map(p => p.category));

  const categoryMap: Record<string, string> = {
    'Switchgear': 'Switchgear',
    'Home Solution': 'Home Automation',
    'Cables & Wires': 'Cables & Wires',
    'Power': 'Power',
    'Protection': 'Protection',
    'Distribution Boards': 'Distribution Boards',
    'Wiring Accessories': 'Wiring Accessories',
    'Cable Management': 'Cable Management',
    'Plugs & Socket': 'Plugs & Sockets',
    'Panel Meters & Energy Meters': 'Metering',
    'Changeovers & Automatic Transfer Switches': 'Switchgear',
  };

  const displayCategories = new Set<string>();
  brandProducts.forEach(p => {
    const mappedCategory = categoryMap[p.category];
    if (mappedCategory) {
      displayCategories.add(mappedCategory);
    } else {
      // Fallback for categories not in the map
      if (p.category.includes('Cable')) displayCategories.add('Cables & Wires');
    }
  });

  // Add categories from the brand's static definition as well
  staticCategories.forEach(c => displayCategories.add(c));

  return Array.from(displayCategories);
};

// Manual counts for brands with products defined on their own pages
const legrandProductCount = 29;
const socomecProductCount = 7;
const keiProductCount = 9;


export const brands: Brand[] = [
  {
    id: 'legrand',
    name: 'Legrand',
    slug: 'legrand',
    logo: "/legrand_logo.png",
    short_description: 'Global specialist in electrical and digital building infrastructures.',
    productCount: legrandProductCount,
    categories: getCategoriesForBrand('Legrand', ['Busbar']),
  },
  {
    id: 'socomec',
    name: 'Socomec',
    slug: 'socomec',
    logo: "/socomecc-p-500.png",
    short_description: 'Expert in low-voltage power switching, monitoring & protection.',
    productCount: socomecProductCount,
    categories: getCategoriesForBrand('Socomec', ['Metering']),
  },
  {
    id: 'kei-cables',
    name: 'KEI Cables',
    slug: 'kei-cables',
    logo: "/kei_logo.png",
    short_description: 'Leading manufacturer of high-performance power and instrumentation cables.',
    productCount: keiProductCount,
    categories: getCategoriesForBrand('KEI Cables', ['Cables']),
  },
  {
    id: 'havells',
    name: 'Havells',
    slug: 'havells',
    logo: "/havells_logo.png",
    short_description: 'A leading provider of power distribution and lighting solutions.',
    productCount: getProductCount('Havells'),
    categories: getCategoriesForBrand('Havells', ['Lighting']),
  },
  {
    id: 'elmeasure',
    name: 'Elmeasure',
    slug: 'elmeasure',
    logo: '/Elmeasure_logo.png',
    short_description: 'Innovator in energy management and smart metering solutions.',
    productCount: getProductCount('Elmeasure'),
    categories: getCategoriesForBrand('Elmeasure', ['Metering']),
  },
];

