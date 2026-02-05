<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon/>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center h-[calc(100vh-200px)] max-h-[400px] text-center px-4">
      <img src="/img/olympiske_leker_2025_logo_horizontal.svg" alt="Olympiske Leker 2025 Logo" class="w-32 mb-4">
      <h1 class="text-4xl font-bold mb-4">De Ølympiske<br>Leker 2025</h1>
    </div>

    <!-- Countdown Section -->
    <div class="p-4">
      <CountdownCard/>
    </div>

    <!-- Intro section -->
    <div class="p-4 text-lg">
      <h3 class="font-bold mb-2">Velkommen til Ølympiske Leker 2026</h3>

      <p>
        Én gang i året leggir fornuften igjen hjemme, og en gjeng på 11 godt voksne mannfolk setter kursen mot Nesbyen
        for det som har blitt en høyt elsket tradisjon: hyttetur med Ølympiske Leker. I år er vi 8 tapre sjeler som
        faktisk stiller til start, klare for ære, heder, og en svært ettertraktet vandrepokal.
      </p>
    </div>

    <!-- Banner -->
    <div class="my-8">
      <img src="/img/gubban_banner.svg" alt="Banner" class="w-full">
    </div>

    <!-- Info section -->
    <div class="p-4">
      <p class="mb-4">
        Ølympiske Leker 2026 går av stabelen lørdag 7. februar, med første startskudd allerede kl. 08:30. Dagen byr på
        seks øvelser fordelt over tre arenaer: hytta, skibakken og middagsbordet. Her testes deltagerne i alt fra
        presisjon og kondis til selvkontroll, dømmekraft og evnen til å late som om man fortsatt har full kontroll.
      </p>
      <p class="mb-4">
        Vi starter i lune omgivelser på hytta med klassiske disipliner som setter standarden tidlig. Vi beveger oss så
        videre til skianlegget, hvor både ferdigheter og verdighet utfordres ytterligere. Når mørket senker seg og
        energinivået er… variabelt, samles vi til middag på Løa hos Nystølkroken Kafé. Her fullføres lekene med quiz,
        presisjon og tunge avgjørelser, før dagens vinner kåres og vandrepokalen skifter eier.
      </p>
      <p class="mb-4">
        Ølympiske Leker handler ikke om å vinne. Det handler om å delta (drikke). Og om å vinne. Mest om å vinne. Måtte
        den beste Gubben seire!
      </p>
      <p class="mb-4">
        Skål, og lykke til 🍺
      </p>
    </div>

    <!-- Øvelser Section -->
    <ExercisesSection />
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "~/components/TopRibbon.vue";
</script>
