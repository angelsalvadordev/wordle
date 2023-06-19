import { FC } from "react";
import Modal, { ModalProps } from "./Modal";
import Button from "../Button";
import ExampleRow from "../Row/ExampleRow";
import {
  firstGuessExample,
  firstGuessLetterExample,
  secondGuessExample,
  secondGuessLetterExample,
  thirdGuessExample,
  thirdGuessLetterExample,
} from "../../constants/examples";
import { LetterStatus } from "../../constants/status";

type IntroModalProps = Omit<ModalProps, "title" | "children">;

const IntroModal: FC<IntroModalProps> = ({ openModal, handleClose }) => {
  return (
    <Modal title="Cómo jugar" openModal={openModal} handleClose={handleClose}>
      <p className="text-lg text-black dark:text-white mb-4">
        Adivina la palabra oculta en cinco intentos.
      </p>

      <p className="text-lg text-black dark:text-white mb-4">
        Cada intento debe ser una palabra válida de 5 letras.
      </p>

      <p className="text-lg text-black dark:text-white mb-4">
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>

      <p className="text-lg text-black font-bold dark:text-white mb-4">
        Ejemplos
      </p>

      <ExampleRow
        guess={firstGuessExample}
        letterExample={firstGuessLetterExample}
        statusExample={LetterStatus.FoundCorrect}
      />

      <p className="text-lg text-black dark:text-white mb-4">
        La letra <strong>G</strong> está en la palabra y en la posición
        correcta.
      </p>

      <ExampleRow
        guess={secondGuessExample}
        letterExample={secondGuessLetterExample}
        statusExample={LetterStatus.FoundIncorrect}
      />

      <p className="text-lg text-black dark:text-white mb-4">
        La letra <strong>C</strong> está en la palabra pero en la posición
        incorrecta. correcta.
      </p>

      <ExampleRow
        guess={thirdGuessExample}
        letterExample={thirdGuessLetterExample}
        statusExample={LetterStatus.NotFound}
      />

      <p className="text-lg text-black dark:text-white mb-6">
        La letra <strong>O</strong> no está en la palabra.
      </p>

      <p className="text-lg text-black dark:text-white mb-8">
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>

      <p className="text-lg text-center text-black dark:text-white mb-4">
        ¡Una palabra nueva cada 5 minutos!
      </p>

      <div className="text-center">
        <Button text="¡JUGAR!" onClick={handleClose} color="green" />
      </div>
    </Modal>
  );
};

export default IntroModal;
