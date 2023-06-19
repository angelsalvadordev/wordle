import { GameStatStateProps, localStorageUtil } from "./localStorage";

export const updateStats = (
  currentStats: GameStatStateProps,
  wonGame: boolean
) => {
  const newStats: GameStatStateProps = {
    ...currentStats,
    totalGames: currentStats.totalGames + 1,
    victories: wonGame ? currentStats.victories + 1 : currentStats.victories,
  };

  localStorageUtil.saveStats(newStats);
  return newStats;
};
