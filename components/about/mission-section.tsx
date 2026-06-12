"use client";

import { motion } from "framer-motion";
import { Building2, MapPinned, ShieldCheck } from "lucide-react";

const statementItems = [
  {
    title: "Mission",
    copy: "To help families, first-time buyers, and investors approach land ownership with clearer information, guided inspections, and practical next steps.",
    icon: ShieldCheck,
  },
  {
    title: "Vision",
    copy: "To become a trusted real estate partner for people building lasting value through land and property ownership in Nigeria.",
    icon: Building2,
  },
];

const footprintStates = [
  { name: "Rivers", marketFocus: "Port Harcourt growth corridors" },
  { name: "FCT", marketFocus: "Capital-city expansion demand" },
  { name: "Ogun", marketFocus: "Affordable estate entry points" },
];

export function MissionSection() {
  return (
    <section className="mission-section">
      <style>{`
        .mission-section {
          position: relative;
          background: var(--navy, #000818);
          padding: clamp(72px, 9vw, 120px) 0;
          overflow: hidden;
        }

        /* Top rule - matches design system */
        .mission-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
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

        .mission-glow {
          position: absolute;
          top: -100px; right: -80px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.13) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .mission-inner {
          position: relative;
          z-index: 1;
        }

        /* Mission / Vision pair */
        .mission-pair {
          display: grid;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 56px;
        }

        @media (min-width: 768px) {
          .mission-pair {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }
        }

        .mission-item-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(26, 107, 255, 0.1);
          border: 1px solid rgba(26, 107, 255, 0.22);
          color: #6da7ff;
          margin-bottom: 24px;
        }

        .mission-item-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 12px;
        }

        .mission-item-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.4vw, 2.625rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }

        .mission-item-copy {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.52);
          margin: 0;
          max-width: 42ch;
        }

        /* Footprint card */
        .footprint-card {
          position: relative;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 36px;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .footprint-card {
            padding: 48px;
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 48px;
            align-items: center;
          }
        }

        /* Dot-grid texture inside the card */
        .footprint-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle, rgba(109, 167, 255, 0.1) 1px, transparent 1px
          );
          background-size: 26px 26px;
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(
            115deg, transparent 0%, rgba(0,0,0,0.6) 50%, transparent 100%
          );
        }

        .footprint-content {
          position: relative;
          z-index: 1;
        }

        .footprint-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(201, 168, 76, 0.1);
          border: 1px solid rgba(201, 168, 76, 0.25);
          color: #C9A84C;
          margin-bottom: 24px;
        }

        .footprint-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.4vw, 2.625rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #fff;
          margin: 0 0 16px;
        }

        .footprint-copy {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.52);
          margin: 0;
          max-width: 42ch;
        }

        /* State tags */
        .footprint-states {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
        }

        @media (min-width: 768px) {
          .footprint-states {
            margin-top: 0;
          }
        }

        .footprint-state {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(0, 8, 24, 0.4);
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .footprint-state:hover {
          border-color: rgba(201, 168, 76, 0.3);
          background: rgba(201, 168, 76, 0.04);
        }

        .footprint-state-name {
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
        }

        .footprint-state-focus {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.42);
          text-align: right;
        }

        @media (prefers-reduced-motion: reduce) {
          .mission-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="mission-glow" aria-hidden="true" />

      <div className="mission-inner container-page">
        {/* Mission / Vision - editorial statement pair */}
        <div className="mission-pair">
          {statementItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08,
                }}
              >
                <span className="mission-item-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <p className="mission-item-eyebrow">{item.title}</p>
                <h2 className="mission-item-title">
                  {item.title === "Mission"
                    ? "Clarity before commitment."
                    : "A partner for the long term."}
                </h2>
                <p className="mission-item-copy">{item.copy}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Footprint - geographic card */}
        <motion.div
          className="footprint-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footprint-dot-grid" aria-hidden="true" />

          <div className="footprint-content">
            <span className="footprint-icon" aria-hidden="true">
              <MapPinned size={20} />
            </span>
            <h2 className="footprint-title">Our footprint</h2>
            <p className="footprint-copy">
              Focused on selected growth markets, with expansion guided by
              demand, access, and buyer confidence.
            </p>
          </div>

          <div className="footprint-states">
            {footprintStates.map((state) => (
              <div key={state.name} className="footprint-state">
                <span className="footprint-state-name">{state.name}</span>
                <span className="footprint-state-focus">
                  {state.marketFocus}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
