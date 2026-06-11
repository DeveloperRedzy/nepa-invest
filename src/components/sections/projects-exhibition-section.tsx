import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site-data";

export function ProjectsExhibitionSection() {
  return (
    <section id="projekti" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Projekti"
            title="Portfolio razvojnih projekata u izgradnji"
            description="Tri razvojna projekta trenutno su u fokusu Nepa Invest portfolija. Vizualni materijali, detalji lokacija i projektne specifikacije bit će dodani nakon finalizacije prezentacijskih materijala."
          />
        </div>

        <StaggerContainer className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
