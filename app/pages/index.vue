<template>
  <div
    id="top"
    class="issue"
  >
    <SiteMasthead />
    <main>
      <CoverSection />
      <EditorsLetter />
      <ContentsIndex />
      <template
        v-for="project in projects"
        :key="project.id"
      >
        <FeatureSpread :project="project" />
        <PullQuote v-if="project.id === 'p3'" />
      </template>
      <StackList />
    </main>
    <ContactFooter />
  </div>
</template>

<script lang="ts">
import { meta, projects } from '~/data/issue'

export default defineNuxtComponent({
  name: 'IndexPage',
  data() {
    return { projects }
  },
  head() {
    return {
      title: meta.title,
      meta: [
        { name: 'description', content: meta.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: meta.person.url },
        { property: 'og:title', content: meta.title },
        { property: 'og:description', content: meta.description },
        { property: 'og:image', content: `${meta.person.url}${meta.ogImage}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: meta.ogImageAlt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: meta.title },
        { name: 'twitter:description', content: meta.description },
        { name: 'twitter:image', content: `${meta.person.url}${meta.ogImage}` },
        { name: 'twitter:image:alt', content: meta.ogImageAlt },
      ],
      link: [{ rel: 'canonical' as const, href: `${meta.person.url}/` }],
      script: [
        {
          type: 'application/ld+json' as const,
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            ...meta.person,
          }),
        },
      ],
    }
  },
})
</script>

<style scoped>
.issue {
  max-width: var(--max-width);
  margin-inline: auto;
  overflow-x: clip;
}
</style>
