"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

export function ContactHero() {
  return (
    <section className="contact-hero-section">
      <style>{`
        .contact-hero-section {
          position: relative;
          background: var(--navy, #000818);
          overflow: hidden;
          padding: clamp(120px, 14vw, 168px) 0 clamp(64px, 9vw, 96px);
        }

        /* Dot-grid texture - land survey aesthetic */
        .contact-hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle, rgba(109, 167, 255, 0.1) 1px, transparent 1px
          );
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .contact-hero-glow {
          position: absolute;
          top: -100px; right: -100px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.15) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .contact-hero-inner {
          position: relative;
          z-index: 1;
        }

        .contact-hero-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .contact-hero-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 24px;
        }

        .contact-hero-grid {
          display: grid;
          gap: 32px;
        }

        @media (min-width: 1024px) {
          .contact-hero-grid {
            grid-template-columns: 1fr 0.72fr;
            gap: 56px;
            align-items: end;
          }
        }

        .contact-hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.4vw, 4.4rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.07;
          color: #fff;
          margin: 0;
          max-width: 22ch;
        }

        .contact-hero-heading em {
          font-style: normal;
          color: #C9A84C;
        }

        .contact-hero-body {
          font-family: Inter, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.55);
          max-width: 42ch;
          margin: 0 0 28px;
        }

        .contact-hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          padding: 0 28px;
          background: #1A6BFF;
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .contact-hero-cta:hover {
          background: #2d7bff;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-hero-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="contact-hero-dot-grid" aria-hidden="true" />
      <div className="contact-hero-glow" aria-hidden="true" />

      <div className="contact-hero-inner container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-hero-rule" aria-hidden="true" />
          <p className="contact-hero-eyebrow">Contact Fosh Estate</p>
        </motion.div>

        <div className="contact-hero-grid">
          <motion.h1
            className="contact-hero-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Ask about availability, pricing, and <em>inspection</em> before you
            commit.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="contact-hero-body">
              Tell us your preferred location, budget, and timeline. The Fosh
              Estate team can share current land options, inspection guidance,
              and the next questions to ask before payment.
            </p>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to make a land enquiry. Please send current availability, pricing, and inspection details.",
              )}
              className="contact-hero-cta"
            >
              Start your enquiry
              <ArrowRight aria-hidden size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
