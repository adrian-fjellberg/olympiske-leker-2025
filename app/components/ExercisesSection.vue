<template>
  <div class="bg-[#C0E4FF]">
    <!-- Section Header -->
    <div class="flex items-center justify-center px-8 gap-4 pt-8">
      <div class="border-2 border-[#0051F4]/20 flex-1" />
      <div class="text-2xl">
        ØVELSER
      </div>
      <div class="border-2 border-[#0051F4]/20 flex-1" />
    </div>

    <!-- Info Text -->
    <div class="text-center mt-4 px-8 font-bold">
      Klikk på en av de seks diskene<br>
      nedenfor for å åpne øvelsen.
    </div>

    <!-- Exercises Area -->
    <div class="relative h-[calc(100vw-2rem)] min-h-[700px] max-h-[700px] overflow-hidden mt-10">
      <!-- Discs -->
      <ExercisesDisc href="/exercises/isror" color="#0078D0" bottom-color="#005A9C" class="!absolute top-0 left-[34%]">
        <img src="/img/exercises/dinking-straw.svg" class="w-24 h-24" >
      </ExercisesDisc>
      <ExercisesDisc to="/" color="#0078D0" bottom-color="#005A9C" class="!absolute top-[14%] left-[18%]">
        <img src="/img/exercises/split-the-g.svg" class="w-24 h-24" >
      </ExercisesDisc>
      <ExercisesDisc to="/" color="#F0282D" bottom-color="#AB0004" class="!absolute top-[30%] left-[10%]">
        <img src="/img/exercises/beer-pong.svg" class="w-24 h-24" >
      </ExercisesDisc>
      <ExercisesDisc to="/" color="#F0282D" bottom-color="#AB0004" class="!absolute top-[46%] left-[18%]">
        <img src="/img/exercises/running.svg" class="w-24 h-24" >
      </ExercisesDisc>
      <ExercisesDisc to="/" color="#FFB114" bottom-color="#A26C00" class="!absolute top-[62%] left-[30%]">
        <img src="/img/exercises/quiz.svg" class="w-24 h-24" >
      </ExercisesDisc>
      <ExercisesDisc to="/" color="#FFB114" bottom-color="#A26C00" class="!absolute top-[76%] left-[48%]">
        <img src="/img/exercises/pour.svg" class="w-24 h-24" >
      </ExercisesDisc>
      <!-- Gubban Character -->
      <img src="/img/gubban_on_ski.png" class="absolute w-[50%] right-4 top-[38%] pointer-events-none select-none translate-y-[-50%]">
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
