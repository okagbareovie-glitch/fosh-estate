"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

const trustSteps = [
  {
    title: "Confirm availability",
    copy: "Request the current price, plot status, and payment expectations before you plan around a listing.",
    icon: BadgeCheck,
  },
  {
    title: "Book inspection",
    copy: "See the location, ask access questions, and understand the estate environment before payment.",
    icon: MapPinned,
  },
  {
    title: "Review documentation",
    copy: "Clarify title, allocation process, buyer requirements, and the documents you should expect.",
    icon: ShieldCheck,
  },
  {
    title: "Plan ownership",
    copy: "Choose the option that matches your budget, timeline, family need, or investment goal.",
    icon: Building2,
  },
];

export function PropertiesTrust() {
  return (
    <section className="pt-section">
      <style>{`
        .pt-section {
          position: relative;
          background: var(--navy, #000818);
          padding: clamp(72px, 9vw, 120px) 0;
          overflow: hidden;
        }

        /* Top rule - matches design system */
        .pt-section::before {
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

        .pt-glow {
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

        .pt-glow-gold {
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

        .pt-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 56px;
        }

        @media (min-width: 1024px) {
          .pt-grid {
            grid-template-columns: 0.82fr 1.18fr;
            gap: 72px;
            align-items: center;
          }
        }

        /* Left column */
        .pt-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .pt-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin: 0 0 18px;
        }

        .pt-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.12;
          color: #fff;
          margin: 0 0 20px;
          max-width: 18ch;
        }

        .pt-heading em {
          font-style: normal;
          color: rgba(109, 167, 255, 0.85);
        }

        .pt-body {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.52);
          max-width: 42ch;
          margin: 0 0 32px;
        }

        .pt-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 52px;
          padding: 0 26px;
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

        .pt-cta:hover {
          background: #2d7bff;
        }

        /* Step flow grid */
        .pt-steps {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        @media (min-width: 640px) {
          .pt-steps {
            grid-template-columns: 1fr 1fr;
          }
        }

        .pt-step {
          position: relative;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 28px 24px;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .pt-step:hover {
          border-color: rgba(26, 107, 255, 0.28);
          background: rgba(26, 107, 255, 0.04);
        }

        /* Ghost numeral */
        .pt-step-number {
          position: absolute;
          top: 14px;
          right: 18px;
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: rgba(255, 255, 255, 0.08);
          line-height: 1;
          transition: color 0.4s ease;
          z-index: 0;
        }

        .pt-step:hover .pt-step-number {
          color: rgba(109, 167, 255, 0.3);
        }

        .pt-step-icon {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(26, 107, 255, 0.1);
          border: 1px solid rgba(26, 107, 255, 0.22);
          color: #6da7ff;
          margin-bottom: 18px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .pt-step:hover .pt-step-icon {
          background: rgba(26, 107, 255, 0.18);
          border-color: rgba(26, 107, 255, 0.4);
        }

        .pt-step-title {
          position: relative;
          z-index: 1;
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: #fff;
          margin: 0 0 10px;
        }

        .pt-step-copy {
          position: relative;
          z-index: 1;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.48);
          margin: 0;
        }

        /* Directional flow connector - desktop only, between columns */
        .pt-step::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -22px;
          width: 14px;
          height: 14px;
          transform: translateY(-50%);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%231A6BFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M13 6l6 6-6 6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.5;
          z-index: 2;
        }

        @media (max-width: 639px) {
          .pt-step::after {
            display: none;
          }
        }

        /* Hide connector on the last item of each row (2nd & 4th in 2-col grid) */
        .pt-step:nth-child(2)::after,
        .pt-step:nth-child(4)::after {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .pt-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="pt-glow" aria-hidden="true" />
      <div className="pt-glow-gold" aria-hidden="true" />

      <div className="pt-grid container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pt-rule" aria-hidden="true" />
          <p className="pt-eyebrow">Before you buy</p>
          <h2 className="pt-heading">
            A good land decision starts with the <em>right questions</em>.
          </h2>
          <p className="pt-body">
            Fosh Estate listings are designed to start a practical
            conversation: what is available now, what is the title position, how
            does inspection work, and which option fits your budget best?
          </p>
          <a
            href={createWhatsAppUrl(
              "Hello Fosh Estate, I want guidance choosing the best land option for my budget.",
            )}
            className="pt-cta"
          >
            Ask for buyer guidance
            <ArrowRight aria-hidden size={17} />
          </a>
        </motion.div>

        <div className="pt-steps">
          {trustSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                className="pt-step"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08,
                }}
              >
                <span className="pt-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-step-icon" aria-hidden="true">
                  <Icon size={17} />
                </span>
                <h3 className="pt-step-title">{step.title}</h3>
                <p className="pt-step-copy">{step.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
