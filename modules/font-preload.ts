import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineNuxtModule } from 'nuxt/kit'

/**
 * @nuxt/fonts preloads a single file per family. The cover uses Bodoni Moda
 * upright *and* italic above the fold, so after prerendering we add a preload
 * link for every Bodoni Moda face declared in the page's stylesheets.
 */
export default defineNuxtModule({
  meta: { name: 'font-preload' },
  setup(_options, nuxt) {
    const family = 'Bodoni Moda'

    nuxt.hook('nitro:init', (nitro) => {
      // the client build is still in its public asset dirs while prerendering
      const readAsset = async (href: string): Promise<string> => {
        for (const asset of nitro.options.publicAssets) {
          const base = asset.baseURL?.replace(/\/$/, '') ?? ''
          if (base && !href.startsWith(`${base}/`)) continue
          const css = await readFile(join(asset.dir, href.slice(base.length)), 'utf8').catch(() => '')
          if (css) return css
        }
        return ''
      }

      nitro.hooks.hook('prerender:generate', async (route) => {
        if (!route.fileName?.endsWith('.html') || typeof route.contents !== 'string') return
        const html = route.contents
        const sheets = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]!)
        const urls = new Set<string>()
        for (const href of sheets) {
          const css = await readAsset(href)
          for (const face of css.match(/@font-face\{[^}]*\}/g) ?? []) {
            if (!face.includes(`font-family:${family};`) && !face.includes(`font-family:"${family}"`)) continue
            const url = face.match(/url\(([^)]+\.woff2)\)/)?.[1]
            if (url) urls.add(new URL(url, `http://x${href}`).pathname)
          }
        }
        const missing = [...urls].filter(url => !html.includes(`href="${url}"`))
        if (!missing.length) return
        const links = missing.map(url => `<link rel="preload" as="font" type="font/woff2" crossorigin href="${url}">`).join('')
        route.contents = html.replace('</title>', `</title>${links}`)
      })
    })
  },
})
