<template>
  <component
    :is="tag"
    v-reveal
    class="cap"
    :class="{ muted, 'm-rise': rise }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
/** The tracked uppercase caption used for kickers, labels and tech lines. */
export default defineNuxtComponent({
  name: 'MetaCaption',
  props: {
    tag: { type: String, default: 'span' },
    muted: { type: Boolean, default: false },
    rise: { type: Boolean, default: true },
  },
})
</script>

<style scoped>
.cap {
  display: block;
}
</style>
