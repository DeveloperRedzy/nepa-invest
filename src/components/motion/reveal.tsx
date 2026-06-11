"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel distance in px. */
  y?: number;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Render element. Defaults to a div. */
  as?: "div" | "section" | "li" | "span";
};

/**
 * Tasteful scroll-into-view reveal: soft opacity + vertical rise.
 * Honors `prefers-reduced-motion` by rendering content statically.
 */
export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
