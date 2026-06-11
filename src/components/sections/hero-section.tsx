"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, MoveDown } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ArchitecturalGlyph } from "@/components/brand/architectural-glyph";
import { trustIndicators } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="animate-aura absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-gold"
          >
            Strateški razvoj nekretnina
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] text-ivory sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            Investicije u nekretnine s jasnom{" "}
            <span className="text-gold-gradient">strategijom rasta</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Nepa Invest razvija stambene i poslovne projekte na lokacijama s
            visokim potencijalom, kombinujući tržišnu analitiku, kvalitetnu
            gradnju i dugoročnu investicijsku vrijednost.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#pristup"
              className={cn(buttonVariants({ size: "lg" }), "group")}
            >
              Pogledajte pristup
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#kontakt"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-gold/30 bg-transparent text-ivory hover:border-gold/60 hover:bg-gold/10 hover:text-ivory",
              )}
            >
              Kontaktirajte nas
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            variants={item}
            className="mt-14 grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-gold/12 bg-gold/[0.03] sm:grid-cols-4"
          >
            {trustIndicators.map((indicator) => (
              <li
                key={indicator.label}
                className="flex flex-col gap-2 bg-background/20 p-5"
              >
                <indicator.icon className="size-5 text-gold" />
                <span className="text-sm font-medium text-ivory">
                  {indicator.label}
                </span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {indicator.caption}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-b from-charcoal/60 to-navy-deep/80">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <motion.div
              initial={{ y: reduceMotion ? 0 : 14 }}
              animate={{ y: reduceMotion ? 0 : [-8, 8, -8] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <ArchitecturalGlyph className="h-3/4 w-auto" />
            </motion.div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-gold/15 pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Arhitektonski kvalitet</span>
              <span className="text-gold">Nepa Invest</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="mx-auto mt-16 hidden max-w-7xl px-8 sm:flex">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <MoveDown className="size-4 animate-bounce text-gold" />
          Istražite
        </span>
      </div>
    </section>
  );
}
