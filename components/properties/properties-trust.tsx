import { BadgeCheck, Building2, MapPinned, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

const trustSteps = [
  {
    title: "Confirm availability",
    copy: "Ask the team for the latest price list and available plot details.",
    icon: BadgeCheck,
  },
  {
    title: "Book inspection",
    copy: "Visit the estate location or request inspection guidance before payment.",
    icon: MapPinned,
  },
  {
    title: "Review documentation",
    copy: "Clarify title, allocation process, and buyer requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Plan ownership",
    copy: "Choose the phase that matches your budget, family, or investment goal.",
    icon: Building2,
  },
];

export function PropertiesTrust() {
  return (
    <section className="section-y bg-[var(--surface-soft)]">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              Before you buy
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
              A property page should help buyers ask better questions.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              Fosh Estate listings are structured to lead buyers into a
              practical conversation: what is available, what is the title, how
              does inspection work, and what budget fits best?
            </p>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want guidance choosing the best estate phase for my budget."
              )}
              className="mt-8 inline-flex min-h-13 items-center justify-center rounded-md bg-[var(--navy)] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Get buyer guidance
            </a>
          </div>

          <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {trustSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="bg-white p-6">
                  <Icon aria-hidden className="text-[var(--blue)]" size={25} />
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {step.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
