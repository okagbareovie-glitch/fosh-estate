import { MapPinned, MessageCircle, Phone } from "lucide-react";
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
      "Hello Fosh Estate, I want to ask about current land availability, pricing, and inspection dates."
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
    <section className="bg-white">
      <div className="container-page grid border-y border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => {
          const Icon = channel.icon;

          return (
            <a
              key={channel.title}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="min-h-36 border-b border-[var(--line)] p-6 transition-colors duration-200 hover:bg-[var(--surface-soft)] sm:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <Icon aria-hidden className="text-[var(--blue)]" size={24} />
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                {channel.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {channel.detail}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
