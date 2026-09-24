# Pim Willems — "The Build Issue"

A single-page, editorial portfolio built with **Nuxt 4** (Options API, TypeScript) and generated as a fully static site.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public
npm run preview    # serve the generated site
npm run lint       # @nuxt/eslint
npm run typecheck  # vue-tsc
```

`nuxt generate` downloads Bodoni Moda and Jost from Google Fonts at build time and self-hosts them (`@nuxt/fonts`), so the build machine needs network access to `fonts.google.com` / `fonts.googleapis.com` / `fonts.gstatic.com`.

## Editing content

All copy and project data lives in [`app/data/issue.ts`](app/data/issue.ts). Italics use segments: `[{ text: 'Ed' }, { text: 'Sheeran', em: true }]`.

### Adding images

1. Put the file in `public/images/projects/` (or `public/images/portrait.jpg` for the cover).
2. Set the figure's `src` in `issue.ts`, e.g. `src: '/images/projects/edsheeran_1.png'`.

While `src` is `null` the figure shows a grey tone block with its file name. Images always render in grayscale, and the frame has a fixed height, so swapping one in never shifts the layout. Files in use:

| Project | Figures (in layout order) |
|---|---|
| Ed Sheeran | `edsheeran_1.png` · `edsheeran_2.png` · `edsheeran_3.png` |
| Martin Garrix | `artistdreamteam1.jpg` · `artistdreamteam_iphone11pro_1.jpg` · `artistdreamteam2.jpg` |
| Ricoh | `ricoh_desktop2.png` · `ricoh_desktop1.png` · `ricoh_desktop3.png` |
| IkStopNu | `ikstopnu_desktop_1.png` · `ikstopnu_iphone11pro.png` · `ikstopnu_desktop_2.png` |
| RTL Project Glimlach | `glimlach-1.png` · `glimlach-3.png` · `glimlach-2.png` |
| Cover | `portrait.jpg` |

## Structure

```
app/
  assets/css/     tokens.css · base.css · motion.css
  data/issue.ts   all copy + project data
  plugins/        v-reveal (IntersectionObserver fallback for scroll animations)
  components/     page sections; feature/ holds the five spread layouts
  pages/index.vue composes the page, head() meta + JSON-LD
modules/font-preload.ts   preloads both Bodoni Moda faces (upright + italic)
```

Motion is CSS only: load animations on first paint, and scroll-driven animations (`animation-timeline`) where supported. Browsers without scroll timelines get the `v-reveal` IntersectionObserver fallback; `prefers-reduced-motion` shows everything in its final state.
