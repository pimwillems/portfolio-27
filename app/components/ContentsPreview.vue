<template>
  <div
    class="preview"
    :class="{ 'is-visible': active !== null }"
    aria-hidden="true"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="layer"
      :class="{ 'is-active': item.id === active }"
      :style="item.style"
    >
      <NuxtImg
        class="img"
        :src="item.src"
        alt=""
        :width="item.imgWidth"
        :height="item.imgHeight"
        densities="x1 x2"
        format="webp"
        fit="inside"
        decoding="async"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Project, ProjectId } from '~/data/issue'

/** Longest side of the preview, in CSS pixels. */
const SIZE = 280

interface PreviewItem {
  id: ProjectId
  src: string
  imgWidth: number
  imgHeight: number
  style: Record<string, string>
}

/**
 * The small image that trails the cursor over the Contents list.
 * Decorative: the rows already carry the project names. The parent moves it
 * with `moveTo()`; the trailing motion itself is a CSS transition.
 */
export default defineNuxtComponent({
  name: 'ContentsPreview',
  props: {
    projects: { type: Array as PropType<Project[]>, required: true },
    active: { type: String as PropType<ProjectId | null>, default: null },
  },
  computed: {
    items(): PreviewItem[] {
      const items: PreviewItem[] = []
      for (const project of this.projects) {
        const figure = project.figures.find(f => f.src)
        if (!figure?.src) continue
        const scale = SIZE / Math.max(figure.width, figure.height)
        const width = Math.round(figure.width * scale)
        const height = Math.round(figure.height * scale)
        items.push({
          id: project.id,
          src: figure.src,
          imgWidth: width,
          imgHeight: height,
          style: { width: `${width}px`, height: `${height}px` },
        })
      }
      return items
    },
  },
  methods: {
    /** `instant` skips the trailing transition, e.g. when the preview first appears. */
    moveTo(x: number, y: number, instant = false) {
      const el = this.$el as HTMLElement
      if (instant) el.style.transition = 'none'
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (instant) {
        void el.offsetWidth // commit the jump before the transition comes back
        el.style.transition = ''
      }
    },
  },
})
</script>

<style scoped>
.preview {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  pointer-events: none;
  transition: transform .6s var(--ease-out);
}

.layer {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  background: var(--c-tone-2);
  opacity: 0;
  transform: translate(24px, 24px) scale(.85);
  transform-origin: top left;
  transition:
    opacity .5s var(--ease-out),
    transform .7s var(--ease-out);
}

.preview.is-visible .layer.is-active {
  opacity: 1;
  transform: translate(24px, 24px);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (prefers-reduced-motion: reduce) {
  .preview {
    transition: none;
  }

  .layer,
  .preview.is-visible .layer.is-active {
    transform: translate(24px, 24px);
  }
}
</style>
