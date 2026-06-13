"use client";

import { ArrowUpRight, MapPinned, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createTelUrl, createWhatsAppUrl } from "@/lib/format";
import { InstagramIcon } from "@/components/ui/instagram-icon";

const channels = [
  {
    title: "Call",
    detail: "Speak directly with the team",
    href: createTelUrl(siteConfig.phone),
    icon: Phone,
  },
  {
    title: "WhatsApp",
    detail: "Quickest way to request details",
    href: createWhatsAppUrl(
      "Hello Fosh Estate, I want to ask about current land availability, pricing, and inspection dates.",
    ),
    icon: MessageCircle,
  },
  {
    title: "Instagram",
    detail: "Follow listing updates",
    href: siteConfig.instagram,
    icon: InstagramIcon,
  },
  {
    title: "Coverage",
    detail: "Rivers, FCT, and Ogun",
    href: "#coverage-map",
    icon: MapPinned,
  },
];

export function ContactChannels() {
  return (
    <section className="cc-section">
      <style>{`
        .cc-section {
          position: relative;
          background: var(--background, #f8f9ff);
        }

        .cc-grid {
          display: grid;
          border-top: 1px solid var(--line, #d8e0ef);
          border-bottom: 1px solid var(--line, #d8e0ef);
        }

        @media (min-width: 640px) {
          .cc-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .cc-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }

        .cc-item {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 152px;
          padding: 28px;
          border-bottom: 1px solid var(--line, #d8e0ef);
          text-decoration: none;
          transition: background 0.25s ease;
        }

        @media (min-width: 640px) {
          .cc-item:nth-child(odd) {
            border-right: 1px solid var(--line, #d8e0ef);
          }
        }

        @media (min-width: 1024px) {
          .cc-item {
            border-bottom: none;
          }
          .cc-item:not(:last-child) {
            border-right: 1px solid var(--line, #d8e0ef);
          }
        }

        .cc-item:last-child {
          border-bottom: none;
        }

        .cc-item:hover {
          background: var(--surface-soft, #f1f4fa);
        }

        .cc-item-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .cc-item-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(26, 107, 255, 0.08);
          border: 1px solid rgba(26, 107, 255, 0.18);
          color: var(--blue, #1A6BFF);
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .cc-item:hover .cc-item-icon {
          background: rgba(26, 107, 255, 0.14);
          border-color: rgba(26, 107, 255, 0.32);
        }

        .cc-item-arrow {
          color: var(--muted, #526070);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: opacity 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }

        .cc-item:hover .cc-item-arrow {
          opacity: 1;
          transform: translate(0, 0);
          color: var(--blue, #1A6BFF);
        }

        .cc-item-title {
          font-family: var(--font-display);
          font-size: 1.1875rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--navy, #000818);
          margin: 0 0 6px;
        }

        .cc-item-detail {
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--muted, #526070);
          margin: 0;
        }

        /* Gold underline that grows in on hover */
        .cc-item-rule {
          display: block;
          width: 0;
          height: 2px;
          background: #C9A84C;
          margin-top: 14px;
          transition: width 0.3s ease;
        }

        .cc-item:hover .cc-item-rule {
          width: 28px;
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-item,
          .cc-item-icon,
          .cc-item-arrow,
          .cc-item-rule {
            transition: none;
          }
        }
      `}</style>

      <div className="container-page cc-grid">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const isExternal = channel.href.startsWith("http");

          return (
            <a
              key={channel.title}
              href={channel.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="cc-item"
            >
              <div className="cc-item-top">
                <span className="cc-item-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <ArrowUpRight aria-hidden className="cc-item-arrow" size={18} />
              </div>
              <h2 className="cc-item-title">{channel.title}</h2>
              <p className="cc-item-detail">{channel.detail}</p>
              <span className="cc-item-rule" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
