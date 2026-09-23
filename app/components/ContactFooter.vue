<template>
  <footer
    id="contact"
    class="contact"
  >
    <div
      v-reveal
      class="rule m-line"
      aria-hidden="true"
    />
    <MetaCaption
      class="kicker"
      muted
    >
      {{ contact.kicker }}
    </MetaCaption>
    <a
      class="talk serif"
      :href="contact.href"
      target="_blank"
      rel="noopener"
    >
      <span
        v-reveal
        class="track m-track"
      ><span class="talk-text"><EmText :segments="contact.headline" /></span></span>
      <span class="visually-hidden"> (LinkedIn, opens in a new tab)</span>
    </a>
    <a
      v-reveal
      class="btn cap m-rise"
      :href="contact.href"
      target="_blank"
      rel="noopener"
    >
      {{ contact.button }}
      <span
        class="arr"
        aria-hidden="true"
      >→</span>
      <span class="visually-hidden"> (opens in a new tab)</span>
    </a>
    <div class="bar cap muted">
      <span>{{ contact.copyright }}</span>
      <NuxtLink
        class="top"
        :to="contact.backToTop.href"
      >
        <span class="ul">{{ contact.backToTop.label }}</span> <span aria-hidden="true">↑</span>
      </NuxtLink>
      <span>{{ contact.domain }}</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { contact } from '~/data/issue'

export default defineNuxtComponent({
  name: 'ContactFooter',
  data() {
    return { contact }
  },
})
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  padding: 0 var(--gutter) 56px;
  text-align: center;
}

.rule {
  align-self: stretch;
  height: 1px;
  background: var(--c-line);
}

.kicker {
  margin-top: calc(120px * var(--space-scale));
}

.talk {
  align-self: flex-start;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: clamp(56px, 12vw, 192px);
  line-height: .9;
  white-space: nowrap;
}

.talk:hover,
.talk:focus-visible {
  color: var(--c-ink);
}

.track {
  display: inline-block;
  letter-spacing: -.01em;
}

/* the scroll animation owns .track's letter-spacing; hover opens the inner span */
.talk-text {
  letter-spacing: inherit;
  transition: letter-spacing 1.1s var(--ease-out);
}

.talk:hover .talk-text,
.talk:focus-visible .talk-text {
  letter-spacing: .03em;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  padding: 20px 40px;
  border: 1px solid var(--c-ink);
  font-size: 11px;
  transition:
    background-color .5s var(--ease-out),
    color .5s var(--ease-out);
}

.btn:hover,
.btn:focus-visible {
  background: var(--c-ink);
  color: var(--c-paper);
}

.bar {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: calc(160px * var(--space-scale));
}

.top {
  color: var(--c-muted);
}

.top:hover,
.top:focus-visible {
  color: var(--c-ink);
}

@media (max-width: 767px) {
  .contact {
    gap: 48px;
  }

  .bar {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .top {
    display: inline-block;
    min-height: 44px;
    padding-block: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .talk:hover .talk-text,
  .talk:focus-visible .talk-text {
    letter-spacing: inherit;
  }
}
</style>
