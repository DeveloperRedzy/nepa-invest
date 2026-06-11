import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-navy via-navy-deep to-charcoal px-7 py-16 sm:px-14 sm:py-20">
          {/* ambient accents */}
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="animate-aura absolute -right-20 -top-20 size-80 rounded-full bg-gold/15 blur-[100px]" />
            <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" />
          </div>

          <div className="flex max-w-3xl flex-col gap-6">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              Partnerstvo
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] text-ivory sm:text-4xl md:text-5xl">
              Pokrenimo razgovor o vašoj sljedećoj investiciji
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-ivory/80">
              Otvoreni smo za razgovore s investitorima, vlasnicima zemljišta,
              strateškim partnerima i kupcima koji prepoznaju vrijednost
              kvalitetno razvijenih nekretninskih projekata.
            </p>
            <div className="mt-2">
              <Link
                href="#kontakt"
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                Pokrenimo razgovor
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
