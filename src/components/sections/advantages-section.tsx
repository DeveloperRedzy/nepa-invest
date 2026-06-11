import { SectionHeading } from "@/components/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { advantages } from "@/lib/site-data";

export function AdvantagesSection() {
  return (
    <section
      id="prednosti"
      className="relative border-y border-gold/10 bg-navy-deep/40 py-20 sm:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Zašto Nepa Invest"
          title="Strateško razmišljanje i operativna ozbiljnost"
          description="Pristup koji spaja analitičku preciznost, kvalitet izvedbe i transparentnu komunikaciju u svakoj fazi razvoja."
        />

        <StaggerContainer
          as="ul"
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {advantages.map((advantage) => (
            <StaggerItem as="li" key={advantage.title}>
              <article className="group flex h-full flex-col gap-4 rounded-2xl border border-gold/12 bg-card/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-colors duration-500 group-hover:bg-gold/15">
                  <advantage.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold text-ivory">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {advantage.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
