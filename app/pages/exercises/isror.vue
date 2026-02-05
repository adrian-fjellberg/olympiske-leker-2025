<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true" />

    <!-- Banner -->
    <div>
      <img
        src="/img/exercises/isror-banner.png"
        alt="Isrør!"
        class="w-full"
      />
      <div class="bg-[#0078D0] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img
            src="/img/exercises/dinking-straw.svg"
            alt="Isrør-ikon"
            class="h-8 w-8 mx-auto my-2"
          />
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">Isrør!</h1>
          <p class="text-white/90">En kvalmende klassiker</p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="text-xl p-4">
      <p class="mb-4">
        Vi starter lekene med en klassiker! I denne øvelsen skal deltagerne suge
        opp all drikke fra et isbitbrett fylt til randen med øl. Det gjelder å
        bruke så kort tid som mulig.
      </p>
      <p class="mb-4">
        Fun fact: Selv om denne øvelsen virker enkel, har flere deltagere
        tidligere kastet opp eller vært veldig nære på å gjøre det.
      </p>
    </div>

    <!-- Rules Section -->
    <div class="bg-gray-100 mx-4 p-4 rounded-lg">
      <!-- Header with icon -->
      <div class="flex items-center mb-4 text-gray-800">
        <Icon name="fa6-solid:gavel" class="text-3xl mr-3" />
        <h2 class="text-4xl font-bold">REGLER</h2>
      </div>

      <!-- Rules List -->
      <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
        <li class="pl-2">
          La røret og brettet ligge på bordet uten at deltageren tar på dem før
          man starter.
        </li>
        <li class="pl-2">
          Plukk opp sugerøret først når dommeren har sagt «Gå!».
        </li>
        <li class="pl-2">
          Tiden starter når dommeren sier «Gå!».
        </li>
        <li class="pl-2">
          Det skal kun være en halv millimeter igjen i bunnen av hver «lomme»
          for at øvelsen skal telles som fullført.
        </li>
        <li class="pl-2">
          Tiden stopper når brettet er helt tomt og sugerøret legges på bordet.
        </li>
        <li class="pl-2">
          Ved tvil om en «lomme» er helt tom, avgjør dommeren. Det gis 15 sekunder
          straff per lomme som ikke er tom. Dersom flere enn fire lommer ikke er
          tomme, blir deltageren diskvalifisert og får ingen poeng.
        </li>
      </ul>

      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">
          Poeng &amp; rangering
        </h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">
            Plassering styres ut fra beste tid, hvor kortest tid gir best
            rangering.
          </li>
          <li class="pl-2">
            Dommer står fritt til å diskvalifisere en deltager etter gjentatte
            forsøk på juks. Diskvalifisering gir null poeng på øvelsen.
          </li>
        </ul>
      </div>
    </div>

    <!-- Scoreboard -->
    <div class="mt-6">
      <h2 class="text-4xl font-bold text-gray-800 px-4">RESULTATER</h2>

      <GamesScoreboard only-show-game-key="isror" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "~/components/TopRibbon.vue";
import GamesScoreboard from "~/components/GamesScoreboard.vue";

useSeoMeta({
  title: "Isrør!",
  description: "En kvalmende klassiker",
  twitterTitle: "Isrør!",
  twitterDescription: "En kvalmende klassiker",
  twitterImage:
    "https://olympiske-leker-2025.pages.dev/img/exercises/isror-banner.png",
  twitterCard: "summary_large_image",
  ogTitle: "Isrør!",
  ogDescription: "En kvalmende klassiker",
  ogImage:
    "https://olympiske-leker-2025.pages.dev/img/exercises/isror-banner.png",
});
</script>
