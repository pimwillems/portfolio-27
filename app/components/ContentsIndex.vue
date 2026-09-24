<template>
  <section
    id="work"
    class="contents"
    aria-labelledby="contents-title"
    tabindex="-1"
  >
    <div class="head">
      <h2
        id="contents-title"
        v-reveal
        class="heading serif m-track"
      >
        {{ contents.heading }}
      </h2>
      <MetaCaption muted>
        {{ contents.count }}
      </MetaCaption>
    </div>
    <div
      v-reveal
      class="rule m-line"
      aria-hidden="true"
    />
    <nav aria-labelledby="contents-title">
      <ContentsRow
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </nav>
  </section>
</template>

<script lang="ts">
import { contents, projects } from '~/data/issue'

export default defineNuxtComponent({
  name: 'ContentsIndex',
  data() {
    return { contents, projects }
  },
})
</script>

<style scoped>
.contents {
  padding: 0 var(--gutter) calc(320px * var(--space-scale));
}

.contents:focus {
  outline: none;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding-bottom: 28px;
}

.heading {
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  font-size: clamp(56px, 9vw, 144px);
  line-height: .9;
  letter-spacing: -.01em;
}

.rule {
  height: 1px;
  background: var(--c-line);
}

@media (max-width: 767px) {
  .head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
