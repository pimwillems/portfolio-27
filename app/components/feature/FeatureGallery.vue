<template>
  <section
    :id="project.id"
    class="spread grid-12"
    :aria-labelledby="`${project.id}-title`"
  >
    <MetaCaption
      class="kicker"
      muted
    >
      No. {{ project.number }} — {{ project.category }}
    </MetaCaption>
    <h3
      :id="`${project.id}-title`"
      class="title serif m-drift-r"
    >
      <EmText :segments="project.title" />
    </h3>

    <EditorialFigure
      class="left"
      v-bind="figures[0]"
      :span="4"
    />
    <EditorialFigure
      class="center"
      v-bind="figures[1]"
      :span="8"
    />
    <EditorialFigure
      class="right"
      v-bind="figures[2]"
      :span="3"
    />
    <FeatureText
      class="text"
      :project="project"
    />
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { FigureData, Project } from '~/data/issue'

/** 04 — drifting title, a small figure beside a wide one, then text and a second small figure. */
export default defineNuxtComponent({
  name: 'FeatureGallery',
  props: {
    project: { type: Object as PropType<Project>, required: true },
  },
  computed: {
    figures(): [FigureData, FigureData, FigureData] {
      return spreadFigures(this.project)
    },
  },
})
</script>

<style scoped>
.spread {
  padding-bottom: var(--section-gap);
  overflow: clip;
}

.kicker {
  grid-column: 1 / -1;
  text-align: right;
}

.title {
  grid-column: 1 / -1;
  margin: 40px 0 calc(120px * var(--space-scale));
  font-size: clamp(64px, 11vw, 176px);
  line-height: .88;
  letter-spacing: -.02em;
  white-space: nowrap;
}

.left {
  grid-column: 1 / span 4;
  grid-row: 3;
  margin-top: calc(280px * var(--space-scale));
}

.center {
  grid-column: 5 / span 8;
  grid-row: 3;
}

.right {
  grid-column: 10 / span 3;
  grid-row: 4;
  margin-top: calc(200px * var(--space-scale));
}

.text {
  grid-column: 5 / span 4;
  grid-row: 4;
  margin-top: calc(100px * var(--space-scale));
}

@media (max-width: 1023px) {
  .spread {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 48px;
  }

  .title { margin-bottom: 8px; }

  .left,
  .center,
  .right,
  .text {
    grid-row: auto;
  }

  .center { grid-column: 1 / -1; order: 1; }
  .text { grid-column: 1 / span 4; order: 2; margin-top: 0; }
  .left { grid-column: 1 / span 3; order: 3; margin-top: 0; }
  .right { grid-column: 4 / span 3; order: 4; margin-top: 160px; }
}

@media (max-width: 767px) {
  .spread {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 40px;
  }

  .title {
    margin: 24px 0 0;
    white-space: normal;
    animation: none;
    transform: none;
  }

  .center,
  .text,
  .left,
  .right {
    grid-column: 1 / -1;
  }

  .left { width: 70%; justify-self: start; }
  .right { width: 70%; justify-self: end; margin-top: 0; }
}
</style>
