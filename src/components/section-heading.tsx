import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Consistent section intro: gold eyebrow, serif title, supporting copy. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] text-ivory sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
