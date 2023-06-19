import { Dispatch, FC, SetStateAction } from "react";
import QuestionIcon from "../Icons/QuestionIcon";
import StatsIcon from "../Icons/StatsIcon";
import { Switch } from "@headlessui/react";

export interface NavbarProps {
  setIntroModal: Dispatch<SetStateAction<boolean>>;
  setStatsModal: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  toggleDarkMode: (dark: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({
  setIntroModal,
  setStatsModal,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-2 dark:bg-gray-4/[.03] w-full max-w-[638px] px-5 py-5 rounded-2xl">
      <div className="flex gap-2 items-center">
        <div>
          <QuestionIcon
            classNames="cursor-pointer"
            onClick={() => setIntroModal(true)}
          />
        </div>
        <div className="w-[60px]" />
      </div>

      <p className="font-bold text-4xl dark:text-gray-4">WORDLE</p>
      <div className="flex gap-2 items-center">
        <div>
          <StatsIcon
            classNames="cursor-pointer"
            onClick={() => setStatsModal(true)}
          />
        </div>
        <div>
          <Switch
            checked={!darkMode}
            onChange={(toggle) => toggleDarkMode(!toggle)}
            className={`${!darkMode ? "bg-gray-5" : "bg-gray-5"}
          relative inline-flex items-center h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${!darkMode ? "translate-x-8" : "translate-x-1"}
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
