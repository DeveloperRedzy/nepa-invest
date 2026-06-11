# Nepa Invest — korporativni web

Premium one-page prezentacija za **Nepa Invest**, investicijsku kompaniju
specijalizovanu za akviziciju, razvoj i prodaju stambenih i poslovnih
nekretnina.

Tehnologije: **Next.js 16 (App Router)**, **React 19**, **TypeScript**,
**Tailwind CSS v4**, **shadcn/ui** (Base UI), **lucide-react**, **motion**.

## Pokretanje lokalno

```bash
npm install      # instalacija zavisnosti
npm run dev      # razvojni server na http://localhost:3000
npm run lint     # ESLint
npm run typecheck# TypeScript provjera (tsc --noEmit)
npm run build    # produkcijski build
```

## Struktura

```
src/
  app/                 # layout (fontovi + SEO metadata), page, globals.css (dizajn sistem)
  components/
    layout/            # header, footer, logo
    sections/          # hero, about, pristup, tipovi, prednosti, projekti, cta, kontakt
    motion/            # reveal, stagger-container (animacije)
    brand/             # architectural-glyph (placeholder vizual)
    ui/                # shadcn primitivi
    project-card.tsx   # kartica projekta (podržava buduće slike)
    contact-form.tsx   # kontakt forma (UI, bez backenda)
  lib/
    site-data.ts       # SAV sadržaj: navigacija, proces, tipovi, prednosti, projekti, kontakt
    utils.ts
public/
  logo/nepa-invest-logo.png
  projects/            # ovdje dodajte slike projekata
```

## Uređivanje sadržaja

Sav tekstualni sadržaj i podaci o projektima nalaze se u
[`src/lib/site-data.ts`](src/lib/site-data.ts). Tu mijenjate kontakt podatke,
korake procesa, prednosti i projekte.

### Dodavanje slika projekata

1. Spremite sliku u `public/projects/` (npr. `projekt-01.jpg`).
2. U `src/lib/site-data.ts` postavite `image: "/projects/projekt-01.jpg"` za
   odgovarajući projekat (umjesto `image: null`).
3. Po želji postavite `comingSoon: false` da promijenite tekst CTA dugmeta.

Kartica automatski prikazuje pravu sliku umjesto placeholdera — bez izmjena u
komponentama.

## Dizajn sistem

Brand tokeni (navy / charcoal / zlatna / ivory) definisani su u
[`src/app/globals.css`](src/app/globals.css) i izvedeni su iz logotipa.

## Deploy (Vercel)

Projekat je zero-config za Vercel (Next.js). Opcije:

- **GitHub integracija (preporučeno):** importujte repo na
  [vercel.com/new](https://vercel.com/new) — svaki push na `main` automatski
  deployuje produkciju, a svaki pull request dobija preview URL.
- **Vercel CLI:**
  ```bash
  vercel login      # interaktivno
  vercel link       # poveži folder s Vercel projektom
  vercel --prod     # produkcijski deploy
  ```

### Varijable okruženja

| Varijabla | Opis |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Kanonski URL sajta (npr. `https://www.nepainvest.com`). Koristi se za metadata, OpenGraph, `robots.txt`, `sitemap.xml` i JSON-LD. |

Ako varijabla nije postavljena, koristi se Vercel produkcijski domen
(`VERCEL_PROJECT_PRODUCTION_URL`), a kao posljednja opcija
`https://www.nepainvest.com`. Postavite `NEXT_PUBLIC_SITE_URL` čim povežete
vlastiti domen.
