import {
  Building2,
  Store,
  LayoutGrid,
  LandPlot,
  Search,
  FileSignature,
  HardHat,
  TrendingUp,
  MapPinned,
  Scale,
  Gem,
  Eye,
  Compass,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Brand                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Canonical site URL, resolved in priority order:
 *   1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is attached.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the stable Vercel production domain.
 *   3. Fallback placeholder domain.
 */
export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.nepainvest.com");

export const site = {
  name: "Nepa Invest",
  tagline: "Investicije i razvoj nekretnina",
  description:
    "Nepa Invest je investicijska kompanija usmjerena na akviziciju, razvoj i prodaju stambenih i poslovnih nekretnina. Naš pristup temelji se na pažljivoj analizi tržišta, prepoznavanju lokacija s visokim potencijalom rasta i razvoju kvalitetnih projekata koji stvaraju dugoročnu vrijednost za investitore, kupce i zajednicu.",
  email: "info@nepainvest.com",
  phone: "+387 62 717 748",
  location: "Bosna i Hercegovina",
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "O nama", href: "#o-nama" },
  { label: "Investicijski pristup", href: "#pristup" },
  { label: "Projekti", href: "#projekti" },
  { label: "Prednosti", href: "#prednosti" },
  { label: "Kontakt", href: "#kontakt" },
];

/* -------------------------------------------------------------------------- */
/*  Hero — honest, descriptive trust indicators (no invented metrics)          */
/* -------------------------------------------------------------------------- */

export type TrustIndicator = { label: string; caption: string; icon: LucideIcon };

export const trustIndicators: TrustIndicator[] = [
  { label: "Stambeni razvoj", caption: "Kvalitetni stambeni objekti", icon: Building2 },
  { label: "Poslovne nekretnine", caption: "Funkcionalni poslovni prostori", icon: Store },
  { label: "Akvizicija lokacija", caption: "Zemljište s potencijalom rasta", icon: LandPlot },
  { label: "Investicijski pristup", caption: "Disciplinovan i transparentan", icon: Scale },
];

/* -------------------------------------------------------------------------- */
/*  Investment approach — 4-step process                                       */
/* -------------------------------------------------------------------------- */

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Analiza tržišta i lokacije",
    description:
      "Procjenjujemo potencijal lokacije, tržišnu potražnju, pristupnu infrastrukturu i dugoročnu vrijednost projekta.",
    icon: Search,
  },
  {
    number: "02",
    title: "Akvizicija i planiranje",
    description:
      "Biramo projekte s jasnom investicijskom logikom i postavljamo osnovu za efikasan razvoj.",
    icon: FileSignature,
  },
  {
    number: "03",
    title: "Razvoj i izgradnja",
    description:
      "Fokusiramo se na kvalitetnu izvedbu, funkcionalan dizajn i standarde koji povećavaju vrijednost nekretnine.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Prodaja i realizacija vrijednosti",
    description:
      "Projekte pozicioniramo prema stvarnim potrebama tržišta, kupaca i investitora.",
    icon: TrendingUp,
  },
];

/* -------------------------------------------------------------------------- */
/*  Project types                                                              */
/* -------------------------------------------------------------------------- */

export type ProjectType = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const projectTypes: ProjectType[] = [
  {
    title: "Stambeni objekti",
    description:
      "Stambene cjeline projektovane prema održivoj tržišnoj potražnji, s naglaskom na arhitektonski kvalitet i funkcionalnost.",
    icon: Building2,
  },
  {
    title: "Poslovni prostori",
    description:
      "Poslovne nekretnine prilagođene savremenim standardima, lokacijski pozicionirane za stabilnu kapitalnu vrijednost.",
    icon: Store,
  },
  {
    title: "Mješoviti razvojni projekti",
    description:
      "Integrisani stambeno-poslovni koncepti koji objedinjuju različite namjene u promišljenu razvojnu cjelinu.",
    icon: LayoutGrid,
  },
  {
    title: "Zemljište s razvojnim potencijalom",
    description:
      "Promišljena akvizicija lokacija s jasnim razvojnim potencijalom i dugoročnom investicijskom osnovom.",
    icon: LandPlot,
  },
];

/* -------------------------------------------------------------------------- */
/*  Why Nepa Invest — advantages                                               */
/* -------------------------------------------------------------------------- */

export type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const advantages: Advantage[] = [
  {
    title: "Strateški odabir lokacija",
    description:
      "Lokacije biramo na osnovu razvojnog potencijala, infrastrukture i održive tržišne potražnje.",
    icon: MapPinned,
  },
  {
    title: "Fokus na kvalitet izvedbe",
    description:
      "Inzistiramo na arhitektonskom standardu i kvalitetnoj gradnji koja povećava kapitalnu vrijednost projekta.",
    icon: Gem,
  },
  {
    title: "Investicijska disciplina",
    description:
      "Svaki projekat počiva na jasnoj investicijskoj logici i odgovornom upravljanju kapitalom.",
    icon: Scale,
  },
  {
    title: "Dugoročna vrijednost",
    description:
      "Razvijamo nekretnine s jasnom tržišnom pozicijom i potencijalom rasta vrijednosti tokom vremena.",
    icon: TrendingUp,
  },
  {
    title: "Transparentan pristup",
    description:
      "Njegujemo otvorenu i jasnu komunikaciju s investitorima, partnerima i kupcima u svakoj fazi.",
    icon: Eye,
  },
  {
    title: "Razumijevanje lokalnog tržišta",
    description:
      "Poznavanje lokalnog konteksta omogućava nam preciznu procjenu prilika i tržišnog pozicioniranja.",
    icon: Compass,
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects exhibition                                                        */
/*                                                                             */
/*  Future images: drop a file in /public/projects and set `image` to its      */
/*  path (e.g. "/projects/projekt-01.jpg"). The ProjectCard renders the real   */
/*  image automatically; leave `image: null` to keep the elegant placeholder.  */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  attributes: string[];
  image: string | null;
  comingSoon: boolean;
};

export const projects: Project[] = [
  {
    id: "project-01",
    title: "Projekt 01",
    category: "Stambeni objekat",
    status: "Zgrada u izgradnji",
    description:
      "Razvojni projekat u pripremi za javnu prezentaciju. Detalji, fotografije i projektne informacije bit će dostupni uskoro.",
    attributes: ["Aktivan razvoj", "Stambena namjena", "Detalji uskoro"],
    image: null,
    comingSoon: true,
  },
  {
    id: "project-02",
    title: "Projekt 02",
    category: "Stambeni objekat",
    status: "Zgrada u izgradnji",
    description:
      "Projekat u izgradnji s fokusom na funkcionalnost, kvalitet izvedbe i dugoročnu tržišnu vrijednost.",
    attributes: ["U izgradnji", "Kvalitetna izvedba", "Vizuali u pripremi"],
    image: null,
    comingSoon: true,
  },
  {
    id: "project-03",
    title: "Projekt 03",
    category: "Stambeno-poslovni objekat",
    status: "Projekt u razvoju",
    description:
      "Razvojni koncept koji će biti detaljnije predstavljen nakon finalizacije projektne dokumentacije i vizualnih materijala.",
    attributes: ["Razvojni koncept", "Mješovita namjena", "Uskoro dostupno"],
    image: null,
    comingSoon: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Contact channels                                                           */
/* -------------------------------------------------------------------------- */

export type ContactChannel = {
  label: string;
  value: string;
  href: string | null;
  icon: LucideIcon;
};

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Telefon", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "Lokacija", value: site.location, href: null, icon: MapPinned },
];
