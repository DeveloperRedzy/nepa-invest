import { SectionHeading } from "@/components/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { processSteps } from "@/lib/site-data";

export function InvestmentProcessSection() {
  return (
    <section
      id="pristup"
      className="relative border-y border-gold/10 bg-navy-deep/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Investicijski pristup"
          title="Promišljen proces od analize do realizacije vrijednosti"
          description="Strukturiran investicijski okvir koji svaki projekat vodi kroz četiri jasno definisane faze."
        />

        <StaggerContainer
          as="ul"
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => (
            <StaggerItem as="li" key={step.number}>
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-gold/12 bg-card/60 p-7 transition-all duration-500 hover:border-gold/35 hover:bg-card">
                {/* gold accent line */}
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-colors duration-500 group-hover:bg-gold/15">
                    <step.icon className="size-5" />
                  </span>
                  <span className="font-display text-3xl font-semibold text-gold/30 transition-colors duration-500 group-hover:text-gold/60">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-ivory">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
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
