import { BigLogo, Form, AuthInput, InputPassword } from "@components/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBodyLoginUser } from "@interfaces/index";
import { authServices } from "@services/index";
import { loginSchema } from "@utils/index";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import * as S from "./styles";

export const Authentication = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<IBodyLoginUser>({
    resolver: yupResolver(loginSchema),
  });
  const { login } = authServices();

  const onSubmitHandler: SubmitHandler<IBodyLoginUser> = async (data) => {
    setIsLoading(true);
    try {
      const response = await login(data);

      localStorage.setItem("@token", response.token.token);
      setIsLoading(false);

      window.location.replace("/home");
    } catch (error: any) {
      setIsLoading(false);

      if (error.data) return toast.error(error.data.message);

      return toast.error(error.message);
    }
  };

  return (
    <S.Container>
      <BigLogo />
      <Form
        isLoading={isLoading}
        onSubmit={handleSubmit(onSubmitHandler)}
        title="Authentication"
        forgotPassword
        buttonText="Log In"
        outsideButtonText="Sign Up"
      >
        <AuthInput type={"email"} placeholder="Email" {...register("email")} />
        <InputPassword
          isVisible={isVisible}
          changeVisibility={(value: boolean) => setIsVisible(value)}
          {...register("password")}
        />
      </Form>
    </S.Container>
  );
};
