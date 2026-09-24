// Server-side counterpart of reveal.client.ts: registers v-reveal as a no-op so
// SSR can resolve the directive. The rendered HTML is always the final state.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
  })
})
