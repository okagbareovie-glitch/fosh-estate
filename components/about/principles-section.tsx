"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ChartNoAxesCombined, Fence, Handshake } from "lucide-react";

const principles = [
  {
    title: "Documentation clarity",
    copy: "Buyers should know which title questions to ask before making payment decisions.",
    icon: BadgeCheck,
  },
  {
    title: "Value-led locations",
    copy: "Every opportunity should make sense for access, demand, and long-term land value.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Planned estate thinking",
    copy: "Roads, security, drainage, lighting, and access should support the buyer's future use.",
    icon: Fence,
  },
  {
    title: "Buyer relationship",
    copy: "The process should support people from first enquiry through inspection and follow-up.",
    icon: Handshake,
  },
];

export function PrinciplesSection() {
  return (
    <section className="principles-section">
      <style>{`
        .principles-section {
          position: relative;
          background: var(--background, #f8f9ff);
          padding: clamp(72px, 9vw, 120px) 0;
          overflow: hidden;
        }

        /* Top rule - matches design system */
        .principles-section::before {
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

        .principles-glow {
          position: absolute;
          bottom: -120px; left: -100px;
          width: 520px; height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.07) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .principles-inner {
          position: relative;
          z-index: 1;
        }

        /* Header */
        .principles-header {
          max-width: 46ch;
          margin-bottom: 56px;
        }

        .principles-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .principles-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 18px;
        }

        .principles-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.12;
          color: var(--navy, #000818);
          margin: 0;
        }

        .principles-heading em {
          font-style: normal;
          color: rgba(109, 167, 255, 0.85);
        }

        /* Two-column list */
        .principles-grid {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(0, 8, 24, 0.08);
        }

        @media (min-width: 768px) {
          .principles-grid {
            grid-template-columns: 1fr 1fr;
            column-gap: 64px;
          }
        }

        .principles-item {
          position: relative;
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 20px;
          padding: 36px 0;
          border-bottom: 1px solid rgba(0, 8, 24, 0.08);
        }

        @media (min-width: 640px) {
          .principles-item {
            grid-template-columns: 84px 1fr;
            gap: 28px;
            padding: 44px 0;
          }
        }

        /* Vertical divider between columns on desktop */
        @media (min-width: 768px) {
          .principles-item:nth-child(odd) {
            padding-right: 32px;
          }
          .principles-item:nth-child(even) {
            padding-left: 32px;
            border-left: 1px solid rgba(0, 8, 24, 0.08);
          }
        }

        /* Ghost numeral - continues the system from StorySection */
        .principles-item-number {
          font-family: var(--font-display);
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: rgba(0, 8, 24, 0.06);
          transition: color 0.4s ease;
        }

        .principles-item:hover .principles-item-number {
          color: rgba(201, 168, 76, 0.4);
        }

        .principles-item-content {
          padding-top: 2px;
        }

        .principles-item-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(26, 107, 255, 0.1);
          border: 1px solid rgba(26, 107, 255, 0.22);
          color: #6da7ff;
          margin-bottom: 14px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .principles-item:hover .principles-item-icon {
          background: rgba(26, 107, 255, 0.18);
          border-color: rgba(26, 107, 255, 0.4);
        }

        .principles-item-title {
          font-family: var(--font-display);
          font-size: clamp(1.0625rem, 1.6vw, 1.3125rem);
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--navy, #000818);
          margin: 0 0 10px;
        }

        .principles-item-copy {
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--muted, #5f6b7a);
          margin: 0;
          max-width: 38ch;
        }

        @media (prefers-reduced-motion: reduce) {
          .principles-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="principles-glow" aria-hidden="true" />

      <div className="principles-inner container-page">
        <motion.div
          className="principles-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="principles-rule" aria-hidden="true" />
          <p className="principles-eyebrow">What guides Fosh Estate</p>
          <h2 className="principles-heading">
            Principles that make land buying feel <em>more transparent</em>.
          </h2>
        </motion.div>

        <div className="principles-grid">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="principles-item"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index % 2) * 0.08,
                }}
              >
                <span className="principles-item-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="principles-item-content">
                  <span className="principles-item-icon" aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <h3 className="principles-item-title">{item.title}</h3>
                  <p className="principles-item-copy">{item.copy}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
