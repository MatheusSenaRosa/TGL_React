import { ThemeProvider } from "styled-components";
import { NotLogged } from "@routes";
import { Global } from "@styles";
import { useThemeStore } from "@store";
import { ThemeButton } from "@components";

function App() {
  const { currentTheme } = useThemeStore();

  return (
    <ThemeProvider theme={currentTheme}>
      <Global />
      <ThemeButton />
      <NotLogged />
    </ThemeProvider>
  );
}

export default App;
