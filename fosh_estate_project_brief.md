# Fosh Estate — Website Project Brief

## Client Overview

- **Business Name:** Fosh Estate
- **Tagline:** Building Dreams. Creating Legacy.
- **Industry:** Real Estate — Land & Property Sales
- **Website:** www.foshestate.com
- **Instagram:** @foshestate
- **Phone:** 09069375855
- **Slogan themes:** "Secure. Prime. Profitable.", "Own a Piece of Value", "Build Your Future. Secure Your Legacy."

### Areas of Operation
Lagos, Port Harcourt, Abuja

### Current Listings (from client flyer)
| Phase | Location | Price |
|---|---|---|
| Fosh Estate Phase 1 | Ayetoro | ₦6M |
| Fosh Estate Phase 2 | Ayetoro | ₦4M |
| Fosh Estate Phase 3 | Ayetoro | ₦4M |
| Fosh Estate Phase 4 | Ashipa | ₦600K |
| Fosh Estate Phase 5 | Ayetoro | ₦4M |

### Amenities (from flyer)
Good Road Network, 24/7 Security & Surveillance, Drainage System, Street Lights & Electricity, Gated & Secured Estate, Green Areas & Landscaping, Proximity to Major Landmarks

### Selling Points
- Strategic Location
- Secure Title
- High Return on Investment
- Gated & Secured
- Perfect for Living & Investment
- Ideal for Individuals & Families
- Great for Investors

---

## Developer

- **Name:** Alexander Olomukoro
- **Phone:** 09163967098

---

## Project Summary

A professional 4-page real estate website with a full CMS so the client can independently manage property listings (add, edit, remove) including image and video uploads — without needing the developer every time.

---

## Pages

| Page | Content |
|---|---|
| **Home** | Hero section, featured listings preview, services summary, CTA |
| **About** | Business story, values, areas of operation |
| **Properties** | Dynamic listings pulled from CMS — images, videos, pricing, enquiry CTA |
| **Contact** | Contact form, WhatsApp button, phone number, address |

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| **Frontend** | Next.js (App Router) | Static export not applicable — dynamic CMS data |
| **CMS** | Sanity | Admin dashboard auto-generated from schema; client manages listings |
| **Media** | Cloudinary | Handles image AND video uploads; free tier sufficient for now |
| **Hosting** | Render | Free tier for deployment |
| **Styling** | TailwindCSS | Brand colors: dark navy + electric blue |

### Sanity Schema (planned)
```js
// listing.ts
{
  name: 'listing',
  title: 'Property Listing',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'price', type: 'number' },
    { name: 'location', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    { name: 'videoUrl', type: 'string' },  // Cloudinary URL stored as string
    { name: 'type', type: 'string' },      // e.g. Land or Property
    { name: 'status', type: 'string' },    // e.g. Available, Sold
  ]
}
```

> **Note on video:** Sanity's free tier has limited storage and no video transcoding. Videos will be uploaded to Cloudinary and the URL stored as a string field in Sanity.

---

## Brand & Design Direction

- **Primary colors:** Dark navy (`#0A0F2E` range) + Electric blue (`#1A6BFF` range)
- **Feel:** Premium, trustworthy, modern — not flashy
- **Reference:** Client's existing Instagram @foshestate and marketing flyer
- **Logo:** To be supplied by client (PNG or SVG preferred)

---

## Hosting & Infrastructure Notes

All services on free tiers — running cost is ₦0/month for now.

| Service | Tier | Limit to watch |
|---|---|---|
| Sanity | Free | 20GB asset storage |
| Cloudinary | Free | 25GB storage, 25GB bandwidth/month |
| Render | Free | Spins down after inactivity (cold start) |

> As the business grows and traffic increases, paid upgrades will be recommended. Developer will advise client in advance.

---

## Account & Credential Policy

- All third-party accounts (Sanity, Cloudinary, Render, domain) must be created using the **client's business email**
- Developer is invited as collaborator/admin during the build
- Developer access is removed at project handoff
- A **handoff document** will be provided at delivery listing all services, login emails, and relevant notes

---

## Inclusions

- Fully responsive design (mobile, tablet, desktop)
- Next.js frontend — fast and SEO-friendly
- Sanity CMS admin dashboard for independent listing management
- Image and video support via Cloudinary
- WhatsApp integration on Contact page
- Free deployment to Render with live URL on delivery
- Brand-consistent design based on client's existing identity
- 2 rounds of revisions post-delivery

## Exclusions

- Domain name registration (client to confirm if already owned)
- Logo design or graphic assets (client to supply)
- Additional pages beyond the agreed 4
- Paid hosting upgrades (free tiers only in current scope)
- Additional revisions beyond 2 rounds (₦10,000/round)

---

## Financials

| Milestone | Amount | When |
|---|---|---|
| 50% Deposit | ₦75,000 | Before work begins |
| 50% Balance | ₦75,000 | On delivery |
| **Total** | **₦150,000** | — |

---

## Timeline

**7 working days** from deposit receipt + all assets received from client.

Timeline starts only when both conditions are met. Asset delays extend deadline.

---

## Assets Needed from Client Before Work Starts

- [ ] Logo file (PNG or SVG)
- [ ] Property photos for listings
- [ ] Property videos (if any ready)
- [ ] About/bio copy or approval of developer-written copy
- [ ] Confirmation on domain name (owned or not)
- [ ] Business email to create third-party accounts

---

## Outstanding Questions

- Does the client already own a domain name?
- Exact services offered (land sales, property sales, rentals, consultations?)
- How many listings to populate at launch?

---

## Project Status

- [x] Scope agreed
- [x] Price agreed — ₦150,000
- [x] Contract sent (v3)
- [ ] Deposit received
- [ ] Assets received from client
- [ ] Build started

