import { BadgeCheck, ChartNoAxesCombined, Fence, Handshake } from "lucide-react";

const principles = [
  {
    title: "Documentation clarity",
    copy: "Buyers should know which title questions to ask before making payment decisions.",
    icon: BadgeCheck,
  },
  {
    title: "Value-led locations",
    copy: "Every opportunity should make sense for access, demand, and long-term land value.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Planned estate thinking",
    copy: "Roads, security, drainage, lighting, and access should support the buyer's future use.",
    icon: Fence,
  },
  {
    title: "Buyer relationship",
    copy: "The process should support people from first enquiry through inspection and follow-up.",
    icon: Handshake,
  },
];

export function PrinciplesSection() {
  return (
    <section className="section-y bg-[var(--surface-soft)]">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            What guides Fosh Estate
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Principles that make land buying feel more transparent.
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
