import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";

import { Routes } from "@routes";
import { auth } from "@services";
import { AuthContext } from "@context";
import { GlobalStyles } from "@styles";
import { useThemeStore } from "@store";
import { ThemeButton } from "@components";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentTheme } = useThemeStore();
  const { setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeButton />
      <ToastContainer
        theme={currentTheme.title === "dark" ? "dark" : "colored"}
      />
      <Routes isLoading={isLoading} />
    </ThemeProvider>
  );
}

export default App;
