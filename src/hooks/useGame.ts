import { useEffect, useState } from "react";
import { localStorageUtil } from "../utils/localStorage";
import { MAX_TRIES } from "../constants/settings";
import { updateStats } from "../utils/stats";
import { solution, nextWordDate, getSolution, splitWord } from "../utils/words";
import { isAfterDate } from "../utils/date";

const localGameState = localStorageUtil.getGame();
const localStatsState = localStorageUtil.getStats();

const useGame = () => {
  const [currentSolution, setCurrentSolution] = useState(
    localGameState.solution || solution
  );
  const [invalidCurrentRow, setInvalidCurrentRow] = useState(false);
  const [timeToChange, setTimeToChange] = useState(
    localGameState.timeToChange && !isAfterDate(localGameState.timeToChange)
      ? localGameState.timeToChange
      : nextWordDate
  );
  const [guesses, setGuesses] = useState(localGameState.guesses);
  const [wonGame, setWonGame] = useState(false);
  const [lostGame, setLostGame] = useState(false);
  const [stats, setStats] = useState(localStatsState);

  const addGuess = (guess: string, clearInput: () => void): void => {
    if (MAX_TRIES < guesses.length) return;

    if (wonGame || lostGame) return;

    if (splitWord(guess)?.length < solution.length) {
      if (invalidCurrentRow) return;

      setInvalidCurrentRow(true);
      setTimeout(() => {
        setInvalidCurrentRow(false);
      }, 500);

      return;
    }

    clearInput();
    const newGuesses = [...guesses, guess];

    if (guess === currentSolution) {
      setStats((prevState) => updateStats(prevState, true));
      setWonGame(true);
    }

    if (newGuesses.length === MAX_TRIES && !wonGame) {
      setStats((prevState) => updateStats(prevState, false));
      setLostGame(true);
    }

    setGuesses(newGuesses);
  };

  const resetGame = (): void => {
    setGuesses([]);
    setWonGame(false);
    setLostGame(false);

    const { solution: newSolutiion, nextWordDate: newNextWordDate } =
      getSolution();
    setCurrentSolution(newSolutiion);
    setTimeToChange(newNextWordDate);

    localStorageUtil.saveGame({
      guesses: [],
      solution: newSolutiion,
      timeToChange: newNextWordDate,
    });
  };

  useEffect(() => {
    if (localGameState.guesses.includes(currentSolution)) {
      setWonGame(true);
    }

    if (localGameState.guesses.length === MAX_TRIES && !wonGame) {
      setLostGame(true);
    }
  }, [currentSolution, wonGame]);

  return {
    guesses,
    setGuesses,
    wonGame,
    lostGame,
    addGuess,
    solution: currentSolution,
    stats,
    timeToChange,
    resetGame,
    invalidCurrentRow,
  };
};

export default useGame;
