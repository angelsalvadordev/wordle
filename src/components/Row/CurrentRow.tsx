import { FC } from "react";
import { splitWord } from "../../utils/words";
import { SOLUTION_SIZE } from "../../constants/settings";
import LetterBox from "../LetterBox/LetterBox";

export interface CurrentRowProps {
  guess: string;
  className: string;
}

const CurrentRow: FC<CurrentRowProps> = ({ guess, className }) => {
  const wordSplitted = splitWord(guess);
  const emptyBoxes = Array.from(Array(SOLUTION_SIZE - wordSplitted.length));

  return (
    <div className={`flex gap-3 mb-4 ${className}`}>
      {wordSplitted.map((letter, i) => (
        <LetterBox key={i} value={letter} />
      ))}
      {emptyBoxes.map((_, i) => (
        <LetterBox key={i} />
      ))}
    </div>
  );
};

export default CurrentRow;
