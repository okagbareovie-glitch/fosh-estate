"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const valueTags = ["Trust", "Guidance", "Legacy"];

export function FounderSection() {
  return (
    <section className="founder-section">
      <style>{`
        .founder-section {
          position: relative;
          background: var(--navy, #000818);
          padding: clamp(72px, 9vw, 120px) 0;
          overflow: hidden;
        }

        /* Top rule - matches design system */
        .founder-section::before {
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

        .founder-glow-blue {
          position: absolute;
          top: -100px; left: -100px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.13) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .founder-glow-gold {
          position: absolute;
          bottom: -80px; right: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(201, 168, 76, 0.09) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .founder-inner {
          position: relative;
          z-index: 1;
          max-width: 880px;
          margin: 0 auto;
        }

        .founder-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin: 0 auto 20px;
        }

        .founder-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          text-align: center;
          margin: 0 0 36px;
        }

        /* Oversized gold quotation mark */
        .founder-quote-mark {
          font-family: var(--font-display);
          font-size: clamp(4rem, 9vw, 7rem);
          font-weight: 800;
          line-height: 1;
          color: #C9A84C;
          opacity: 0.5;
          text-align: center;
          margin: 0 0 -12px;
          user-select: none;
        }

        .founder-quote {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3.4vw, 2.5rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.35;
          color: #fff;
          text-align: center;
          margin: 0 auto 40px;
          max-width: 36ch;
        }

        /* Author row */
        .founder-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }

        .founder-portrait {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .founder-portrait-img {
          object-fit: cover;
          object-position: center 18%;
        }

        .founder-portrait-fallback {
          color: rgba(255, 255, 255, 0.3);
        }

        .founder-author-text {
          text-align: left;
        }

        .founder-author-name {
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .founder-author-role {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 2px 0 0;
        }

        /* Bio paragraph */
        .founder-bio {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.52);
          text-align: center;
          max-width: 60ch;
          margin: 0 auto 36px;
        }

        /* Value tags */
        .founder-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .founder-tag {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.85);
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(26, 107, 255, 0.22);
          background: rgba(26, 107, 255, 0.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .founder-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="founder-glow-blue" aria-hidden="true" />
      <div className="founder-glow-gold" aria-hidden="true" />

      <div className="founder-inner container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="founder-rule" aria-hidden="true" />
          <p className="founder-eyebrow">Founder&apos;s note</p>

          <p className="founder-quote-mark" aria-hidden="true">
            &ldquo;
          </p>
          <p className="founder-quote">
            Land is one of the biggest decisions many people will ever make.
            Our responsibility is to help buyers slow down, ask the right
            questions, and move with better information.
          </p>

          <div className="founder-author">
            <div className="founder-portrait">
              <Image
                src="/media/founder-ovie.jpeg"
                alt=""
                aria-hidden
                fill
                sizes="56px"
                className="founder-portrait-img"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <UserRound
                aria-hidden
                size={22}
                className="founder-portrait-fallback"
              />
            </div>
            <div className="founder-author-text">
              <p className="founder-author-name">Ovieroghene Matthew Okagbare</p>
              <p className="founder-author-role">Founder &amp; Director</p>
            </div>
          </div>

          <p className="founder-bio">
            Fosh Estate is led with a practical understanding of what buyers
            need before they commit: clear options, current pricing, inspection
            guidance, and honest conversations about documentation and long-term
            value.
          </p>

          <div className="founder-tags">
            {valueTags.map((tag) => (
              <span key={tag} className="founder-tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
