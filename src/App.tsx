import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import Keyboard from "./components/Keyboard";
import useKeyboard from "./hooks/useKeyboard";
import { localStorageUtil } from "./utils/localStorage";
import useGame from "./hooks/useGame";
import "./App.css";
import Countdown from "react-countdown";
import useTheme from "./hooks/useTheme";

const IntroModal = lazy(() => import("./components/Modals/IntroModal"));
const StatsModal = lazy(() => import("./components/Modals/StatsModal"));

function App() {
  const localGameState = localStorageUtil.getGame();
  const [openIntroModal, setOpenIntroModal] = useState(false);
  const [openStatsModal, setOpenStatsModal] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const { darkMode, toggleDarkMode } = useTheme();

  const {
    guesses,
    addGuess,
    solution,
    wonGame,
    lostGame,
    timeToChange,
    resetGame,
    stats,
    invalidCurrentRow,
  } = useGame();

  const { handlePress, handleDelete, handleEnter, currentGuess, clearInput } =
    useKeyboard({
      attemptsMade: guesses.length,
      maxWordSize: solution.length,
      wonGame,
      lostGame,
      onEnter: addGuess,
    });

  const handleResetGame = () => {
    resetGame();
    clearInput();
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
    if (!localGameState.solution) {
      setOpenIntroModal(true);
    }
  }, [localGameState]);

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
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="pt-6 pb-6 md:pt-20 md:pb-10">
        <GameGrid
          guesses={guesses}
          solution={solution}
          currentGuess={currentGuess}
          invalidCurrentRow={invalidCurrentRow}
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

      {openIntroModal && (
        <Suspense>
          <IntroModal
            openModal={openIntroModal}
            handleClose={() => setOpenIntroModal(false)}
          />
        </Suspense>
      )}

      {openStatsModal && (
        <Suspense>
          <StatsModal
            openModal={openStatsModal}
            handleClose={() => setOpenStatsModal(false)}
            stats={stats}
            lostGame={lostGame}
            timeToChange={new Date(timeToChange)}
            solution={solution}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
