import { FC } from "react";
import Key from "../Key";
import { validateKeyStatuses } from "../../utils/words";
import {
  deleteKey,
  enterKey,
  firstRowKeyboard,
  secondRowKeyboard,
  thirdRowKeyboard,
} from "../../constants/keyboard";
import DeleteIcon from "../Icons/DeleteIcon";

export interface KeyboardProps {
  onPress: (value: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  solution: string;
  guesses: string[];
  isRevealing?: boolean;
}

const Keyboard: FC<KeyboardProps> = ({
  guesses,
  solution,
  onEnter,
  onDelete,
  onPress,
}) => {
  const keyStatuses = validateKeyStatuses(guesses, solution);

  const onClick = (value: string): void => {
    if (value === "ENTER") {
      return onEnter();
    }

    if (value === "DELETE") {
      return onDelete();
    }

    onPress(value);
  };

  return (
    <div className="md:bg-gray-4/[0.3] w-full md:w-auto md:p-5 rounded-2xl md:dark:bg-gray-4/[.03]">
      <div className="mb-1 flex justify-center gap-1 md:gap-3">
        {firstRowKeyboard.map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keyStatuses[key]}
          />
        ))}
      </div>

      <div className="mb-1 flex justify-center gap-1 md:gap-3 mt-1 md:ml-8 md:mt-3">
        {secondRowKeyboard.map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keyStatuses[key]}
          />
        ))}
      </div>

      <div className="mb-1 flex justify-center gap-1 md:gap-3 mt-1 md:mr-11 md:mt-3">
        <Key width={71} fontSize={15} value={enterKey.value} onClick={onClick}>
          <span className="text-xs md:text-sm">{enterKey.text}</span>
        </Key>

        {thirdRowKeyboard.map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keyStatuses[key]}
          />
        ))}

        <Key width={71} value={deleteKey.value} onClick={onClick}>
          <DeleteIcon />
        </Key>
      </div>
    </div>
  );
};

export default Keyboard;
