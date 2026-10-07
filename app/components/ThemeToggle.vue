<template>
  <button
    type="button"
    role="switch"
    class="toggle cap"
    :aria-checked="isDark ? 'true' : 'false'"
    @click="toggle"
  >
    <span class="label">{{ label }}</span>
    <span
      class="track"
      aria-hidden="true"
    >
      <span class="knob" />
    </span>
  </button>
</template>

<script lang="ts">
let media: MediaQueryList | null = null

/**
 * Light/dark switch. The head script (utils/theme.ts) has already applied the
 * theme before paint; this keeps the switch in sync, saves an explicit choice,
 * and follows OS changes until the reader makes one.
 */
export default defineNuxtComponent({
  name: 'ThemeToggle',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDark: false,
    }
  },
  mounted() {
    this.isDark = currentTheme() === 'dark'
    media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', this.onSystemChange)
  },
  beforeUnmount() {
    media?.removeEventListener('change', this.onSystemChange)
    media = null
  },
  methods: {
    toggle() {
      const theme: Theme = this.isDark ? 'light' : 'dark'
      this.isDark = theme === 'dark'
      applyTheme(theme)
      storeTheme(theme)
    },
    onSystemChange(event: MediaQueryListEvent) {
      if (storedTheme()) return
      this.isDark = event.matches
      applyTheme(event.matches ? 'dark' : 'light')
    },
  },
})
</script>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  margin-block: -14px; /* 44px hit area without growing the bar */
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  transition: color .4s var(--ease-out);
}

.toggle:hover {
  color: var(--c-muted);
}

/* needs the head script; without JS the OS preference applies and there's nothing to switch */
:root:not([data-theme]) .toggle {
  display: none;
}

.track {
  position: relative;
  width: 28px;
  height: 14px;
  border: 1px solid currentColor;
  border-radius: 7px;
}

.knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  transition: transform .5s var(--ease-out);
}

/* driven by <html data-theme> rather than isDark, so the switch is right on first paint */
:root[data-theme="dark"] .knob {
  transform: translateX(14px);
}
</style>
