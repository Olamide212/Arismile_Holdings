# Arismile monorepo

Next.js websites for **Arismile Holdings** and its subsidiaries, managed with
**npm workspaces** and **Turborepo**. Use npm only (no pnpm or Yarn). There is
a single root `package-lock.json`.

```
apps/
  holdings/       @arismile/holdings      arismile.ng: rebuild of the original WordPress site
  9town/          @arismile/9town         multi-page site
  oceania/        @arismile/oceania       multi-page site
  datu-kalinga/   @arismile/datu-kalinga  multi-page site
  mind-age/       @arismile/mind-age      multi-page site
  arismile-advisory/  @arismile/arismile-advisory  multi-page site
  cadillac-security/  @arismile/cadillac-security  multi-page site
  petogas/            @arismile/petogas            multi-page site
packages/
  brand/          @arismile/brand    verified group facts (contacts, offices, subsidiaries) and subsidiary profile copy
  ui/             @arismile/ui       optional, design-neutral primitives (Container, SkipLink, BrandIcon, cn)
  config/         @arismile/config   shared tsconfig presets + ESLint flat config
  site-kit/       @arismile/site-kit themeable page templates + components for the subsidiary sites
```

Each app owns its own pages, design tokens (`app/globals.css`), fonts, images
(`public/`), metadata, environment variables and deployment. The shared
packages hold no visual identity, so subsidiary sites are not forced to use the
Holdings design.

## Requirements

- Node.js 20.9 or later (`.nvmrc` pins 22)
- npm 10 or later

## Commands (run from the repo root)

| Command | What it does |
| --- | --- |
| `npm install` | Install every workspace and link the `@arismile/*` packages |
| `npm run dev:holdings` | Holdings dev server on http://localhost:3000 |
| `npm run dev:9town` / `dev:oceania` / `dev:datu-kalinga` / `dev:mind-age` | Ports 3001 / 3002 / 3003 / 3004 |
| `npm run dev:arismile-advisory` / `dev:cadillac-security` / `dev:petogas` | Ports 3005 / 3006 / 3008 |
| `npm run build:holdings` | Build Holdings and its workspace dependencies (`turbo --filter=@arismile/holdings...`) |
| `npm run build:9town` (etc.) | Same for each subsidiary app |
| `npm run build` | Build every app (Turborepo, cached) |
| `npm run start:holdings` | Serve the Holdings production build |
| `npm run lint` | ESLint in every app |
| `npm run typecheck` | `next typegen` + `tsc --noEmit` in every app and package |

To add a dependency to one app: `npm install <pkg> --workspace=@arismile/holdings`.

## Holdings site

Routes:

| Route | Notes |
| --- | --- |
| `/` | Hero slider (one slide per subsidiary), About Us, Our Subsidiaries, Area of Core Competence (`#services`), Our Partners, Discover More |
| `/about` | Company profile |
| `/subsidiaries` | All subsidiary cards |
| `/subsidiaries/[slug]` | One shared template for `nine-town`, `oceania`, `datu-kalinga`, `mind-age`, `arismile-advisory`, `cadillac-security`, `petogas-limited` |
| `/our-team` | Leadership (keeps the original WordPress path) |
| `/contact` | Contact details + validated form posting to `/api/contact` |
| `/privacy-policy` | Text from arismile.ng |

Permanent redirects keep the old WordPress URLs working:
`/9town-nigeria-limited`, `/oceania-limited`, `/datu-kalinga`, `/mind-age` →
`/subsidiaries/...`, and `/services` → `/#services` (see `apps/holdings/next.config.ts`).

Content lives in `apps/holdings/lib/content/*` and `packages/brand/src`. Subsidiary
copy (intro, services, statements, values) is in `packages/brand/src/profiles.ts`
and is shared by the Holdings subsidiary pages and the subsidiary sites; each app
keeps its own images.
Values that differ between the two source sites carry a `needsVerification`
note in `@arismile/brand`.

### Environment variables (`apps/holdings/.env.example`)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (default `https://arismile.ng`) |
| `CONTACT_WEBHOOK_URL` | Optional. The contact API forwards validated submissions here as JSON. When it is not set, the form says online messaging is unavailable and offers a pre-filled email; it never claims a message was sent. |

## Deploying to Vercel

Create **one Vercel project per app**, all connected to this repository:

| Project | Root Directory | Framework |
| --- | --- | --- |
| Arismile Holdings | `apps/holdings` | Next.js |
| 9-Town | `apps/9town` | Next.js |
| Oceania | `apps/oceania` | Next.js |
| Datu Kalinga | `apps/datu-kalinga` | Next.js |
| Mind Age | `apps/mind-age` | Next.js |
| Arismile Advisory | `apps/arismile-advisory` | Next.js |
| Cadillac Security | `apps/cadillac-security` | Next.js |
| Petogas | `apps/petogas` | Next.js |

- **Install:** Vercel detects the root `package-lock.json` and npm workspaces.
  It runs `npm install` at the repository root, which links the `@arismile/*`
  packages. Leave the Install Command at its default.
- **Build:** leave the default (`next build`, run inside the Root Directory),
  or set `cd ../.. && npx turbo run build --filter=@arismile/holdings` (use the
  app's own package name). Shared packages ship as TypeScript source and are
  compiled by each app through `transpilePackages`, so they need no separate
  build step.
- **Output:** Next.js default (`.next`). No `output` override is needed.
- **Skip unaffected deployments:** set the Ignored Build Step to
  `npx turbo-ignore` so a project only rebuilds when its app or a package it
  depends on changes.
- **Environment variables:** set them per project (Settings → Environment
  Variables) for Production and Preview. For Holdings, set
  `NEXT_PUBLIC_SITE_URL` and, once a form backend exists, `CONTACT_WEBHOOK_URL`.
  For subsidiary apps, set `NEXT_PUBLIC_SITE_URL` to the subsidiary's own domain.
- **Domains:** add each domain under that project's Settings → Domains and
  point DNS as Vercel instructs (an A record for the apex domain, a CNAME for
  `www`):

  | Project | Domain |
  | --- | --- |
  | Holdings | `arismile.ng` |
  | 9-Town | `www.9townnigltd.com` (apex `9townnigltd.com` redirects to www) |
  | Oceania | `www.oceanialtd.com` (apex `oceanialtd.com` redirects to www) |
  | Datu Kalinga | `www.datukalinga.com` (apex `datukalinga.com` redirects to www) |
  | Cadillac Security | `www.cadillacsecurity.com.ng` (apex `cadillacsecurity.com.ng` redirects to www) |
  | Petogas | `www.petogas.com` (apex `petogas.com` redirects to www) |
  | Mind Age | `mind-age.vercel.app` (temporary, until a domain is assigned) |
  | Arismile Advisory | `arismile-advisory-gamma.vercel.app` (temporary) |

  For each subsidiary, add both the `www` and the bare domain in Vercel, set
  `www` as the primary domain, and let the bare domain redirect to it.

  Subsidiary domains live in `website` in `packages/brand/src/index.ts`; the
  Holdings site links to them and each subsidiary app uses its domain as the
  default `NEXT_PUBLIC_SITE_URL`.
- **Old domain:** to retire `arismile.com.ng`, add it to the Holdings project
  and set it to redirect to `arismile.ng`. The legacy path redirects above
  then still apply.

## Subsidiary sites

All seven subsidiary apps are multi-page sites. Each has its **own layout and
design**; `@arismile/site-kit` only supplies shared behaviour (header styles,
mobile drawer, contact form + API, FAQ, SEO helpers, scroll animations) and
inner-page templates that render the site's own section components.

| Site | Design concept | Header style |
| --- | --- | --- |
| 9-Town | Atelier: architectural editorial, full-bleed photography, numbered rows, oversized wordmark | `overlay` |
| Oceania | Tide: maritime, wave-edged sections, swipeable service cards, zig-zag timeline | `solid` |
| Datu Kalinga | Strata: brutalist, bordered cells, diagonal hero, ledger table, rock-layer process | `boxed` |
| Mind Age | Circuit: dark tech, glow and grid, bento services, stepper | `pill` |
| Arismile Advisory | Ledger: private-bank editorial, centred serif headings, Roman numerals | `centered` |
| Cadillac Security | Sentinel: tactical, corner brackets, dossier cards, phase track | `hud` |
| Petogas | Flow: corporate energy, angled edges, gold tiles, pipeline process | `utility` |

Per site:

- `app/page.tsx`: the custom home page.
- `components/ui.tsx`: the site's section components (page header, headings,
  services, features, process, values, call to action), passed to the shared
  inner pages as `ui`.
- `components/SiteFooter.tsx`: the site's footer.
- `app/globals.css`: colour tokens, radius and any site-specific effects.
- `app/layout.tsx`: fonts and the header style.
- `lib/site.ts`: all content. Verified copy comes from `@arismile/brand`;
  copy marked as drafted was written for these sites and should be reviewed by
  each company before launch.

| Route | Content |
| --- | --- |
| `/` | Custom home page |
| `/about` | Story, mission/vision/values, process, company-specific sections |
| `/services`, `/services/[slug]` | Service overview and one page per service |
| `/industries` | Sectors served |
| `/team` | Leadership team with profile dialogs (the Arismile leadership, shared by Holdings and every subsidiary) |
| `/contact` | Contact details, validated enquiry form (`/api/contact`) and FAQ |
| `/privacy-policy` | Privacy policy naming the subsidiary |

The contact form forwards to `CONTACT_WEBHOOK_URL` when set (see each app's
`.env.example`); without it, visitors are offered a pre-filled email instead.

### SEO, preloader and shared features

- **SEO (all eight sites):**
  - Every page has a canonical URL, full Open Graph and Twitter metadata with a share image, keywords and robots directives.
  - Structured data (JSON-LD):
    - **Organization** (with Arismile Holdings as parent) and **WebSite** on every page;
    - **BreadcrumbList** on inner pages;
    - **Service** on service pages, **FAQPage** on Contact, and **Person** entries on Team pages.
  - A web app manifest (`/manifest.webmanifest`) and a sitemap including `/team`.
  - Subsidiary helpers live in `packages/site-kit/src/seo.tsx`; Holdings uses `apps/holdings/lib/seo.tsx`.
- **Preloader:**
  - A branded first-load overlay that fades out once the page is interactive and fonts are ready. It does not wait for images.
  - A CSS fail-safe hides it after 3s even if JavaScript never runs.
  - It is hidden from screen readers and respects reduced motion.
- **Team data:** the leadership is the same for Holdings and every subsidiary. It lives in `packages/brand/src/leadership.ts`, so updating it there updates all eight sites. Team photos are in each app's `public/images/team/`.
