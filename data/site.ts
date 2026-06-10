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
    title: "Secure title",
    description: "Every enquiry is guided by documentation clarity.",
    icon: BadgeCheck,
  },
  {
    title: "Strategic locations",
    description:
      "Land opportunities positioned across active growth corridors.",
    icon: MapPinned,
  },
  {
    title: "High ROI potential",
    description: "Land opportunities selected for long-term value growth.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Gated estate planning",
    description: "Security, access control, and planned infrastructure matter.",
    icon: Fence,
  },
];

export const amenities: IconItem[] = [
  {
    title: "Good road network",
    description: "Access roads planned to make movement practical.",
    icon: Road,
  },
  {
    title: "24/7 security",
    description: "Surveillance and secure access for estate confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Drainage system",
    description: "Infrastructure planning that protects long-term value.",
    icon: Building2,
  },
  {
    title: "Street lights",
    description: "Lighting and electricity access as core estate priorities.",
    icon: Lightbulb,
  },
  {
    title: "Green areas",
    description: "Landscaping and open spaces for livable estate planning.",
    icon: Sprout,
  },
  {
    title: "Major landmarks",
    description: "Locations selected for proximity and practical access.",
    icon: Landmark,
  },
];

export const serviceItems: IconItem[] = [
  {
    title: "Land acquisition",
    description:
      "Guided estate land purchase options for first-time buyers, families, and investors.",
    icon: MapPinned,
  },
  {
    title: "Investment guidance",
    description:
      "Clear pricing, inspection support, and practical advice before a buyer commits.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Media-backed listings",
    description:
      "A future CMS workflow for images, videos, prices, and listing status updates.",
    icon: Video,
  },
  {
    title: "Development readiness",
    description:
      "Estate choices framed around security, access, infrastructure, and appreciation.",
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
    summary: "Southern growth market for land and property opportunities.",
    coordinates: [7.0498, 4.8156],
  },
  {
    id: "fct",
    name: "FCT",
    summary: "Federal capital market for future property expansion.",
    coordinates: [7.3986, 9.0765],
  },
  {
    id: "ogun",
    name: "Ogun",
    summary: "Current market for active estate land opportunities.",
    coordinates: [3.35, 7.0],
  },
];
