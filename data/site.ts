import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  Fence,
  Landmark,
  Lightbulb,
  MapPinned,
  Road,
  ShieldCheck,
  Sprout,
  Video,
  Zap,
} from "lucide-react";

export type ListingStatus = "Available" | "Selling Fast" | "New Launch";

export type Listing = {
  id: string;
  title: string;
  location: string;
  address: string;
  state: string;
  price: number;
  status: ListingStatus;
  type: "Land" | "Property";
  description: string;
  summary?: string;
  image: {
    src: string;
    alt: string;
    cloudinaryUrl?: string;
  };
  media: ListingMedia[];
  videoUrl?: string;
  slug: string;
};

export type ListingMedia =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
      cloudinaryUrl?: string;
    }
  | {
      id: string;
      type: "video";
      src: string;
      title: string;
      poster?: string;
      cloudinaryUrl?: string;
    };

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const siteConfig = {
  name: "Fosh Estate",
  tagline: "Building Dreams. Creating Legacy.",
  logo: "/media/fosh-estate-logo.png",
  heroImage: "/media/fosh-estate-hero.png",
  phone: "09069375855",
  instagram: "https://www.instagram.com/foshestate",
  website: "https://www.foshestate.com",
  publicDomain: "www.foshestate.com",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const featuredListings: Listing[] = [
  {
    id: "fosh-phase-1",
    title: "Fosh Estate Phase 1",
    location: "Ayetoro, Ogun",
    address: "Ayetoro",
    state: "Ogun",
    price: 6000000,
    status: "Available",
    type: "Land",
    description:
      "A prime estate land opportunity for buyers who want early-positioned plots in a fast-growing corridor.",
    image: {
      src: "/media/estate-phase-1.svg",
      alt: "Architectural land layout placeholder for Fosh Estate Phase 1",
    },
    media: [
      {
        id: "phase-1-master-plan",
        type: "image",
        src: "/media/estate-phase-1.svg",
        alt: "Architectural land layout placeholder for Fosh Estate Phase 1",
      },
      {
        id: "phase-1-road-network",
        type: "image",
        src: "/media/estate-phase-2.svg",
        alt: "Road network placeholder for Fosh Estate Phase 1",
      },
      {
        id: "phase-1-green-area",
        type: "image",
        src: "/media/estate-phase-3.svg",
        alt: "Green area placeholder for Fosh Estate Phase 1",
      },
    ],
    slug: "fosh-estate-phase-1",
  },
  {
    id: "fosh-phase-2",
    title: "Fosh Estate Phase 2",
    location: "Ayetoro, Ogun",
    address: "Ayetoro",
    state: "Ogun",
    price: 4000000,
    status: "Selling Fast",
    type: "Land",
    description:
      "Accessible land in Ayetoro for families and investors planning secure long-term ownership.",
    image: {
      src: "/media/estate-phase-2.svg",
      alt: "Estate road network placeholder for Fosh Estate Phase 2",
    },
    media: [
      {
        id: "phase-2-road-network",
        type: "image",
        src: "/media/estate-phase-2.svg",
        alt: "Estate road network placeholder for Fosh Estate Phase 2",
      },
      {
        id: "phase-2-master-plan",
        type: "image",
        src: "/media/estate-phase-1.svg",
        alt: "Master plan placeholder for Fosh Estate Phase 2",
      },
      {
        id: "phase-2-investment-view",
        type: "image",
        src: "/media/estate-phase-5.svg",
        alt: "Investment view placeholder for Fosh Estate Phase 2",
      },
    ],
    slug: "fosh-estate-phase-2",
  },
  {
    id: "fosh-phase-3",
    title: "Fosh Estate Phase 3",
    location: "Ayetoro, Ogun",
    address: "Ayetoro",
    state: "Ogun",
    price: 4000000,
    status: "Available",
    type: "Land",
    description:
      "A measured entry point into titled estate land with infrastructure-focused planning.",
    image: {
      src: "/media/estate-phase-3.svg",
      alt: "Green estate planning placeholder for Fosh Estate Phase 3",
    },
    media: [
      {
        id: "phase-3-green-planning",
        type: "image",
        src: "/media/estate-phase-3.svg",
        alt: "Green estate planning placeholder for Fosh Estate Phase 3",
      },
      {
        id: "phase-3-road-network",
        type: "image",
        src: "/media/estate-phase-2.svg",
        alt: "Road network placeholder for Fosh Estate Phase 3",
      },
      {
        id: "phase-3-layout",
        type: "image",
        src: "/media/estate-phase-1.svg",
        alt: "Estate layout placeholder for Fosh Estate Phase 3",
      },
    ],
    slug: "fosh-estate-phase-3",
  },
  {
    id: "fosh-phase-4",
    title: "Fosh Estate Phase 4",
    location: "Ashipa, Ogun",
    address: "Ashipa",
    state: "Ogun",
    price: 600000,
    status: "New Launch",
    type: "Land",
    description:
      "A highly affordable launch phase for first-time land buyers and value-focused investors.",
    image: {
      src: "/media/estate-phase-4.svg",
      alt: "Affordable estate phase placeholder for Fosh Estate Phase 4",
    },
    media: [
      {
        id: "phase-4-affordable-launch",
        type: "image",
        src: "/media/estate-phase-4.svg",
        alt: "Affordable estate phase placeholder for Fosh Estate Phase 4",
      },
      {
        id: "phase-4-access-road",
        type: "image",
        src: "/media/estate-phase-2.svg",
        alt: "Access road placeholder for Fosh Estate Phase 4",
      },
      {
        id: "phase-4-plot-layout",
        type: "image",
        src: "/media/estate-phase-1.svg",
        alt: "Plot layout placeholder for Fosh Estate Phase 4",
      },
    ],
    slug: "fosh-estate-phase-4",
  },
  {
    id: "fosh-phase-5",
    title: "Fosh Estate Phase 5",
    location: "Ayetoro, Ogun",
    address: "Ayetoro",
    state: "Ogun",
    price: 4000000,
    status: "Available",
    type: "Land",
    description:
      "A future-facing Ayetoro estate phase built around secure ownership and steady appreciation.",
    image: {
      src: "/media/estate-phase-5.svg",
      alt: "Premium land investment placeholder for Fosh Estate Phase 5",
    },
    media: [
      {
        id: "phase-5-investment-view",
        type: "image",
        src: "/media/estate-phase-5.svg",
        alt: "Premium land investment placeholder for Fosh Estate Phase 5",
      },
      {
        id: "phase-5-green-planning",
        type: "image",
        src: "/media/estate-phase-3.svg",
        alt: "Green estate planning placeholder for Fosh Estate Phase 5",
      },
      {
        id: "phase-5-road-network",
        type: "image",
        src: "/media/estate-phase-2.svg",
        alt: "Road network placeholder for Fosh Estate Phase 5",
      },
    ],
    slug: "fosh-estate-phase-5",
  },
];

export const trustItems: IconItem[] = [
  {
    title: "Documentation guidance",
    description: "Ask the right title and allocation questions before payment.",
    icon: BadgeCheck,
  },
  {
    title: "Growth-market locations",
    description:
      "Estate opportunities focused on markets with active buyer demand.",
    icon: MapPinned,
  },
  {
    title: "Value-focused entry",
    description: "Options for buyers who want land that can appreciate over time.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Inspection support",
    description: "Get site visit guidance before you make a final decision.",
    icon: Fence,
  },
];

export const amenities: IconItem[] = [
  {
    title: "Good road network",
    description: "Access routes that make inspection, development, and daily movement easier.",
    icon: Road,
  },
  {
    title: "24/7 security",
    description: "Security planning that helps buyers feel confident about the estate.",
    icon: ShieldCheck,
  },
  {
    title: "Drainage system",
    description: "Drainage considerations that protect usability through changing seasons.",
    icon: Building2,
  },
  {
    title: "Street lights",
    description: "Lighting plans that support safer movement and a more livable estate.",
    icon: Lightbulb,
  },
  {
    title: "Green areas",
    description: "Open-space thinking that makes the estate feel planned, not random.",
    icon: Sprout,
  },
  {
    title: "Major landmarks",
    description: "Location context that helps buyers understand access and future demand.",
    icon: Landmark,
  },
];

export const serviceItems: IconItem[] = [
  {
    title: "Land selection",
    description:
      "Shortlist estate land based on budget, location, access, and intended use.",
    icon: MapPinned,
  },
  {
    title: "Investment guidance",
    description:
      "Understand pricing, payment expectations, and the long-term value angle.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Inspection coordination",
    description:
      "Book site visits and request the details you need before committing funds.",
    icon: Video,
  },
  {
    title: "Ownership readiness",
    description:
      "Move forward with clearer questions around title, allocation, and next steps.",
    icon: Zap,
  },
];

export const operatingAreas = [
  "Rivers",
  "FCT",
  "Ogun",
] as const;

export type MapLocation = {
  id: string;
  name: string;
  summary: string;
  coordinates: [number, number];
};

export const mapLocations: MapLocation[] = [
  {
    id: "rivers",
    name: "Rivers",
    summary:
      "A southern growth market for buyers watching access, development, and long-term land demand.",
    coordinates: [7.0498, 4.8156],
  },
  {
    id: "fct",
    name: "FCT",
    summary:
      "A capital market for buyers considering future expansion and planned property growth.",
    coordinates: [7.3986, 9.0765],
  },
  {
    id: "ogun",
    name: "Ogun",
    summary:
      "An active land market with estate opportunities around growing residential corridors.",
    coordinates: [3.35, 7.0],
  },
];
