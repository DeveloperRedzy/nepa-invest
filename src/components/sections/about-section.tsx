import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArchitecturalGlyph } from "@/components/brand/architectural-glyph";

const pillars = [
  {
    title: "Disciplinovan proces",
    text: "Svaka investicija počiva na jasnoj logici, analizi rizika i odgovornom upravljanju kapitalom.",
  },
  {
    title: "Tržišna pozicija",
    text: "Projekte razvijamo s jasnom tržišnom pozicijom i funkcionalnom vrijednošću za krajnjeg korisnika.",
  },
  {
    title: "Dugoročan potencijal",
    text: "Fokus je na održivoj potražnji i kapitalnoj vrijednosti koja raste tokom vremena.",
  },
];

export function AboutSection() {
  return (
    <section id="o-nama" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: heading + architectural visual */}
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="O nama"
              title="Investicijska disciplina koja stvara dugoročnu vrijednost"
              description="Nepa Invest je investicijska kompanija usmjerena na akviziciju, razvoj i prodaju stambenih i poslovnih nekretnina."
            />

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-br from-charcoal/60 to-navy-deep/80 p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
                />
                <div className="relative flex items-center gap-7">
                  <ArchitecturalGlyph className="h-28 w-auto shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-[0.22em] text-gold">
                      Arhitektonski kvalitet
                    </span>
                    <p className="text-sm leading-relaxed text-ivory/80">
                      Spajamo tržišnu analitiku i visok standard izvedbe u
                      projekte s jasnom razvojnom logikom.
                    </p>
                  </div>
                </div>
                <div className="rule-gold mt-7" />
                <div className="relative mt-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>Razvoj nekretnina</span>
                  <span className="text-gold">Nepa Invest</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: narrative + pillars */}
          <Reveal delay={0.1} className="flex flex-col gap-10">
            <p className="text-pretty text-lg leading-relaxed text-ivory/85">
              Kroz disciplinovan investicijski proces, Nepa Invest identificira
              prilike koje spajaju atraktivne lokacije, održivu potražnju i visok
              standard izvedbe. Naš cilj je razvijati nekretninske projekte koji
              imaju jasnu tržišnu poziciju, funkcionalnu vrijednost i dugoročan
              potencijal rasta.
            </p>

            <div className="rule-gold" />

            <ul className="grid gap-8 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex flex-col gap-2">
                  <span className="font-display text-xl text-gold">
                    {pillar.title}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
