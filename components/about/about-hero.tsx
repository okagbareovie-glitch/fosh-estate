import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative grid gap-10 py-14 md:py-18 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            About Fosh Estate
          </p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            A real estate brand built around secure land ownership.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Fosh Estate exists to help buyers move from uncertainty to
            confident ownership through clear estate options, practical
            guidance, and a disciplined focus on long-term land value.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to learn more about the company and available estate land."
              )}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Speak with the team
              <ArrowRight aria-hidden size={18} />
            </a>
            <Link
              href="/properties"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-6 text-base font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
            >
              View properties
            </Link>
          </div>
        </div>

        <figure className="overflow-hidden rounded-lg border border-[var(--line)] bg-white surface-shadow">
          <div className="relative aspect-[4/3] min-h-[320px] bg-[var(--surface-soft)] sm:aspect-[16/11] lg:min-h-[430px]">
            <Image
              src="/media/about-hero.png"
              alt="Premium estate planning visual representing Fosh Estate land ownership"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-[var(--line)] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--success)]">
              <ShieldCheck aria-hidden size={17} />
              Built for trust
            </div>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[var(--navy)] sm:text-2xl">
              Strategic locations, secure title focus, and buyer-first
              inspection support.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
