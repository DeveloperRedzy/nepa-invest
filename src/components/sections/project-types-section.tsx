import { SectionHeading } from "@/components/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { projectTypes } from "@/lib/site-data";

export function ProjectTypesSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tipovi projekata"
          title="Razvojni fokus usmjeren na održivu tržišnu potražnju"
          description="Razvijamo različite tipove nekretnina, povezane jedinstvenim standardom kvaliteta i investicijske discipline."
        />

        <StaggerContainer
          as="ul"
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {projectTypes.map((type) => (
            <StaggerItem as="li" key={type.title}>
              <article className="group relative flex h-full items-start gap-6 overflow-hidden rounded-2xl border border-gold/12 bg-card/50 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-card">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 size-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10"
                />
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 text-gold transition-all duration-500 group-hover:scale-105 group-hover:bg-gold/15">
                  <type.icon className="size-6" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl text-ivory">
                    {type.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
