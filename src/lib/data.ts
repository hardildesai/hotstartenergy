
import type { Product, ProductCategory, JobOpening } from './types';

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

export const jobOpenings: JobOpening[] = [
    {
        id: 'electrical-design-engineer-pune',
        title: 'Electrical Design Engineer',
        location: 'Pune',
        shortDescription: 'Design and develop electrical systems for industrial projects.',
        roleDescription: 'As an Electrical Design Engineer, you will be responsible for creating detailed electrical drawings, selecting components, and ensuring compliance with industry standards. You will work closely with the project team to deliver high-quality solutions.',
        responsibilities: [
            'Prepare and review electrical schematics, panel layouts, and BOMs.',
            'Collaborate with project managers to meet project timelines and budgets.',
            'Provide technical support during manufacturing and commissioning.',
            'Ensure designs meet safety and regulatory requirements.'
        ],
        qualifications: [
            'Bachelor\'s degree in Electrical Engineering.',
            '2+ years of experience in electrical design, preferably in the switchgear industry.',
            'Proficiency in AutoCAD Electrical or similar software.',
            'Strong understanding of electrical codes and standards.'
        ]
    },
    {
        id: 'automation-specialist-ahmedabad',
        title: 'Automation Specialist',
        location: 'Ahmedabad',
        shortDescription: 'Implement and support industrial automation and control systems.',
        roleDescription: 'This role involves programming PLCs, configuring HMIs, and commissioning automation projects. You will be a key player in bringing our smart solutions to life for our clients.',
        responsibilities: [
            'Develop and test PLC and HMI software.',
            'Provide on-site support for system installation and startup.',
            'Troubleshoot and resolve automation system issues.',
            'Train clients on the operation and maintenance of new systems.'
        ],
        qualifications: [
            'Degree or diploma in Electrical, Electronics, or Instrumentation Engineering.',
            'Experience with PLCs from brands like Siemens, Rockwell, or Schneider.',
            'Knowledge of industrial communication protocols (e.g., Modbus, Profinet).',
            'Strong problem-solving skills.'
        ]
    },
    {
        id: 'project-coordinator-pune',
        title: 'Project Coordinator',
        location: 'Pune',
        shortDescription: 'Coordinate project activities to ensure timely and successful delivery.',
        roleDescription: 'The Project Coordinator will support the project management team by tracking project milestones, managing documentation, and communicating with stakeholders to ensure projects are delivered on time and within scope.',
        responsibilities: [
            'Maintain project schedules and track deliverables.',
            'Act as a point of contact for project stakeholders.',
            'Prepare project status reports and meeting minutes.',
            'Assist in the allocation of project resources.'
        ],
        qualifications: [
            'Bachelor\'s degree in a related field.',
            'Excellent organizational and communication skills.',
            'Proficiency in project management software (e.g., MS Project).',
            'Ability to work effectively in a team environment.'
        ]
    }
];
