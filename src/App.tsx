import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeButton } from "@components";
import { useThemeStore } from "@store";
import { GlobalStyles } from "@styles";
import { auth } from "@services";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "@context";
import { Routes } from "@routes";

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
      <Routes isLoading={isLoading} />
    </ThemeProvider>
  );
}

export default App;
