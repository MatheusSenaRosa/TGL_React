import { FormEvent } from "react";
import { Logo, Screen, Form } from "@components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@fireBase";

import * as S from "./styles";

export function Login() {
  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        "teste@gmail.com",
        "1234231ewq"
      );

      localStorage.setItem("user", JSON.stringify(response.user));
      location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen>
      <S.Container>
        <Logo />
        <Form
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
