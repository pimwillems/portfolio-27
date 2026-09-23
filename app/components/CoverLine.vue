<template>
  <div class="cover-line l-fade">
    <span class="cap muted">{{ line.kicker }}</span>
    <span class="text serif"><EmText :segments="line.text" /></span>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { CoverLineData } from '~/data/issue'

/** A cover line: muted kicker above a Bodoni line that mixes upright and italic. */
export default defineNuxtComponent({
  name: 'CoverLine',
  props: {
    line: { type: Object as PropType<CoverLineData>, required: true },
  },
})
</script>

<style scoped>
.cover-line {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text {
  font-size: 26px;
  line-height: 1.15;
}

@media (max-width: 767px) {
  .text {
    font-size: 22px;
  }
}
</style>
