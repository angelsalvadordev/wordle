import { FC } from "react";
import { LetterStatus } from "../../constants/status";

export interface LetterBoxProps {
  value?: string;
  status?: LetterStatus;
}

const statusMap = {
  [LetterStatus.FoundCorrect]: "bg-light-green border-light-green text-white",
  [LetterStatus.FoundIncorrect]: "bg-dark-yellow border-dark-yellow text-white",
  [LetterStatus.NotFound]: "bg-gray-5 border-gray-5 text-white",
  [LetterStatus.Default]: "bg-white border-black text-black",
};

const LetterBox: FC<LetterBoxProps> = ({
  value = "",
  status = LetterStatus.Default,
}) => {
  const initialStyle = "bg-gray-5/[0.3] border-gray-5/[0.1]";
  const statusFound = statusMap[status];
  const colors = value ? statusFound : initialStyle;

  return (
    <div
      className={`h-[75px] w-[76px] border inline-flex justify-center items-center rounded-md text-4xl font-extrabold ${colors}`}
    >
      {value?.toUpperCase()}
    </div>
  );
};

export default LetterBox;
