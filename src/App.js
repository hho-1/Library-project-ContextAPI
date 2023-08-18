import AppRouter from './router/AppRouter';
import {ThemeProvider} from "styled-components"
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/Global.styles';
import AuthContextProvider from './context/AuthContext';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {myTheme} = useContext(ThemeContext)
  return (
    <ThemeProvider theme = {myTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <AuthContextProvider>
        <AppRouter/>
      </AuthContextProvider>
      
    </ThemeProvider>
  );
}

export default App;
