import { ThemeProvider } from "styled-components";
import { NotLogged } from "@routes";
import { Global } from "@styles";
import { useThemeStore } from "@store";

function App() {
  const { currentTheme } = useThemeStore();

  return (
    <ThemeProvider theme={currentTheme}>
      <Global />
      <NotLogged />
    </ThemeProvider>
  );
}

export default App;
