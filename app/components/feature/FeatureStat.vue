<template>
  <section
    :id="project.id"
    class="spread grid-12"
    :aria-labelledby="`${project.id}-title`"
  >
    <div class="header">
      <div class="head">
        <MetaCaption muted>
          No. {{ project.number }} — {{ project.category }}
        </MetaCaption>
        <h3
          :id="`${project.id}-title`"
          v-reveal
          class="title serif m-track"
        >
          <EmText :segments="project.title" />
        </h3>
      </div>
      <p
        v-if="project.stat"
        class="stat"
      >
        <span
          v-reveal
          class="value serif m-rise"
        >{{ project.stat.value }}</span>
        <MetaCaption class="stat-label">
          <template
            v-for="(line, i) in project.stat.label"
            :key="line"
          >
            <br v-if="i > 0">{{ line }}
          </template>
        </MetaCaption>
      </p>
    </div>

    <EditorialFigure
      class="main"
      v-bind="figures[0]"
      :span="12"
    />
    <EditorialFigure
      class="dark"
      v-bind="figures[1]"
      :span="4"
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

/** 03 — title with a huge stat, a full-width figure, then figure / text / figure. */
export default defineNuxtComponent({
  name: 'FeatureStat',
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
  row-gap: calc(120px * var(--space-scale));
}

.header {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
}

.head {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
}

.title {
  white-space: nowrap;
  font-size: clamp(64px, 13.2vw, 190px);
  line-height: .85;
}

.stat {
  display: flex;
  align-items: baseline;
  gap: 24px;
}

.value {
  font-size: clamp(160px, 22.23vw, 320px);
  font-style: italic;
  line-height: .75;
}

.stat-label {
  max-width: 120px;
  line-height: 2;
}

.main {
  grid-column: 1 / -1;
}

.dark {
  grid-column: 1 / span 4;
}

.text {
  grid-column: 6 / span 3;
  padding-top: calc(80px * var(--space-scale));
}

.small {
  grid-column: 10 / span 3;
  margin-top: calc(240px * var(--space-scale));
}

@media (max-width: 1023px) {
  .spread {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 48px;
  }

  .text { grid-column: 1 / span 4; order: 1; padding-top: 0; }
  .dark { grid-column: 1 / span 3; order: 2; }
  .small { grid-column: 4 / span 3; order: 3; margin-top: 160px; }
}

@media (max-width: 767px) {
  .spread {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 40px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .text,
  .dark,
  .small {
    grid-column: 1 / -1;
  }

  .dark { width: 70%; justify-self: start; }
  .small { width: 70%; justify-self: end; margin-top: 0; }
}
</style>
