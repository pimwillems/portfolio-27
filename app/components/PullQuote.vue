<template>
  <section
    class="interlude"
    aria-label="Interlude"
  >
    <MetaCaption muted>
      {{ interlude.kicker }}
    </MetaCaption>
    <blockquote
      v-reveal
      class="quote serif m-rise"
    >
      <p><EmText :segments="interlude.quote" /></p>
    </blockquote>
    <div
      v-reveal
      class="rule m-line"
      aria-hidden="true"
    />
  </section>
</template>

<script lang="ts">
import { interlude } from '~/data/issue'

export default defineNuxtComponent({
  name: 'PullQuote',
  data() {
    return { interlude }
  },
})
</script>

<style scoped>
.interlude {
  padding: 80px var(--gutter) calc(360px * var(--space-scale));
  overflow: clip;
  text-align: center;
}

.quote {
  max-width: 1100px;
  margin: 64px auto 0;
  font-size: clamp(44px, 7.22vw, 104px);
  line-height: 1.02;
  letter-spacing: -.025em;
}

.rule {
  width: 48px;
  height: 1px;
  margin: 72px auto 0;
  background: var(--c-line);
}

@media (max-width: 767px) {
  .interlude {
    padding-top: 40px;
  }

  .quote {
    margin-top: 40px;
  }

  .rule {
    margin-top: 48px;
  }
}
</style>
