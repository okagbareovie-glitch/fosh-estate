import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createTelUrl, createWhatsAppUrl } from "@/lib/format";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(249,249,255,0.94)] backdrop-blur-md">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Fosh Estate home">
          <Image
            src={siteConfig.logo}
            alt="Fosh Estate logo"
            width={150}
            height={80}
            priority
            className="h-12 w-auto max-w-[122px] rounded-sm object-contain"
          />
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
