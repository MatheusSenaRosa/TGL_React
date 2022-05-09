import { Form, Screen, Logo } from "@components";

import * as S from "./styles";

export const Registration = () => {
  return (
    <Screen>
      <S.Container>
        <Logo />

        <Form title="Registration" buttonText="Register" goBack>
          <S.Input placeholder="Name" type="text" />
          <S.Input placeholder="Email" />
          <S.Input placeholder="Password" type="password" />
        </Form>
      </S.Container>
    </Screen>
  );
};
