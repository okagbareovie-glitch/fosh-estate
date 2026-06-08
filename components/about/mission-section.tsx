import { Building2, MapPinned, ShieldCheck } from "lucide-react";

const missionItems = [
  {
    title: "Mission",
    copy: "To help individuals, families, and investors secure estate land with clarity, confidence, and a long-term view of value.",
    icon: ShieldCheck,
  },
  {
    title: "Vision",
    copy: "To become a trusted real estate partner for buyers building generational wealth through land and property ownership.",
    icon: Building2,
  },
  {
    title: "Footprint",
    copy: "Focused on growth markets across Lagos, Rivers, FCT, Ogun, and other selected states as the property catalogue expands.",
    icon: MapPinned,
  },
];

export function MissionSection() {
  return (
    <section className="bg-[var(--navy)] py-16 text-white md:py-20">
      <div className="container-page grid gap-5 md:grid-cols-3">
        {missionItems.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="border border-white/20 bg-white/10 p-6">
              <Icon aria-hidden className="text-[#afc8f0]" size={26} />
              <h2 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#d4e3ff]">
                {item.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
