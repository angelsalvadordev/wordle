import { useEffect, useState } from "react";
import IntroModal from "./components/Modals/IntroModal";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard";
import useKeyboard from "./hooks/useKeyboard";
import { localStorageUtil } from "./utils/localStorage";
import useGame from "./hooks/useGame";
import StatsModal from "./components/Modals/StatsModal";
import "./App.css";
import Countdown from "react-countdown";

function App() {
  const localGameState = localStorageUtil.getGame();
  const [openIntroModal, setOpenIntroModal] = useState(false);
  const [openStatsModal, setOpenStatsModal] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const {
    guesses,
    addGuess,
    solution,
    wonGame,
    lostGame,
    timeToChange,
    resetGame,
    stats,
  } = useGame();

  const {
    handlePress,
    handleDelete,
    handleEnter,
    currentGuess,
    clearCurrentGuest,
  } = useKeyboard({
    attemptsMade: guesses.length,
    maxWordSize: solution.length,
    wonGame,
    lostGame,
    onEnter: addGuess,
  });

  const handleResetGame = () => {
    resetGame();
    clearCurrentGuest();
    setOpenIntroModal(false);
    setOpenStatsModal(false);
    setResetKey((prevState) => prevState + 1);
  };

  useEffect(() => {
    localStorageUtil.saveGame({
      guesses,
      solution,
      timeToChange,
    });
  }, [guesses, solution, timeToChange]);

  useEffect(() => {
    // Levanta el primer modal de instrucciones
    if (!localGameState.solution) {
      setOpenIntroModal(true);
    }
  }, [localGameState]);

  // Manejar modal al ganar juego
  useEffect(() => {
    if (wonGame) {
      setOpenStatsModal(true);
    }

    if (lostGame) {
      setOpenStatsModal(true);
    }
  }, [lostGame, wonGame]);

  return (
    <div className="flex h-full flex-col w-full items-center">
      <Navbar
        setIntroModal={setOpenIntroModal}
        setStatsModal={setOpenStatsModal}
      />

      <div className="pt-20 pb-10">
        <GameGrid
          guesses={guesses}
          solution={solution}
          currentGuess={currentGuess}
        />
      </div>

      <Keyboard
        guesses={guesses}
        solution={solution}
        onDelete={handleDelete}
        onEnter={handleEnter}
        onPress={handlePress}
      />
      <div className="hidden">
        (
        <Countdown
          key={resetKey}
          date={timeToChange}
          onComplete={handleResetGame}
        />
        )
      </div>

      {/* NOTE: Crear lazy */}
      <IntroModal
        openModal={openIntroModal}
        handleClose={() => setOpenIntroModal(false)}
      />

      <StatsModal
        openModal={openStatsModal}
        handleClose={() => setOpenStatsModal(false)}
        stats={stats}
        lostGame={lostGame}
        timeToChange={new Date(timeToChange)}
        solution={solution}
      />
    </div>
  );
}

export default App;
