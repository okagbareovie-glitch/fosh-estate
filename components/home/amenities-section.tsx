import { amenities } from "@/data/site";

export function AmenitiesSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Planned estate value
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Land is stronger when the estate plan is clear.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            Buyers do not only need a plot. They need access, security,
            drainage, lighting, and a location plan that supports future use,
            resale value, and long-term confidence.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="bg-[var(--surface)] p-6">
                <Icon aria-hidden className="text-[var(--blue)]" size={24} />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
