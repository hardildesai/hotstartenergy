
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


export const brands: Brand[] = [
  {
    id: 'legrand',
    name: 'Legrand',
    slug: 'legrand',
    logo: "/legrand_logo.png",
    short_description: 'Global leader in electrical infrastructure & busbar systems.',
    productCount: getProductCount('Legrand'),
    categories: getCategoriesForBrand('Legrand', ['Busbar']),
  },
  {
    id: 'socomec',
    name: 'Socomec',
    slug: 'socomec',
    logo: "/socomecc-p-500.png",
    short_description: 'Specialist in low-voltage power switching, monitoring & protection.',
    productCount: getProductCount('Socomec'),
    categories: getCategoriesForBrand('Socomec', ['Metering']),
  },
  {
    id: 'kei-cables',
    name: 'KEI Cables',
    slug: 'kei-cables',
    logo: "/kei_logo.png",
    short_description: 'Leading manufacturer of power and instrumentation cables.',
    productCount: getProductCount('KEI Cables'),
    categories: getCategoriesForBrand('KEI Cables', ['Cables']),
  },
  {
    id: 'havells',
    name: 'Havells',
    slug: 'havells',
    logo: "/havells_logo.png",
    short_description: 'Major power distribution equipment manufacturer.',
    productCount: getProductCount('Havells'),
    categories: getCategoriesForBrand('Havells', ['Lighting']),
  },
  {
    id: 'eaton',
    name: 'Eaton',
    slug: 'eaton',
    logo: "/Eaton_Corporation_logo.png",
    short_description: 'Power management company providing energy-efficient solutions.',
    productCount: getProductCount('Eaton'),
    categories: getCategoriesForBrand('Eaton', ['Automation']),
  },
  {
    id: 'elmeasure',
    name: 'Elmeasure',
    slug: 'elmeasure',
    logo: 'https://logo.clearbit.com/elmeasure.com',
    short_description: 'Bangalore-based energy management and smart metering solutions company.',
    productCount: getProductCount('Elmeasure'),
    categories: getCategoriesForBrand('Elmeasure', ['Metering']),
  },
  {
    id: 'selec-controls',
    name: 'Selec Controls',
    slug: 'selec-controls',
    logo: 'https://logo.clearbit.com/selec.com',
    short_description: 'Leading manufacturer of energy meters, relays, and industrial control devices.',
    productCount: getProductCount('Selec Controls'),
    categories: getCategoriesForBrand('Selec Controls', ['Automation']),
  },
  {
    id: 'secure-meters',
    name: 'Secure Meters',
    slug: 'secure-meters',
    logo: 'https://logo.clearbit.com/securemeters.com',
    short_description: 'Global provider of smart meters for electricity, gas, and water.',
    productCount: getProductCount('Secure Meters'),
    categories: getCategoriesForBrand('Secure Meters', ['Metering']),
  },
];
