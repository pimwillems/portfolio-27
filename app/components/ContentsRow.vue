<template>
  <NuxtLink
    v-reveal
    class="row m-rise"
    :to="`#${project.id}`"
  >
    <span class="num serif">{{ project.number }}</span>
    <span class="title serif"><EmText :segments="project.contentsTitle" /></span>
    <span class="meta cap">
      {{ project.category }}
      <span
        class="arr"
        aria-hidden="true"
      >→</span>
    </span>
    <span
      class="rule"
      aria-hidden="true"
    />
  </NuxtLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Project } from '~/data/issue'

/** One Contents entry. The category meta is hidden until hover but stays in the accessible name. */
export default defineNuxtComponent({
  name: 'ContentsRow',
  props: {
    project: { type: Object as PropType<Project>, required: true },
  },
})
</script>

<style scoped>
.row {
  position: relative;
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr) 320px;
  align-items: baseline;
  padding: 36px 0;
  transition: color .5s var(--ease-out);
}

.row:hover,
.row:focus-visible {
  color: var(--c-ink);
}

.num {
  font-size: 22px;
  font-style: italic;
  transition: opacity .5s var(--ease-out);
}

.title {
  display: inline-block;
  font-size: clamp(40px, 5.28vw, 76px);
  line-height: 1;
  transition:
    transform .9s var(--ease-out),
    letter-spacing .9s var(--ease-out);
}

.meta {
  text-align: right;
  opacity: 0;
  transform: translateX(-12px);
  transition:
    opacity .5s var(--ease-out),
    transform .7s var(--ease-out);
}

.rule {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--c-line);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .9s var(--ease-out);
}

.row:hover .title,
.row:focus-visible .title {
  transform: translateX(40px);
  letter-spacing: .02em;
}

.row:hover .num,
.row:focus-visible .num {
  opacity: .35;
}

.row:hover .rule,
.row:focus-visible .rule {
  transform: scaleX(1);
}

.row:hover .meta,
.row:focus-visible .meta {
  opacity: 1;
  transform: none;
}

/* hover-only meta: keep it in the accessible name where the column is dropped */
@media (max-width: 1023px) {
  .row {
    grid-template-columns: minmax(0, 1fr);
  }

  .num {
    display: none;
  }

  .meta {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
}

@media (max-width: 767px) {
  .row {
    grid-template-columns: 48px minmax(0, 1fr);
    padding: 24px 0;
  }

  .num {
    display: inline;
    font-size: 18px;
  }

  .title {
    font-size: 40px;
  }

  .row:hover .title,
  .row:focus-visible .title {
    transform: translateX(16px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .row:hover .title,
  .row:focus-visible .title {
    transform: none;
    letter-spacing: normal;
  }

  .meta,
  .row:hover .meta,
  .row:focus-visible .meta {
    transform: none;
  }

  .rule {
    transform: none;
    opacity: 0;
  }

  .row:hover .rule,
  .row:focus-visible .rule {
    opacity: 1;
  }
}
</style>
