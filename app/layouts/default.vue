<template>
  <div>
    <ReadingProgress />
    <slot />
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'DefaultLayout',
})
</script>
