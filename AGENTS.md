# AGENTS.md

## Overview

Next.js 16 + Tailwind CSS v4 landing page for Seiole Labs. Content managed via **Outstatic** (Git-based CMS). Package manager: **pnpm**.

## Commands

```bash
pnpm install          # install dependencies
pnpm dev              # dev server at localhost:3000
pnpm build            # static build
pnpm lint             # eslint (uses eslint-config-next, no config file)
```

No separate typecheck command — Next.js build covers type checking.

## Environment Setup

Copy `.env.local.example` to `.env.local` and fill in:

```
OST_GITHUB_ID=...       # GitHub OAuth app client ID
OST_GITHUB_SECRET=...   # GitHub OAuth app client secret
OST_REPO_SLUG=...       # GitHub repo slug (e.g. seiolelabs-home)
```

Outstatic CMS is accessible at `/outstatic` — requires the GitHub OAuth credentials above.

## Architecture

```
src/app/
  (web)/                    # Public site route group
    layout.tsx              # Root layout (metadata, CSS)
    page.tsx                # Home (/) — loads from Outstatic
    posts/[slug]/page.tsx   # Single post (SSG)
    projects/[slug]/page.tsx # Single project (SSG)
  (cms)/                    # CMS route group
    outstatic/[[...ost]]/   # Outstatic admin panel
  api/outstatic/[[...ost]]/ # Outstatic API handler
```

- **Content lives in `outstatic/content/`** (3 collections: pages, posts, projects)
- Content fetched via `outstatic/server` `load()` function
- MDX compiled server-side via `mdx-bundler` (`src/lib/mdx-server.ts`)
- MDX rendered client-side via `getMDXComponent` (`src/components/mdx/mdx-component.tsx`)
- Custom MDX components registered in `MDXComponentsMap`: Callout, Counter, ApiFetcher, Youtube, CustomCode, CustomLink, Image

## Key Conventions

- Path alias: `@/*` maps to `src/*`
- Tailwind v4 — uses `@import 'tailwindcss'` in `src/styles/index.css`, no `tailwind.config` file
- No `next.config` file — uses Next.js 16 defaults
- No ESLint config file — relies on `eslint-config-next` defaults
- Content images stored in `public/images/`, referenced via Outstatic media config

## Dead Code

- `src/lib/api.ts` — legacy filesystem-based API referencing nonexistent `src/_posts/`. Unused.
- `src/lib/constants.ts` — exports `EXAMPLE_PATH`, unused.
- `src/components/Meta.tsx` — legacy `<Head>` component, unused (layout uses Next.js Metadata API).
