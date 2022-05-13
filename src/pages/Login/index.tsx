import { FormEvent, useState } from "react";
import { Logo, Screen, Form } from "@components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@services";

import * as S from "./styles";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, "teste@gmail.com", "1234231ewq");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen>
      <S.Container>
        <Logo />
        <Form
          isLoading={isLoading}
          onSubmit={loginHandler}
          title="Authentication"
          buttonText="Log In"
          forgotPassword
        >
          <S.Input placeholder="Email" required type="email" />
          <S.Input placeholder="Password" required type="password" />
        </Form>
      </S.Container>
    </Screen>
  );
}
