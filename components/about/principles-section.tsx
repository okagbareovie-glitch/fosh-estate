import { BadgeCheck, ChartNoAxesCombined, Fence, Handshake } from "lucide-react";

const principles = [
  {
    title: "Documentation clarity",
    copy: "Buyers deserve title conversations that are direct, practical, and easy to understand.",
    icon: BadgeCheck,
  },
  {
    title: "Value-led locations",
    copy: "Every estate phase should make sense for access, growth potential, and long-term demand.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Secure estate planning",
    copy: "Gated access, security, drainage, lighting, and roads are treated as value pillars.",
    icon: Fence,
  },
  {
    title: "Buyer relationship",
    copy: "The process should support people before, during, and after inspection or allocation.",
    icon: Handshake,
  },
];

export function PrinciplesSection() {
  return (
    <section className="section-y bg-[var(--surface-soft)]">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            What guides the company
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            A disciplined standard for real estate decisions.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="min-w-0 border border-[var(--line)] bg-white p-6"
              >
                <Icon aria-hidden className="text-[var(--blue)]" size={25} />
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[var(--navy)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {item.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
