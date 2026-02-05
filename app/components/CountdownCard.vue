<template>
  <div class="bg-[#0078D0] rounded-lg border-b-4 border-black/50 p-4 text-center text-white flex flex-col items-center">
    <h2 class="font-inter font-bold text-white/80 mb-1">{{ fullDate }}</h2>
    <!-- Countdown display -->
    <div
      class="flex"
      v-if="!hasStarted || loading"
    >
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold">{{ timeLeft.days }}</div>
        <div class="font-inter text-white/90 text-sm font-bold">Dager</div>
      </div>
      <div>
        <span class="text-4xl font-bold">:</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold">{{ timeLeft.hours }}</div>
        <div class="font-inter text-white/90 text-sm font-bold">Timer</div>
      </div>
      <div>
        <span class="text-4xl font-bold">:</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold">{{ timeLeft.hours }}</div>
        <div class="font-inter text-white/90 text-sm font-bold">Min.</div>
      </div>
      <div>
        <span class="text-4xl font-bold">:</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold">{{ timeLeft.seconds }}</div>
        <div class="font-inter text-white/90 text-sm font-bold">Sek.</div>
      </div>
    </div>
    <!-- Message when countdown has started -->
    <div
      class="text-2xl font-bold h-[60px] flex items-center justify-center"
      v-else
    >
      Lekene har startet!
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns';

let timer;

const targetDate = new Date('2026-02-07T07:00:00Z');
const timeLeft = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
});
const loading = ref(true);

const fullDate = format(targetDate, 'd MMMM yyyy HH:mm');

const hasStarted = computed(() => {
  return timeLeft.value.days === '00' && timeLeft.value.hours === '00' && timeLeft.value.minutes === '00' && timeLeft.value.seconds === '00';
});

function updateTimeLeft() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    timeLeft.value.days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    timeLeft.value.hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    timeLeft.value.minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
    timeLeft.value.seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
  } else {
    clearInterval(timer);
    timeLeft.value = { days: '00', hours: '00', minutes: '00', seconds: '00' };
  }

  loading.value = false;
}

onMounted(() => {
  updateTimeLeft();
  timer = setInterval(updateTimeLeft, 1000);
});

</script>
