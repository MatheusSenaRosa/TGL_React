import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { NotLogged } from "@routes";
import { ThemeButton } from "@components";
import { useThemeStore } from "@store";
import { GlobalStyles } from "@styles";
import { auth } from "@services";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "@context";
import { LoadingPage } from "@pages";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentTheme } = useThemeStore();
  const { setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 700);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeButton />
      {!isLoading && <NotLogged />}
      {isLoading && <LoadingPage />}
    </ThemeProvider>
  );
}

export default App;
