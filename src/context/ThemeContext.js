// Theme Context

import { createContext, useState } from "react";
//? 1-Creating Context
export const ThemeContext = createContext();

//? 2-provider component

const ThemeContextProvider = ({children}) => {
  const [myTheme, setMyTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ myTheme, setMyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;