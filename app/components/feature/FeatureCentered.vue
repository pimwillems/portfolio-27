<template>
  <section
    :id="project.id"
    class="spread"
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
      class="title serif m-drift"
    >
      <EmText :segments="project.title" />
    </h3>

    <div class="wide">
      <EditorialFigure
        v-bind="figures[0]"
        :span="9"
      />
    </div>

    <div class="row grid-12">
      <EditorialFigure
        class="phone"
        v-bind="figures[1]"
        :span="3"
      />
      <FeatureText
        class="text"
        :project="project"
        large
      />
      <EditorialFigure
        class="small"
        v-bind="figures[2]"
        :span="2"
      />
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { FigureData, Project } from '~/data/issue'

/** 02 — centred drifting title, a wide figure, then phone / text / small figure. */
export default defineNuxtComponent({
  name: 'FeatureCentered',
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
  text-align: center;
  padding-inline: var(--gutter);
}

.title {
  margin: 48px 0 80px;
  font-size: clamp(64px, 13vw, 208px);
  line-height: .9;
  letter-spacing: -.02em;
  text-align: center;
  white-space: nowrap;
}

.wide {
  padding-inline: calc(var(--gutter) + 120px * var(--space-scale));
}

.row {
  padding-top: calc(160px * var(--space-scale));
  align-items: start;
}

.phone {
  grid-column: 2 / span 3;
}

.text {
  grid-column: 6 / span 4;
  padding-top: calc(120px * var(--space-scale));
}

.text :deep(.body-copy) {
  max-width: 380px;
}

.small {
  grid-column: 11 / span 2;
  margin-top: calc(360px * var(--space-scale));
}

@media (max-width: 1023px) {
  .title {
    margin: 32px 0 56px;
  }

  .wide {
    padding-inline: var(--gutter);
  }

  .row {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 48px;
    padding-top: 48px;
  }

  .text { grid-column: 1 / span 4; order: 1; padding-top: 0; }
  .phone { grid-column: 1 / span 3; order: 2; }
  .small { grid-column: 4 / span 3; order: 3; margin-top: 160px; }
}

@media (max-width: 767px) {
  .title {
    padding-inline: var(--gutter);
    white-space: normal;
    animation: none;
    transform: none;
  }

  .row {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 40px;
  }

  .text,
  .phone,
  .small {
    grid-column: 1 / -1;
  }

  .phone { width: 70%; justify-self: start; }
  .small { width: 70%; justify-self: end; margin-top: 0; }
}
</style>
