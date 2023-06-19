import { Dispatch, FC, SetStateAction } from "react";
import QuestionIcon from "../Icons/QuestionIcon";
import StatsIcon from "../Icons/StatsIcon";

export interface NavbarProps {
  setIntroModal: Dispatch<SetStateAction<boolean>>;
  setStatsModal: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ setIntroModal, setStatsModal }) => {
  return (
    <div className="flex items-center justify-between bg-gray-2 dark:bg-gray-4/[.03] w-full max-w-[638px] px-5 py-5 rounded-2xl">
      <div>
        <QuestionIcon
          classNames="cursor-pointer"
          onClick={() => setIntroModal(true)}
        />
      </div>

      <p className="font-bold text-4xl">WORDLE</p>

      <div>
        <StatsIcon
          classNames="cursor-pointer"
          onClick={() => setStatsModal(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
