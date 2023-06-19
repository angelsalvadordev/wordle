import { FC, ReactNode } from "react";
import { LetterStatus } from "../../constants/status";

export interface KeyProps {
  children?: ReactNode;
  value: string;
  status?: LetterStatus;
  width?: number;
  fontSize?: number;
  onClick: (value: string) => void;
  hasShowed?: boolean;
}

const statusMap = {
  [LetterStatus.FoundCorrect]: "bg-dark-green border-dark-green text-white",
  [LetterStatus.FoundIncorrect]: "bg-dark-yellow border-dark-yellow text-white",
  [LetterStatus.NotFound]: "bg-gray-7 border-gray-7 text-white",
  [LetterStatus.Default]:
    "bg-gray-3 border-gray-3 text-gray-6 dark:bg-light-blue dark:border-light-blue dark:text-white",
};

const Key: FC<KeyProps> = ({
  children,
  value,
  status = LetterStatus.Default,
  width = 45,
  fontSize = 18,
  onClick,
}) => {
  const handleClick = () => onClick(value);
  const statusFound = statusMap[status];

  return (
    <button
      style={{ width, fontSize }}
      className={`min-w-[32px] px-2 w-full h-[50px] border flex justify-center items-center rounded-md font-[700] hover:brightness-[0.95] ${statusFound}`}
      onClick={handleClick}
    >
      {children || value.toLocaleUpperCase()}
    </button>
  );
};

export default Key;
