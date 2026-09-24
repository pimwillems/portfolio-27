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
2. Set the figure's `src` in `issue.ts`, e.g. `src: '/images/projects/edsheeran_1.jpg'`.

Source screenshots are stored as quality-90 JPEGs at their original resolution (transparent corners flattened onto white). Figures request them with `fit="outside"`, so each generated image is large enough to fill its frame's height, never upscaled. Phone mockups with two tilted phones are cropped to a portrait slice around one phone so they read in the narrow phone frames.

While `src` is `null` the figure shows a grey tone block with its file name. Images render in grayscale and turn to colour on hover or while in the vertical centre of the viewport; the frame has a fixed height, so swapping one in never shifts the layout. Files in use:

| Project | Figures (in layout order) |
|---|---|
| Ed Sheeran | `edsheeran_1.jpg` · `edsheeran_2.jpg` · `edsheeran_3.jpg` |
| Martin Garrix | `artistdreamteam_1.jpg` · `artistdreamteam_iphone11pro.jpg` · `artistdreamteam_2.jpg` |
| Ricoh | `ricoh_desktop_2.jpg` · `ricoh_desktop_1.jpg` · `ricoh_desktop_3.jpg` |
| IkStopNu | `ikstopnu_desktop_1.png` · `ikstopnu_iphone11pro.png` · `ikstopnu_desktop_2.png` |
| RTL Project Glimlach | `glimlach_1.jpg` · `glimlach_3.jpg` · `glimlach_2.jpg` |
| 't Taphuys | `taphuys_desktop_1.jpg` · `taphuys_iphone11pro.jpg` · `taphuys_desktop_3.jpg` |
| Trimbos Instituut | `trimbos_desktop_1.jpg` · `trimbos_iphone11pro.jpg` · `trimbos_desktop_2.jpg` |
| The Voice Kids | `tvk_kleertjes_desktop.jpg` · `tvk_kleertjes_iphone11pro.jpg` · `tvk_kleertjes_detail.jpg` |
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
