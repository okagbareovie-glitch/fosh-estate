import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-08";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const states = [
  {
    _id: "state-ogun",
    name: "Ogun",
    slug: { _type: "slug", current: "ogun" },
    summary: "Active land market for current Fosh Estate opportunities.",
    featured: true,
    orderRank: 10,
  },
  {
    _id: "state-lagos",
    name: "Lagos",
    slug: { _type: "slug", current: "lagos" },
    summary: "Primary commercial market for buyers and investor enquiries.",
    featured: true,
    orderRank: 20,
  },
  {
    _id: "state-rivers",
    name: "Rivers",
    slug: { _type: "slug", current: "rivers" },
    summary: "Southern growth market for land and property opportunities.",
    featured: true,
    orderRank: 30,
  },
  {
    _id: "state-fct",
    name: "FCT",
    slug: { _type: "slug", current: "fct" },
    summary: "Federal capital market for future property expansion.",
    featured: true,
    orderRank: 40,
  },
  {
    _id: "state-enugu",
    name: "Enugu",
    slug: { _type: "slug", current: "enugu" },
    summary: "Emerging eastern market for future land opportunities.",
    featured: true,
    orderRank: 50,
  },
];

const listings = [
  {
    _id: "listing-fosh-estate-phase-1",
    title: "Fosh Estate Phase 1",
    slug: { _type: "slug", current: "fosh-estate-phase-1" },
    address: "Ayetoro",
    state: {
      _type: "reference",
      _ref: "state-ogun",
    },
    price: 6000000,
    status: "Available",
    type: "Land",
    description:
      "A prime estate land opportunity for buyers who want early-positioned plots in a fast-growing corridor.",
    summary:
      "Prime estate land for buyers who want an early position in Ayetoro.",
    featured: true,
    orderRank: 10,
  },
  {
    _id: "listing-fosh-estate-phase-2",
    title: "Fosh Estate Phase 2",
    slug: { _type: "slug", current: "fosh-estate-phase-2" },
    address: "Ayetoro",
    state: {
      _type: "reference",
      _ref: "state-ogun",
    },
    price: 4000000,
    status: "Selling Fast",
    type: "Land",
    description:
      "Accessible land in Ayetoro for families and investors planning secure long-term ownership.",
    summary: "Accessible Ayetoro land for families and long-term investors.",
    featured: true,
    orderRank: 20,
  },
  {
    _id: "listing-fosh-estate-phase-3",
    title: "Fosh Estate Phase 3",
    slug: { _type: "slug", current: "fosh-estate-phase-3" },
    address: "Ayetoro",
    state: {
      _type: "reference",
      _ref: "state-ogun",
    },
    price: 4000000,
    status: "Available",
    type: "Land",
    description:
      "A measured entry point into titled estate land with infrastructure-focused planning.",
    summary: "A measured entry point into titled estate land in Ayetoro.",
    featured: true,
    orderRank: 30,
  },
  {
    _id: "listing-fosh-estate-phase-4",
    title: "Fosh Estate Phase 4",
    slug: { _type: "slug", current: "fosh-estate-phase-4" },
    address: "Ashipa",
    state: {
      _type: "reference",
      _ref: "state-ogun",
    },
    price: 600000,
    status: "New Launch",
    type: "Land",
    description:
      "A highly affordable launch phase for first-time land buyers and value-focused investors.",
    summary: "Affordable Ashipa launch phase for first-time land buyers.",
    featured: true,
    orderRank: 40,
  },
  {
    _id: "listing-fosh-estate-phase-5",
    title: "Fosh Estate Phase 5",
    slug: { _type: "slug", current: "fosh-estate-phase-5" },
    address: "Ayetoro",
    state: {
      _type: "reference",
      _ref: "state-ogun",
    },
    price: 4000000,
    status: "Available",
    type: "Land",
    description:
      "A future-facing Ayetoro estate phase built around secure ownership and steady appreciation.",
    summary: "Future-facing Ayetoro estate land for secure ownership.",
    featured: true,
    orderRank: 50,
  },
];

const sharedAmenities = [
  "Good Road Network",
  "24/7 Security & Surveillance",
  "Drainage System",
  "Street Lights & Electricity",
  "Gated & Secured Estate",
  "Green Areas & Landscaping",
  "Proximity to Major Landmarks",
];

const sharedSellingPoints = [
  "Strategic Location",
  "Secure Title",
  "High Return on Investment",
  "Perfect for Living & Investment",
  "Ideal for Individuals & Families",
  "Great for Investors",
];

for (const state of states) {
  await client.createOrReplace({
    _type: "state",
    ...state,
  });
  console.log(`Seeded ${state.name}`);
}

for (const listing of listings) {
  await client.createOrReplace({
    _type: "listing",
    ...listing,
    amenities: sharedAmenities,
    sellingPoints: sharedSellingPoints,
  });
  console.log(`Seeded ${listing.title}`);
}

console.log("Sanity seed complete.");
