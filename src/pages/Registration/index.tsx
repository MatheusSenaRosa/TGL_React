import { Form, Screen, Logo } from "@components";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@utils";
import * as S from "./styles";

type FormType = {
  email: string;
  password: string;
};

export function Registration() {
  const { register, handleSubmit } = useForm<FormType>({
    resolver: yupResolver(registrationSchema),
  });

  const registerUser = async (data: FormType) => {
    try {
      // const response = await createUserWithEmailAndPassword("")
    } catch (e) {}
  };

  return (
    <Screen>
      <S.Container>
        <Logo />

        <Form
          onSubmit={handleSubmit(registerUser)}
          title="Registration"
          buttonText="Register"
          goBack
        >
          <S.Input placeholder="Email" {...register("email")} type="email" />
          <S.Input
            placeholder="Password"
            type="password"
            {...register("password")}
            minLength={6}
            maxLength={20}
          />
        </Form>
      </S.Container>
    </Screen>
  );
}
