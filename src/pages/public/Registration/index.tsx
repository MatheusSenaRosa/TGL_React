import { createUserWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeClosed } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, PublicScreen, Logo } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "@services";
import { registrationSchema, formatErrorMessage } from "@utils";

import * as S from "./styles";

type FormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export function Registration() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(registrationSchema),
  });

  useEffect(() => {
    if (errors.email?.message) {
      toast.warn(formatErrorMessage(errors.email.message));
      return;
    }
    if (errors.password?.message) {
      toast.warn(formatErrorMessage(errors.password.message));
      return;
    }
    if (errors.confirmPassword?.message) {
      toast.warn(formatErrorMessage(errors.confirmPassword.message));
    }
  }, [errors]);

  const registerUser = async ({ email, password }: FormType) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account successfully created!");
      navigate("/", { replace: true });
    } catch ({ message }) {
      if (message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("This user already exists.");
        return;
      }
      toast.warn("The account could not be created.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PublicScreen>
      <S.Container>
        <Logo />

        <Form
          isLoading={isLoading}
          onSubmit={handleSubmit(registerUser)}
          title="Registration"
          submitText="Register"
          goBack
        >
          <S.Input
            placeholder="Email"
            {...register("email")}
            autoCapitalize="off"
          />
          <S.PasswordContainer>
            <S.Input
              autoCapitalize="off"
              placeholder="Password"
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              maxLength={20}
            />
            <S.EyeButton
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? <Eye size={32} /> : <EyeClosed size={32} />}
            </S.EyeButton>
          </S.PasswordContainer>
          <S.PasswordContainer>
            <S.Input
              autoCapitalize="off"
              placeholder="Confirm password"
              type={isConfirmPasswordVisible ? "text" : "password"}
              {...register("confirmPassword")}
              maxLength={20}
            />
            <S.EyeButton
              type="button"
              onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
            >
              {isConfirmPasswordVisible ? (
                <Eye size={32} />
              ) : (
                <EyeClosed size={32} />
              )}
            </S.EyeButton>
          </S.PasswordContainer>
        </Form>
      </S.Container>
    </PublicScreen>
  );
}
