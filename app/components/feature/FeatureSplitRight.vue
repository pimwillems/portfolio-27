<template>
  <section
    :id="project.id"
    class="spread grid-12"
    :aria-labelledby="`${project.id}-title`"
  >
    <EditorialFigure
      class="main"
      v-bind="figures[0]"
      :span="5"
    />

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
          <EmText :segments="project.title" />
        </h3>
        <MetaCaption v-if="project.client">
          {{ project.client }}
        </MetaCaption>
      </div>
      <FeatureText
        class="text"
        :project="project"
      />
    </div>

    <EditorialFigure
      class="phone"
      v-bind="figures[1]"
      :span="2"
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

/** 04 — tall figure left, text column right, phone + small figure below. */
export default defineNuxtComponent({
  name: 'FeatureSplitRight',
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

.main {
  grid-column: 1 / span 5;
}

.text-col {
  grid-column: 7 / span 6;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: calc(160px * var(--space-scale));
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
  max-width: 360px;
}

.phone {
  grid-column: 7 / span 2;
  margin-top: calc(120px * var(--space-scale));
}

.small {
  grid-column: 10 / span 3;
  margin-top: calc(40px * var(--space-scale));
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
  .phone { grid-column: 1 / span 3; order: 4; margin-top: 0; }
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
