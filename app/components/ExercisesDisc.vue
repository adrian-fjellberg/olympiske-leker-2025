<template>
  <a class="inline-block w-[90px] h-[98px] relative group focus:outline-none cursor-pointer">
    <div
      class="w-[90px] h-[45px] rounded-b-full border-t-8 box-content absolute bottom-0"
      :style="{ backgroundColor: bottomColor || '#005A9C', borderTopColor: bottomColor || '#005A9C' }"
    />
    <div
      class="w-[90px] h-[90px] rounded-full top-0 absolute group-active:top-1"
      :style="{ backgroundColor: color || '#0078D0' }"
    />
    <!-- Content slot -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-active:translate-y-[calc(-50%+4px)]">
      <slot/>
    </div>
  </a>
</template>

<script setup lang="ts">

defineProps<{
  color?: string;
  bottomColor?: string;
}>();

</script>
