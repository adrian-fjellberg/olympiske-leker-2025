<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true"/>

    <!-- Banner -->
    <div>
      <img src="/img/exercises/pour-banner.png" alt="Beer Pong!" class="w-full"/>
      <div class="bg-[#0078D0] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img src="/img/exercises/pour.svg" alt="Beer Pong" class="h-8 w-8 mx-auto my-2"/>
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">Presisjonshelling</h1>
          <p class="text-white/90">Hvor nøyaktig kan du helle øl?</p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="text-xl p-4">
      <p class="mb-4">
        Hvor god er en Gubbe på sjenke øl? Med tanke på presisjon der alstå. Det skal vi finne ut av i denne øvelsen. Her er det om å gjøre å helle eksakt 33 ml fra en halvliter boks over på et glass uten å se selve glasset.
      </p>
    </div>

    <!-- Rules Section -->
    <div class="bg-gray-100 mx-4 p-4 rounded-lg">
      <!-- Header with icon -->
      <div class="flex items-center mb-4 text-gray-800">
        <Icon name="fa6-solid:gavel" class="text-3xl mr-3"/>
        <h2 class="text-4xl font-bold">REGLER</h2>
      </div>
      <!-- Rules List -->
      <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
        <li class="pl-2">Deltageren sitter eller står bak den spesiallagde "syggeboksen" slik at deltageren ikke kan se glasset som den skal helle øl opp i.</li>
        <li class="pl-2">Deltageren får utdelt en halvliter fra dommeren.</li>
        <li class="pl-2">Når dommer sier "Gå!" skal deltageren prøve å helle akkurat 33 ml fra halvliteren over i glasset.</li>
        <li class="pl-2">Det er lov å helle flere ganger.</li>
        <li class="pl-2">Det er strengt forbudt å prøve å se hvor mye som er oppi glasset.</li>
      </ul>
      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">Poeng & Rangering</h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">Poeng måles i avik fra 33 ml, hvor 0 avik er best.</li>
          <li class="pl-2">Avik måles i gram, hvor perfekt score er 330 gram.</li>
          <li class="pl-2">Dommer står fritt til å diskvalifisiere en detlager etter gjentatte forsøk på juks. Diskvalifisering gir null poeng på øvelsen.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import TopRibbon from "~/components/TopRibbon.vue";

useSeoMeta({
  title: 'Presisjonshelling',
  description: 'Hvor god er en Gubbe på sjenke øl? Med tanke på presisjon der alstå. Det skal vi finne ut av i denne øvelsen. Her er det om å gjøre å helle eksakt 33 ml fra en halvliter boks over på et glass uten å se selve glasset.',
  twitterTitle: 'Presisjonshelling',
  twitterDescription: 'Hvor god er en Gubbe på sjenke øl? Med tanke på presisjon der alstå. Det skal vi finne ut av i denne øvelsen. Her er det om å gjøre å helle eksakt 33 ml fra en halvliter boks over på et glass uten å se selve glasset.',
  twitterImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/pour-banner.png',
  twitterCard: 'summary_large_image',
  ogTitle: 'Presisjonshelling',
  ogDescription: 'Hvor god er en Gubbe på sjenke øl? Med tanke på presisjon der alstå. Det skal vi finne ut av i denne øvelsen. Her er det om å gjøre å helle eksakt 33 ml fra en halvliter boks over på et glass uten å se selve glasset.',
  ogImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/pour-banner.png',
});

</script>
