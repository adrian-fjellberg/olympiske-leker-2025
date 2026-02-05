<template>
  <!-- Global Scoreboard -->
  <section
    v-if="!onlyShowGameKey"
    class="mb-6 pattern px-6 py-8"
  >
    <h2 class="text-2xl text-center font-semibold mb-8 text-white">🏆 Korktavle</h2>

    <!-- Subtitle -->
    <p class="text-center text-sm text-white/90 mb-6">
      Her ser du den totale poengstillingen basert på alle spillene. For detaljerte resultater, sjekk ut spillspesifikke tavler nedenfor.
    </p>

    <ul class="space-y-2">
      <li
        v-for="(row, index) in scoreboard.tables.value.global"
        :key="row.member.id"
        class="flex items-center justify-between bg-white/90 rounded-lg shadow-sm px-3 py-2"
      >
        <!-- Rank + Name -->
        <div class="flex items-center gap-3">
          <div class="w-6 text-center font-bold text-gray-500">
            {{ index + 1 }}
          </div>
          <div class="font-medium">
            {{ row.member.name }}
          </div>
        </div>

        <!-- Score -->
        <div class="text-lg font-bold">
          {{ row.score.score }}
          <span class="text-sm font-normal text-gray-500">korker</span>
        </div>
      </li>
    </ul>
  </section>

  <!-- Game Scoreboards -->
  <section
    v-if="config.config.value"
    class="space-y-6"
  >
    <div
      v-for="(rows, gameKey) in scoreboard.tables.value.games"
      :key="gameKey"
      class="px-4"
    >
      <section
        v-if="config.config.value.games[gameKey] && (!onlyShowGameKey || onlyShowGameKey === gameKey)"
        class="bg-gray-100 rounded-xl p-3"
      >
        <!-- Game header -->
        <div class="mb-3">
          <h3 class="font-semibold text-base">
            {{ config.config.value.games[gameKey].name }}
          </h3>
          <p class="text-xs text-gray-500">
            <span v-if="config.config.value.games[gameKey].rankingType === RankingType.POINTS_HIGHER_IS_BETTER">
              📈 Høyest poengsum vinner
            </span>
            <span v-if="config.config.value.games[gameKey].rankingType === RankingType.POINTS_LOWER_IS_BETTER">
              📉 Lavest poengsum vinner
            </span>
            <span v-if="config.config.value.games[gameKey].rankingType === RankingType.TIME_LOWER_IS_BETTER">
              ⏱️ Raskest tid vinner
            </span>
          </p>
        </div>

        <!-- Results -->
        <ul class="space-y-2">
          <li
            v-for="(row, index) in rows"
            :key="row.member.id"
            class="flex items-center justify-between bg-white rounded-lg px-3 py-2"
          >
            <!-- Rank + name -->
            <div class="flex items-center gap-3">
              <div class="w-6 text-center text-sm font-semibold text-gray-500">
                {{ index + 1 }}
              </div>
              <div class="text-sm font-medium">
                {{ row.member.name }}
              </div>
            </div>

            <!-- Result + points -->
            <div class="text-right">
              <div class="text-sm font-semibold">
                {{ row.score.humanReadableResult }}
                <span v-if="config.config.value.games[gameKey].unit">
                  {{ config.config.value.games[gameKey].unit }}
                </span>
              </div>
              <div class="text-xs text-gray-500">
                {{ row.score.score }} korker
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>

import type { RankingType } from "~/composables/useConfig";
import useConfig from "~/composables/useConfig";
import useScoreboard from "~/composables/useScoreboard";

const scoreboard = useScoreboard();
const config = useConfig();

defineProps<{
  onlyShowGameKey?: string;
}>();

</script>

<style scoped>
.pattern {
  background-image: url("/img/pattern_black.png");
}
</style>
