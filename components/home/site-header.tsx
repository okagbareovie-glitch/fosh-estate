import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createTelUrl, createWhatsAppUrl } from "@/lib/format";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(249,249,255,0.94)] backdrop-blur-md">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-11 w-11 place-items-center rounded-md bg-[var(--navy)] font-[family-name:var(--font-display)] text-lg font-semibold text-white"
          >
            FE
          </span>
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--navy)]">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-[var(--muted)] sm:block">
              Secure. Prime. Profitable.
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--navy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={createTelUrl(siteConfig.phone)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--line)] bg-white px-4 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
          >
            <Phone aria-hidden size={17} />
            {siteConfig.phone}
          </a>
          <a
            href={createWhatsAppUrl(
              "Hello Fosh Estate, I want to ask about available estate land."
            )}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--navy)] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
          >
            Enquire now
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
