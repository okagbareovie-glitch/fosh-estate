"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPinned, Search } from "lucide-react";
import type { Listing } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";

type PropertiesHeroProps = {
  listings: Listing[];
  stateNames: string[];
};

export function PropertiesHero({ listings, stateNames }: PropertiesHeroProps) {
  const lowestPrice =
    listings.length > 0
      ? Math.min(...listings.map((listing) => listing.price))
      : 0;
  const listingStates = Array.from(
    new Set(listings.map((listing) => listing.state).filter(Boolean)),
  ).sort((firstLocation, secondLocation) =>
    firstLocation.localeCompare(secondLocation),
  );
  const states = stateNames.length > 0 ? stateNames : listingStates;
  const stateSummary =
    states.length > 0 ? formatStateSummary(states) : "States pending";

  return (
    <section className="properties-hero-section">
      <style>{`
        .properties-hero-section {
          position: relative;
          background: var(--navy, #000818);
          overflow: hidden;
          padding: clamp(120px, 14vw, 168px) 0 clamp(64px, 9vw, 96px);
        }

        /* Dot-grid texture - land survey aesthetic */
        .properties-hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle, rgba(109, 167, 255, 0.1) 1px, transparent 1px
          );
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .properties-hero-glow {
          position: absolute;
          top: -120px; right: -100px;
          width: 540px; height: 540px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.16) 0%, transparent 68%
          );
          pointer-events: none;
          z-index: 0;
        }

        .properties-hero-glow-gold {
          position: absolute;
          bottom: -100px; left: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(201, 168, 76, 0.08) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .properties-hero-inner {
          position: relative;
          z-index: 1;
        }

        .properties-hero-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .properties-hero-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 22px;
        }

        .properties-hero-grid {
          display: grid;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .properties-hero-grid {
            grid-template-columns: 1fr 420px;
            gap: 56px;
            align-items: end;
          }
        }

        .properties-hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.4vw, 4.4rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.07;
          color: #fff;
          margin: 0 0 24px;
          max-width: 22ch;
        }

        .properties-hero-heading em {
          font-style: normal;
          color: #C9A84C;
        }

        .properties-hero-body {
          font-family: Inter, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.55);
          max-width: 50ch;
          margin: 0;
        }

        /* Glass stat panel */
        .properties-hero-panel {
          position: relative;
          border-radius: 14px;
          border: 1px solid rgba(26, 107, 255, 0.2);
          background: rgba(26, 107, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 28px;
          overflow: hidden;
        }

        .properties-hero-panel-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 22px;
        }

        .properties-hero-panel-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(26, 107, 255, 0.14);
          border: 1px solid rgba(26, 107, 255, 0.3);
          color: #6da7ff;
          flex-shrink: 0;
        }

        .properties-hero-panel-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: #fff;
          margin: 0;
        }

        /* Stat rows */
        .properties-hero-stats {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }

        .properties-hero-stat {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .properties-hero-stat:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .properties-hero-stat-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.45);
        }

        .properties-hero-stat-value {
          font-family: var(--font-display);
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fff;
          text-align: right;
          white-space: nowrap;
        }

        /* CTA */
        .properties-hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 52px;
          padding: 0 24px;
          background: #1A6BFF;
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .properties-hero-cta:hover {
          background: #2d7bff;
        }

        @media (max-width: 480px) {
          .properties-hero-stat {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .properties-hero-stat-value {
            text-align: left;
            white-space: normal;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .properties-hero-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="properties-hero-dot-grid" aria-hidden="true" />
      <div className="properties-hero-glow" aria-hidden="true" />
      <div className="properties-hero-glow-gold" aria-hidden="true" />

      <div className="properties-hero-inner container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="properties-hero-rule" aria-hidden="true" />
          <p className="properties-hero-eyebrow">Current land opportunities</p>
        </motion.div>

        <div className="properties-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="properties-hero-heading">
              Find the land option that fits your <em>budget</em> and next
              move.
            </h1>
            <p className="properties-hero-body">
              Review current Fosh Estate listings by state, address, price, and
              availability. When a land option looks right, request the latest
              details and book an inspection before making a payment decision.
            </p>
          </motion.div>

          <motion.div
            className="properties-hero-panel"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="properties-hero-panel-header">
              <span className="properties-hero-panel-icon" aria-hidden="true">
                <Search size={18} />
              </span>
              <h2 className="properties-hero-panel-title">Quick land brief</h2>
            </div>

            <div className="properties-hero-stats">
              <div className="properties-hero-stat">
                <span className="properties-hero-stat-label">
                  <BadgeCheck aria-hidden size={15} />
                  Available listings
                </span>
                <span className="properties-hero-stat-value">
                  {listings.length} land options
                </span>
              </div>
              <div className="properties-hero-stat">
                <span className="properties-hero-stat-label">
                  <MapPinned aria-hidden size={15} />
                  Prices from
                </span>
                <span className="properties-hero-stat-value">
                  {formatNaira(lowestPrice)}
                </span>
              </div>
              <div className="properties-hero-stat">
                <span className="properties-hero-stat-label">
                  <MapPinned aria-hidden size={15} />
                  Current states
                </span>
                <span className="properties-hero-stat-value">
                  {stateSummary}
                </span>
              </div>
            </div>

            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, please send me the full property price list and inspection details.",
              )}
              className="properties-hero-cta"
            >
              Request current land list
              <ArrowRight aria-hidden size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function formatStateSummary(states: string[]) {
  if (states.length <= 2) {
    return states.join(" and ");
  }

  return `${states.slice(0, 2).join(", ")} +${states.length - 2} more`;
}
