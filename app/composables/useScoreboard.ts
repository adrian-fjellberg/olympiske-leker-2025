
// export type MemberId = string;
//
// export enum RankingType {
//   POINTS_HIGHER_IS_BETTER = 'POINTS_HIGHER_IS_BETTER',
//   POINTS_LOWER_IS_BETTER = 'POINTS_LOWER_IS_BETTER',
//   TIME_LOWER_IS_BETTER = 'TIME_LOWER_IS_BETTER',
// }
//
// export type GameConfig = {
//   name: string;
//   rankingType: RankingType;
//   scoreboard: Record<MemberId, string>;
// }
//
// export type MemberInfo = {
//   id: MemberId;
//   name: string;
// }
//
// export type GamesConfig = {
//   members: MemberInfo[];
//   games: Record<string, GameConfig>;
// }

// A members score for a game is determined by the amount of contestants.
// If there are 10 contestants, the best score is 10 points, the second best is 9 points, and so on.
// If there are 5 contestants, the best score is 5 points, the second best is 4 points, and so on.

// We create a sort and score function for each game, and then we can use that to calculate the global scoreboard.

import type { GameConfig } from "~/composables/useConfig";
import useConfig from "~/composables/useConfig";

type ScoreInfo = {
  score: number;
  humanReadableResult: string;
}

function scorePointsGame(game: GameConfig) {
  const members = Object.keys(game.scoreboard);

  // Sort the scores based on the ranking type
  let sortedMembers: string[] = [];
  if (game.rankingType === 'POINTS_HIGHER_IS_BETTER') {
    sortedMembers = members.sort((a, b) => parseFloat(game.scoreboard[b] || '0') - parseFloat(game.scoreboard[a] || '0'));
  } else if (game.rankingType === 'POINTS_LOWER_IS_BETTER' || game.rankingType === 'TIME_LOWER_IS_BETTER') {
    sortedMembers = members.sort((a, b) => parseFloat(game.scoreboard[a] || '0') - parseFloat(game.scoreboard[b] || '0'));
  }

  // Assign points based on the sorted order
  const gameScoreboard: Record<string, ScoreInfo> = {};
  sortedMembers.forEach((memberId, index) => {
    gameScoreboard[memberId] = {
      score: members.length - index, // Higher rank gets more points
      humanReadableResult: game.scoreboard[memberId] || '0',
    };
  });

  return gameScoreboard;
}

function scoreTimeGame(game: GameConfig) {
  const members = Object.keys(game.scoreboard);

  // Sort the scores based on the ranking type
  let sortedMembers: string[] = [];
  if (game.rankingType === 'TIME_LOWER_IS_BETTER') {
    sortedMembers = members.sort((a, b) => parseFloat(game.scoreboard[a] || '0') - parseFloat(game.scoreboard[b] || '0'));
  }

  // Assign points based on the sorted order
  const gameScoreboard: Record<string, ScoreInfo> = {};

  sortedMembers.forEach((memberId, index) => {
    const timeInSeconds = parseFloat(game.scoreboard[memberId] || '0');
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const humanReadableTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    gameScoreboard[memberId] = {
      score: members.length - index, // Higher rank gets more points
      humanReadableResult: humanReadableTime,
    };
  });

  return gameScoreboard;
}

const rankingTypeToScoreFunction: Record<string, (game: GameConfig) => Record<string, ScoreInfo>> = {
  'POINTS_HIGHER_IS_BETTER': scorePointsGame,
  'POINTS_LOWER_IS_BETTER': scorePointsGame,
  'TIME_LOWER_IS_BETTER': scoreTimeGame,
}

const config = useConfig();

function calculateGlobalScoreboard(games: Record<string, GameConfig>) {
  const globalScoreboard: Record<string, ScoreInfo> = {};

  for (const gameName in games) {
    const game = games[gameName];
    if (!game) continue;
    const scoreFunction = rankingTypeToScoreFunction[game.rankingType];
    if (!scoreFunction) continue;
    const gameScoreboard = scoreFunction(game);

    for (const memberId in gameScoreboard) {
      if (!globalScoreboard[memberId]) {
        globalScoreboard[memberId] = { score: 0, humanReadableResult: '' };
      }

      const memberGameScore = gameScoreboard[memberId];
      if (!memberGameScore) continue;
      globalScoreboard[memberId].score += memberGameScore.score;
    }
  }

  return globalScoreboard;
}

const scoreboard = computed(() => {
  const gamesConfig = config.config.value?.games;

  if (!gamesConfig) {
    return {
      global: {},
      games: {},
    };
  }

  const games: Record<string, Record<string, ScoreInfo>> = {};

  for (const gameName in gamesConfig) {
    const game = gamesConfig[gameName];
    if (!game) continue;
    const scoreFunction = rankingTypeToScoreFunction[game.rankingType];

    if (!scoreFunction) continue;
    games[gameName] = scoreFunction(game);
  }

  const global = calculateGlobalScoreboard(gamesConfig);

  return {
    global,
    games,
  };
});

// Int the tables, we want to show the members, with their MemberInfo, and their score, sorted by score descending.
// It has the same structure as scoreboard, but with more info.

const tables = computed(() => {
  const membersInfo = config.config.value?.members || [];
  const membersMap: Record<string, { id: string; name: string }> = {};
  membersInfo.forEach(member => {
    membersMap[member.id] = member;
  });

  const createTable = (scoreboard: Record<string, ScoreInfo>) => {
    const table: Array<{ member: { id: string; name: string }; score: ScoreInfo }> = [];

    for (const memberId in scoreboard) {
      const memberInfo = membersMap[memberId];
      if (!memberInfo) continue;

      const memberScore = scoreboard[memberId];
      if (!memberScore) continue;

      table.push({
        member: memberInfo,
        score: memberScore,
      });
    }

    table.sort((a, b) => b.score.score - a.score.score);

    return table;
  };

  const globalTable = createTable(scoreboard.value.global);
  const gamesTables: Record<string, Array<{ member: { id: string; name: string }; score: ScoreInfo }>> = {};

  for (const gameName in scoreboard.value.games) {
    const scoreboardForGame = scoreboard.value.games[gameName];
    if (!scoreboardForGame) continue;
    gamesTables[gameName] = createTable(scoreboardForGame);
  }

  return {
    global: globalTable,
    games: gamesTables,
  };
});

function useScoreboard() {
  return {
    scoreboard,
    tables,
  };
}

export default useScoreboard;
