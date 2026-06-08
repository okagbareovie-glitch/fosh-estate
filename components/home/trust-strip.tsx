import { trustItems } from "@/data/site";

export function TrustStrip() {
  return (
    <section aria-label="Fosh Estate trust points" className="bg-white">
      <div className="container-page grid border-y border-[var(--line)] md:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="border-b border-[var(--line)] py-7 md:border-b-0 md:border-r md:px-5 md:last:border-r-0"
            >
              <Icon aria-hidden className="text-[var(--blue)]" size={24} />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
