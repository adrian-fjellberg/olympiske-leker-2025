
const GIST_URL = 'https://gist.githubusercontent.com/adrian-fjellberg/c6e7846cdadc3f751927a4612cf611e8/raw/config.json';

export type MemberId = string;

export enum RankingType {
  POINTS_HIGHER_IS_BETTER = 'POINTS_HIGHER_IS_BETTER',
  POINTS_LOWER_IS_BETTER = 'POINTS_LOWER_IS_BETTER',
  TIME_LOWER_IS_BETTER = 'TIME_LOWER_IS_BETTER',
}

export type GameConfig = {
  name: string;
  rankingType: RankingType;
  unit?: string;
  scoreboard: Record<MemberId, string>;
}

export type MemberInfo = {
  id: MemberId;
  name: string;
}

export type GamesConfig = {
  members: MemberInfo[];
  games: Record<string, GameConfig>;
}

const dummyConfig = {
  members: [
    { id: '1', name: 'Adrian' },
    { id: '2', name: 'Tommy' },
    { id: '3', name: 'Sondre' },
    { id: '4', name: 'Chris' },
    { id: '5', name: 'Hoffar' },
    { id: '6', name: 'Simen V' },
    { id: '7', name: 'Håkon' },
    { id: '8', name: 'Emil' },
  ],
  games: {
    'isror': {
      name: 'Is-rør',
      rankingType: RankingType.TIME_LOWER_IS_BETTER,
      scoreboard: {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
      },
    },
    'split-the-g': {
      name: 'Splitte "G"-en',
      rankingType: RankingType.POINTS_LOWER_IS_BETTER,
      unit: 'mm',
      scoreboard: {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
      },
    },
    'beer-pong': {
      name: 'Beerpong quicky!',
      rankingType: RankingType.POINTS_HIGHER_IS_BETTER,
      unit: 'poeng',
      scoreboard: {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
      },
    },
    'beer-run': {
      name: '"A quick beer run"',
      rankingType: RankingType.TIME_LOWER_IS_BETTER,
      scoreboard: {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
      },
    },
    'quiz': {
      name: 'Quiz-time',
      rankingType: RankingType.POINTS_HIGHER_IS_BETTER,
      unit: 'poeng',
      scoreboard: {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
      },
    },
    'pour': {
      name: 'Presisjonshelling',
      rankingType: RankingType.POINTS_LOWER_IS_BETTER,
      unit: 'g',
      scoreboard: {
        '1': '0',
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
      },
    },
  },
};

let intervalId: number | null = null;
const config = ref<GamesConfig | null>(null);

async function fetchConfig() {
  // TODO: We use the dummy config for now, but we should fetch it from the Gist in production
  config.value = dummyConfig;
  return;

  try {
    const response = await fetch(GIST_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    config.value = JSON.parse(text);
  } catch (error) {
    console.error('Failed to fetch config:', error);
  }
}

async function startPollingConfig() {
  if (intervalId !== null) return; // Prevent multiple intervals
  await fetchConfig(); // Initial fetch
  intervalId = setInterval(fetchConfig, 5000);
}

function useConfig() {
  onMounted(() => {
    startPollingConfig();
  });

  return {
    config,
  };
}

export default useConfig;
