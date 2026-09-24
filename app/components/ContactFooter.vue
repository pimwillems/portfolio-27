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
  margin-top: calc(48px * var(--space-scale));
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

</style>
