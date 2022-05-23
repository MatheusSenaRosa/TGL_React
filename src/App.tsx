import { useContext } from "react";

import { ThemeProvider } from "styled-components";

import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";

import { ThemeButton } from "@components";
import { AuthContext } from "@context";
import { Routes } from "@routes";
import { auth } from "@services";
import { useThemeStore } from "@store";
import { GlobalStyles } from "@styles";

function App() {
  const { currentTheme } = useThemeStore();
  const { setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeButton />
      <ToastContainer
        theme={currentTheme.title === "dark" ? "dark" : "colored"}
      />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
