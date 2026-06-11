import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact-form";
import { contactChannels } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative border-t border-gold/10 bg-navy-deep/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left: heading + channels */}
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Kontakt"
              title="Razgovarajmo o vašem projektu ili investiciji"
              description="Kontaktirajte nas za konsultacije, partnerstva ili informacije o razvojnim projektima. Odgovaramo promptno i transparentno."
            />

            <Reveal delay={0.1}>
              <ul className="flex flex-col divide-y divide-gold/10 overflow-hidden rounded-2xl border border-gold/12 bg-card/40">
                {contactChannels.map((channel) => {
                  const content = (
                    <span className="flex items-center gap-4 p-5">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                        <channel.icon className="size-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="text-base text-ivory">
                          {channel.value}
                        </span>
                      </span>
                    </span>
                  );

                  return (
                    <li key={channel.label}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="block transition-colors hover:bg-gold/[0.06]"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal
            delay={0.15}
            className="rounded-3xl border border-gold/15 bg-card/50 p-7 sm:p-10"
          >
            <h3 className="mb-6 font-display text-2xl text-ivory">
              Pošaljite upit
            </h3>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
