"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ContactForm } from "./contact-form";

const requestItems = [
  "Current availability for your preferred location",
  "Listed prices and any active offers",
  "Inspection dates and what to expect on site",
  "Allocation process and required documents",
  "Payment guidance and accepted methods",
  "Title information and verification steps",
];

export function ContactFormSection() {
  return (
    <section className="cfs-section">
      <style>{`
        .cfs-section {
          position: relative;
          background: var(--navy, #000818);
          padding: clamp(72px, 9vw, 120px) 0;
          overflow: hidden;
        }

        /* Top rule - matches design system */
        .cfs-section::before {
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

        .cfs-glow {
          position: absolute;
          top: -100px; left: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.14) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .cfs-glow-gold {
          position: absolute;
          bottom: -100px; right: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(201, 168, 76, 0.08) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .cfs-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .cfs-grid {
            grid-template-columns: 0.82fr 1.18fr;
            gap: 72px;
          }
        }

        /* Left column */
        .cfs-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .cfs-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 18px;
        }

        .cfs-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.12;
          color: #fff;
          margin: 0 0 20px;
          max-width: 18ch;
        }

        .cfs-heading em {
          font-style: normal;
          color: rgba(109, 167, 255, 0.85);
        }

        .cfs-body {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.52);
          max-width: 42ch;
          margin: 0 0 32px;
        }

        /* Request checklist panel */
        .cfs-panel {
          position: relative;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 28px;
        }

        .cfs-panel-title {
          font-family: var(--font-display);
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: #fff;
          margin: 0 0 20px;
        }

        .cfs-checklist {
          display: flex;
          flex-direction: column;
          gap: 14px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cfs-checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .cfs-checklist-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: rgba(26, 107, 255, 0.12);
          border: 1px solid rgba(26, 107, 255, 0.28);
          color: #6da7ff;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cfs-checklist-text {
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.62);
        }

        @media (prefers-reduced-motion: reduce) {
          .cfs-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="cfs-glow" aria-hidden="true" />
      <div className="cfs-glow-gold" aria-hidden="true" />

      <div className="cfs-grid container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="cfs-rule" aria-hidden="true" />
          <p className="cfs-eyebrow">Buyer enquiry</p>
          <h2 className="cfs-heading">
            Send the details that help the team guide you <em>faster</em>.
          </h2>
          <p className="cfs-body">
            Share your name, phone number, preferred location, budget range, and
            what you want to confirm. Your message opens in WhatsApp so you can
            review it before sending.
          </p>

          <div className="cfs-panel">
            <h3 className="cfs-panel-title">What to request</h3>
            <ul className="cfs-checklist">
              {requestItems.map((item) => (
                <li key={item} className="cfs-checklist-item">
                  <span className="cfs-checklist-icon" aria-hidden="true">
                    <Check size={13} />
                  </span>
                  <span className="cfs-checklist-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
