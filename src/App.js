import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { darktheme, lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import AuthContextProvider from "./context/AuthContext";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import BooksContextProvider from "./context/BooksContext";

function App() {
  const { myTheme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={myTheme === "light" ? lightTheme : darktheme}>
        <GlobalStyles />
        <AuthContextProvider>
          <BooksContextProvider>
            <AppRouter />
          </BooksContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

