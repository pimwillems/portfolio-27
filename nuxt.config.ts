// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/eslint'],

  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FFFFFF' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      // Flags JS support before first paint, so the mobile menu button can
      // replace the inline nav without a layout shift (and never without JS).
      script: [{ innerHTML: 'document.documentElement.classList.add(\'js\')', tagPosition: 'head' }],
    },
  },

  css: ['~/assets/css/tokens.css', '~/assets/css/base.css', '~/assets/css/motion.css'],

  compatibilityDate: '2025-07-15',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: true,
    },
  },

  typescript: {
    strict: true,
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  fonts: {
    // only Google is used; skip probing the other providers
    providers: {
      adobe: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      googleicons: false,
      npm: false,
    },
    // tokens.css declares the families as --f-serif / --f-sans
    processCSSVariables: true,
    defaults: {
      subsets: ['latin'],
    },
    families: [
      {
        name: 'Bodoni Moda',
        provider: 'google',
        // variable font: one file per style covers 400/500/700
        weights: ['400 700'],
        styles: ['normal', 'italic'],
        preload: true,
        // Request the optical-size axis so large sizes use the high-contrast cut.
        providerOptions: {
          google: {
            experimental: {
              variableAxis: { opsz: [['6', '96']] },
            },
          },
        },
      },
      {
        name: 'Jost',
        provider: 'google',
        weights: ['300 500'],
        styles: ['normal'],
        preload: false,
      },
    ],
  },

  image: {
    format: ['avif', 'webp'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1600,
    },
  },
})
