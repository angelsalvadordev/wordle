import { useEffect, useState } from "react";
import { localStorageUtil } from "../utils/localStorage";

const getDarkMode = () => {
  const isPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const localTheme = localStorageUtil.getTheme();
  const localDarkMode = localTheme === "dark";

  return localTheme ? localDarkMode : isPrefersDark;
};

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(getDarkMode());

  const toggleDarkMode = (dark: boolean) => {
    setDarkMode(dark);
    localStorageUtil.saveTheme(dark);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  };
};

export default useTheme;
