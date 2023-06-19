import { FC } from "react";
import { MAX_TRIES } from "../../constants/settings";
import CurrentRow from "../Row/CurrentRow";
import EmptyRow from "../Row/EmptyRow";
import Row from "../Row/Row";

export interface GameGridProps {
  guesses: string[];
  solution: string;
  currentGuess: string;
}

const GameGrid: FC<GameGridProps> = ({ guesses, solution, currentGuess }) => {
  const emptiesRows =
    guesses.length < MAX_TRIES
      ? Array.from(Array(MAX_TRIES - 1 - guesses.length))
      : [];

  return (
    <>
      {guesses.map((guess, i) => (
        <Row key={i} guess={guess} solution={solution} />
      ))}

      {MAX_TRIES > guesses.length && <CurrentRow guess={currentGuess} />}

      {emptiesRows.map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </>
  );
};

export default GameGrid;
