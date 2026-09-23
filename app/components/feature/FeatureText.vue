<template>
  <div class="feature-text">
    <p
      v-if="project.dek"
      v-reveal
      class="dek m-rise"
      :class="{ large }"
    >
      {{ project.dek }}
    </p>
    <p
      v-reveal
      class="body-copy m-rise"
    >
      {{ project.body }}
    </p>
    <MetaCaption
      tag="p"
      class="tech"
    >
      <span class="visually-hidden">Built with: </span>{{ project.tech.join(' · ') }}
    </MetaCaption>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Project } from '~/data/issue'

/** Dek, body copy and tech line shared by every feature spread. */
export default defineNuxtComponent({
  name: 'FeatureText',
  props: {
    project: { type: Object as PropType<Project>, required: true },
    /** Garrix uses a 44px dek instead of 28px. */
    large: { type: Boolean, default: false },
  },
})
</script>

<style scoped>
.feature-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dek.large {
  font-size: clamp(28px, 3.06vw, 44px);
  line-height: 1.1;
}

.tech {
  line-height: 2;
}
</style>
