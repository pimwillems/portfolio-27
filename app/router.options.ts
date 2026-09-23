import type { RouterConfig } from 'nuxt/schema'

// Hash links scroll smoothly (instantly under reduced motion), 24px below the top.
export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      return { el: to.hash, top: 24, behavior: reduced ? 'auto' : 'smooth' }
    }
    return { top: 0 }
  },
} satisfies RouterConfig
