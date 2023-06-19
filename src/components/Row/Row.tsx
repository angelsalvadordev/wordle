import { FC, useId } from "react";
import LetterBox from "../LetterBox/LetterBox";
import { validateGuess } from "../../utils/words";

export interface RowProps {
  guess?: string;
  solution?: string;
}

const Row: FC<RowProps> = ({ guess, solution }) => {
  const id = useId();
  const result = validateGuess(guess, solution);

  return (
    <div className="flex gap-3 mb-4">
      {result.map((letter, i) => (
        <LetterBox
          key={`${id}-${letter.value}-${i}`}
          value={letter?.value}
          status={letter.status}
        />
      ))}
    </div>
  );
};

export default Row;
