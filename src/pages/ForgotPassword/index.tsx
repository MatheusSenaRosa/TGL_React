import { Form, Logo, Screen } from "@components";
import * as S from "./styles";

export function ForgotPassword() {
  return (
    <Screen>
      <S.Container>
        <Logo />
        <Form title="Reset password" buttonText="Send link" goBack>
          <S.Input placeholder="Email" />
        </Form>
      </S.Container>
    </Screen>
  );
}
