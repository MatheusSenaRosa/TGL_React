import { useContext, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";

import { ThemeButton } from "@components";
import { AuthContext } from "@context";
import { LoadingPage } from "@publicRoutes";
import { Routes } from "@routes";
import { auth } from "@services";
import { useThemeStore } from "@store";
import { GlobalStyles } from "@styles";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentTheme } = useThemeStore();
  const { setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeButton />
      <ToastContainer
        theme={currentTheme.title === "dark" ? "dark" : "colored"}
      />
      {isLoading ? <LoadingPage /> : <Routes />}
    </ThemeProvider>
  );
}

export default App;
