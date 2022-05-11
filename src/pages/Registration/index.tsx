import { Form, Screen, Logo } from "@components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import * as S from "./styles";

type Form = {
  email: string;
  password: string;
};

export function Registration() {
  const { register, handleSubmit, watch } = useForm<Form>();

  const regiterUser = async () => {
    try {
      // const response = await createUserWithEmailAndPassword("")
    } catch (e) {}
  };

  return (
    <Screen>
      <S.Container>
        <Logo />

        <Form
          title="Registration"
          buttonText="Register"
          goBack
          onSubmit={() => {}}
        >
          <S.Input placeholder="Email" {...register("email")} />
          <S.Input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
        </Form>
      </S.Container>
    </Screen>
  );
}
