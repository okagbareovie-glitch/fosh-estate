"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/format";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md border border-[var(--line)] bg-white text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
      >
        {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
      </button>

      {isOpen ? (
        <div className="absolute left-4 right-4 top-[76px] z-50 border border-[var(--line)] bg-white p-3 shadow-[0_18px_40px_rgba(17,28,44,0.12)]">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="min-h-11 rounded-sm px-3 py-3 text-sm font-medium text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={createWhatsAppUrl(
              "Hello Fosh Estate, I want to ask about available estate land."
            )}
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[var(--navy)] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
          >
            WhatsApp enquiry
          </a>
        </div>
      ) : null}
    </div>
  );
}
