# Pallavi Mishra — Portfolio

Personal portfolio built as a headless WordPress + Next.js site: WordPress
manages content (projects, experience), Next.js renders and serves it with
ISR, on-demand revalidation, dynamic OG images, and JSON-LD structured data.

## Why headless WordPress + Next.js

WordPress here is purely a content backend — projects and work experience
are edited from WP-admin like any WordPress site, but nothing is rendered by
WordPress itself. Next.js's App Router fetches that content over the REST
API and builds fast, statically-generated pages from it. It's the same
pattern used for production marketing/portfolio sites that need a
non-technical editing experience without giving up frontend control.

**Runs without WordPress connected.** If `WORDPRESS_API_URL` isn't set, the
app falls back to bundled content in `src/lib/mock-data.ts` (your real
projects and experience), so `npm run dev` works immediately after cloning.

## Stack

| Layer      | Choice                                             |
| ---------- | --------------------------------------------------- |
| CMS        | WordPress (REST API) + Advanced Custom Fields (ACF) |
| Frontend   | Next.js 14 (App Router), TypeScript                  |
| Styling    | Tailwind CSS, custom design tokens                    |
| Fonts      | Space Grotesk (display), Source Serif 4 (body), IBM Plex Mono (labels) |
| Deployment | Any Next.js host (Vercel, Netlify, self-hosted Node) |

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:3000`. Without any further configuration, the site
runs on the bundled content in `src/lib/mock-data.ts`.

## Editing your content

**Quick way (no WordPress):** edit `src/lib/mock-data.ts` directly —
`MOCK_PROJECTS` and `MOCK_EXPERIENCE` — and save. Next.js hot-reloads
instantly. Also edit the hero copy in `src/app/page.tsx`, the bio in
`src/app/about/page.tsx`, and contact details in `src/app/contact/page.tsx`
and `src/components/Footer.tsx`.

**CMS way (WordPress):** see "Connecting WordPress" below — once connected,
edit content from WP-admin like a normal WordPress site.

## Connecting WordPress

1. **Install WordPress.** Locally on Windows/Mac, [Local](https://localwp.com/)
   by WP Engine is the simplest way. In production, any host works.

2. **Install the free Advanced Custom Fields plugin.**

3. **Add the PHP snippet.** Copy `wordpress-setup/theme-functions.php` into
   your theme's `functions.php`, or drop it into `wp-content/mu-plugins/`.
   It registers the `project` and `experience` custom post types, exposes
   their ACF fields on the REST API, adds CORS headers, and wires up the
   revalidation webhook. Read the comments at the top of that file — it
   documents the exact ACF field groups to create.

4. **Create the ACF field groups** described in that file's comments
   (Project Details, Experience Details), and add your projects/roles.

5. **Set environment variables.** In `.env` (Next.js side):

   ```
   WORDPRESS_API_URL=https://your-wordpress-url
   REVALIDATE_SECRET=<a long random string>
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

   In `wp-config.php` (WordPress side), for the revalidation webhook:

   ```php
   define('NEXTJS_REVALIDATE_URL', 'https://yourdomain.com/api/revalidate');
   define('NEXTJS_REVALIDATE_SECRET', '<the same string as REVALIDATE_SECRET>');
   define('NEXTJS_FRONTEND_ORIGIN', 'https://yourdomain.com');
   ```

6. Restart `npm run dev` (or redeploy). The app now reads live content from
   WordPress and revalidates individual pages the moment they're saved.

## Project structure

```
src/
  app/
    page.tsx                     home
    projects/page.tsx             project index
    projects/[slug]/page.tsx       project detail (ISR + JSON-LD + OG image)
    experience/page.tsx            work experience timeline
    about/page.tsx                 bio, education, certifications
    contact/page.tsx               client-side form → /api/contact
    api/revalidate/route.ts        on-demand ISR webhook target
    api/contact/route.ts           contact form handler
    sitemap.ts, robots.ts
    opengraph-image.tsx            dynamic OG image (home)
  components/                      Header, Footer, ProjectCard, DimensionRule,
                                    BlueprintHero (the self-drawing hero schematic)
  lib/
    wordpress.ts                    REST client, types, mock-data fallback
    mock-data.ts                    your real project/experience content
    seo.ts                          JSON-LD builders (Person, CreativeWork)
wordpress-setup/
  theme-functions.php               everything needed on the WordPress side
```

## Deploying

Any Next.js-compatible host works. On Vercel: import the repo, set the
environment variables from `.env.example` in the project settings, deploy.
If using WordPress, point `NEXTJS_REVALIDATE_URL` in `wp-config.php` at the
deployed domain.
