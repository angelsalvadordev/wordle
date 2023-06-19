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
    <div className="bg-gray-4/[0.3] p-5 rounded-2xl">
      <div className="mb-1 flex justify-center gap-3">
        {firstRowKeyboard.map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keyStatuses[key]}
          />
        ))}
      </div>

      <div className="mb-1 flex justify-center gap-3 ml-8 mt-3">
        {secondRowKeyboard.map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={keyStatuses[key]}
          />
        ))}
      </div>

      <div className="mb-1 flex justify-center gap-3 mr-11 mt-3">
        <Key width={71} fontSize={15} value={enterKey.value} onClick={onClick}>
          {enterKey.text}
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
