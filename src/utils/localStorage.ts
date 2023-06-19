export interface GameStateProps {
  guesses: string[];
  solution: string;
  timeToChange: string;
}

export interface GameStatStateProps {
  totalGames: number;
  victories: number;
}

const gameKey = "dd3Game";
const gameStatsKey = "dd3Stats";
const themeKey = "dd3Theme";

export const initialGame: GameStateProps = {
  guesses: [],
  solution: "",
  timeToChange: "",
};

export const initialStats: GameStatStateProps = {
  totalGames: 0,
  victories: 0,
};

const saveGame = (game: GameStateProps) => {
  localStorage.setItem(gameKey, JSON.stringify(game));
};

const getGame = (): GameStateProps => {
  const state = localStorage.getItem(gameKey);
  return state ? JSON.parse(state) : initialGame;
};

export const saveStats = (gameStats: GameStatStateProps) => {
  localStorage.setItem(gameStatsKey, JSON.stringify(gameStats));
};

export const getStats = (): GameStatStateProps => {
  const stats = localStorage.getItem(gameStatsKey);
  return stats ? JSON.parse(stats) : initialStats;
};

export const getTheme = (): string => {
  const localTheme = localStorage.getItem(themeKey);
  return localTheme || "";
};

export const saveTheme = (dark: boolean): void => {
  localStorage.setItem(themeKey, dark ? "dark" : "light");
};

export const localStorageUtil = {
  saveGame,
  getGame,
  saveStats,
  getStats,
  getTheme,
  saveTheme,
};
