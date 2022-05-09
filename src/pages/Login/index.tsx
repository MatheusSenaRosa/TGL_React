import { Logo, Screen, Form } from "@components";

import * as S from "./styles";

export const Login = () => {
  return (
    <Screen>
      <S.Container>
        <Logo />
        <Form title="Authentication" buttonText="Log In" forgotPassword>
          <S.Input placeholder="Email" />
          <S.Input placeholder="Password" />
        </Form>
      </S.Container>
    </Screen>
  );
};
