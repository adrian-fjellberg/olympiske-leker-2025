<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon :show-back-button="true"/>

    <!-- Banner -->
    <div>
      <img src="/img/exercises/quiz-banner.png" alt="Beer Pong!" class="w-full"/>
      <div class="bg-[#FFB114] flex items-center px-6 py-4">
        <div class="bg-black/25 rounded-full h-16 w-16 mr-4 flex items-center justify-center">
          <img src="/img/exercises/quiz.svg" alt="Beer Pong" class="h-8 w-8 mx-auto my-2"/>
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">Quiz-time</h1>
          <p class="text-white/90"></p>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="text-xl p-4">
      <p class="mb-4">
        De lærde strides om quiz egentlig hører hjemme på pub siden det ikke er helt forenelig med en hjerne dunket i alkohol. Uansett skal vi i dag skal komme til buns i hvor godt en bedugget Ølgubbe greier å svare for seg i alkoholisert tilstand. Vi kjører quiz!      </p>
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
        <li class="pl-2">En deltager blir valgt til Quizmaster under konsensus fra alle de andre deltagerne om å være den som minst sansyneligvis vill jukse på quiz.</li>
        <li class="pl-2">Quizmaster kaster en terning for å velge et tilfeldig tema fra quizboken som blir utdelt. Quizmaster kan kaste flere ganger for å lande for å summere opp et tall som samsvarer med et sidetall i boken.</li>
        <li class="pl-2">Det kjøres tre runder med forskjellige tema. Quizmaster velger nytt tema før hver runde.</li>
        <li class="pl-2">Deltagerene skriver ned svaret sine på et ark når rundene pågår.</li>
        <li class="pl-2">Delagerene viser frem arket sitt forran seg når hver runde er ferdig og quizmaster leser opp riktig svar. Deltagerene retter seg selv og leverer inn arkene til quizmaster.</li>
        <li class="pl-2">Quizmaster med en utvalgt assistent ser over arkene etter rundene for å telle opp poeng.</li>
        <li class="pl-2">Et riktig svar gir 5 poeng. Et riktig svar "under tvil" etter dommerens bedømmelse gir 2 poeng.</li>
      </ul>
      <!-- Points & ranking -->
      <div class="mt-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">Poeng & Rangering</h3>
        <ul class="list-disc list-outside pl-4 space-y-2 text-gray-700">
          <li class="pl-2">Deltagerne rangeres etter poeng, hvor flest poeng er best.</li>
          <li class="pl-2">Dommer står fritt til å diskvalifisiere en detlager etter gjentatte forsøk på juks. Diskvalifisering gir null poeng på øvelsen.</li>
        </ul>
      </div>
    </div>

    <!-- Scoreboard -->
    <div class="mx-4 mt-6">
      <h2 class="text-4xl font-bold text-gray-800">RESULTATER</h2>

      <GamesScoreboard only-show-game-key="quiz" />
    </div>
  </div>
</template>

<script setup lang="ts">

import TopRibbon from "~/components/TopRibbon.vue";
import GamesScoreboard from "~/components/GamesScoreboard.vue";

useSeoMeta({
  title: 'Quiz-time',
  description: 'Quiz-time er en klassisk øvelse hvor deltagerne skal svare på spørsmål fra en quizbok. Quizmaster velges ut og kaster terning for å velge tema og spørsmål. Deltagerne skriver ned svarene sine, og poeng gis basert på riktige svar. Det kjøres tre runder, og den med flest poeng vinner!',
  twitterTitle: 'Quiz-time',
  twitterDescription: 'Quiz-time er en klassisk øvelse hvor deltagerne skal svare på spørsmål fra en quizbok. Quizmaster velges ut og kaster terning for å velge tema og spørsmål. Deltagerne skriver ned svarene sine, og poeng gis basert på riktige svar. Det kjøres tre runder, og den med flest poeng vinner!',
  twitterImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/quiz-banner.png',
  twitterCard: 'summary_large_image',
  ogTitle: 'Quiz-time',
  ogDescription: 'Quiz-time er en klassisk øvelse hvor deltagerne skal svare på spørsmål fra en quizbok. Quizmaster velges ut og kaster terning for å velge tema og spørsmål. Deltagerne skriver ned svarene sine, og poeng gis basert på riktige svar. Det kjøres tre runder, og den med flest poeng vinner!',
  ogImage: 'https://olympiske-leker-2025.pages.dev/img/exercises/quiz-banner.png',
});

</script>
