const storyPoints = [
  {
    title: "The problem",
    copy: "Many Nigerians want to own land, but the process often feels crowded with unclear prices, weak explanations, rushed decisions, and uncertainty about which locations can hold long-term value.",
  },
  {
    title: "The approach",
    copy: "Fosh Estate narrows the noise by presenting focused land opportunities, current enquiry support, practical inspection guidance, and a simpler path from interest to next steps.",
  },
  {
    title: "The promise",
    copy: "Every buyer should understand what they are considering before they commit. Our work is shaped around clearer information, stronger questions, and ownership decisions that can serve the future.",
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
            Making land ownership less confusing and more intentional.
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
