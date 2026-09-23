<template>
  <div
    class="progress m-progress"
    aria-hidden="true"
  />
</template>

<script lang="ts">
/**
 * 2px reading bar. Driven by `animation-timeline: scroll(root)` where
 * supported; otherwise a passive, rAF-throttled scroll listener sets --progress.
 */
export default defineNuxtComponent({
  name: 'ReadingProgress',
  data() {
    return {
      frame: 0,
      listening: false,
    }
  },
  mounted() {
    const supported = CSS.supports('animation-timeline: scroll()')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (supported || reduced) return
    this.listening = true
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('resize', this.onScroll, { passive: true })
    this.update()
  },
  beforeUnmount() {
    if (!this.listening) return
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onScroll)
    cancelAnimationFrame(this.frame)
  },
  methods: {
    onScroll() {
      if (this.frame) return
      this.frame = requestAnimationFrame(this.update)
    },
    update() {
      this.frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      ;(this.$el as HTMLElement).style.setProperty('--progress', progress.toFixed(4))
    },
  },
})
</script>

<style scoped>
.progress {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 2px;
  background: var(--c-ink);
  transform-origin: left;
  transform: scaleX(var(--progress, 0));
  pointer-events: none;
}
</style>
