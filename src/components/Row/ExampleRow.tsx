import { FC } from "react";
import { splitWord } from "../../utils/words";
import LetterBox, { LetterBoxProps } from "../LetterBox/LetterBox";
import { LetterStatus } from "../../constants/status";

export interface ExampleRowProps {
  guess: string;
  letterExample: string;
  statusExample: LetterStatus;
}

const ExampleRow: FC<ExampleRowProps> = ({
  guess,
  letterExample,
  statusExample,
}) => {
  const result: LetterBoxProps[] = splitWord(guess).map((letter) => {
    if (letter === letterExample) {
      return {
        value: letter,
        status: statusExample,
      };
    }

    return {
      value: letter,
      status: LetterStatus.Default,
    };
  });

  return (
    <div className="flex gap-3 mb-4">
      {result.map((letter, i) => (
        <LetterBox
          key={`${letter.value}-${i}`}
          value={letter?.value}
          status={letter.status}
        />
      ))}
    </div>
  );
};

export default ExampleRow;
