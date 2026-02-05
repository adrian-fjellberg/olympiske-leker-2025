<template>
  <NuxtPage />
</template>

<script setup>

useSeoMeta({
  title: 'Ølympiske Leker 2025',
  description: 'Velkommen til Ølympiske Leker 2025! Én gang i året leggir fornuften igjen hjemme, og en gjeng på 11 godt voksne mannfolk setter kursen mot Nesbyen for det som har blitt en høyt elsket tradisjon: hyttetur med Ølympiske Leker.',
  twitterTitle: 'Ølympiske Leker 2025',
  twitterDescription: 'Velkommen til Ølympiske Leker 2025! Én gang i året leggir fornuften igjen hjemme, og en gjeng på 11 godt voksne mannfolk setter kursen mot Nesbyen for det som har blitt en høyt elsket tradisjon: hyttetur med Ølympiske Leker.',
  twitterImage: 'https://olympiske-leker-2025.pages.dev/olympiskeleker_og_card.png',
  twitterCard: 'summary_large_image',
  ogTitle: 'Ølympiske Leker 2025',
  ogDescription: 'Velkommen til Ølympiske Leker 2025! Én gang i året leggir fornuften igjen hjemme, og en gjeng på 11 godt voksne mannfolk setter kursen mot Nesbyen for det som har blitt en høyt elsket tradisjon: hyttetur med Ølympiske Leker.',
  ogImage: 'https://olympiske-leker-2025.pages.dev/olympiskeleker_og_card.png',
});

useHead({
  titleTemplate: '%s - Ølympiske Leker 2025',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
});

</script>
