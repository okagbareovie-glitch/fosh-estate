const storyPoints = [
  {
    title: "The problem",
    copy: "Many buyers want to own land, but they are slowed down by unclear information, inconsistent pricing, weak documentation, and uncertainty about where value will grow.",
  },
  {
    title: "The approach",
    copy: "Fosh Estate simplifies the journey by presenting focused estate phases, direct enquiry support, inspection guidance, and a clear path from interest to allocation.",
  },
  {
    title: "The promise",
    copy: "Every buyer should feel informed before they commit. The brand is built around secure ownership, practical value, and legacy-focused decisions.",
  },
];

export function StorySection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Our story
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Making land ownership feel less confusing and more deliberate.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)]">
          {storyPoints.map((point, index) => (
            <article key={point.title} className="grid gap-4 bg-white p-6 md:grid-cols-[120px_1fr] md:p-7">
              <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
                0{index + 1}
              </p>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {point.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
