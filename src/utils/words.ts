import { LetterBoxProps } from "../components/LetterBox/LetterBox";
import { wordList } from "../constants/list";
import { LetterStatus } from "../constants/status";
import { getNextWordDate } from "./date";
import { localStorageUtil } from "./localStorage";

export const splitWord = (word: string) => word?.split("");

export const validateGuess = (guess = "", solution = ""): LetterBoxProps[] => {
  const guessSplitted = splitWord(guess);
  const solutionSplitted = splitWord(solution);

  const result = guessSplitted.map((letter, i) => {
    if (letter === solutionSplitted[i]) {
      return {
        value: letter,
        status: LetterStatus.FoundCorrect,
      };
    }

    if (solutionSplitted.includes(letter)) {
      return {
        value: letter,
        status: LetterStatus.FoundIncorrect,
      };
    }

    return {
      value: letter,
      status: LetterStatus.NotFound,
    };
  });

  return result;
};

export const transformToExample = (wordData: LetterBoxProps[]) => {
  return wordData.map((data) => {
    if (data.status === LetterStatus.NotFound) {
      return { ...data, status: LetterStatus.Default };
    }

    return data;
  });
};

export const validateKeyStatuses = (
  guesses: string[],
  solution: string
): { [key: string]: LetterStatus } => {
  const lettersMap: { [key: string]: LetterStatus } = {};

  const solutionSplitted = splitWord(solution);

  guesses.forEach((word) => {
    splitWord(word).forEach((letter, i) => {
      if (!solutionSplitted.includes(letter)) {
        return (lettersMap[letter] = LetterStatus.NotFound);
      }

      if (letter === solutionSplitted[i]) {
        return (lettersMap[letter] = LetterStatus.FoundCorrect);
      }

      if (lettersMap[letter] !== LetterStatus.FoundCorrect) {
        return (lettersMap[letter] = LetterStatus.FoundIncorrect);
      }
    });
  });

  return lettersMap;
};

export const getSolution = () => {
  const nextWordDate = getNextWordDate();
  const currentSolution = localStorageUtil.getGame().solution;
  let wordIndex = 0;
  let solution = "";

  do {
    wordIndex = Math.floor(Math.random() * 100);
    solution = wordList[wordIndex];
  } while (currentSolution === solution);

  return {
    solution,
    nextWordDate,
  };
};

export const { solution, nextWordDate } = getSolution();
