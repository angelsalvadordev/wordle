import { FC } from "react";
import { LetterStatus } from "../../constants/status";

export interface LetterBoxProps {
  value?: string;
  status?: LetterStatus;
}

const statusMap = {
  [LetterStatus.FoundCorrect]:
    "bg-light-green border-light-green text-white dark:bg-light-green",
  [LetterStatus.FoundIncorrect]: "bg-dark-yellow border-dark-yellow text-white",
  [LetterStatus.NotFound]: "bg-gray-5 border-gray-5 text-white",
  [LetterStatus.Default]:
    "bg-white border-black text-black dark:bg-dark-blue dark:text-white dark:border-gray-5",
};

const LetterBox: FC<LetterBoxProps> = ({
  value = "",
  status = LetterStatus.Default,
}) => {
  const initialStyle =
    "bg-gray-5/[0.3] border-gray-5/[0.1] dark:bg-gray-5/[0.2] dark:border-gray-5/[0.1]";
  const statusFound = statusMap[status];
  const colors = value ? statusFound : initialStyle;

  return (
    <div
      className={`w-14 h-14 md:h-[75px] md:w-[76px] border inline-flex justify-center items-center rounded-md text-4xl font-extrabold ${colors}`}
    >
      {value?.toUpperCase()}
    </div>
  );
};

export default LetterBox;
