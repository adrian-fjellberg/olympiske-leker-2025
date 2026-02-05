<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true" />

    <!-- Banner -->
    <div>
      <img
        src="/img/exercises/split-the-g-banner.png"
        alt="Split the G!"
        class="w-full"
      />
      <div class="bg-[#0078D0] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img
            src="/img/exercises/split-the-g.svg"
            alt="Split the G"
            class="h-8 w-8 mx-auto my-2"
          />
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">Splitte «G»-en</h1>
          <p class="text-white/90">Ikke vær for tørst nå!</p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="text-xl p-4">
      <p class="mb-4">
        Dette er en bar-klassiker. I denne øvelsen skal man drikke Guinness fra et
        pintglass, og på første slurk skal ølet legge seg nøyaktig midt i «G»-en
        når glasset senkes. Her gjelder det å være så nær som mulig streken på
        «G»-en for å sanke poeng.
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
          Hvert glass serveres med Guinness helt opp til anbefalt skjenkenivå,
          slik at «G»-logoen er fullt synlig og ubeskadiget.
        </li>
        <li class="pl-2">
          Deltageren skal stå stille bak bordet når øvelsen starter.
        </li>
        <li class="pl-2">
          Øvelsen starter når dommeren sier «Gå!».
        </li>
        <li class="pl-2">
          Deltageren skal drikke i én sammenhengende drikkesekvens.
        </li>
        <li class="pl-2">
          Det er tillatt med flere svelg.
        </li>
        <li class="pl-2">
          Det er ikke tillatt å stoppe drikkingen, ta munnen fra glasset eller
          justere grepet underveis.
        </li>
        <li class="pl-2">
          Når deltageren er ferdig, skal glasset settes rett ned på bordet uten
          risting, banking eller etterjustering.
        </li>
        <li class="pl-2">
          Det er kun nivået på ølet etter avsluttet drikkesekvens som teller.
        </li>
        <li class="pl-2">
          Dommeren måler vertikalt avvik i millimeter fra ølkantens nivå til den
          horisontale midtlinjen på «G»-en.
        </li>
        <li class="pl-2">
          Treff eksakt på midtlinjen gir 0 mm avvik.
        </li>
        <li class="pl-2">
          Avvik måles til nærmeste hele millimeter.
        </li>
        <li class="pl-2">
          Ved tvil om måling eller referansepunkt er det dommerens avgjørelse som
          gjelder.
        </li>
        <li class="pl-2">
          Søl på mer enn én spiseskje anses som grunnlag for diskvalifisering,
          etter dommerens vurdering.
        </li>
      </ul>

      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">
          Poeng &amp; rangering
        </h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">
            Deltagerne rangeres etter minste avvik i millimeter.
          </li>
          <li class="pl-2">
            Lavest mm-avvik gir flest poeng, høyest mm-avvik gir færrest poeng.
          </li>
          <li class="pl-2">
            Lik mm-avvik gir delt plassering.
          </li>
        </ul>
      </div>
    </div>

    <!-- Scoreboard -->
    <div class="mt-6">
      <h2 class="text-4xl font-bold text-gray-800 px-4">RESULTATER</h2>

      <GamesScoreboard only-show-game-key="split-the-g" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "~/components/TopRibbon.vue";
import GamesScoreboard from "~/components/GamesScoreboard.vue";

useSeoMeta({
  title: "Splitte «G»-en",
  description: "Dette er en bar-klassiker.",
  twitterTitle: "Splitte «G»-en",
  twitterDescription: "Dette er en bar-klassiker.",
  twitterImage:
    "https://olympiske-leker-2025.pages.dev/img/exercises/split-the-g-banner.png",
  twitterCard: "summary_large_image",
  ogTitle: "Splitte «G»-en",
  ogDescription: "Dette er en bar-klassiker.",
  ogImage:
    "https://olympiske-leker-2025.pages.dev/img/exercises/split-the-g-banner.png",
});
</script>
