import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Fence,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import type { Listing } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";
import { PropertyMediaCarousel } from "./property-media-carousel";

const detailHighlights = [
  "Title questions to ask",
  "Inspection before payment",
  "Access and estate planning",
  "Buyer guidance available",
];

const detailAmenities = [
  { label: "Road access and movement", icon: Building2 },
  { label: "Estate access and security", icon: Fence },
  { label: "Lighting and power expectations", icon: Lightbulb },
  { label: "Green areas and estate layout", icon: Sprout },
  { label: "Security planning to confirm", icon: ShieldCheck },
  { label: "Drainage and site conditions", icon: BadgeCheck },
];

export function PropertyDetailHero({ listing }: { listing: Listing }) {
  return (
    <section className="pdh-section">
      <style>{`
        .pdh-section {
          position: relative;
          background: var(--navy, #000818);
          overflow: hidden;
          padding: clamp(112px, 13vw, 160px) 0 clamp(56px, 8vw, 80px);
        }

        .pdh-section::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(26, 107, 255, 0.25) 30%,
            rgba(201, 168, 76, 0.2) 50%,
            rgba(26, 107, 255, 0.25) 70%,
            transparent 100%
          );
        }

        .pdh-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle, rgba(109, 167, 255, 0.09) 1px, transparent 1px
          );
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .pdh-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.14) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .pdh-inner {
          position: relative;
          z-index: 1;
        }

        .pdh-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 18px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.72);
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 36px;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }

        .pdh-back:hover {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .pdh-title-grid {
          display: grid;
          gap: 32px;
          margin-bottom: 40px;
        }

        @media (min-width: 1024px) {
          .pdh-title-grid {
            grid-template-columns: 1fr 400px;
            gap: 48px;
            align-items: start;
          }
        }

        .pdh-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #c9a84c;
          margin-bottom: 18px;
        }

        .pdh-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 16px;
        }

        .pdh-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.08;
          color: #fff;
          margin: 0 0 16px;
        }

        .pdh-location {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.52);
          margin-bottom: 18px;
        }

        .pdh-location svg {
          color: #6da7ff;
          flex-shrink: 0;
        }

        .pdh-description {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.52);
          max-width: 56ch;
          margin: 0;
        }

        .pdh-aside {
          border-radius: 14px;
          border: 1px solid rgba(26, 107, 255, 0.2);
          background: rgba(26, 107, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 28px;
        }

        @media (min-width: 1024px) {
          .pdh-aside {
            position: sticky;
            top: 100px;
          }
        }

        .pdh-price-label {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.42);
          margin: 0 0 8px;
        }

        .pdh-price {
          font-family: var(--font-display);
          font-size: clamp(1.875rem, 4vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 6px;
        }

        .pdh-price-rule {
          display: block;
          width: 28px;
          height: 2px;
          background: #c9a84c;
          margin: 14px 0 20px;
        }

        .pdh-facts {
          display: grid;
          gap: 14px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          margin-bottom: 20px;
        }

        .pdh-fact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .pdh-fact-label {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.42);
        }

        .pdh-fact-value {
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          text-align: right;
        }

        .pdh-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 52px;
          background: #1a6bff;
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .pdh-cta:hover {
          background: #2d7bff;
        }

        .pdh-media-grid {
          display: grid;
          gap: 16px;
        }

        @media (min-width: 1024px) {
          .pdh-media-grid {
            grid-template-columns: 1.4fr 0.6fr;
            gap: 20px;
            align-items: start;
          }
        }

        .pdh-checklist {
          display: grid;
          gap: 12px;
        }

        .pdh-check-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.02);
        }

        .pdh-check-number {
          font-family: var(--font-display);
          font-size: 1.625rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: rgba(255, 255, 255, 0.1);
          line-height: 1;
          flex-shrink: 0;
          width: 40px;
        }

        .pdh-check-text {
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          line-height: 1.3;
        }

        @media (prefers-reduced-motion: reduce) {
          .pdh-back,
          .pdh-cta {
            transition: none;
          }
        }
      `}</style>

      <div className="pdh-dot-grid" aria-hidden="true" />
      <div className="pdh-glow" aria-hidden="true" />

      <div className="pdh-inner container-page">
        <Link href="/properties" className="pdh-back">
          <ArrowLeft aria-hidden size={16} />
          Back to properties
        </Link>

        <div className="pdh-title-grid">
          <div>
            <span className="pdh-rule" aria-hidden="true" />
            <p className="pdh-eyebrow">
              {listing.status} &middot; {listing.type}
            </p>
            <h1 className="pdh-title">{listing.title}</h1>
            <p className="pdh-location">
              <MapPin aria-hidden size={16} />
              {listing.location}
            </p>
            <p className="pdh-description">{listing.description}</p>
          </div>

          <aside className="pdh-aside">
            <p className="pdh-price-label">Listed price</p>
            <p className="pdh-price">{formatNaira(listing.price)}</p>
            <span className="pdh-price-rule" aria-hidden="true" />
            <div className="pdh-facts">
              <div className="pdh-fact">
                <span className="pdh-fact-label">Area / address</span>
                <span className="pdh-fact-value">{listing.address}</span>
              </div>
              <div className="pdh-fact">
                <span className="pdh-fact-label">State</span>
                <span className="pdh-fact-value">{listing.state}</span>
              </div>
              <div className="pdh-fact">
                <span className="pdh-fact-label">Status</span>
                <span className="pdh-fact-value">{listing.status}</span>
              </div>
              <div className="pdh-fact">
                <span className="pdh-fact-label">Type</span>
                <span className="pdh-fact-value">{listing.type}</span>
              </div>
            </div>
            <a
              href={createWhatsAppUrl(
                `Hello Fosh Estate, I want more details and inspection information for ${listing.title} in ${listing.location}.`
              )}
              className="pdh-cta"
            >
              Ask about this land
              <ArrowRight aria-hidden size={17} />
            </a>
          </aside>
        </div>

        <div className="pdh-media-grid">
          <PropertyMediaCarousel listing={listing} />
          <div className="pdh-checklist">
            {detailHighlights.map((highlight, index) => (
              <div key={highlight} className="pdh-check-item">
                <span className="pdh-check-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pdh-check-text">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PropertyDetailSections({ listing }: { listing: Listing }) {
  return (
    <>
      <section className="pds-review-section">
        <style>{`
          .pds-review-section {
            position: relative;
            background: var(--background, #f8f9ff);
            padding: clamp(72px, 9vw, 120px) 0;
          }

          .pds-review-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(26, 107, 255, 0.18) 30%,
              rgba(26, 107, 255, 0.18) 70%,
              transparent 100%
            );
          }

          .pds-review-grid {
            display: grid;
            gap: 48px;
          }

          @media (min-width: 1024px) {
            .pds-review-grid {
              grid-template-columns: 0.78fr 1.22fr;
              gap: 72px;
              align-items: start;
            }
          }

          .pds-review-rule {
            display: block;
            width: 28px;
            height: 2px;
            background: #c9a84c;
            margin-bottom: 16px;
          }

          .pds-review-eyebrow {
            font-family: var(--font-label);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--blue, #1a6bff);
            margin: 0 0 14px;
          }

          .pds-review-heading {
            font-family: var(--font-display);
            font-size: clamp(1.875rem, 3.6vw, 3rem);
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.12;
            color: var(--navy, #000818);
            margin: 0 0 18px;
          }

          .pds-review-body {
            font-family: Inter, sans-serif;
            font-size: 1rem;
            line-height: 1.78;
            color: var(--muted, #526070);
            margin: 0;
            max-width: 44ch;
          }

          .pds-amenity-grid {
            display: grid;
            gap: 0;
            border-top: 1px solid var(--line, #d8e0ef);
          }

          @media (min-width: 640px) {
            .pds-amenity-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          .pds-amenity-item {
            display: grid;
            grid-template-columns: 56px 1fr;
            gap: 16px;
            padding: 28px 0;
            border-bottom: 1px solid var(--line, #d8e0ef);
            align-items: center;
          }

          @media (min-width: 640px) {
            .pds-amenity-item:nth-child(odd) {
              padding-right: 24px;
            }

            .pds-amenity-item:nth-child(even) {
              padding-left: 24px;
              border-left: 1px solid var(--line, #d8e0ef);
            }

            .pds-amenity-item:nth-last-child(-n+2) {
              border-bottom: none;
            }
          }

          @media (max-width: 639px) {
            .pds-amenity-item:last-child {
              border-bottom: none;
            }
          }

          .pds-amenity-number {
            font-family: var(--font-display);
            font-size: clamp(1.5rem, 3vw, 2.25rem);
            font-weight: 800;
            letter-spacing: -0.04em;
            color: rgba(0, 8, 24, 0.07);
            line-height: 1;
          }

          .pds-amenity-content {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .pds-amenity-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: rgba(26, 107, 255, 0.08);
            border: 1px solid rgba(26, 107, 255, 0.18);
            color: var(--blue, #1a6bff);
            flex-shrink: 0;
          }

          .pds-amenity-label {
            font-family: var(--font-display);
            font-size: clamp(0.875rem, 1.4vw, 1.0625rem);
            font-weight: 600;
            letter-spacing: -0.01em;
            color: var(--navy, #000818);
            margin: 0;
          }
        `}</style>

        <div className="container-page pds-review-grid">
          <div>
            <span className="pds-review-rule" aria-hidden="true" />
            <p className="pds-review-eyebrow">What to review</p>
            <h2 className="pds-review-heading">
              Look beyond the price before you commit.
            </h2>
            <p className="pds-review-body">
              Review {listing.title} through the things that matter in land
              ownership: title position, location, access, inspection findings,
              estate planning, payment expectations, and long-term use.
            </p>
          </div>

          <div className="pds-amenity-grid">
            {detailAmenities.map((amenity, index) => {
              const Icon = amenity.icon;

              return (
                <div key={amenity.label} className="pds-amenity-item">
                  <span className="pds-amenity-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="pds-amenity-content">
                    <span className="pds-amenity-icon" aria-hidden="true">
                      <Icon size={15} />
                    </span>
                    <p className="pds-amenity-label">{amenity.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pds-cta-section">
        <style>{`
          .pds-cta-section {
            position: relative;
            background: var(--navy, #000818);
            padding: clamp(72px, 9vw, 120px) 0;
            overflow: hidden;
          }

          .pds-cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(26, 107, 255, 0.35) 30%,
              rgba(201, 168, 76, 0.3) 50%,
              rgba(26, 107, 255, 0.35) 70%,
              transparent 100%
            );
          }

          .pds-cta-glow {
            position: absolute;
            bottom: -80px;
            left: -80px;
            width: 440px;
            height: 440px;
            border-radius: 50%;
            background: radial-gradient(
              circle, rgba(26, 107, 255, 0.13) 0%, transparent 65%
            );
            pointer-events: none;
            z-index: 0;
          }

          .pds-cta-inner {
            position: relative;
            z-index: 1;
            display: grid;
            gap: 40px;
          }

          @media (min-width: 1024px) {
            .pds-cta-inner {
              grid-template-columns: 1fr auto;
              gap: 64px;
              align-items: center;
            }
          }

          .pds-cta-rule {
            display: block;
            width: 32px;
            height: 2px;
            background: #c9a84c;
            margin-bottom: 18px;
          }

          .pds-cta-eyebrow {
            font-family: var(--font-label);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: rgba(109, 167, 255, 0.9);
            margin: 0 0 18px;
          }

          .pds-cta-heading {
            font-family: var(--font-display);
            font-size: clamp(1.875rem, 4vw, 3rem);
            font-weight: 700;
            letter-spacing: -0.025em;
            line-height: 1.12;
            color: #fff;
            margin: 0 0 20px;
            max-width: 28ch;
          }

          .pds-cta-heading em {
            font-style: normal;
            color: rgba(109, 167, 255, 0.85);
          }

          .pds-cta-body {
            font-family: Inter, sans-serif;
            font-size: 1rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.52);
            max-width: 52ch;
            margin: 0;
          }

          .pds-cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 54px;
            padding: 0 32px;
            background: #1a6bff;
            color: #fff;
            font-family: Inter, sans-serif;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            text-decoration: none;
            white-space: nowrap;
            transition: background 0.2s;
          }

          .pds-cta-btn:hover {
            background: #2d7bff;
          }

          @media (prefers-reduced-motion: reduce) {
            .pds-cta-btn {
              transition: none;
            }
          }
        `}</style>

        <div className="pds-cta-glow" aria-hidden="true" />

        <div className="pds-cta-inner container-page">
          <div>
            <span className="pds-cta-rule" aria-hidden="true" />
            <p className="pds-cta-eyebrow">Next step</p>
            <h2 className="pds-cta-heading">
              Request the current details before making a{" "}
              <em>payment decision</em>.
            </h2>
            <p className="pds-cta-body">
              Confirm availability, price, allocation process, title
              information, inspection dates, and payment guidance directly with
              the Fosh Estate team.
            </p>
          </div>
          <a
            href={createWhatsAppUrl(
              `Hello Fosh Estate, please send me the current details for ${listing.title}.`
            )}
            className="pds-cta-btn"
          >
            Request current land details
            <ArrowRight aria-hidden size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
