import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useThemeStore } from "@store";

import * as S from "./styles";

export const ThemeButton = () => {
  const { switchTheme } = useThemeStore();
  const { title } = useContext(ThemeContext);
  return (
    <S.Button onClick={switchTheme}>
      {title === "light" ? <S.SunIcon size={32} /> : <S.MoonIcon size={32} />}
    </S.Button>
  );
};
