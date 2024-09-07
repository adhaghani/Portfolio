import { createContext, useContext, useEffect, useState } from "react";
import { saveThemeToLocalStorage } from "../../Function/saveThemeToLocalStorage";
const StateContext = createContext({
  isDarkMode: false,
  setIsDarkMode: () => {}
});

window.matchMedia("(prefers-color-scheme: dark)").matches;
const determineBroserTheme = () => {
  if (localStorage.getItem("theme") === null) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  } else {
    return localStorage.getItem("theme") === "true" ? true : false;
  }
};

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(determineBroserTheme());

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    saveThemeToLocalStorage(isDarkMode);
  }, [isDarkMode]);

  return (
    <StateContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
