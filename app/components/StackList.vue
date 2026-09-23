<template>
  <section
    class="stack"
    aria-label="Tools"
  >
    <MetaCaption muted>
      {{ stack.kicker }}
    </MetaCaption>
    <p
      v-reveal
      class="list serif m-rise"
    >
      <template
        v-for="(item, i) in stack.items"
        :key="item.text"
      >
        <span class="sw"><em v-if="item.em">{{ item.text }}</em><template v-else>{{ item.text }}</template></span>
        <template v-if="i < stack.items.length - 1">
          ·
        </template>
      </template>
    </p>
  </section>
</template>

<script lang="ts">
import { stack } from '~/data/issue'

export default defineNuxtComponent({
  name: 'StackList',
  data() {
    return { stack }
  },
})
</script>

<style scoped>
.stack {
  padding: 0 var(--gutter) calc(320px * var(--space-scale));
  text-align: center;
}

.list {
  max-width: 1100px;
  margin: 56px auto 0;
  font-size: clamp(30px, 3.89vw, 56px);
  line-height: 1.3;
  letter-spacing: -.01em;
}

.sw {
  display: inline-block;
  transition:
    transform .8s var(--ease-out),
    color .4s var(--ease-out);
}

.sw:hover {
  color: var(--c-muted);
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .sw:hover {
    transform: none;
  }
}
</style>
