import { FC } from "react";
import Modal from "./Modal";
import { ModalProps } from "./Modal";
import Button from "../Button";
import Countdown from "react-countdown";
import Clock from "../Clock";
import { GameStatStateProps } from "../../utils/localStorage";

export type StatsModalProps = Omit<ModalProps, "children" | "title"> & {
  lostGame: boolean;
  timeToChange: Date;
  stats: GameStatStateProps;
  solution: string;
};

const StatsModal: FC<StatsModalProps> = ({
  openModal,
  handleClose,
  lostGame,
  timeToChange,
  stats,
  solution,
}) => {
  return (
    <Modal title="Estadísticas" openModal={openModal} handleClose={handleClose}>
      <div className="flex flex-col items-center">
        <div className="flex justify-between max-w-[375px] w-full gap-5">
          <div className="flex flex-col items-center">
            <p className="font-extrabold text-4xl mb-4 dark:text-white">
              {stats.totalGames}
            </p>
            <p className="text-xl dark:text-white">Jugadas</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-extrabold text-4xl mb-4 dark:text-white">
              {stats.victories}
            </p>
            <p className="text-xl dark:text-white">Victorias</p>
          </div>
        </div>

        {lostGame && (
          <p className="mb-4 mt-12 dark:text-white">
            La palabra era:{" "}
            <span className="font-bold text-lg dark:text-white">
              {solution}
            </span>
          </p>
        )}

        <div
          className={`flex flex-col items-center ${
            lostGame ? "mt-4" : "mt-14"
          } mb-9`}
        >
          <p className="mb-2 text-lg dark:text-white">SIGUIENTE PALABRA</p>
          <Countdown
            date={timeToChange}
            renderer={({ minutes, seconds }) => (
              <Clock minutes={minutes} seconds={seconds} />
            )}
          />
        </div>
      </div>

      <div className="text-center">
        <Button text="Aceptar" onClick={handleClose} color="green" />
      </div>
    </Modal>
  );
};

export default StatsModal;
