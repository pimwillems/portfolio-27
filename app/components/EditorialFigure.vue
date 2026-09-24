<template>
  <figure
    class="fig"
    :class="{ 'm-float': float, 'is-centered': centered }"
  >
    <div
      v-reveal
      class="frame"
      :class="[revealClass, `tone-${tone}`, { rounded: radius > 0 }]"
      :style="frameStyle"
      :role="src ? undefined : 'img'"
      :aria-label="src ? undefined : alt"
    >
      <div class="zoom">
        <div
          class="inner"
          :class="{ 'm-parallax': parallax }"
        >
          <NuxtImg
            v-if="src"
            class="img"
            :src="src"
            :alt="alt"
            :width="imgWidth"
            :height="imgHeight"
            :sizes="imgSizes"
            densities="x1"
            format="webp"
            fit="inside"
            :loading="priority ? 'eager' : 'lazy'"
            :fetchpriority="priority ? 'high' : 'auto'"
            :preload="priority"
            decoding="async"
          />
        </div>
      </div>
      <div
        class="veil"
        aria-hidden="true"
      />
      <span
        v-if="!src && label"
        class="label cap"
        aria-hidden="true"
      >{{ label }}</span>
    </div>
    <figcaption
      v-if="caption"
      class="caption cap muted"
    >
      <span>{{ caption }}</span>
      <span
        v-if="captionArrow"
        class="arr"
        aria-hidden="true"
      >→</span>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Reveal, Tone } from '~/data/issue'

const DESKTOP_CONTENT = 1248 // 1440 − 2 × 96 gutter
const COL = (DESKTOP_CONTENT - 11 * 24) / 12

// One shared observer whose root is a thin band across the middle of the
// viewport: a figure is "centred" while it crosses that band.
type CenterCallback = (centered: boolean) => void
let centerObserver: IntersectionObserver | null = null
const centerCallbacks = new WeakMap<Element, CenterCallback>()

function observeCenter(el: Element, callback: CenterCallback) {
  if (!('IntersectionObserver' in window)) return
  if (!centerObserver) {
    centerObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) centerCallbacks.get(entry.target)?.(entry.isIntersecting)
      },
      { rootMargin: '-49% 0px -49% 0px' },
    )
  }
  centerCallbacks.set(el, callback)
  centerObserver.observe(el)
}

function unobserveCenter(el: Element) {
  centerCallbacks.delete(el)
  centerObserver?.unobserve(el)
}

/**
 * The core editorial image: a fixed-height grayscale frame with parallax,
 * hover zoom + veil, scroll reveal and a tone placeholder while `src` is null.
 * It turns to colour on hover and while it sits in the vertical centre of the viewport.
 */
export default defineNuxtComponent({
  name: 'EditorialFigure',
  props: {
    src: { type: String as PropType<string | null>, default: null },
    alt: { type: String, required: true },
    height: { type: Number, required: true },
    tone: { type: Number as PropType<Tone>, default: 2 },
    reveal: { type: String as PropType<Reveal>, default: 'clip-up' },
    parallax: { type: Boolean, default: true },
    float: { type: Boolean, default: false },
    radius: { type: Number, default: 0 },
    caption: { type: String, default: '' },
    captionArrow: { type: Boolean, default: false },
    label: { type: String, default: '' },
    priority: { type: Boolean, default: false },
    /** Desktop column span (of 12), used to size the image request. */
    span: { type: Number, default: 12 },
  },
  data() {
    return {
      centered: false,
    }
  },
  computed: {
    revealClass(): string {
      return this.reveal === 'none' ? '' : `m-${this.reveal}`
    },
    frameStyle(): Record<string, string | number> {
      return {
        '--h': this.height,
        'borderRadius': this.radius ? `${this.radius}px` : '0',
      }
    },
    /** Rendered width of the figure at 1440px. */
    desktopWidth(): number {
      return Math.round(this.span * COL + (this.span - 1) * 24)
    },
    imgWidth(): number {
      return Math.round(this.desktopWidth * 1.5)
    },
    /** The inner layer is 124% of the frame (for parallax travel). */
    imgHeight(): number {
      return Math.round(this.height * 1.24 * 1.5)
    },
    /** ~1.5× the rendered width at each breakpoint. */
    imgSizes(): string {
      const vw = Math.round((this.span / 12) * 100 * 1.5)
      return `xs:150vw md:150vw lg:${vw}vw xl:${this.imgWidth}px`
    },
  },
  mounted() {
    observeCenter(this.$el as Element, (centered) => {
      this.centered = centered
    })
  },
  beforeUnmount() {
    unobserveCenter(this.$el as Element)
  },
})
</script>

<style scoped>
.fig {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
}

.frame {
  position: relative;
  overflow: hidden;
  height: max(var(--fig-min), calc(var(--h) * var(--fig-scale)));
  filter: grayscale(1);
  background: var(--tone);
  transition: filter .8s var(--ease-out);
}

.fig:hover .frame,
.fig.is-centered .frame {
  filter: grayscale(0);
}

.tone-1 { --tone: var(--c-tone-1); }
.tone-2 { --tone: var(--c-tone-2); }
.tone-3 { --tone: var(--c-tone-3); }
.tone-4 { --tone: var(--c-tone-4); }
.tone-5 { --tone: var(--c-tone-5); --label: var(--c-paper); }
.tone-6 { --tone: var(--c-tone-6); --label: var(--c-paper); }

.zoom {
  position: absolute;
  inset: 0;
  transition: transform 1.6s var(--ease-out);
}

.inner {
  position: absolute;
  inset: -12% 0;
  background: var(--tone);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.veil {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: var(--c-ink);
  opacity: 0;
  transition: opacity .8s var(--ease-out);
}

.label {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 18px;
  z-index: 2;
  overflow-wrap: anywhere;
  color: var(--label, var(--c-ink));
  font-size: 10px;
}

.rounded .label {
  left: 26px;
  right: 26px;
  bottom: 26px;
}

.fig:hover .zoom {
  transform: scale(1.045);
}

.fig:hover .veil {
  opacity: .06;
}

.caption {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .fig:hover .zoom {
    transform: none;
  }
}
</style>
