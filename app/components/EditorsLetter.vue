<template>
  <section
    id="about"
    class="letter grid-12"
    aria-labelledby="letter-title"
  >
    <MetaCaption
      class="kicker"
      muted
    >
      {{ letter.kicker }}
    </MetaCaption>
    <h2
      id="letter-title"
      v-reveal
      class="headline serif m-rise"
    >
      <EmText :segments="letter.headline" />
    </h2>
    <div class="aside">
      <div
        v-reveal
        class="rule m-line"
        aria-hidden="true"
      />
      <p
        v-reveal
        class="body m-rise"
      >
        {{ letter.body }}
      </p>
      <MetaCaption>{{ letter.signoff }}</MetaCaption>
    </div>
  </section>
</template>

<script lang="ts">
import { letter } from '~/data/issue'

export default defineNuxtComponent({
  name: 'EditorsLetter',
  data() {
    return { letter }
  },
})
</script>

<style scoped>
.letter {
  padding-top: calc(300px * var(--space-scale));
  padding-bottom: calc(280px * var(--space-scale));
  row-gap: 72px;
  text-align: center;
}

.kicker {
  grid-column: 1 / -1;
}

.headline {
  grid-column: 2 / span 10;
  font-size: clamp(32px, 4.45vw, 64px);
  line-height: 1.12;
  letter-spacing: -.015em;
}

.aside {
  grid-column: 5 / span 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.rule {
  width: 48px;
  height: 1px;
  background: var(--c-line);
}

.body {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
}

@media (max-width: 1439px) {
  .aside {
    grid-column: 4 / span 6;
  }
}

@media (max-width: 1023px) {
  .headline {
    grid-column: 1 / -1;
  }

  .aside {
    grid-column: 3 / span 8;
  }
}

@media (max-width: 767px) {
  .letter {
    row-gap: 48px;
  }

  .aside {
    grid-column: 1 / -1;
  }
}
</style>
