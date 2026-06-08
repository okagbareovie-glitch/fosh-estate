import { ContactForm } from "./contact-form";

export function ContactFormSection() {
  return (
    <section className="section-y bg-[var(--background)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Enquiry form
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Send the essentials. The team can take it from there.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            Keep the first message simple: your name, phone number, and what
            you want to know. The form opens WhatsApp with your enquiry ready to
            send.
          </p>
          <div className="mt-8 border border-[var(--line)] bg-white p-5">
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
              Inspection support
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Ask about inspection dates, price lists, allocation process,
              available plots, and title information before visiting.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
