import { serviceItems } from "@/data/site";

export function ServicesSection() {
  return (
    <section className="section-y bg-[var(--surface-soft)]">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            What Fosh Estate helps buyers do
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Move from interest to confident ownership.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border border-[var(--line)] bg-white p-6"
              >
                <Icon aria-hidden className="text-[var(--blue)]" size={25} />
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
