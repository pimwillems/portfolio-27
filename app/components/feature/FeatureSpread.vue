<template>
  <component
    :is="layoutComponent"
    :project="project"
  />
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Project, ProjectLayout } from '~/data/issue'
import FeatureSplitLeft from './FeatureSplitLeft.vue'
import FeatureCentered from './FeatureCentered.vue'
import FeatureStat from './FeatureStat.vue'
import FeatureSplitRight from './FeatureSplitRight.vue'
import FeatureGallery from './FeatureGallery.vue'
import FeatureMosaic from './FeatureMosaic.vue'

const LAYOUTS = {
  'split-left': FeatureSplitLeft,
  'centered': FeatureCentered,
  'stat': FeatureStat,
  'split-right': FeatureSplitRight,
  'gallery': FeatureGallery,
  'mosaic': FeatureMosaic,
} satisfies Record<ProjectLayout, unknown>

/** Picks the spread layout for a project. */
export default defineNuxtComponent({
  name: 'FeatureSpread',
  props: {
    project: { type: Object as PropType<Project>, required: true },
  },
  computed: {
    layoutComponent() {
      return LAYOUTS[this.project.layout]
    },
  },
})
</script>
