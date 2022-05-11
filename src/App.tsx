import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Logged, NotLogged } from "@routes";
import { ThemeButton } from "@components";
import { useThemeStore } from "@store";
import { Global } from "@styles";
import { userType } from "@types";

function App() {
  const { currentTheme } = useThemeStore();
  const [user, setUser] = useState<userType>(null);

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    if (storageUser) setUser(JSON.parse(storageUser));
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Global />
      <ThemeButton />
      {user ? <Logged /> : <NotLogged />}
    </ThemeProvider>
  );
}

export default App;
