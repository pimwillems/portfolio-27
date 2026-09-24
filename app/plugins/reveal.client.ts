import type { Directive } from 'vue'

/**
 * v-reveal — fallback for browsers without CSS scroll-driven animations.
 *
 * Where `animation-timeline: view()` is supported (or motion is reduced) it does
 * nothing: the CSS in motion.css drives everything. Otherwise it marks the
 * element `.is-pending` (its start state) and swaps in `.is-in` once it scrolls
 * into view, using one shared IntersectionObserver.
 */
const REVEAL_CLASSES = ['m-rise', 'm-clip-up', 'm-clip-center', 'm-track', 'm-line']

// A fully clipped element never intersects, so clip reveals observe their parent.
const CLIP_CLASSES = ['m-clip-up', 'm-clip-center']

let observer: IntersectionObserver | null = null
let enabled: boolean | null = null
const targets = new WeakMap<Element, Set<HTMLElement>>()

function isEnabled(): boolean {
  if (enabled === null) {
    const supported = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    enabled = !supported && !reduced && 'IntersectionObserver' in window
  }
  return enabled
}

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          targets.get(entry.target)?.forEach(el => el.classList.add('is-in'))
          targets.delete(entry.target)
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )
  }
  return observer
}

function targetOf(el: HTMLElement): Element {
  const clipped = CLIP_CLASSES.some(name => el.classList.contains(name))
  return (clipped && el.parentElement) || el
}

const reveal: Directive<HTMLElement> = {
  mounted(el) {
    if (!isEnabled()) return
    if (!REVEAL_CLASSES.some(name => el.classList.contains(name))) return
    el.classList.add('is-pending')
    const target = targetOf(el)
    const group = targets.get(target) ?? new Set<HTMLElement>()
    group.add(el)
    targets.set(target, group)
    getObserver().observe(target)
  },
  beforeUnmount(el) {
    const target = targetOf(el)
    const group = targets.get(target)
    group?.delete(el)
    if (group && !group.size) {
      targets.delete(target)
      observer?.unobserve(target)
    }
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
