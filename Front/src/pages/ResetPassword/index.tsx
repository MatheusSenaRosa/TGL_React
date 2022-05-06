import { BigLogo, Form, AuthInput } from "@components/index";

import * as S from "./styles";

export const ResetPassword = () => {
  return (
    <S.Container>
      <BigLogo />
      <Form
        isLoading={true}
        title="Reset password"
        buttonText="Send link"
        goBack
      >
        <AuthInput placeholder="Email" type={"email"} />
      </Form>
    </S.Container>
  );
};
