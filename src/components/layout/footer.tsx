import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { navItems, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/12 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Brand */}
          <div className="flex max-w-md flex-col gap-5">
            <Logo size={44} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Investicijska kompanija usmjerena na akviziciju, razvoj i prodaju
              stambenih i poslovnih nekretnina na lokacijama s visokim
              potencijalom rasta.
            </p>
            <div className="flex flex-col gap-1 text-sm text-ivory/80">
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-gold"
              >
                {site.email}
              </a>
              <span>{site.phone}</span>
              <span>{site.location}</span>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigacija">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Navigacija
            </span>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rule-gold my-10" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Sva prava zadržana.
          </p>
          <p className="max-w-xl text-pretty leading-relaxed">
            Informacije na ovoj stranici služe isključivo u informativne svrhe i
            ne predstavljaju investicijski savjet.
          </p>
        </div>
      </div>
    </footer>
  );
}
