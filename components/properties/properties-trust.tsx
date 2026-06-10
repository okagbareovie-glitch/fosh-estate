import { BadgeCheck, Building2, MapPinned, ShieldCheck } from "lucide-react";
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
    <section className="section-y bg-[var(--surface-soft)]">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              Before you buy
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
              A good land decision starts with the right questions.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              Fosh Estate listings are designed to start a practical
              conversation: what is available now, what is the title position,
              how does inspection work, and which option fits your budget best?
            </p>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want guidance choosing the best land option for my budget."
              )}
              className="mt-8 inline-flex min-h-13 items-center justify-center rounded-md bg-[var(--navy)] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Ask for buyer guidance
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
