import { cn } from "@/lib/utils";

/**
 * Abstract architectural tower mark — echoes the rising-building motif inside
 * the Nepa Invest shield. Pure SVG, used as an elegant placeholder visual and
 * ambient brand accent. Decorative only.
 */
export function ArchitecturalGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      aria-hidden="true"
      className={cn("text-gold", className)}
    >
      <defs>
        <linearGradient id="glyph-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <g stroke="url(#glyph-gold)" strokeWidth="2" strokeLinejoin="round">
        {/* central tower */}
        <path d="M100 20 L116 56 V220 H84 V56 Z" />
        {/* left tower */}
        <path d="M70 84 L84 104 V220 H56 V104 Z" />
        {/* right tower */}
        <path d="M130 84 L116 104 V220 H144 V104 Z" />
      </g>
      {/* window grid hints */}
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        <line x1="92" y1="80" x2="108" y2="80" />
        <line x1="92" y1="104" x2="108" y2="104" />
        <line x1="92" y1="128" x2="108" y2="128" />
        <line x1="92" y1="152" x2="108" y2="152" />
        <line x1="92" y1="176" x2="108" y2="176" />
        <line x1="92" y1="200" x2="108" y2="200" />
      </g>
    </svg>
  );
}
