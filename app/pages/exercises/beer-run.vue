<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true"/>

    <!-- Banner -->
    <div>
      <img src="/img/exercises/beer-run-banner.png" alt="Beer run!" class="w-full"/>
      <div class="bg-[#F0282D] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img src="/img/exercises/running.svg" alt="Beer run" class="h-8 w-8 mx-auto my-2"/>
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">"A quick beer run"</h1>
          <p class="text-white/90">
            Løp da for faen!
          </p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="text-xl p-4">
      <p class="mb-4">
        Hvordan står det egentlig til med kondisen? Det skal vi finne ut av nå via en liten kjapp joggetur for å finne og styrte en øl. Fjellberg har nemmelig "gjemt" øl i skogholtet langs veien opp til skibakken. La den raskeste og tørsteste vinne!
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

        <li class="pl-2">Deltagerene får informasjon om hvor ølen befinner seg.</li>
        <li class="pl-2">Deltagerne deles inn i to grupper som skal løpe samtitidig.</li>
        <li class="pl-2">Når dommeren sier "Gå!" skal deltagerene løpe så raskt de kan for å finne ølen, ta frem mobilen og filme at de styrter ølen, sende video på gruppechatten, for så å løpe tilbake til start.</li>
      </ul>
      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">Poeng & Rangering</h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">Deltagerne rangeres etter tid, hvor kortest tid er best,</li>
          <li class="pl-2">Bonus: dersom en deltager kommer tilbake med en veldig morsom historie om noe som har skjedd på løpeturen kan de få fratrekk på 30 sekunder. Det er gruppen som ikke løp denne runden som blir enge om ved simpelt flertal om bonus skal gis.</li>
          <li class="pl-2">Dommer står fritt til å diskvalifisiere en detlager etter forsøk på juks. Diskvalifisering gir null poeng på øvelsen.</li>
        </ul>
      </div>
    </div>

    <!-- Scoreboard -->
    <div class="mx-4 mt-6">
      <h2 class="text-4xl font-bold text-gray-800">RESULTATER</h2>

      <GamesScoreboard only-show-game-key="beer-run" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "~/components/TopRibbon.vue";
import GamesScoreboard from "~/components/GamesScoreboard.vue";

useSeoMeta({
  title: '"A quick beer run"',
  description: 'Hvordan står det egentlig til med kondisen? Det skal vi finne ut av nå via en liten kjapp joggetur for å finne og styrte en øl. Fjellberg har nemmelig "gjemt" øl i skogholtet langs veien opp til skibakken. La den raskeste og tørsteste vinne!',
  twitterTitle: '"A quick beer run"',
  twitterDescription: 'Hvordan står det egentlig til med kondisen? Det skal vi finne ut av nå via en liten kjapp joggetur for å finne og styrte en øl. Fjellberg har nemmelig "gjemt" øl i skogholtet langs veien opp til skibakken. La den raskeste og tørsteste vinne!',
  twitterImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/beer-run-banner.png',
  twitterCard: 'summary_large_image',
  ogTitle: '"A quick beer run"',
  ogDescription: 'Hvordan står det egentlig til med kondisen? Det skal vi finne ut av nå via en liten kjapp joggetur for å finne og styrte en øl. Fjellberg har nemmelig "gjemt" øl i skogholtet langs veien opp til skibakken. La den raskeste og tørsteste vinne!',
  ogImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/beer-run-banner.png',
});

</script>
