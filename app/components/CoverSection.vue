<template>
  <div class="cover-wrap">
    <section
      class="cover grid-12"
      aria-label="Cover"
    >
      <div class="lines lines-left">
        <CoverLine
          v-for="(line, i) in cover.linesLeft"
          :key="line.kicker"
          :line="line"
          :style="{ animationDelay: `${0.9 + i * 0.15}s` }"
        />
      </div>

      <EditorialFigure
        class="portrait l-cover"
        v-bind="cover.portrait"
        :span="4"
        priority
      />

      <div class="lines lines-right">
        <CoverLine
          v-for="(line, i) in cover.linesRight"
          :key="line.kicker"
          :line="line"
          :style="{ animationDelay: `${1.2 + i * 0.15}s` }"
        />
      </div>
    </section>

    <div class="intro">
      <p class="tagline serif">
        <span class="l-rise"><span>{{ cover.tagline }}</span></span>
      </p>
      <NuxtLink
        class="cta cap l-fade"
        :to="cover.cta.href"
      >
        <span class="ul">{{ cover.cta.label }}</span>
        <span
          class="arr"
          aria-hidden="true"
        >→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { cover } from '~/data/issue'

export default defineNuxtComponent({
  name: 'CoverSection',
  data() {
    return { cover }
  },
})
</script>

<style scoped>
.cover {
  padding-top: 72px;
  align-items: end;
}

.lines {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-bottom: 12px;
}

.lines-left {
  grid-column: 1 / span 3;
}

.portrait {
  grid-column: 5 / span 4;
}

.lines-right {
  grid-column: 10 / span 3;
  text-align: right;
}

.intro {
  padding: 64px var(--gutter) 0;
  text-align: center;
}

.tagline {
  font-size: clamp(34px, 5.6vw, 89.6px);
  font-style: italic;
  line-height: 1;
  letter-spacing: -.02em;
}

.tagline .l-rise > span {
  animation-delay: 1s;
}

.cta {
  display: inline-flex;
  gap: 14px;
  margin-top: 48px;
  font-size: 11px;
  animation-delay: 1.5s;
}

@media (max-width: 1023px) {
  .cover {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 56px;
    align-items: start;
  }

  .portrait {
    grid-column: 2 / span 4;
    justify-self: center;
    width: min(100%, 320px);
    order: -1;
  }

  .lines-left {
    grid-column: 1 / span 3;
  }

  .lines-right {
    grid-column: 4 / span 3;
  }
}

@media (max-width: 767px) {
  .cover {
    grid-template-columns: minmax(0, 1fr);
    padding-top: 48px;
    row-gap: 40px;
  }

  .portrait,
  .lines-left,
  .lines-right {
    grid-column: 1 / -1;
  }

  .portrait {
    width: min(100%, 240px);
  }

  .lines {
    gap: 32px;
  }

  .intro {
    padding-top: 48px;
  }
}
</style>
