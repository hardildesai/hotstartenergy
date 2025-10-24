
import type { Product, BlogPost, ProductCategory } from './types';

export const products: Product[] = [
  {
    id: 'mv-switchgear-01',
    name: 'Medium Voltage Air-Insulated Switchgear',
    brand: 'Generic Electric',
    category: 'Switchgear',
    description: 'Robust and reliable MV switchgear for primary distribution networks. Ensures safety and operational efficiency.',
    imageId: 'prod-mv-switchgear',
    specifications: {
      Voltage: 'Up to 24 kV',
      Current: 'Up to 4000 A',
      'Short-circuit Current': 'Up to 50 kA',
    },
  },
  {
    id: 'lv-panel-01',
    name: 'Low Voltage Power Distribution Panel',
    brand: 'Generic Electric',
    category: 'Switchgear',
    description: 'A modular low voltage panel for commercial and industrial applications, offering flexibility and easy maintenance.',
    imageId: 'prod-lv-panel',
    specifications: {
      Voltage: '415 V',
      'Ingress Protection': 'IP43',
      'Form Factor': 'Form 4b',
    },
  },
  {
    id: 'legrand-arteor-switch',
    name: 'Legrand Arteor Smart Switch',
    brand: 'Legrand',
    category: 'Home Solution',
    description: 'A stylish and intelligent switch that can be controlled via smartphone. Part of the Arteor smart home ecosystem.',
    imageId: 'prod-legrand-switch',
    specifications: {
      Connectivity: 'Zigbee 3.0',
      Compatibility: 'Amazon Alexa, Google Assistant',
      Material: 'Polycarbonate',
    },
  },
  {
    id: 'home-automation-hub-01',
    name: 'Smart Home Automation Hub',
    brand: 'Generic Home',
    category: 'Home Solution',
    description: 'The central brain of your smart home, connecting all your devices for seamless control and automation.',
    imageId: 'prod-home-automation',
    specifications: {
      Protocols: 'Wi-Fi, Zigbee, Z-Wave',
      Power: '5V DC',
      'Max Devices': '100+',
    },
  },
   {
    id: 'mcb-01',
    name: 'Miniature Circuit Breaker (MCB)',
    brand: 'Generic Electric',
    category: 'Switchgear',
    description: 'High-performance MCB for overload and short-circuit protection in residential and commercial buildings.',
    imageId: 'prod-circuit-breaker',
    specifications: {
      Poles: '1P, 2P, 3P',
      'Rated Current': '6A - 63A',
      'Breaking Capacity': '10kA',
    },
  },
  {
    id: 'legrand-living-now-socket',
    name: 'Legrand Living Now Power Socket',
    brand: 'Legrand',
    category: 'Home Solution',
    description: 'An innovative power socket with a unique, modern design that integrates perfectly into any interior.',
    imageId: 'prod-legrand-socket',
    specifications: {
      Type: 'Universal Socket',
      Voltage: '250V',
      'USB Charging': 'Optional Type-A + Type-C',
    },
  },
];

export const blogPosts: BlogPost[] = [
    {
        slug: 'understanding-switchgear-a-comprehensive-guide',
        title: 'Understanding Switchgear: A Comprehensive Guide',
        excerpt: 'Dive deep into the world of switchgear. From low voltage to high voltage, we cover the basics you need to know.',
        content: 'Switchgear is a broad term that covers a range of switching devices that control, protect, and isolate electrical equipment. It is a critical component of any electrical power system, from generation to transmission and distribution. In this post, we will explore the different types of switchgear, their applications, and the key considerations when selecting the right solution for your project. We will discuss air-insulated, gas-insulated, and hybrid switchgear, covering their pros and cons in various scenarios.',
        imageId: 'blog-intro-switchgear',
        date: '2024-07-15',
    },
    {
        slug: 'transform-your-home-with-legrand-smart-solutions',
        title: 'Transform Your Home with Legrand Smart Solutions',
        excerpt: 'Discover how Legrand\'s innovative home automation products can bring comfort, security, and style to your living space.',
        content: 'The smart home is no longer a futuristic concept; it\'s a reality. Legrand is at the forefront of this revolution with its range of intuitive and beautifully designed smart home solutions. From automated lighting and climate control with Arteor to seamless connectivity with Living Now, Legrand offers a complete ecosystem to enhance your lifestyle. This article explores how you can start your smart home journey, the benefits of home automation, and showcases some of Legrand\'s most popular products that blend technology with elegance.',
        imageId: 'blog-smart-home',
        date: '2024-07-10',
    },
    {
        slug: 'the-latest-innovations-in-switchgear-technology',
        title: 'The Latest Innovations in Switchgear Technology',
        excerpt: 'Stay ahead of the curve with our look at the latest trends and innovations shaping the future of switchgear technology.',
        content: 'The switchgear industry is constantly evolving, driven by the need for greater efficiency, safety, and sustainability. This post highlights some of the most exciting advancements, including the rise of digital switchgear, the use of eco-friendly insulating gases, and the integration of IoT for predictive maintenance. We will also look at how companies like Legrand are pushing the boundaries of design and functionality, creating products that are not only high-performing but also aesthetically pleasing.',
        imageId: 'blog-legrand-innovations',
        date: '2024-07-05',
    }
];

export const productCategories: ProductCategory[] = [
  {
    id: 'switchgear-panels',
    title: 'Switchgear For Panels',
    description: 'Safe and efficient power distribution for commercial and industrial networks.',
    imageId: 'cat-switchgear'
  },
  {
    id: 'cables-wires',
    title: 'Cables & Wires',
    description: 'Power, control, and instrumentation cables for every application.',
    imageId: 'cat-cables'
  },
  {
    id: 'meters-monitoring',
    title: 'Meters & Monitoring',
    description: 'Power quality meters, multi-function meters and smart energy monitoring.',
    imageId: 'cat-meters'
  },
  {
    id: 'busbar-systems',
    title: 'Busbar Trunking Systems',
    description: 'Flexible & space-efficient alternative to traditional cabling.',
    imageId: 'cat-busbar'
  },
  {
    id: 'lighting-accessories',
    title: 'Lighting & Accessories',
    description: 'LED lighting, industrial luminaires and electrical safety components.',
    imageId: 'cat-lighting'
  },
  {
    id: 'automation-drives',
    title: 'Automation & Drives',
    description: 'PLCs, HMIs, AC drives, and control devices for smart operations.',
    imageId: 'cat-automation'
  }
];
