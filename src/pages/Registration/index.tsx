import { Form, Screen, Logo } from "@components";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@utils";
import * as S from "./styles";
import { useEffect } from "react";

type FormType = {
  email: string;
  password: string;
};

export function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(registrationSchema),
  });

  const registerUser = async (data: FormType) => {
    console.log("foi");
    try {
      // const response = await createUserWithEmailAndPassword("")
    } catch (e) {}
  };

  useEffect(() => {
    if (errors.email) return console.log(errors.email.message);
    if (errors.password) return console.log(errors.password.message);
  }, [errors]);

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
          <S.Input placeholder="Email" {...register("email")} />
          <S.Input
            placeholder="Password"
            type="password"
            {...register("password")}
            maxLength={20}
          />
        </Form>
      </S.Container>
    </Screen>
  );
}
