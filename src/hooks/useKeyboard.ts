import { useState } from "react";
import { MAX_TRIES } from "../constants/settings";
import { splitWord } from "../utils/words";

export interface UseKeyboardProps {
  attemptsMade: number;
  maxWordSize: number;
  wonGame: boolean;
  lostGame: boolean;
  onEnter: (value: string) => void;
}

const useKeyboard = ({
  attemptsMade,
  wonGame,
  maxWordSize,
  onEnter,
}: UseKeyboardProps) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handlePress = (value: string): void => {
    const newCurrentGuess = `${currentGuess}${value}`;
    const validKey =
      splitWord(newCurrentGuess)?.length <= maxWordSize &&
      MAX_TRIES > attemptsMade &&
      !wonGame;

    if (validKey) {
      setCurrentGuess(newCurrentGuess.toLocaleLowerCase());
    }
  };

  const handleDelete = (): void => {
    setCurrentGuess(splitWord(currentGuess).slice(0, -1).join(""));
  };

  const handleEnter = () => {
    const validGuess =
      splitWord(currentGuess)?.length === maxWordSize &&
      MAX_TRIES > attemptsMade &&
      !wonGame;

    if (validGuess) {
      onEnter(currentGuess);
      setCurrentGuess("");
    }
  };

  const clearCurrentGuest = () => setCurrentGuess("");

  return {
    handlePress,
    handleDelete,
    handleEnter,
    currentGuess,
    clearCurrentGuest,
  };
};

export default useKeyboard;
