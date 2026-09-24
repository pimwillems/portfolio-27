<template>
  <section
    id="work"
    class="contents"
    aria-labelledby="contents-title"
    tabindex="-1"
  >
    <div class="head">
      <h2
        id="contents-title"
        v-reveal
        class="heading serif m-track"
      >
        {{ contents.heading }}
      </h2>
      <MetaCaption muted>
        {{ contents.count }}
      </MetaCaption>
    </div>
    <div
      v-reveal
      class="rule m-line"
      aria-hidden="true"
    />
    <nav
      aria-labelledby="contents-title"
      @pointermove="onMove"
      @pointerleave="hide"
    >
      <ContentsRow
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @pointerenter="show(project.id, $event)"
      />
    </nav>
    <ContentsPreview
      v-if="armed"
      ref="preview"
      :projects="projects"
      :active="active"
    />
  </section>
</template>

<script lang="ts">
import type { ProjectId } from '~/data/issue'
import { contents, projects } from '~/data/issue'
import { PREVIEW_DENSITIES, previewItems } from '~/components/ContentsPreview.vue'

type Preview = { moveTo: (x: number, y: number, instant?: boolean) => void }

/** Only a real mouse gets the cursor preview; touch and pen keep the plain list. */
function isMouse(event: PointerEvent) {
  return event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export default defineNuxtComponent({
  name: 'ContentsIndex',
  setup() {
    // The preview only mounts in the browser, so the prerenderer never sees its
    // images. Resolving the same URLs here during SSR makes `nuxt generate`
    // write them out; without this they 404 on static hosting.
    if (import.meta.server) {
      const img = useImage()
      for (const item of previewItems(projects)) {
        for (const density of PREVIEW_DENSITIES) {
          img(item.src, {
            width: item.imgWidth * density,
            height: item.imgHeight * density,
            // same key order as NuxtImg, which decides the URL
            format: 'webp',
            quality: img.options.quality,
            fit: 'inside',
          })
        }
      }
    }
  },
  data() {
    return {
      contents,
      projects,
      /** The preview (and its images) mounts on the first mouse hover. */
      armed: false,
      active: null as ProjectId | null,
    }
  },
  methods: {
    async show(id: ProjectId, event: PointerEvent) {
      if (!isMouse(event)) return
      const appearing = this.active === null
      if (!this.armed) {
        this.armed = true
        await this.$nextTick()
      }
      this.active = id
      ;(this.$refs.preview as Preview | undefined)?.moveTo(event.clientX, event.clientY, appearing)
    },
    onMove(event: PointerEvent) {
      if (this.active === null || !isMouse(event)) return
      ;(this.$refs.preview as Preview | undefined)?.moveTo(event.clientX, event.clientY)
    },
    hide() {
      this.active = null
    },
  },
})
</script>

<style scoped>
.contents {
  padding: 0 var(--gutter) calc(320px * var(--space-scale));
}

.contents:focus {
  outline: none;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding-bottom: 28px;
}

.heading {
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  font-size: clamp(56px, 9vw, 144px);
  line-height: .9;
  letter-spacing: -.01em;
}

.rule {
  height: 1px;
  background: var(--c-line);
}

@media (max-width: 767px) {
  .head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
