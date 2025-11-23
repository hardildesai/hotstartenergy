
import type { Product, ProductCategory, JobOpening } from './types';

export const products: Product[] = [
  {
    id: 'legrand-dmx3-acb',
    name: 'DMX³ ACB (Air Circuit Breaker)',
    brand: 'Legrand',
    category: 'Power',
    description: 'Optimized performance from 630A to 6300A with microprocessor-based protection.',
    imageId: 'prod-circuit-breaker',
    specifications: {
      "Current Range": "630A to 6300A",
      "Protection": "Microprocessor-based",
      "Type": "Air Circuit Breaker"
    },
    url: 'https://www.legrand.co.in/products/power/air-circuit-breakers-acb/dmx'
  },
  {
    id: 'legrand-dpx3-drx-mccb',
    name: 'DPX³ & DRX MCCBs',
    brand: 'Legrand',
    category: 'Power',
    description: 'Comprehensive range from 16A to 1250A with various breaking capacities and protection units.',
    imageId: 'prod-circuit-breaker',
    specifications: {
      "Current Range": "16A to 1250A",
      "Type": "Moulded Case Circuit Breakers",
    },
    url: 'https://www.legrand.co.in/products/power/moulded-case-circuit-breakers-mccb/dpx'
  },
  {
    id: 'kei-hv-cable',
    name: 'HV Power Cable',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Built for high performance, KEI HV wire ensures safe and efficient power transmission.',
    imageId: 'kei-hv-cable',
    specifications: {
      "Voltage": "High Voltage",
      "Application": "Industrial, Commercial",
    },
  },
  {
    id: 'socomec-countis-meter',
    name: 'Countis Energy Meter',
    brand: 'Socomec',
    category: 'Panel Meters & Energy Meters',
    description: 'Displays energy and power consumed (kWh and kW). Suitable for single-phase load metering.',
    imageId: 'socomec-countis-meter',
    specifications: {
      "Measures": "kWh, kW",
      "Phase": "Single-phase",
      "Max Current": "80A",
    },
  },
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
  // KEI Industries Products
  {
    id: 'kei-ehv-cable',
    name: 'Extra High Voltage (EHV) Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'High-performance EHV cables (66kV to 400kV) manufactured with German Troester CCV lines and Swiss Brugg technology.',
    imageId: 'kei-hv-cable',
    specifications: {
      Voltage: '66kV - 400kV',
      Technology: 'Dry Cured (CDCC)',
      Conductor: 'Cu/Al up to 3000 sq.mm',
    },
  },
  {
    id: 'kei-lv-power-cable',
    name: 'Low Voltage Power Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Reliable LV distribution cables with PVC or XLPE insulation, ensuring safety and efficiency for industrial and commercial use.',
    imageId: 'kei-hv-cable',
    specifications: {
      Voltage: 'Up to 1.1 kV',
      Insulation: 'PVC / XLPE',
      Standards: 'IS:1554, IS:7098',
    },
  },
  {
    id: 'kei-banfire-zhfr',
    name: 'BanFire-ZHFR House Wires',
    brand: 'KEI Cables',
    category: 'Home Solution',
    description: 'Zero Halogen Flame Retardant wires that emit negligible smoke and no toxic gases, ensuring maximum safety for homes and public buildings.',
    imageId: 'kei-hv-cable',
    specifications: {
      Type: 'ZHFR (Zero Halogen)',
      'Temp Index': 'Min 250°C',
      'Oxygen Index': 'Min 29%',
    },
  },
  {
    id: 'kei-homecab-fr',
    name: 'HomeCab-FR House Wires',
    brand: 'KEI Cables',
    category: 'Home Solution',
    description: 'Flame Retardant Lead-Free wires designed to prevent ageing and cracking, ideal for residential safety.',
    imageId: 'kei-hv-cable',
    specifications: {
      Type: 'Flame Retardant (FR)',
      Feature: 'Lead-Free',
      Application: 'Residential',
    },
  },
  {
    id: 'kei-control-cable',
    name: 'Control Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Flexible control cables with up to 61 cores for precise signal transmission in automation and industrial machinery.',
    imageId: 'kei-hv-cable',
    specifications: {
      Voltage: 'Up to 1100V',
      Cores: 'Up to 61',
      Protection: 'Anti-interference',
    },
  },
  {
    id: 'kei-instrumentation-cable',
    name: 'Instrumentation Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Shielded cables for noise-free transmission of sensitive signals in process industries like refineries and power plants.',
    imageId: 'kei-hv-cable',
    specifications: {
      Shielding: 'Individual/Overall',
      Type: 'Pair/Triad',
      Application: 'Process Control',
    },
  },
  {
    id: 'kei-fire-survival-cable',
    name: 'Fire Survival Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Circuit integrity cables with Mica Tape barrier that continue to operate even during a fire (950°C for 3 hours).',
    imageId: 'kei-hv-cable',
    specifications: {
      Standard: 'BS 6387 CWZ',
      'Temp Resistance': '950°C',
      Feature: 'Mica Tape',
    },
  },
  {
    id: 'kei-solar-cable',
    name: 'Solar DC Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'UV and ozone resistant cables engineered for a 30-year service life in harsh outdoor solar installations.',
    imageId: 'kei-hv-cable',
    specifications: {
      Voltage: '1.5 kV DC',
      Life: '30 Years',
      Feature: 'Electron Beam Cross-Linked',
    },
  },
  {
    id: 'kei-ev-cable',
    name: 'EV Charging Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Flexible and durable charging cables with TPU sheath, resistant to oil, abrasion, and cold temperatures.',
    imageId: 'kei-hv-cable',
    specifications: {
      Standard: 'EN 50620 / IEC 62893',
      Sheath: 'TPU',
      Flexibility: 'Class 5',
    },
  },
  {
    id: 'kei-rubber-cable',
    name: 'Elastomeric (Rubber) Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Heavy-duty rubber cables for dynamic applications like mining, windmills, and cranes where flexibility and toughness are paramount.',
    imageId: 'kei-hv-cable',
    specifications: {
      Material: 'EPDM / PCP / Silicone',
      'Temp Range': '-55°C to +180°C',
      Application: 'Mining, Wind',
    },
  },
  {
    id: 'kei-marine-cable',
    name: 'Marine & Offshore Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Lightweight, fire-safe, and mud-resistant cables approved for use on ships and offshore platforms.',
    imageId: 'kei-hv-cable',
    specifications: {
      Standard: 'IEC 60092 / NEK 606',
      Feature: 'Mud Resistant',
      Application: 'Offshore',
    },
  },
  {
    id: 'kei-submersible-cable',
    name: 'Submersible Pump Cables',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Water-resistant flat cables and winding wires designed for reliable power delivery to submersible pumps.',
    imageId: 'kei-hv-cable',
    specifications: {
      Type: '3-Core Flat',
      Feature: 'Water Resistant',
      Application: 'Agriculture',
    },
  },
  {
    id: 'kei-ss-wire',
    name: 'Stainless Steel Wires',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'High-quality stainless steel wires for welding (MIG/TIG), springs, and cold heading applications.',
    imageId: 'kei-hv-cable',
    specifications: {
      Grades: '304, 316L, 308L',
      Application: 'Welding, Springs',
      Finish: 'Matte/Bright',
    },
  },
  {
    id: 'kei-lan-cable',
    name: 'LAN Cables (CAT 6)',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'High-speed UTP cables with central spline for reduced crosstalk, ensuring reliable Gigabit Ethernet performance.',
    imageId: 'kei-hv-cable',
    specifications: {
      Type: 'CAT 6 UTP',
      Frequency: '250 MHz',
      Application: 'Networking',
    },
  },
  {
    id: 'kei-mvcc',
    name: 'Medium Voltage Covered Conductors',
    brand: 'KEI Cables',
    category: 'Cables & Wires',
    description: 'Covered overhead conductors that prevent faults from momentary contact with trees or wildlife, improving grid reliability.',
    imageId: 'kei-hv-cable',
    specifications: {
      Voltage: 'Medium Voltage',
      Feature: 'Track Resistant',
      Benefit: 'Reduced Faults',
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
