import { BigLogo, Form, AuthInput, InputPassword } from "@components/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { userServices } from "@services/index";
import { registrationSchema } from "@utils/index";
import { IBodyCreateUser } from "@interfaces/index";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as S from "./styles";

export const Registration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBodyCreateUser>({ resolver: yupResolver(registrationSchema) });
  const navigate = useNavigate();
  const { createUser } = userServices();

  const onSubmitHandler: SubmitHandler<IBodyCreateUser> = async (data) => {
    setIsLoading(true);
    try {
      const response = await createUser(data);
      setIsLoading(false);
      toast.success("User has been created.");
      localStorage.setItem("@token", response.token.token);
      navigate("/", { replace: true });
    } catch (error: any) {
      setIsLoading(false);
      if (error.data) return toast.error(error.data.error.message);
      toast.error(error.message);
    }
  };

  return (
    <S.Container>
      <BigLogo />
      <Form
        buttonText="Register"
        title="Registration"
        goBack
        onSubmit={handleSubmit(onSubmitHandler)}
        isLoading={isLoading}
      >
        <AuthInput
          {...register("name")}
          placeholder="Name"
          type="text"
          invalid={!!errors.name?.message}
        />

        <AuthInput
          placeholder="Email"
          type="email"
          {...register("email")}
          invalid={!!errors.email?.message}
        />

        <InputPassword
          {...register("password")}
          isVisible={isVisible}
          changeVisibility={(value: boolean) => setIsVisible(value)}
        />
      </Form>
    </S.Container>
  );
};
