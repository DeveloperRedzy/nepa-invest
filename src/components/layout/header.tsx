"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-gold/10 py-3"
          : "border-b border-transparent py-5",
      )}
    >
      <nav
        aria-label="Glavna navigacija"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="#top"
          aria-label="Nepa Invest — početak"
          className="transition-opacity hover:opacity-90"
        >
          <Logo size={40} priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative text-sm text-ivory/80 transition-colors hover:text-ivory"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="#kontakt" className={cn(buttonVariants({ size: "sm" }))}>
            Zakažite konsultacije
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-md text-ivory transition-colors hover:text-gold lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] },
              // Fade content out quickly on close so nav links never ghost
              // through during the height collapse.
              opacity: { duration: reduceMotion ? 0 : 0.18 },
            }}
            className="glass overflow-hidden border-t border-gold/10 lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 sm:px-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base text-ivory/85 transition-colors hover:bg-gold/10 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-3">
                <Link
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "w-full")}
                >
                  Zakažite konsultacije
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
