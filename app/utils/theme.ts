export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'
const THEME_META_ID = 'theme-color'

/** Browser chrome colour per theme; mirrors --c-paper in tokens.css. */
export const THEME_COLORS: Record<Theme, string> = {
  light: '#FFFFFF',
  dark: '#111111',
}

/**
 * Runs in <head> before first paint so the page never flashes the wrong theme.
 * Resolves the reader's saved choice, else the OS preference, onto
 * <html data-theme>. Without JS the attribute stays unset and tokens.css
 * falls back to prefers-color-scheme alone (the toggle is hidden then).
 * It also adds the theme-color meta, outside Nuxt's head manager so
 * hydration leaves it alone.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}')}catch(e){}if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;var m=document.createElement('meta');m.name='theme-color';m.id='${THEME_META_ID}';m.content=t==='dark'?'${THEME_COLORS.dark}':'${THEME_COLORS.light}';document.head.appendChild(m)})()`

/** The theme currently applied to <html>. */
export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

/** Applies a theme to the page and the browser chrome. */
export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  const meta = document.getElementById(THEME_META_ID) as HTMLMetaElement | null
  if (meta) meta.content = THEME_COLORS[theme]
}

/** The reader's explicit choice, or null when they follow the OS. */
export function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  }
  catch {
    return null
  }
}

export function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }
  catch {
    // private mode / blocked storage: the choice lasts for this page view only
  }
}
