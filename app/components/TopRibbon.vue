<template>
  <div class="relative border-b-2 border-gray-100 h-[70px] flex items-center justify-center">
    <button
      v-if="showBackButton"
      class="absolute left-1 top-1/2 -translate-y-1/2 p-4 rounded-full hover:bg-gray-100 flex items-center justify-center"
      @click="$router.back()"
      aria-label="Go back"
    >
      <Icon name="fa6-solid:arrow-left" class="w-5 h-5 text-gray-600" />
    </button>

    <router-link to="/">
      <img
        src="/img/olympiske_leker_2025_text_logo_horizontal.svg"
        alt="Ølympiske Leker 2025 Text Logo"
        class="h-[30px]"
      >
    </router-link>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  showBackButton?: boolean
}>();

</script>
