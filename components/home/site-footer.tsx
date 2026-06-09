import Link from "next/link";
import Image from "next/image";
import { Camera, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createTelUrl } from "@/lib/format";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)]">
      <div className="container-page grid gap-10 py-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt="Fosh Estate logo"
              width={180}
              height={96}
              className="h-14 w-auto max-w-[148px] rounded-sm object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Secure land opportunities for families and investors building
            long-term value in Nigeria.
          </p>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--navy)]">
            Pages
          </h2>
          <nav aria-label="Footer navigation" className="mt-4 grid gap-3">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--navy)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--navy)]">
            Contact
          </h2>
          <div className="mt-4 grid gap-3">
            <a
              href={createTelUrl(siteConfig.phone)}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--navy)]"
            >
              <Phone aria-hidden size={16} />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.instagram}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--navy)]"
              target="_blank"
              rel="noreferrer"
            >
              <Camera aria-hidden size={16} />
              @foshestate
            </a>
            <a
              href={siteConfig.website}
              className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--navy)]"
            >
              {siteConfig.publicDomain}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line)] py-5">
        <div className="container-page text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Fosh Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
