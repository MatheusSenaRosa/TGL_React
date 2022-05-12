import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Screen, Logo } from "@components";
import { registrationSchema } from "@utils";
import * as S from "./styles";

type FormType = {
  email: string;
  password: string;
};

export function Registration() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(registrationSchema),
  });

  useEffect(() => {
    if (errors.email) return console.log(errors.email.message);
    if (errors.password) return console.log(errors.password.message);
  }, [errors]);

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
          <S.Input placeholder="Email" {...register("email")} />
          <S.PasswordContainer>
            <S.Input
              placeholder="Password"
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              maxLength={20}
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? <Eye size={32} /> : <EyeClosed size={32} />}
            </button>
          </S.PasswordContainer>
        </Form>
      </S.Container>
    </Screen>
  );
}
