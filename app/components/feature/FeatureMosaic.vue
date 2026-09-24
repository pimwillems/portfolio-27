<template>
  <section
    :id="project.id"
    class="spread grid-12"
    :aria-labelledby="`${project.id}-title`"
  >
    <div class="head">
      <MetaCaption muted>
        No. {{ project.number }} — {{ project.category }}
      </MetaCaption>
      <h3
        :id="`${project.id}-title`"
        v-reveal
        class="title serif m-rise"
      >
        <EmText :segments="project.title" />
      </h3>
      <MetaCaption v-if="project.client">
        {{ project.client }}
      </MetaCaption>
    </div>

    <EditorialFigure
      class="phone"
      v-bind="figures[1]"
      :span="3"
    />
    <EditorialFigure
      class="main"
      v-bind="figures[0]"
      :span="8"
    />
    <FeatureText
      class="text"
      :project="project"
    />
    <EditorialFigure
      class="small"
      v-bind="figures[2]"
      :span="3"
    />
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { FigureData, Project } from '~/data/issue'

/**
 * 07 — title across the top, phone beside a wide figure (bottoms aligned),
 * then text and a small figure. Figure order: wide, phone, small.
 */
export default defineNuxtComponent({
  name: 'FeatureMosaic',
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
  align-items: end;
}

.head {
  grid-column: 1 / span 9;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: calc(96px * var(--space-scale));
}

.title {
  font-size: clamp(64px, 11vw, 176px);
  line-height: .88;
  letter-spacing: -.02em;
}

.phone {
  grid-column: 1 / span 3;
  grid-row: 2;
}

.main {
  grid-column: 5 / span 8;
  grid-row: 2;
}

.text {
  grid-column: 5 / span 4;
  grid-row: 3;
  align-self: start;
  padding-top: calc(96px * var(--space-scale));
  max-width: 380px;
}

.small {
  grid-column: 10 / span 3;
  grid-row: 3;
  align-self: start;
  margin-top: calc(200px * var(--space-scale));
}

@media (max-width: 1023px) {
  .spread {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 48px;
    align-items: start;
  }

  .head,
  .phone,
  .main,
  .text,
  .small {
    grid-row: auto;
  }

  .head { grid-column: 1 / -1; order: 1; padding-bottom: 0; }
  .main { grid-column: 1 / -1; order: 2; }
  .text { grid-column: 1 / span 4; order: 3; padding-top: 0; }
  .phone { grid-column: 1 / span 3; order: 4; }
  .small { grid-column: 4 / span 3; order: 5; margin-top: 160px; }
}

@media (max-width: 767px) {
  .spread {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 40px;
  }

  .head,
  .main,
  .text,
  .phone,
  .small {
    grid-column: 1 / -1;
  }

  .phone { width: 70%; justify-self: start; }
  .small { width: 70%; justify-self: end; margin-top: 0; }
}
</style>
