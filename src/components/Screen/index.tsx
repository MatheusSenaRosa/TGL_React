import { ReactNode, useContext } from "react";
import { Moon, Sun } from "phosphor-react";
import { ThemeContext } from "styled-components";
import { useThemeStore } from "@store";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export const Screen = ({ children }: Props) => {
  const { switchTheme } = useThemeStore();
  const { title } = useContext(ThemeContext);

  return (
    <S.Container>
      {children}

      <S.SwitchTheme onClick={switchTheme}>
        {title === "light" ? <Sun size={32} /> : <Moon size={32} />}
      </S.SwitchTheme>
      <S.Footer>Copyright 2020 Luby Software</S.Footer>
    </S.Container>
  );
};
