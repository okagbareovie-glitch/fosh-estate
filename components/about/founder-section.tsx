import Image from "next/image";
import { Quote, UserRound } from "lucide-react";

export function FounderSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-soft)]">
          <Image
            src="/media/founder-placeholder.svg"
            alt="Professional founder portrait placeholder for Fosh Estate"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-sm font-semibold text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.08)]">
            <UserRound aria-hidden size={16} />
            Portrait pending
          </div>
        </div>

        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Founder&apos;s note
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            A personal commitment to buyer confidence.
          </h2>
          <div className="mt-8 border-l-4 border-[var(--blue)] pl-5">
            <Quote aria-hidden className="text-[var(--blue)]" size={26} />
            <p className="mt-4 text-xl leading-9 text-[var(--ink)]">
              Land is one of the biggest decisions many people will ever make.
              Our responsibility is to help buyers slow down, ask the right
              questions, and move with better information.
            </p>
          </div>
          <p className="mt-7 text-base leading-8 text-[var(--muted)]">
            Fosh Estate is led with a practical understanding of what buyers
            need before they commit: clear options, current pricing, inspection
            guidance, and honest conversations about documentation and long-term
            value. This section will be expanded with the founder&apos;s approved
            biography and professional portrait.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Trust", "Guidance", "Legacy"].map((item) => (
              <div
                key={item}
                className="border border-[var(--line)] bg-[var(--background)] p-4"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
