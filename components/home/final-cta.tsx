"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { createTelUrl, createWhatsAppUrl } from "@/lib/format";
import type { HomepageContent } from "@/sanity/lib/homepage";

const fallbackContent = {
  finalCtaHeadingLine: "Your plot is waiting.",
  finalCtaHeadingEmphasis: "Speak to us today.",
  finalCtaBody:
    "Get current availability, pricing, payment plans, and title information directly from the Fosh Estate team. We inspect together, no guesswork, no middlemen.",
} satisfies Pick<
  HomepageContent,
  "finalCtaHeadingLine" | "finalCtaHeadingEmphasis" | "finalCtaBody"
>;

export function FinalCta({ content = fallbackContent }: { content?: Pick<
  HomepageContent,
  "finalCtaHeadingLine" | "finalCtaHeadingEmphasis" | "finalCtaBody"
> }) {
  return (
    <section className="final-cta-section">
      <style>{`
        .final-cta-section {
          position: relative;
          background: var(--navy, #000818);
          overflow: hidden;
          padding: 0;
        }

        /* Top rule */
        .final-cta-section::before {
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
            rgba(201, 168, 76, 0.4) 50%,
            rgba(26, 107, 255, 0.35) 70%,
            transparent 100%
          );
        }

        /* Aerial/land texture */
        .final-cta-bg {
          position: absolute;
          inset: 0;
          background-image: url('/media/fosh-estate-hero.png');
          background-size: cover;
          background-position: center 60%;
          opacity: 0.28;
          z-index: 0;
        }

        .final-cta-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(0, 8, 24, 0.9) 0%,
            rgba(0, 8, 24, 0.78) 48%,
            rgba(0, 8, 24, 0.58) 100%
          );
          z-index: 0;
          pointer-events: none;
        }

        /* Blue glow - bottom left */
        .final-cta-glow {
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(26, 107, 255, 0.18) 0%,
            transparent 70%
          );
          z-index: 0;
          pointer-events: none;
        }

        /* Gold glow - top right */
        .final-cta-glow-gold {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(201, 168, 76, 0.1) 0%,
            transparent 65%
          );
          z-index: 0;
          pointer-events: none;
        }

        .final-cta-inner {
          position: relative;
          z-index: 1;
          padding: 96px 0;
        }

        .final-cta-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .final-cta-grid {
            grid-template-columns: 1fr auto;
            gap: 64px;
          }
        }

        /* Gold accent rule */
        .final-cta-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .final-cta-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin-bottom: 20px;
        }

        .final-cta-headline {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #fff;
          max-width: 620px;
          margin: 0 0 24px;
        }

        .final-cta-headline em {
          font-style: normal;
          color: #C9A84C;
        }

        .final-cta-body {
          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.55);
          max-width: 520px;
          margin: 0;
        }

        /* CTA buttons column */
        .final-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-shrink: 0;
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .final-cta-actions {
            flex-direction: row;
          }
        }

        /* Primary - WhatsApp */
        .final-cta-btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          padding: 0 28px;
          background: #1A6BFF;
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
          overflow: hidden;
        }

        .final-cta-btn-primary:hover {
          background: #2d7bff;
        }

        /* Pulse ring animation on primary CTA */
        .final-cta-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 6px;
          border: 2px solid rgba(26, 107, 255, 0.7);
          animation: cta-pulse 2.4s ease-out infinite;
        }

        @keyframes cta-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(1.08); opacity: 0; }
          100% { transform: scale(1.08); opacity: 0; }
        }

        /* Secondary - Call */
        .final-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          padding: 0 28px;
          background: transparent;
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }

        .final-cta-btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
        }

        /* Disclaimer line */
        .final-cta-footnote {
          margin-top: 16px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.28);
          letter-spacing: 0.01em;
        }

        @media (prefers-reduced-motion: reduce) {
          .final-cta-btn-primary::after {
            animation: none;
          }
        }
      `}</style>

      <div className="final-cta-bg" aria-hidden="true" />
      <div className="final-cta-shade" aria-hidden="true" />
      <div className="final-cta-glow" aria-hidden="true" />
      <div className="final-cta-glow-gold" aria-hidden="true" />

      <div className="final-cta-inner container-page">
        <div className="final-cta-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="final-cta-rule" aria-hidden="true" />
            <p className="final-cta-eyebrow">Ready to own land?</p>
            <h2 className="final-cta-headline">
              {content.finalCtaHeadingLine}
              <br />
              <em>{content.finalCtaHeadingEmphasis}</em>
            </h2>
            <p className="final-cta-body">
              {content.finalCtaBody}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="final-cta-actions">
              <a
                href={createWhatsAppUrl(
                  "Hello Fosh Estate, I want to make an enquiry and book an inspection."
                )}
                className="final-cta-btn-primary"
              >
                Chat with Fosh Estate
                <ArrowRight aria-hidden size={16} />
              </a>
              <a
                href={createTelUrl(siteConfig.phone)}
                className="final-cta-btn-secondary"
              >
                <Phone aria-hidden size={16} />
                Call {siteConfig.phone}
              </a>
            </div>
            <p className="final-cta-footnote">
              Mon - Sat · 8 am - 6 pm · Rivers, FCT & Ogun
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
