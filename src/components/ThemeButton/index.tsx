import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { useThemeStore } from "@store";

import * as S from "./styles";

export function ThemeButton() {
  const { switchTheme } = useThemeStore();
  const { title } = useContext(ThemeContext);
  return (
    <S.Button onClick={switchTheme}>
      {title === "light" ? <S.SunIcon /> : <S.MoonIcon />}
    </S.Button>
  );
}
