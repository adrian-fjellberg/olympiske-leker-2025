<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true"/>

    <!-- Banner -->
    <div>
      <img src="/img/exercises/isror-banner.png" alt="Isrør!" class="w-full"/>
      <div class="bg-[#0078D0] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img src="/img/exercises/dinking-straw.svg" alt="Isrør Icon" class="h-8 w-8 mx-auto my-2"/>
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
        Vi starter lekene med en klassiker! I denne øvelsen skal deltagerne suge opp all drikke fra et isbitbrett fylt til randen med øl. Det gjelder å bruke så rask tid som mulig.
      </p>
      <p class="mb-4">
        Fun fact: Selv om denne øvelsen virker enkel har flere deltagere tildigere kastet opp eller vært veldig nære på denne øvelsen.
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
        <li class="pl-2">La røret og brettet ligge på bordet uten at deltageren tar på de før man starter.</li>
        <li class="pl-2">Plukk opp sugerøret først når dommer har sagt "Gå!".</li>
        <li class="pl-2">Tiden starter når dommer sier "Gå!".</li>
        <li class="pl-2">Det skal kun være en halv millimeter i bunn av hver "lomme" for at øvelsen skal telles som fullført.</li>
        <li class="pl-2">Tiden stopper når brettet er helt tomt og sugerøret blir lagt på bordet.</li>
        <li class="pl-2">Ved tvil om en "lomme" er helt tom skal dommeren avgjøre. Det gis 15 sekunder straffepoeng for hver lomme som ikke er tom. Dersom fler en 4 lommer ikke er tomme blir deltageren diskvalifisert og den får ingen poeng.</li>
      </ul>
      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">Poeng & Rangering</h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">Plassering styres ut i fra beste tid, hvor kortest tid gir best rangering.</li>
          <li class="pl-2">Dommer står fritt til å diskvalifisiere en detlager etter gjentatte forsøk på juks. Diskvalifisering gir null poeng på øvelsen.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "~/components/TopRibbon.vue";
</script>
