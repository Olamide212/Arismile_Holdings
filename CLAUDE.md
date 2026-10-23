# ARISMILE HOLDINGS — WORDPRESS TO NEXT.JS WEBSITE REBUILD

Act as a senior Next.js engineer, frontend architect, and pixel-accurate website reconstruction specialist.

I am rebuilding the existing Arismile Holdings corporate website from WordPress into Next.js. I need you to implement the actual website in my existing codebase, not merely describe how it should look or generate a generic corporate template.

This is a website migration with updated content, not a complete rebranding.

## 1. REFERENCE WEBSITES

**Original website — primary design reference:**
https://arismile.com.ng/

**Updated website — source of current company content:**
https://arismile.ng/

**Reference screenshots:** I have attached screenshots showing the existing WordPress homepage at different scroll positions. Use these screenshots as visual specifications for the layout, section order, proportions, backgrounds, cards, and footer.

The existing website's homepage structure is important. Do not replace it with a generic hero, navigation, and three-card template.

Inspect both websites, compare their content, and use the attached screenshots to reconstruct the original layout accurately.

If you have browser access, inspect both websites and their internal pages. If either website is inaccessible, work from the screenshots and available assets, and clearly identify any information that requires verification. Never invent company details.

## 2. NON-NEGOTIABLE DESIGN REQUIREMENT

Preserve the existing website's visual identity and section structure.

The current website uses:
- A corporate industrial and engineering visual style.
- Yellow/gold accents, approximately #FFC600, with green accents.
- White and light-grey content sections.
- Dark charcoal backgrounds and monochrome industrial machinery imagery.
- Large uppercase section headings.
- Thin horizontal divider lines.
- White rectangular content cards.
- Circular yellow icons and numbered badges.
- Dark image overlays behind text.
- Wide desktop content containers with generous horizontal margins.
- A dark multi-column footer with company information, office addresses, and quick links.

Treat these characteristics as the starting design system. Extract exact colors, typography, dimensions, and spacing from the reference where possible.

Do not introduce a new color palette, purple gradients, glassmorphism, excessive rounded cards, or an unrelated modern SaaS aesthetic.

The new website should look like a professionally rebuilt version of the original Arismile Holdings website.

## 3. CRITICAL HOMEPAGE REQUIREMENT: SUBSIDIARY IMAGE SLIDER

The homepage hero is an image slider showcasing the different Arismile Holdings subsidiaries.

This is NOT a single static hero image.

Implement a full-width hero carousel/slideshow with:
- A separate slide for each verified subsidiary.
- Large industrial or business imagery associated with each subsidiary.
- A dark overlay on the background images so text remains readable.
- Smooth transitions between slides.
- Automatic slide progression.
- Previous and next controls.
- Pagination indicators or another appropriate slide-position indicator.
- Responsive behavior on mobile, tablet, and desktop.
- Accessible controls and keyboard support.
- Pause-on-hover or another sensible way to prevent disruptive automatic movement.

Each slide should have an appropriate headline, short description, and CTA where supported by the reference website.

Use the actual subsidiary information and relevant images wherever possible. Do not use the same background image for every slide.

The screenshots show an industrial machinery image in a Discover More banner, while the hero itself must rotate through subsidiary-related images. Do not mistake the Discover More banner for the homepage hero.

The slider should occupy the same general position and visual prominence as the original WordPress hero.

If the original website contains more slides than can be seen in the screenshots, inspect the live website and reproduce all accessible slides.

## 4. HOMEPAGE SECTION-BY-SECTION SPECIFICATION

Implement the homepage in the following order, matching the original layout.

### Section A: Header and navigation

Reconstruct the existing site's header from the reference website.

Preserve:
- The original Arismile Holdings logo and its proportions.
- The navigation labels and their order.
- Any dropdown menus and relevant navigation behavior.
- The original header's relationship to the hero section.
- The original brand colors and typography.

Do not fabricate a new logo or replace the company branding.

Make the navigation responsive, with a working mobile menu.

### Section B: Hero image slider

Implement the subsidiary image carousel described above.

Use full-width background imagery, suitable cropping, readable text overlays, and functional navigation controls.

Keep the hero composition close to the original website, including the text alignment, content width, overlay strength, and CTA styling.

### Section C: About Us

The screenshot shows a large, light section with a subtle geometric background pattern.

Its layout is a two-column composition:
- Left column: a prominent image of industrial safety equipment, including a yellow hard hat, protective glasses, ear defenders, and gloves.
- Right column: a small introductory label, a bold uppercase ABOUT US heading, company description, and a yellow READ MORE link.

On desktop, preserve the image-left/text-right arrangement and approximate proportions.

On smaller screens, stack the image and text sensibly without losing the section's identity.

Use the updated company description from https://arismile.ng/ when available, while preserving the original layout.

### Section D: Our Subsidiaries

The screenshot shows a dark industrial background featuring machinery gears, with a subtle dark overlay.

The section contains:
- An uppercase OUR SUBSIDIARIES heading.
- A thin horizontal divider.
- A short introductory paragraph.
- Four white cards displayed in a row on desktop.

The visible original cards are:

1. 9Town Limited
2. Oceania Limited
3. Datu (Kalinga)
4. Mind Age

Each card has a yellow circular numbered badge, a bold subsidiary name, a description, and a yellow READ MORE link.

Preserve this design pattern. Do not replace the cards with image-heavy cards or a generic icon grid.

Use updated subsidiary descriptions from the newer website where available. Keep the actual subsidiary names and their correct information.

On desktop, use four evenly spaced columns when the viewport allows it. On tablet and mobile, adapt to fewer columns while preserving the cards' white backgrounds, numbering, typography, and spacing.

Make the READ MORE links functional when a valid destination exists.

### Section E: Area of Core Competence

The screenshot shows a spacious light-grey section with a large uppercase heading in muted blue-grey, followed by a thin horizontal line.

The visible design uses four white cards in a row. Each card has a yellow circular icon and a bold uppercase heading.

The four visible competencies are:

1. POWER INFRASTRUCTURE
2. OIL AND GAS INFRASTRUCTURE
3. GENERAL PROCUREMENT, OPERATIONS AND EQUIPMENT SUPPLY
4. INSTALLATIONS & CONSTRUCTIONS

Each card contains a short service description.

Preserve the original section's light background, large heading, horizontal divider, white cards, yellow icon circles, and restrained typography.

Use accurate descriptions from the updated website. Do not create additional service offerings without evidence.

Keep the cards aligned and visually balanced, including when descriptions have different lengths.

### Section F: Our Partners

The screenshot shows a light-grey or off-white background and a large uppercase OUR PARTNERS heading in muted blue-grey.

Below the heading is a thin divider and a horizontal row of six white logo panels.

The visible partner logos include:
- Nigerian Communications Commission (NCC).
- Clarit of Africa, as displayed in the screenshot.
- Malaysia Smelting Corporation (MSC).
- Utechemi.
- NDPHC.
- NNPC.

Verify the logos and names against available source assets and the updated website before using them.

Preserve the rectangular white logo panels, consistent dimensions, spacing, and alignment.

Use the genuine logo files wherever they are accessible. Maintain their aspect ratios and avoid stretching, recoloring, or redrawing them unnecessarily.

If the newer website has an updated partner list, use the verified current list while maintaining the original visual treatment.

For mobile, make the logos responsive using a suitable grid or horizontally scrollable row. If the original site uses a carousel, reproduce that behavior.

### Section G: Discover More banner

This is a full-width industrial photograph with a dark overlay.

The screenshot shows:
- A large uppercase DISCOVER MORE heading.
- A thin horizontal divider.
- A short company-related sentence.
- A prominent yellow CONTACT US button with an arrow.

Preserve the image-led layout, darkened background, left-aligned content, and yellow CTA.

Use the actual industrial image if available, or an appropriate licensed replacement if it is not.

The CTA must navigate to the correct contact page or contact section.

Do not merge this section with the hero slider. It is a separate section close to the bottom of the homepage.

### Section H: Footer

Reproduce the original dark-charcoal footer, including the diagonal or geometric background treatment visible in the screenshots.

The footer has four principal content areas:

1. Company logo, telephone number, email address, and social media icons.
2. ABUJA ADDRESS.
3. LAGOS ADDRESS.
4. QUICK LINKS.

The screenshot displays the following existing information:

Telephone: +234 (0) 8175539075

Email: info@arismile.com.ng

Abuja address:
Suite 4/5 Olesugun Obasanjo Auditorium, Federal Ministry of Justice, Maitama, Abuja.

Lagos address:
28 Ayinde Akinmade Street, Off Admiralty Way, Lekki Phase 1, Lagos.

Quick links:
- 9 Town Nig. Ltd.
- Oceania Limited
- Datu Kalinga
- Mind Age
- Career

These details are provided as references from the old website. Verify them against the updated website and use the latest confirmed information where it differs.

Preserve the logo's original proportions, green contact icons, yellow circular social icons, and white/grey typography.

Make telephone, email, social media, and quick links functional wherever valid destinations are available.

Do not invent social media profile URLs or subsidiary URLs.

## 5. UPDATED CONTENT MIGRATION

Use https://arismile.ng/ as the authoritative source for current company content.

Map the updated content to the existing design rather than redesigning the page around the new content.

Update:
- Company profile.
- About Us text.
- Subsidiary descriptions.
- Service descriptions.
- Partner information.
- Contact details.
- Navigation labels where required.
- Footer content.
- Internal page content.
- Metadata and SEO descriptions.

Keep the original layout when replacing the text.

Do not copy unverified claims, outdated contact details, or invented statistics into the new website.

Where the updated site contains additional relevant information, incorporate it into the appropriate existing section or a relevant inner page without disrupting the original homepage structure.

## 6. INNER PAGES

Inspect the available navigation and internal pages on both reference websites.

Rebuild the relevant pages using the same design language as the homepage.

Possible routes, only where supported by the original website, include:
- Home
- About Us
- Subsidiaries
- Individual subsidiary pages
- Services or core competencies
- Partners
- Career
- Contact Us

Preserve important original URL paths where practical and implement redirects where necessary.

Do not create empty pages just to fill a navigation menu.

Use reusable templates for subsidiary detail pages or other pages that share a common structure.

## 7. TECHNOLOGY AND PROJECT REQUIREMENTS

Use:
- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Lucide React where appropriate.
- Next.js Image for optimized image delivery.

Use the existing project's installed stack and conventions where they are compatible. Inspect package.json and the current file structure before making changes.

If the project already exists, modify the existing project rather than generating an unrelated replacement.

Do not delete working functionality, environment variables, dependencies, or project configuration without a clear reason.

Use reusable components for:
- Header and navigation.
- Hero slider.
- About section.
- Subsidiary cards.
- Competency cards.
- Partner logos.
- Discover More CTA.
- Footer.
- Shared buttons and section headings.

Keep the components modular and strongly typed.

Use Server Components by default, and Client Components for the slider, mobile menu, or other interactive elements as needed.

Do not introduce WordPress, PHP, or a new backend unnecessarily.

## 8. ASSET HANDLING

Search the existing project and public assets before sourcing new images.

Look for:
- The Arismile logo.
- Subsidiary logos.
- Partner logos.
- Industrial machinery images.
- Safety-equipment image.
- Industrial gear background.
- Discover More banner image.
- Fonts and icons used by the original website.

Where permitted and technically feasible, retrieve suitable assets from the reference websites and store them locally.

Organize assets sensibly, for example:

public/
  images/
    logo/
    hero/
    subsidiaries/
    partners/
    sections/

Do not create fake local filenames for assets that do not exist.

Do not use broken external image URLs or replace all original imagery with random stock photos.

If an asset cannot be retrieved, use a suitable temporary replacement and document exactly which file needs to be supplied.

## 9. VISUAL ACCURACY

Use the screenshots as visual acceptance criteria.

Prioritize:
- Correct section order.
- Correct background colors and images.
- Correct content widths and horizontal margins.
- Correct typography hierarchy.
- Correct card proportions.
- Correct image placement.
- Correct whitespace.
- Correct heading alignment.
- Correct yellow CTA styling.
- Correct footer structure.
- Correct mobile responsiveness.

The original design has a restrained corporate appearance. Preserve that character.

Do not:
- Add an unrelated navigation layout.
- Replace the subsidiary hero slider with one static hero.
- Omit the partners section.
- Omit the Discover More banner.
- Merge the core competence and subsidiaries sections.
- Replace the dark industrial backgrounds with unrelated gradients.
- Use oversized rounded cards.
- Invent testimonials, counters, certifications, or company achievements.
- Produce only a mockup or static screenshot instead of working application code.

## 10. FUNCTIONALITY AND ACCESSIBILITY

Make all visible controls functional.

Implement:
- Hero carousel navigation and automatic progression.
- Responsive navigation and dropdowns.
- Internal page links.
- Valid contact links.
- Accessible button labels.
- Keyboard-accessible interactive elements.
- Appropriate image alt text.
- Correct heading hierarchy.
- Reduced-motion support for users who prefer it.

If forms exist, validate inputs and show appropriate feedback. Do not simulate successful form delivery when no backend is connected.

## 11. TESTING

After implementation:
- Run the project's available lint and TypeScript checks.
- Run the production build.
- Resolve build errors.
- Check all internal routes.
- Check for missing assets and broken links.
- Check for horizontal overflow on mobile.
- Confirm the slider works correctly.
- Confirm the partner logos retain their aspect ratios.
- Confirm the footer columns stack properly on smaller screens.

If a browser or screenshot tool is available, compare the rendered homepage against the supplied screenshots and refine the implementation.

Do not claim tests passed unless they have actually been run.

## 12. EXECUTION INSTRUCTIONS

Start by inspecting the existing codebase and available assets.

Then inspect the reference websites and map the updated content to the original sections.

Implement the complete homepage first, in the exact section order described above. After the homepage is correct, implement the relevant inner pages.

Do not stop at a written plan, design proposal, or code snippets. Make the actual changes in the project files.

If something blocks implementation, make the best evidence-based decision possible, continue with the rest of the work, and list the specific blocker.

At the end, report:
1. What you implemented.
2. Which routes are complete.
3. Which original assets were reused.
4. Which assets or content still need verification.
5. Whether the production build passed.
6. Any remaining backend integrations.
7. How to run and deploy the application.

**Final acceptance criterion:** The result must be a functional Next.js recreation of the existing Arismile Holdings website, preserving the original layout and subsidiary image slider while using the updated company content from arismile.ng. It must not be a generic corporate website inspired by the reference.

## MONOREPO ARCHITECTURE — NPM WORKSPACES

This project MUST use **npm workspaces and Turborepo**. Do not use pnpm, Yarn, or another package manager.

### 1. Technology stack

- npm workspaces for monorepo package management.
- Turborepo for task orchestration and build caching.
- Next.js App Router for each website.
- React and TypeScript.
- Tailwind CSS.
- Shared workspace packages for reusable UI components and configuration.

Use compatible, stable versions and preserve existing compatible dependencies wherever possible.

### 2. Required folder structure

Create or adapt the repository to use the following structure:

arismile-monorepo/
  apps/
    holdings/
      app/
      components/
      public/
      lib/
      package.json
      next.config.ts
      tsconfig.json
    9town/
      app/
      components/
      public/
      package.json
    oceania/
      app/
      components/
      public/
      package.json
    datu-kalinga/
      app/
      components/
      public/
      package.json
    mind-age/
      app/
      components/
      public/
      package.json

  packages/
    ui/
      src/
      package.json
    config/
      package.json
    brand/
      src/
      package.json

  package.json
  package-lock.json
  turbo.json
  tsconfig.json
  .gitignore
  README.md

Adapt the structure as needed, but preserve the separation between independent websites.

### 3. npm workspace configuration

Configure the root package.json with npm workspaces covering:

- apps/*
- packages/*

Use the root package.json as the central location for workspace scripts and shared development tooling.

Generate and maintain a single root package-lock.json. Do not create independent lockfiles for individual workspace applications.

Do not run pnpm or Yarn commands.

### 4. Application package names

Give every application a unique, valid npm package name, for example:

- @arismile/holdings
- @arismile/9town
- @arismile/oceania
- @arismile/datu-kalinga
- @arismile/mind-age

Give each shared package its own name, such as @arismile/ui, @arismile/config, and @arismile/brand.

Use explicit workspace dependencies when one application consumes a shared package. Follow npm workspace dependency conventions supported by the installed npm version.

### 5. Required npm scripts

Configure working root scripts equivalent to:

- npm run dev:holdings
- npm run build:holdings
- npm run dev:9town
- npm run build:9town
- npm run dev:oceania
- npm run build:oceania
- npm run dev:datu-kalinga
- npm run build:datu-kalinga
- npm run dev:mind-age
- npm run build:mind-age
- npm run build

Implement these scripts in the root package.json using the appropriate npm workspace selection and Turborepo commands.

Use explicit workspace targeting, such as `npm run dev --workspace=@arismile/holdings`, where appropriate.

The individual build commands should build the selected application and any workspace dependencies it requires. The root build command should build all applications and required workspace dependencies.

Configure Turborepo tasks using the supported schema for the installed version.

### 6. Independent websites

Each application must have its own:

- Next.js App Router pages and layouts.
- Homepage and navigation.
- Brand identity and design system.
- CSS, fonts, imagery, and public assets.
- SEO metadata.
- Environment variables and integrations.
- Build and deployment configuration.

Shared components must remain optional and generic. Do not force all subsidiary websites to use the Holdings design.

Build the Holdings website first, faithfully recreating the existing WordPress layout, including the subsidiary image slider, About Us, Our Subsidiaries, Area of Core Competence, Partners, Discover More banner, and footer.

Create valid, minimal scaffolds for the subsidiary websites until their individual designs are ready.

### 7. Vercel deployment

Prepare each application for independent deployment from the same npm monorepo.

Document:
- The appropriate Vercel Root Directory for each app.
- How Vercel detects and installs npm workspace dependencies.
- Build commands and output configuration.
- Environment variable configuration.
- Custom domain mapping.

Do not create separate Git repositories for the subsidiaries unless explicitly requested.

### 8. Execution and verification

Before making changes, inspect the existing repository, package.json, package-lock.json, installed npm version, and project dependencies.

Preserve compatible existing code and configuration.

After implementation:

1. Run npm install from the monorepo root.
2. Verify the npm workspaces resolve correctly.
3. Run the Holdings development command.
4. Run the individual application builds.
5. Run the root Turborepo build.
6. Fix dependency, TypeScript, configuration, and build errors.
7. Document the exact commands that work.

Do not generate pnpm-lock.yaml, yarn.lock, or nested application lockfiles.

**Important:** Use npm exclusively for all package installation, workspace management, scripts, and dependency updates. Deliver a working npm-based monorepo, not merely a proposed folder structure.