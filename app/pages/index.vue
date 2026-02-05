<<template>
  <div class="max-w-lg mx-auto md:border-l-2 md:border-r-2 border-gray-100 pb-32 min-h-screen">
    <!-- Top Ribbon -->
    <TopRibbon/>

<!--    <pre class="bg-gray-300 p-4 rounded my-4">{{ scoreboard }}</pre>-->

<!--    <pre class="bg-gray-300 p-4 rounded my-4">{{ config.config.value }}</pre>-->

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

    <!-- 🕒 Program Section -->
    <div class="p-4">
      <div class="flex items-center justify-center px-8 gap-4 pt-8 mb-8">
        <div class="border-2 border-black/10 flex-1" />
        <div class="text-2xl">
          PROGRAM
        </div>
        <div class="border-2 border-black/10 flex-1" />
      </div>

      <ul class="space-y-4">
        <li
          v-for="item in program"
          :key="item.time"
          class="flex gap-4 items-start"
        >
          <span class="font-mono font-semibold text-gray-700 w-16 shrink-0">
            {{ item.time }}
          </span>
          <div>
            <div class="text-gray-900">
              {{ item.title }}
            </div>
            <div class="text-sm text-gray-500">
              {{ relativeTime(item.time) }}
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Games Scoreboard Section -->
    <div class="p-2">
      <div class="flex items-center justify-center px-8 gap-4 pt-8 mb-8">
        <div class="border-2 border-black/10 flex-1" />
        <div class="text-2xl">
          STILLINGSPROGRAM
        </div>
        <div class="border-2 border-black/10 flex-1" />
      </div>

      <GamesScoreboard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { formatDistanceToNowStrict, set } from "date-fns";
import { nb } from "date-fns/locale";
import TopRibbon from "~/components/TopRibbon.vue";
import GamesScoreboard from "~/components/GamesScoreboard.vue";

const EVENT_DATE = new Date(2026, 1, 7); // 7 Feb 2026 (month is 0-based)

const program = [
  { time: "08:30", title: "Åpningssermoni" },
  { time: "09:00", title: "Isrør" },
  { time: "09:30", title: "Splitte G-en" },
  { time: "10:30", title: "Vi beveger oss ut til bakker og løyper" },
  { time: "12:30", title: "Oppmøte i skistua i alpinsenteret" },
  { time: "12:45", title: "Beer pong quicky" },
  { time: "13:15", title: "Beer run" },
  { time: "14:00", title: "Fritt vilt. Folk gjør som de vil." },
  { time: "18:45", title: "Oppmøte Nystølkroken Café" },
  { time: "19:00", title: "Middag" },
  { time: "19:45", title: "Quiz" },
  { time: "21:30", title: "Presisjonshelling" },
  { time: "22:00", title: "Vi returnerer til hytta" },
  { time: "22:30", title: "Pokalutdeling" },
];

const now = ref(new Date());
let timer: number;

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date();
  }, 60_000); // update every minute
});

onUnmounted(() => clearInterval(timer));

function getEventDate(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return set(EVENT_DATE, {
    hours,
    minutes,
    seconds: 0,
    milliseconds: 0,
  });
}

function relativeTime(time: string) {
  const date = getEventDate(time);

  return formatDistanceToNowStrict(date, {
    locale: nb,
    addSuffix: true,
  });
}
</script>
>
