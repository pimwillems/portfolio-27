# Copilot Instructions for portfolio-27

## Architecture

A single-page editorial portfolio ("The Build Issue") for Pim Willems, built with **Nuxt 4** and generated as a static site (`nuxt generate`).

- `app/data/issue.ts` — **all copy and project data** (typed). Components render from it; don't hard-code copy in templates. Italics are segments: `{ text, em? }[]`, rendered by `EmText` (never `v-html`).
- `app/pages/index.vue` — composes the sections; `head()` holds meta, OG tags and JSON-LD.
- `app/components/` — sections (`SiteMasthead`, `CoverSection`, `EditorsLetter`, `ContentsIndex`, `PullQuote`, `StackList`, `ContactFooter`) and `feature/` with one layout per project (`FeatureSpread` switches on `project.layout`).
- `EditorialFigure` — the image building block: fixed-height grayscale frame, parallax, hover zoom, scroll reveal, tone placeholder while `src` is `null`.
- `modules/font-preload.ts` — adds preload links for both Bodoni Moda faces after prerendering.

## Conventions

- **Options API only**: `<script lang="ts">` + `export default defineNuxtComponent({ … })`. No `<script setup>`, no `ref()`/`computed()`.
- Plain CSS with tokens from `app/assets/css/tokens.css`; scoped component styles. No Tailwind or UI libraries.
- Motion: CSS only (`motion.css`). Load animations use `.l-*` classes; scroll-driven ones use `.m-*` classes plus `v-reveal` for the IntersectionObserver fallback. Every transition uses `var(--ease-out)`. No JS animation libraries.
- Every hover effect also applies on `:focus-visible`; respect `prefers-reduced-motion`.
- Animate only `transform`, `opacity`, `clip-path` and (for the three display headings) `letter-spacing`. Keep CLS at 0: centred text whose width animates is positioned with `margin-left: 50%; transform: translateX(-50%)`.

## Commands

`npm run dev` · `npm run generate` · `npm run lint` · `npm run typecheck`
