import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { InvestmentProcessSection } from "@/components/sections/investment-process-section";
import { ProjectTypesSection } from "@/components/sections/project-types-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { ProjectsExhibitionSection } from "@/components/sections/projects-exhibition-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { site, siteUrl } from "@/lib/site-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  description: site.description,
  url: siteUrl,
  logo: `${siteUrl}/logo/nepa-invest-logo.png`,
  image: `${siteUrl}/logo/nepa-invest-logo.png`,
  email: site.email,
  telephone: site.phone,
  areaServed: site.location,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BA",
  },
  knowsAbout: [
    "Akvizicija nekretnina",
    "Razvoj nekretnina",
    "Prodaja stambenih nekretnina",
    "Prodaja poslovnih nekretnina",
    "Investicije u nekretnine",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <a
        href="#o-nama"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Preskoči na sadržaj
      </a>

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <InvestmentProcessSection />
        <ProjectTypesSection />
        <AdvantagesSection />
        <ProjectsExhibitionSection />
        <CtaSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
