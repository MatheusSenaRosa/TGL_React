import { useState } from "react";
import { Form, Logo, Screen } from "@components";
import * as S from "./styles";

export function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Screen>
      <S.Container>
        <Logo />
        <Form
          isLoading={isLoading}
          title="Reset password"
          buttonText="Send link"
          goBack
          onSubmit={() => {}}
        >
          <S.Input placeholder="Email" />
        </Form>
      </S.Container>
    </Screen>
  );
}
