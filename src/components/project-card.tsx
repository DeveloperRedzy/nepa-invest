"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock, ImageIcon } from "lucide-react";

import { ArchitecturalGlyph } from "@/components/brand/architectural-glyph";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-card/60 transition-all duration-500 hover:border-gold/45 hover:shadow-gold"
    >
      {/* Visual: real image when provided, elegant placeholder otherwise */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-navy/70 to-navy-deep">
            <div className="absolute inset-0 bg-grid opacity-40 transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ArchitecturalGlyph className="h-2/3 w-auto opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-navy-deep to-transparent p-4 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              <ImageIcon className="size-3.5 text-gold/70" />
              Vizualni materijali u pripremi
            </div>
          </div>
        )}

        {/* Status chip */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-navy-deep/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
          <span className="size-1.5 rounded-full bg-gold" />
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-gold/80">
            {project.category}
          </span>
          <h3 className="font-display text-2xl text-ivory">{project.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.attributes.map((attr) => (
            <li
              key={attr}
              className="rounded-full border border-gold/15 bg-gold/[0.04] px-3 py-1 text-xs text-ivory/75"
            >
              {attr}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3">
          {project.comingSoon ? (
            // Non-interactive status label — avoids a link that leads nowhere.
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="size-4 text-gold/70" />
              Detalji uskoro
            </span>
          ) : (
            <Link
              href={`#${project.id}`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "group/btn -ml-2 text-gold hover:bg-gold/10 hover:text-gold",
              )}
            >
              Pogledajte projekt
              <ArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
