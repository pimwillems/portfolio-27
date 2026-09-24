<template>
  <header class="masthead">
    <a
      class="skip cap"
      href="#work"
    >{{ masthead.skipLink }}</a>

    <div class="bar cap l-fade">
      <span class="issue">{{ masthead.issue }}</span>
      <span class="season">{{ season }}</span>
    </div>

    <h1 class="title serif m-recede">
      <span class="l-mast">{{ masthead.name }}</span>
    </h1>
  </header>
</template>

<script lang="ts">
import { masthead } from '~/data/issue'

let resizeObserver: ResizeObserver | null = null

export default defineNuxtComponent({
  name: 'SiteMasthead',
  data() {
    return {
      masthead,
      // The build date's season; refreshed on mount so the static site
      // rolls over to the next season without a rebuild.
      season: seasonLabel(),
    }
  },
  mounted() {
    this.season = seasonLabel()
    // Publish the masthead height so the cover can fill the rest of the first screen.
    const root = document.documentElement
    const el = this.$el as HTMLElement
    const publish = () => root.style.setProperty('--masthead-h', `${el.offsetHeight}px`)
    publish()
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(publish)
      resizeObserver.observe(el)
    }
  },
  beforeUnmount() {
    resizeObserver?.disconnect()
    resizeObserver = null
  },
})
</script>

<style scoped>
.masthead {
  padding: 36px var(--gutter) 0;
}

/* ---------- skip link ---------- */
.skip {
  position: absolute;
  left: var(--gutter);
  top: 12px;
  z-index: 60;
  padding: 14px 20px;
  background: var(--c-paper);
  border: 1px solid var(--c-ink);
  transform: translateY(-200%);
}

.skip:focus-visible {
  transform: none;
}

/* ---------- top bar ---------- */
.bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px 24px;
}

.issue,
.season {
  white-space: nowrap;
}

/* ---------- masthead title ---------- */
.title {
  margin-top: 40px;
  font-size: clamp(44px, 11.4vw, 182.4px);
  line-height: .9;
  letter-spacing: .015em;
  white-space: nowrap;
  transform-origin: top center;
}

/* centred from a fixed layout point: the letter-spacing animation changes the
   width, and a transform-based centre keeps that out of layout shift (CLS 0) */
.title > span {
  margin-left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 767px) {
  .title {
    font-size: clamp(36px, 12.5vw, 96px);
  }
}
</style>
