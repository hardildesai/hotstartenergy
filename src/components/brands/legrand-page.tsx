'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Brand } from '@/lib/types';
import { CheckCircle, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import React from 'react';
import { ProductRevealCard } from '../ui/product-reveal-card';

const productCategories = [
    {
        category: 'Power',
        products: [
            {
                title: 'DMX³ ACBs (Air Circuit Breaker)',
                description: 'Optimized performance from 630A to 6300A with microprocessor-based protection.',
                details: 'DMX3 ACBs from 630A to 6300A with trip free switches (fixed and draw out versions), microprocessor based protection unit & accessories, Rear terminals and transformation kit and auxiliaries and accessories.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/power/air-circuit-breakers-acb/dmx',
                features: [
                  { title: '630A-6300A', subtitle: 'Current Range' },
                  { title: 'Microprocessor', subtitle: 'Protection' }
                ]
            },
            {
                title: 'DPX³ & DRX MCCBs (Moulded Case Circuit Breakers)',
                description: 'Comprehensive range from 16A to 1250A with various breaking capacities and protection units.',
                details: 'DRX MCCBs from 63A, 75A and 100A in TP and FP frame sizes with 10 KA breaking capacity.\nDPX3 MCCBs from 16A to 1250A in TP and FP frame sizes with 16 KA, 25 KA, 36 KA, 50 KA and 70 KA breaking capacities. Available in TMD, TMA, TMF, Microprocessor based versions with Earth Leakage Modules, Residual Current Relay and Coils.',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/power/moulded-case-circuit-breakers-mccb/dpx',
                features: [
                  { title: '16A-1250A', subtitle: 'Current Range' },
                  { title: 'Up to 70kA', subtitle: 'Breaking Capacity' }
                ]
            },
            {
                title: 'CTX³ Contactors and Mini Contactors',
                description: 'From 6A to 800A with integrated auxiliary contacts for reliable switching.',
                details: '• 6A to 800A in TP and FP frame sizes\n• Integrated auxiliary contacts with screw terminals',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/power/contactors/ctx',
                features: [
                  { title: '6A-800A', subtitle: 'Current Range' },
                  { title: 'TP & FP', subtitle: 'Frame Sizes' }
                ]
            },
            {
                title: 'RTX³ Thermal Overload Relays',
                description: 'Thermal protection from 0.1A to 800A with integrated auxiliary contacts.',
                details: '• 0.1A to 800A\n• Integrated auxiliary contacts with screw terminals\n• Connection plates for bars or lugs\n• DIN Rail mounting option',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/power/thermal-overload-relays/rtx',
                features: [
                  { title: '0.1A-800A', subtitle: 'Current Range' },
                  { title: 'DIN Rail Mount', subtitle: 'Mounting' }
                ]
            },
            {
                title: 'Alpican Capacitors',
                description: 'Compact, self-healing resin and gas-filled capacitors for power factor correction.',
                details: '• ALPX³ resin filled Capacitors standard and heavy duty 440V, 480V & 525V\n• Alpican gas filled Capacitors heavy duty 440V\n• ALPX³ box type Capacitors standard and heavy duty 440V Reactors 7 % duty\n• Compact Design\n• Self healing metallized polypropylene film\n• Over pressure device for disconnection\n• Low energy losses\n• Resistance to high temperature',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/power/capacitors/alpican',
                features: [
                  { title: 'Self-Healing', subtitle: 'Technology' },
                  { title: 'Gas/Resin Filled', subtitle: 'Type' }
                ]
            },
            {
                title: 'PMX Meters',
                description: 'Digital multifunction meters to track, manage, and enhance energy efficiency.',
                details: 'PMX meters can track and manage energy consumption of your facility and by accurate monitoring, enhance their efficiencies. The digital meters are manufactured to the organization closer to an energy efficient future.',
                imageId: 'cat-meters',
                url: 'https://www.legrand.co.in/products/power/measurement-monitoring-and-supervision/pmx-meters',
                features: [
                  { title: 'Digital', subtitle: 'Display' },
                  { title: 'Energy Tracking', subtitle: 'Function' }
                ]
            },
            {
                title: 'Zucchini™ Busbar Trunking System',
                description: 'Advanced solution for distributing power from 25A to 5000A in any building.',
                details: 'Most advanced solution for distributing Low-Medium-Large Power within a building in order to supply the power for the operation of the Light Fittings in Warehouses, Exhibition Halls and wherever speed of installation is required. Available from 25A to 5000A with Electrolytic Copper & Galvanized Aluminum, comes in Air Insulated and Sandwiched with IP 55 protection.',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co.in/products/busbar-trunking-system/zucchini',
                features: [
                  { title: '25A-5000A', subtitle: 'Current Range' },
                  { title: 'IP55', subtitle: 'Protection' }
                ]
            }
        ]
    },
    {
        category: 'Protection',
        products: [
            {
                title: 'DX³ MCBs (Miniature Circuit Breakers)',
                description: '0.5A to 125A capacities with color-coded indication and biconnected terminals.',
                details: '• Integrated label holder\n• Color coded On/Off indication on dolly\n• Biconnected lower terminals\n• IP 20 protected terminals\n• 0.5A to 125A Capacities\n• SP, SPN, DP, TP, TPN and FP frame sizes',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/protection/miniature-circuit-breakers-mcb/dx',
                features: [
                  { title: '0.5A-125A', subtitle: 'Current Range' },
                  { title: 'Multiple Poles', subtitle: 'Configuration' }
                ]
            },
            {
                title: 'DX³ RCCBs (Residual Current Circuit Breakers)',
                description: 'Ensures protection against earth leakage with various sensitivities.',
                details: '• Integrated label holder\n• Color coded on/off indication on dolly\n• IP protected terminal\n• 25A, 40A & 63A Capacity\n• DP & FP frame sizes\n• 30, 100 and 30 mA breaking capacities',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/protection/residual-current-circuit-breakers-rccb/dx',
                 features: [
                  { title: '25A-63A', subtitle: 'Current Range' },
                  { title: 'Earth Leakage', subtitle: 'Protection' }
                ]
            },
            {
                title: 'RCBO & RCD Blocks',
                description: 'Combined MCB/RCCB for comprehensive protection against overload, short-circuits, and earth leakage.',
                details: '• Integrated label holder\n• Color coded on/off indication on dolly\n• Front face indicator for earth leakage fault\n• IP 20 protected terminals.\n• 6-63A Capacities\n• 125A Capacity with RCD block\n• DP and FP frame sizes\n• 30, 100 and 300 mA breaking capacities',
                imageId: 'prod-circuit-breaker',
                url: 'https://www.legrand.co.in/products/protection/rcbo-and-rcd-add-on-blocks/rcbo',
                 features: [
                  { title: '6A-125A', subtitle: 'Current Range' },
                  { title: 'Combined', subtitle: 'Protection' }
                ]
            },
            {
                title: 'Time Switches',
                description: 'Digital and analog time switches for precise, programmable control of circuits.',
                details: '• Programming with precision to the second\n• Switch times visibility\n• Digital and Analog\n• Daily and weekly programmable',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/protection/time-switches',
                 features: [
                  { title: 'Programmable', subtitle: 'Control' },
                  { title: 'Digital/Analog', subtitle: 'Type' }
                ]
            },
            {
                title: 'Surge Protection Devices (SPDs)',
                description: 'Protection for main distribution boards against lightning and overvoltage.',
                details: 'Conforms to EN/IEC 61643-11\n• T1+T2, T1 and T2 Frame sizes\n• SP, SPN, DP, TP, TPN and FP frame sizes\n• Status indicator and remote monitoring of information\nProtection for lightening and over voltage',
                imageId: 'cat-switchgear',
                url: 'https://www.legrand.co.in/products/protection/surge-protection-devices-spd',
                 features: [
                  { title: 'T1+T2', subtitle: 'Class' },
                  { title: 'Overvoltage', subtitle: 'Protection' }
                ]
            }
        ]
    },
    {
        category: 'Distribution Boards',
        products: [
            {
                title: 'Ekinoxe³ SPN Distribution Boards',
                description: 'Elegant and safe DBs for flush or surface mounting, from 4 to 20 ways.',
                details: 'Built as per IEC 61439-3\nSuitable for Flush Mounting and Surface Mounting With 100A Copper Busbar\nWith Neutral bar, Earthbar and Cable ties for Cable management\nFully shrouded Neutral bars\nPrefitted masking sheet\nReversible Door for IP 43 & IP 54 DBs\nIP30, IP43 & IP54 degree of Protection\nIK 08/IK 09 protection against mechanical impact\nOptimum Protection, elegant design\nAvailable in 4, 8, 12, 16, 18 and 20 Ways\nAvailable in Single Door, Double Door – Metal and Acrylic\nColor – Ivory RAL-9016',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co.in/products/distribution-boards/single-pole-and-neutral-spn-dbs/ekinoxe',
                 features: [
                  { title: '4-20 Ways', subtitle: 'Configuration' },
                  { title: 'IP54', subtitle: 'Protection' }
                ]
            },
            {
                title: 'Ekinoxe³ TPN & Phase Selector DBs',
                description: 'Fully insulated busbars and reversible doors for industrial and commercial use.',
                details: 'Built as per IEC 61439-3\nSuitable for Flush Mounting and Surface Mounting\nWith 100A Copper Busbar for each phase\nWith Neutral bar, Earthbar and Cable ties for Cable management\nFully insulated busbar and shrouded Neutral bars\nPrefitted masking sheet\nReversible Door for IP 43 & IP 54 DB\'s\nSupplied with wire set\nIP30, IP43 & IP54 degree of Protection\nIK 08/IK 09 protection against mechanical impact\nOptimum Protection, elegant design\nAvailable in 4, 6, 8 and 12 Ways\nAvailable in Single Door, Double Door – Metal and Acrylic\nColor – Ivory RAL-9016.',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co.in/products/distribution-boards/three-pole-and-neutral-tpn-dbs/ekinoxe',
                 features: [
                  { title: '4-12 Ways', subtitle: 'Configuration' },
                  { title: 'TPN', subtitle: 'Type' }
                ]
            },
            {
                title: 'Ekinox Metra Plug & Socket DBs',
                description: 'Suitable for dedicated protection of appliances like ACs and geysers.',
                details: 'Built as per IEC 61439-3\nSuitable for Flush Mounting and Surface Mounting\nSuitable for protection of appliances like AC, Geyser, etc.\nSupplied with Neutral Links\nProvision for mounting modular devices\nRange: 10A, 20A and 32A\nAvailable in SP, DP, TP and FP frame sizes',
                imageId: 'prod-lv-panel',
                url: 'https://www.legrand.co.in/products/distribution-boards/plug-socket-dbs/ekinox-metra',
                 features: [
                  { title: '10A-32A', subtitle: 'Range' },
                  { title: 'Appliance', subtitle: 'Protection' }
                ]
            }
        ]
    },
    {
        category: 'Wiring Accessories',
        products: [
            {
                title: 'Arteor™',
                description: 'A versatile range with minimalist design, inspired by modern technology. Available in round & square shapes with a rich choice of cover plates.',
                details: 'Arteor offers a wide range of ergonomics and finishes to satisfy the most demanding customers, its minimalist and beveled design is inspired by the most modern technological devices such as flat screens or digital photo frames, creating the impression that the device is floating on the wall. Arteor suits any requirement in terms of design and function for every kind of building from residential to commercial, to the entrance of the hotel room to the bedside table. It is available in two shapes of rockers – Round & Square and in three colors – White, Magnesium & Champagne and with a Rich Choice of Color Cover Plates both in Square and Round with the ranges with following ranges:\n\nSwitches, Push Buttons & Accessories, Dimmers, Fan Regulators & Indian Standard Sockets, USB, Information Outlets, TV Sockets, Skirting Light and Power Strips, Hotel DND & MMR, Keycard, Shaver Socket, Infrared Sensors, Keycode, Time Switch, Audio-Video Sockets, Gas & Flood detector and accessories, Electronic Dimmers, Micro Switches, Splitters & Access Points, Square & Round Cover Plates, Plastic Surface Boxes, Metal Flush Boxes, IP 55 Plexo Boxes & Accessories.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/arteor',
                 features: [
                  { title: 'Minimalist', subtitle: 'Design' },
                  { title: 'Versatile', subtitle: 'Application' }
                ]
            },
            {
                title: 'Myrius Regular™',
                description: 'Simple, sleek, and smooth, Myrius offers a classic black and white look with anti-bacterial properties. Ideal for homes, offices, and healthcare environments.',
                details: 'Simple, Sleek & Smooth, Myrius with its curved edges gives it a distinct and appealing look. Moreover, its minimalistic design makes it look absolutely stunning and desirable. But what makes Myrius truly beautiful is a classic black and white shade that offers an aura of comfort and timelessness. Myrius is also comes in ANTI-BACTERIAL - Ag+ions eliminates the proliferation of bacteria on contact and the smooth design facilitates in reducing dust accumulation, Ideal for agri-food premises and health-care environments. Myrius is available in Two Colors – White & Black Mechanisms with following ranges:\n\nSwitches, Push Buttons & Accessories, Dimmers, Fan Regulators & Indian Standard Sockets, Information Outlets, USB, TV Sockets, Skirting Light and Power Strips, Hotel DND & MMR, Keycard, Shaver Socket, Infrared Sensors, Audio-Video Sockets, Gas & Flood detector and accessories, Electronic Dimmers, Micro Switches, Splitters & Access Points, Cover Plates, Plastic Surface Boxes, Metal Flush Boxes & Antibacterial Switches + Accessories.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/myrius-regular',
                 features: [
                  { title: 'Anti-Bacterial', subtitle: 'Feature' },
                  { title: 'Classic Look', subtitle: 'Design' }
                ]
            },
            {
                title: 'Myrius™',
                description: 'Inspired by you, crafted by us. The Myrius range combines technology and design aesthetics with myriad patterns, including the Motifs series of plates and switches.',
                details: 'Designed with your convenience at the heart, we\'ve combined the best of technology and design aesthetics to create the Myrius range. Explore myriad patterns and designs crafted meticulously, in the Motifs series of plates and switches. Myrius is also comes in ANTI-BACTERIAL - Ag+ions eliminates the proliferation of bacteria on contact and the smooth design facilitates in reducing dust accumulation, Ideal for agri-food premises and health-care environments. Myrius is available in Ten different finishes – Luminar, Sonic Silver, Trinity, Interlude, Stellar, Sonic Silver, Pearl Champagne, Dark Fade, Ice White, Ice Black, Classic White and Two Mechanisms White and Black with following ranges:\n\nSwitches, Push Buttons & Accessories, Dimmers, Fan Regulators & Indian Standard Sockets, Information Outlets, USB, TV Sockets, Skirting Light and Power Strips, Hotel DND & MMR, Keycard, Shaver Socket, Infrared Sensors, Audio-Video Sockets, Gas & Flood detector and accessories, Electronic Dimmers, Micro Switches, Splitters & Access Points, Cover Plates, Plastic Surface Boxes, Metal Flush Boxes..',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/myrius',
                 features: [
                  { title: 'Multiple Finishes', subtitle: 'Design' },
                  { title: 'Motifs Series', subtitle: 'Feature' }
                ]
            },
            {
                title: 'Mylinc™',
                description: 'Reveals smartness in modular switches with a screw-less finish and alignment perfection for ultimate convenience.',
                details: 'Mylinc reveals smartness in modular switches. The Mylinc range incorporates elements of smart design in the minutest of details, like screw-less finish, alignment perfection and various aspects of safety, reliability and convenience. Mylinc Switches available in White color and Plastic Cover Plates available in White, Pearl, Grey, Bronze & Wood finish with following ranges:\n\nSwitches, Dimmers, Energy Sockets, Power Units, TV, RJ11 Telephone Sockets & Accessories, Modular Plates - White & color and surrounds, Flush & Surface Boxes.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/mylinc',
                 features: [
                  { title: 'Screw-less', subtitle: 'Finish' },
                  { title: 'Modular', subtitle: 'Design' }
                ]
            },
            {
                title: 'Lyncus™',
                description: 'Modern, minimalist, and beveled design that suits any requirement from residential to commercial buildings.',
                details: 'Lyncus offers a wide range of ergonomics and finishes to satisfy the most demanding customers, its minimalist and beveled design is inspired by the most modern technological devices such as flat screens or digital photo frames, creating the impression that the device is floating on the wall. Lyncus suits any requirement in terms of design and function for every kind of building from residential to commercial, to the entrance of the hotel room to the bedside table. It is available in two colors – White & Chic Grey and with a Rich Choice of Color Cover Plates.\n\nSwitches, Push Buttons & Accessories, Dimmers, Fan Regulators & Indian Standard Sockets, Information Outlets, USB, TV Sockets, Skirting Light and Power Strips, Hotel DND & MMR, Keycard, Shaver Socket, Infrared Sensors, Audio-Video Sockets, Gas & Flood detector and accessories, Electronic Dimmers, Micro Switches, Splitters & Access Points, Cover Plates, Plastic Surface Boxes, Metal Flush Boxes..',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/lyncus',
                 features: [
                  { title: 'Beveled', subtitle: 'Design' },
                  { title: 'Modern', subtitle: 'Look' }
                ]
            },
            {
                title: 'Allzy™',
                description: 'The all-rounder switch with a wide range of ergonomics and finishes to satisfy the most demanding customers.',
                details: 'Allzy offers a wide range of ergonomics and finishes to satisfy the most demanding customers, its minimalist and beveled design is inspired by the most modern technological devices such as flat screens or digital photo frames, creating the impression that the device is floating on the wall. Allzy suits any requirement in terms of design and function for every kind of building from residential to commercial, to the entrance of the hotel room to the bedside table. It is available in two colors – White & Matt Black and with a Rich Choice of Color Cover Plates.\n\nSwitches, Push Buttons & Accessories, Dimmers, Fan Regulators & Indian Standard Sockets, Information Outlets, USB, TV Sockets, Skirting Light and Power Strips, Hotel DND & MMR, Keycard, Shaver Socket, Infrared Sensors, Audio-Video Sockets, Gas & Flood detector and accessories, Electronic Dimmers, Micro Switches, Splitters & Access Points, Cover Plates, Plastic Surface Boxes, Metal Flush Boxes..',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/allzy',
                 features: [
                  { title: 'All-rounder', subtitle: 'Versatility' },
                  { title: 'Matt Black', subtitle: 'Color' }
                ]
            },
            {
                title: 'Britzy™',
                description: 'The "No Problem Switch" that is versatile and suits any requirement in terms of design and function.',
                details: 'Britzy offers a wide range of ergonomics and finishes to satisfy the most demanding customers, its minimalist and beveled design is inspired by the most modern technological devices such as flat screens or digital photo frames, creating the impression that the device is floating on the wall. Britzy suits any requirement in terms of design and function for every kind of building from residential to commercial, to the entrance of the hotel room to the bedside table. It is available in One color– White and with a Rich Choice of Color Cover Plates.\n\nSwitches, Push Buttons & Accessories, Dimmers, Fan Regulators & Indian Standard Sockets, Information Outlets, TV Sockets, Skirting Light and Power Strips, Hotel DND & MMR, Keycard, Shaver Socket, Infrared Sensors, Clockcon, Keycode, Time Switch, Audio-Video Sockets, Gas & Flood detector and accessories, Electronic Dimmers, Access Points, Cover Plates, Plastic Surface Boxes, Metal Flush Boxes & Accessories.',
                imageId: 'prod-legrand-switch',
                url: 'https://www.legrand.co.in/products/wiring-accessories/britzy',
                 features: [
                  { title: 'No Problem', subtitle: 'Switch' },
                  { title: 'White', subtitle: 'Color' }
                ]
            }
        ]
    },
    {
        category: 'Cable Management',
        products: [
            {
                title: 'CABLOFIL® Wire Mesh Cable Trays',
                description: 'Increase contractor productivity and reduce installation costs. Cablofil creates neat and orderly pathways, ideal for open installations. Available in various materials and sizes.',
                details: 'Increase Contractor productivity; reduce installation costs- with Cablofil. Be it above the Ceiling, on the wall, or under the floor, our components make any installation a snap. Creates neat and orderly pathways, ideal for open installations.\nAvailable in Electro-zinc Plated, Hot Dip Galvanized and Stainless Steel material\n50 x 54 mm, 100 x 54 mm, 150 x 54 mm, 200 x 54 mm, 300 x 54 mm, 400 x 54 mm, 500 x 54 mm, 600 x 54 mm\n50 x 105 mm, 100 x 105 mm, 150 x 105 mm, 200 x 105 mm, 300 x 105 mm, 400 x 105 mm, 500 x 105 mm, 600 x 105 mm\nVDI Structured Cabling\nLCS2, Cat6A, 6, 5e Patch Panels, Cables & Cords, Zone Distribution Boxes, RJ 45 Sockets, LCS2, Modular Panels, Doubler Sockets, Telephone Panels, Wi-Fi Solution, LCS2 Fibre Optic, Audio & Video Sockets, HD 15 Amplifiers, Enclosures& Cabinets',
                imageId: 'cat-cables',
                url: 'https://www.legrand.co.in/products/cable-management/wire-mesh-cable-trays/cablofil',
                 features: [
                  { title: 'Wire Mesh', subtitle: 'Type' },
                  { title: 'Multiple Sizes', subtitle: 'Configuration' }
                ]
            },
            {
                title: 'Pop-Up Boxes',
                description: 'Equipped with a "push and slide" locking system to avoid accidental opening. Designed to be equipped with Arteor/Myrius socket outlets, available in multiple configurations and elegant finishes.',
                details: 'Equipped with "push and slide" locking system to avoid accidental opening by feet\nTo be equipped with Arteor/Myrius socket outlets\nFlush-mounting boxes for concrete floors or the kits for raised access floors\nAvailable in 3M, 4M, 6M and 8M configurations\nVariables: Aluminum Matt Finish, Brushed Brass, Brushed Stainless Steel finish, Matt Black, Glossy White.',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co.in/products/cable-management/pop-up-boxes',
                 features: [
                  { title: 'Pop-Up', subtitle: 'Type' },
                  { title: 'Floor Mounted', subtitle: 'Application' }
                ]
            },
            {
                title: 'Floor Boxes',
                description: 'Durable solutions for raised floors, screed, tiles, and marbles. Available in various sizes with options for heavy-duty applications and accessories for fitting wiring accessories.',
                details: 'For raised floor, screed floor, tiles and marbles\nSize: 225 x 225 mm and 265 x 265 mm Boxes\nHeavy duty floor applications also available\nAccessories for fitting Wiring Accessories.',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co.in/products/cable-management/floor-boxes',
                 features: [
                  { title: 'Heavy Duty', subtitle: 'Application' },
                  { title: 'Multiple Sizes', subtitle: 'Configuration' }
                ]
            },
            {
                title: 'Raceways and Junction Boxes',
                description: 'PVC and Galvanized sheet raceways confirming to EN 50 085-2-2, compatible with Cat.6 cabling systems. Supplied in various sizes with matching junction boxes.',
                details: 'Confirms to EN 50 085 - 2 - 2\nRaceways are made from PVC and Galvanized sheet.\nCompatible with Cat.6 structured cabling system.\nSizes: 50, 75, 100, 150, 225 and 300 mm width – 25 mm and 38 mm height\nSupplied in 2.44m length size\nJunction Boxes size:\n150 x 150 x 65-90 mm, 225 x 225 x 65-90 mm, 300 x 300 x 65-90 mm, 400 x 400 x 65-90 mm\nSupplied with Base and Cover Plate',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co.in/products/cable-management/raceways-and-junction-boxes',
                 features: [
                  { title: 'PVC/Galvanized', subtitle: 'Material' },
                  { title: 'Cat.6', subtitle: 'Compatible' }
                ]
            },
            {
                title: 'DLP U-PVC & Aluminium Trunking Systems',
                description: 'Flexible trunking systems with base, covers, partitions, and finishing accessories. Suitable for mounting Arteor wiring accessories in a variety of sizes.',
                details: 'DLP U-PVC Trunking System\nBase, Covers, Partitions, Finishing accessories and mounting wiring accessories\nSuitable for mounting Arteor Wiring Accessories\nSizes: 32 x 12.5 mm, 32 x 16 mm, 32 x 20 mm, 80 x 50 mm, 100 x 50 mm, 105 x 50 mm, 150 x 50 mm, 190 x 50 mm\n\nDLP Aluminium Trunking System\nBase, Covers, Partitions, Finishing accessories and mounting wiring accessories\nSuitable for mounting Arteor Wiring Accessories\nSizes: 100 x 50 mm, 105 x 50 mm, 150 x 50 mm, 190 x 50 mm',
                imageId: 'cat-busbar',
                url: 'https://www.legrand.co.in/products/cable-management/trunking-and-branching/dlp-u-pvc-trunking',
                 features: [
                  { title: 'Flexible', subtitle: 'System' },
                  { title: 'PVC/Aluminium', subtitle: 'Material' }
                ]
            }
        ]
    },
     {
        category: 'Plugs & Socket',
        products: [
            {
                title: 'P-17 Tempra Plug, Sockets',
                description: 'Built as per IEC 61439-3, these include surface mounting sockets, panel mounted angle sockets, mobile sockets, and straight plugs. Available from 16A to 125A in various frame sizes with IP44 and IP66/67 protection.',
                details: 'Built as per IEC 61439-3\nSurface mounting sockets\nPanel mounted angle sockets\nMobile sockets\nStraight plugs\nRange: 16A, 32A, 63A and 125A\nAvailable in DP, TP and FP frame sizes\nIP44 and IP66/67 degree of Protection',
                imageId: 'prod-legrand-socket',
                url: 'https://www.legrand.co.in/products/plugs-sockets/p17-tempra-pro',
                 features: [
                  { title: 'Industrial', subtitle: 'Application' },
                  { title: 'IP67', subtitle: 'Protection' }
                ]
            }
        ]
    }
];

type Product = typeof productCategories[0]['products'][0];

const whyLegrand = [
  'Global specialist in electrical and digital building infrastructures.',
  'Pioneer of Miniature Circuit Breakers in India.',
  'Solutions that offer superior technology and high aesthetic value.',
  'Wide range of products for residential, commercial, and industrial sectors.',
];

export function LegrandPage({ brand }: { brand: Brand }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'legrand-hero');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleEnquire = () => {
    // In a real app, this would likely open a contact form or lead to a quote page
    window.location.href = '/contact';
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Legrand smart home solutions"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4 flex flex-col items-center">
          <Image src={brand.logo} alt={`${brand.name} logo`} width={160} height={60} className="h-20 w-auto mb-6 dark:invert" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Excellence in Innovation, Aesthetics, and Engineering
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Global specialist in electrical and digital building infrastructures, offering innovative, high-quality solutions for all sectors.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The Legrand Experience Center
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We invite you to visit our Legrand Experience Center to witness the best of Legrand. This helps you choose the right products by experiencing them firsthand, appreciating the innovation, aesthetics, and engineering that define the Legrand Group.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us to Visit</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Product Portfolio */}
      <Dialog>
        {productCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/20' : 'bg-background'}`}>
                <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 justify-center">
                    {category.products.map((product, productIndex) => {
                        const image = PlaceHolderImages.find(p => p.id === product.imageId);
                        
                        return (
                           <ProductRevealCard
                                key={productIndex}
                                name={product.title}
                                image={image?.imageUrl}
                                description={product.details}
                                category={category.category}
                                features={product.features}
                                onAdd={handleEnquire}
                                onViewDetails={() => setSelectedProduct(product)}
                                className="w-full h-full"
                           />
                        )
                    })}
                </div>
                </div>
            </section>
        ))}

        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>{selectedProduct?.title}</DialogTitle>
            <DialogDescription>
                {selectedProduct?.description}
            </DialogDescription>
            </DialogHeader>
            <div className="py-4 whitespace-pre-wrap text-sm text-muted-foreground">
                {selectedProduct?.details}
            </div>
            <DialogFooter>
                <Button asChild>
                    <Link href={selectedProduct?.url || '/'} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Legrand Website
                    </Link>
                </Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>


      {/* Why Choose Legrand */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Why Choose Legrand?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    For decades, Legrand has been at the forefront of the electrical industry. Their enriched understanding of customer needs helps them design products that deliver superior technology and meet high aesthetic standards.
                </p>
                <ul className="space-y-3 pt-2 inline-grid sm:grid-cols-2 gap-x-12 gap-y-3 text-left">
                {whyLegrand.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-16 md:py-24 text-center bg-gray-50/50 dark:bg-gray-900/20 border-t">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Get a Quote for Legrand Products
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    As authorized partners, we provide competitive pricing and expert support for the entire Legrand portfolio. Contact us for your project requirements.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/quote?product=legrand">Request a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>

    </div>
  );
}
