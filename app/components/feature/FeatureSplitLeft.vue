<template>
  <section
    :id="project.id"
    class="spread grid-12"
    :aria-labelledby="`${project.id}-title`"
  >
    <div class="text-col">
      <div class="head">
        <MetaCaption muted>
          No. {{ project.number }} — {{ project.category }}
        </MetaCaption>
        <h3
          :id="`${project.id}-title`"
          v-reveal
          class="title serif m-rise"
        >
          <EmText
            :segments="project.title"
            lines
          />
        </h3>
      </div>
      <FeatureText
        class="text"
        :project="project"
      />
    </div>

    <EditorialFigure
      class="main"
      v-bind="figures[0]"
      :span="5"
    />
    <EditorialFigure
      class="small-a"
      v-bind="figures[1]"
      :span="3"
    />
    <EditorialFigure
      class="small-b"
      v-bind="figures[2]"
      :span="3"
    />
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { FigureData, Project } from '~/data/issue'

/** 01 — text column left, tall figure right, two offset small figures below. */
export default defineNuxtComponent({
  name: 'FeatureSplitLeft',
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
}

.text-col {
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
  padding: 40px 0;
}

.head {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title {
  font-size: clamp(64px, 10.42vw, 150px);
  line-height: .88;
  letter-spacing: -.02em;
}

.text {
  max-width: 340px;
}

.main {
  grid-column: 8 / span 5;
}

.small-a {
  grid-column: 2 / span 3;
  margin-top: calc(140px * var(--space-scale));
}

.small-b {
  grid-column: 8 / span 3;
  margin-top: calc(260px * var(--space-scale));
}

@media (max-width: 1023px) {
  .spread {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 48px;
  }

  .text-col {
    display: contents;
  }

  .head { grid-column: 1 / -1; order: 1; }
  .main { grid-column: 1 / -1; order: 2; }
  .text { grid-column: 1 / span 4; order: 3; max-width: 380px; }
  .small-a { grid-column: 1 / span 3; order: 4; margin-top: 0; }
  .small-b { grid-column: 4 / span 3; order: 5; margin-top: 96px; }
}

@media (max-width: 767px) {
  .spread {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 40px;
  }

  .head,
  .main,
  .text,
  .small-a,
  .small-b {
    grid-column: 1 / -1;
  }

  .small-a { width: 70%; justify-self: start; }
  .small-b { width: 70%; justify-self: end; margin-top: 0; }
}
</style>
