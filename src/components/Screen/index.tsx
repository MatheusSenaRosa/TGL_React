import { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export const Screen = ({ children }: Props) => (
  <S.Container>
    {children}

    <S.Footer>Copyright 2020 Luby Software</S.Footer>
  </S.Container>
);
