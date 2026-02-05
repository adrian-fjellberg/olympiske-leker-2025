<template>
  <div class="max-w-lg mx-auto border-l-2 border-r-2 border-gray-100">
    <!-- Top Ribbon -->
    <div class="border-b-2 border-gray-100 h-[70px] flex items-center justify-center">
      <router-link to="/">
        <img
          src="/img/olympiske_leker_2026_logo_horizontal.svg"
          alt="Ølympiske Leker 2026 Text Logo"
          class="h-[30px]"
        >
      </router-link>
    </div>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center h-[calc(100vh-200px)] max-h-[400px] text-center px-4">
      <img src="/img/olympiske_leker_2026_logo_horizontal.svg" alt="Olympiske Leker 2026 Logo" class="w-32 mb-4">
      <h1 class="text-4xl font-bold mb-4">De Ølympiske<br>Leker 2026</h1>
    </div>

    <!-- Countdown Section -->
    <div class="p-4">
      <CountdownCard />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
