// Theme Context

import { createContext, useState } from "react";
//? 1-Creating Context
export const ThemeContext = createContext();

//? 2-provider component

const ThemeContextProvider = props => {
  const [myTheme, setMyTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ myTheme, setMyTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;