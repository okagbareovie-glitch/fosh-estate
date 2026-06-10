import { ContactForm } from "./contact-form";

export function ContactFormSection() {
  return (
    <section className="section-y bg-[var(--background)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Buyer enquiry
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Send the details that help the team guide you faster.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            Share your name, phone number, preferred location, budget range,
            and what you want to confirm. Your message opens in WhatsApp so you
            can review it before sending.
          </p>
          <div className="mt-8 border border-[var(--line)] bg-white p-5">
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
              What to request
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Ask for current availability, listed prices, inspection dates,
              allocation process, payment guidance, and title information
              before making a decision.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
