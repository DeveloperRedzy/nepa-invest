import Image from "next/image";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site-data";

type LogoProps = {
  /** Pixel size of the square shield emblem. */
  size?: number;
  /** Show the "Nepa Invest" wordmark next to the emblem. */
  showWordmark?: boolean;
  className?: string;
  priority?: boolean;
};

/**
 * Primary brand mark. Uses the transparent gold shield emblem paired with the
 * "Nepa Invest" wordmark set in the display serif — crisp at any size and
 * sitting cleanly on the dark navy background.
 */
export function Logo({
  size = 40,
  showWordmark = true,
  className,
  priority = false,
}: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo/nepa-invest-shield.png"
          alt={`${site.name} grb`}
          fill
          sizes={`${size}px`}
          className="object-contain"
          priority={priority}
        />
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-semibold uppercase leading-none tracking-[0.18em] text-ivory">
          {site.name}
        </span>
      )}
    </span>
  );
}
