<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true"/>

    <!-- Banner -->
    <div>
      <img src="/img/exercises/beer-pong-banner.png" alt="Beer Pong!" class="w-full"/>
      <div class="bg-[#0078D0] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img src="/img/exercises/beer-pong.svg" alt="Beer Pong" class="h-8 w-8 mx-auto my-2"/>
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">Beerpong quicky!</h1>
          <p class="text-white/90">La balla'n fly!</p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="text-xl p-4">
      <p class="mb-4">
        Fra diverse campus i USA til fjortisfester i Lillestrøm, beerpong er og blir en legendarisk fest lek. I går
        kjører vi en "quiky" variant av denne øvelsen, hvor hver spiller skal treffe opp tre kopper med øl, fra den ene
        siden av bordet til den andre. Her gjelder det å treffe og drikke opp koppene på så få forsøk som mulig. </p>
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
        <li class="pl-2">Deltagerene får servert tre kopper med øl som settes i en pyramide på den ene enden av bordet. Dommer plasserer en markør der spissen (den første koppen) av pyramiden skal plasseres oppå. Deltageren setter seg på motsatt ende av bordet.</li>
        <li class="pl-2">Med "treffe en kopp" mener man at ballen har fløyet gjennom luften for så å ha landet i ro i ølet i koppen uten hjelp andre personer.</li>
        <li class="pl-2">Deltageren får 100 forsøk på treffe.</li>
        <li class="pl-2">Det er lov å sprette ballen en gang i bordet. Flere sprett telles som et ugyldig kast og ett forsøk blir brukt opp.</li>
        <li class="pl-2">Dersom deltageren treffer mister man ikke et forsøk.</li>
        <li class="pl-2">Dersom ballen får en spin i koppen (en full rotasjon langs veggene) før den treffer ølen, får deltageren 10 ekstra forsøk.</li>
        <li class="pl-2">Dersom deltageren mister en ball som man ikke finner igjen, mister deltageren 10 poeng.</li>
        <li class="pl-2">Når deltageren treffer en kopp, må koppen drikkes helt opp og koppen fjernes fra pyramiden før deltageren kan fortsette forsøkene.</li>
        <li class="pl-2">Når alle koppene er drukket opp, teller man hvor mange forsøk deltageren har igjen. Antall forsøk igjen er så mange poeng deltageren får.</li>
      </ul>
      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">Poeng & Rangering</h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">Deltagerne rangeres etter poeng, hvor flest poeng er best.</li>
          <li class="pl-2">Dommer står fritt til å diskvalifisiere en detlager etter gjentatte forsøk på juks. Diskvalifisering gir null poeng på øvelsen."</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "~/components/TopRibbon.vue";

useSeoMeta({
  title: 'Beerpong quicky!',
  description: 'Fra diverse campus i USA til fjortisfester i Lillestrøm, beerpong er og blir en legendarisk fest lek. I går kjører vi en "quiky" variant av denne øvelsen, hvor hver spiller skal treffe opp tre kopper med øl, fra den ene siden av bordet til den andre. Her gjelder det å treffe og drikke opp koppene på så få forsøk som mulig.',
  twitterTitle: 'Beerpong quicky!',
  twitterDescription: 'Fra diverse campus i USA til fjortisfester i Lillestrøm, beerpong er og blir en legendarisk fest lek. I går kjører vi en "quiky" variant av denne øvelsen, hvor hver spiller skal treffe opp tre kopper med øl, fra den ene siden av bordet til den andre. Her gjelder det å treffe og drikke opp koppene på så få forsøk som mulig.',
  twitterImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/beer-pong-banner.png',
  twitterCard: 'summary_large_image',
  ogTitle: 'Beerpong quicky!',
  ogDescription: 'Fra diverse campus i USA til fjortisfester i Lillestrøm, beerpong er og blir en legendarisk fest lek. I går kjører vi en "quiky" variant av denne øvelsen, hvor hver spiller skal treffe opp tre kopper med øl, fra den ene siden av bordet til den andre. Her gjelder det å treffe og drikke opp koppene på så få forsøk som mulig.',
  ogImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/beer-pong-banner.png',
});

</script>
