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
      <p className="font-bold text-2xl dark:text-gray-4 block md:hidden">
        WORDLE
      </p>

      <div className="gap-2 items-center hidden md:flex">
        <div>
          <QuestionIcon
            classNames="cursor-pointer"
            onClick={() => setIntroModal(true)}
          />
        </div>
        <div className="w-[60px]" />
      </div>

      <p className="font-bold text-4xl dark:text-gray-4 hidden md:block">
        WORDLE
      </p>

      <div className="flex gap-2 items-center">
        <div className="block md:hidden">
          <QuestionIcon
            classNames="cursor-pointer"
            onClick={() => setIntroModal(true)}
          />
        </div>

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
            className={`${
              !darkMode
                ? "bg-[url('./assets/switch-body-light.png')] bg-no-repeat bg-cover"
                : "bg-[url('./assets/switch-body-dark.png')] bg-no-repeat bg-cover"
            }
          relative inline-flex items-center h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${!darkMode ? "translate-x-8" : "translate-x-1"}
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out bg-gradient-to-t ${
              !darkMode
                ? "from-sun-gradient-1 to-sun-gradient-2"
                : "from-moon-gradient-1 to-moon-gradient-2"
            } `}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
