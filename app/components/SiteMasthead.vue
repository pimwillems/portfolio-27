<template>
  <header class="masthead">
    <a
      class="skip cap"
      href="#work"
    >{{ masthead.skipLink }}</a>

    <div class="bar cap l-fade">
      <span class="issue">{{ masthead.issue }}</span>

      <nav
        class="nav"
        aria-label="Main"
      >
        <ul class="nav-inline">
          <li
            v-for="link in masthead.nav"
            :key="link.href"
          >
            <NuxtLink
              class="ul"
              :to="link.href"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <button
          ref="menuButton"
          type="button"
          class="menu-btn cap"
          aria-haspopup="dialog"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="site-menu"
          @click="openMenu"
        >
          {{ masthead.menuLabel }}
        </button>
      </nav>

      <span class="season">{{ masthead.season }}</span>
    </div>

    <h1 class="title serif m-recede">
      <span class="l-mast">{{ masthead.name }}</span>
    </h1>

    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="site-menu"
        ref="overlay"
        class="overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="masthead.menuLabel"
        @keydown="onOverlayKeydown"
      >
        <button
          type="button"
          class="close cap"
          @click="closeMenu"
        >
          {{ masthead.closeLabel }}
        </button>
        <ul class="overlay-links">
          <li
            v-for="link in masthead.nav"
            :key="link.href"
          >
            <NuxtLink
              class="serif"
              :to="link.href"
              @click="closeMenu(false)"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts">
import { masthead } from '~/data/issue'

const FOCUSABLE = 'a[href], button:not([disabled])'

export default defineNuxtComponent({
  name: 'SiteMasthead',
  data() {
    return {
      masthead,
      menuOpen: false,
      mql: null as MediaQueryList | null,
    }
  },
  mounted() {
    this.mql = window.matchMedia('(min-width: 768px)')
    this.mql.addEventListener('change', this.onBreakpoint)
    document.addEventListener('keydown', this.onDocumentKeydown)
  },
  beforeUnmount() {
    this.mql?.removeEventListener('change', this.onBreakpoint)
    document.removeEventListener('keydown', this.onDocumentKeydown)
    this.lockScroll(false)
  },
  methods: {
    openMenu() {
      this.menuOpen = true
      this.lockScroll(true)
      this.$nextTick(() => {
        const first = (this.$refs.overlay as HTMLElement | undefined)?.querySelector<HTMLElement>('.overlay-links a')
        first?.focus()
      })
    },
    closeMenu(restoreFocus: boolean | Event = true) {
      if (!this.menuOpen) return
      this.menuOpen = false
      this.lockScroll(false)
      if (restoreFocus !== false) {
        this.$nextTick(() => (this.$refs.menuButton as HTMLElement | undefined)?.focus())
      }
    },
    lockScroll(lock: boolean) {
      document.documentElement.style.overflow = lock ? 'hidden' : ''
    },
    onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) this.closeMenu(false)
    },
    onDocumentKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape' && this.menuOpen) {
        event.preventDefault()
        this.closeMenu()
      }
    },
    // Focus trap: keep Tab / Shift+Tab inside the overlay.
    onOverlayKeydown(event: KeyboardEvent) {
      if (event.key !== 'Tab') return
      const overlay = this.$refs.overlay as HTMLElement | undefined
      if (!overlay) return
      const items = Array.from(overlay.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (!items.length) return
      const first = items[0]!
      const last = items[items.length - 1]!
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      }
      else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    },
  },
})
</script>

<style scoped>
.masthead {
  padding: 36px var(--gutter) 0;
}

/* ---------- skip link ---------- */
.skip {
  position: absolute;
  left: var(--gutter);
  top: 12px;
  z-index: 60;
  padding: 14px 20px;
  background: var(--c-paper);
  border: 1px solid var(--c-ink);
  transform: translateY(-200%);
}

.skip:focus-visible {
  transform: none;
}

/* ---------- top bar ---------- */
.bar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  column-gap: 24px;
}

.issue,
.season {
  white-space: nowrap;
}

.season {
  text-align: right;
}

.nav-inline {
  display: flex;
  gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-btn {
  display: none;
  min-width: 44px;
  min-height: 44px;
  padding: 0 4px;
  background: none;
  border: 0;
  cursor: pointer;
}

/* ---------- masthead title ---------- */
.title {
  margin-top: 40px;
  font-size: clamp(44px, 11.4vw, 182.4px);
  line-height: .9;
  letter-spacing: .015em;
  white-space: nowrap;
  transform-origin: top center;
}

/* centred from a fixed layout point: the letter-spacing animation changes the
   width, and a transform-based centre keeps that out of layout shift (CLS 0) */
.title > span {
  margin-left: 50%;
  transform: translateX(-50%);
}

/* ---------- mobile overlay ---------- */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 20px;
  background: var(--c-paper);
}

.close {
  position: absolute;
  top: 26px;
  right: 20px;
  min-width: 44px;
  min-height: 44px;
  background: none;
  border: 0;
  cursor: pointer;
}

.overlay-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.overlay-links a {
  display: block;
  min-height: 44px;
  font-size: 56px;
  line-height: 1.1;
}

.overlay-links li:nth-child(2) a {
  font-style: italic;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity .6s var(--ease-out);
}

.menu-enter-active .overlay-links,
.menu-leave-active .overlay-links {
  transition: transform .8s var(--ease-out);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-from .overlay-links,
.menu-leave-to .overlay-links {
  transform: translateY(24px);
}

@media (max-width: 1023px) {
  .bar {
    column-gap: 16px;
  }

  .nav-inline {
    gap: 28px;
  }
}

@media (max-width: 767px) {
  .bar {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .season {
    display: none;
  }

  /* With JS: the inline links become a Menu button. Without JS they stay visible. */
  :root.js .nav-inline {
    display: none;
  }

  :root.js .menu-btn {
    display: block;
  }

  :root:not(.js) .nav {
    grid-column: 1 / -1;
    margin-top: 16px;
  }

  :root:not(.js) .nav-inline {
    gap: 24px;
  }

  :root:not(.js) .nav-inline a {
    display: inline-block;
    min-height: 44px;
    padding-top: 14px;
  }

  .title {
    font-size: clamp(36px, 12.5vw, 96px);
  }
}
</style>
