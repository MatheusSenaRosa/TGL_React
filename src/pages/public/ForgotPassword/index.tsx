import { useEffect, useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, Logo, PublicScreen } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "@services";
import { forgotPasswordSchema, formatErrorMessage } from "@utils";

import * as S from "./styles";

type FormType = {
  email: string;
};

export function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormType>({ resolver: yupResolver(forgotPasswordSchema) });

  useEffect(() => {
    if (errors.email?.message)
      toast.warn(formatErrorMessage(errors.email.message));
  }, [errors]);

  const sendLinkHandler = async ({ email }: FormType) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "The email with link to update your password has been sent."
      );
      navigate(-1);
    } catch ({ message }) {
      if (message === "Firebase: Error (auth/user-not-found).") {
        toast.error("This email doesn`t exists.");
        return;
      }
      toast.error("An error has ocurred. Try it again later.");
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
          autoCapitalize="off"
          title="Reset password"
          submitText="Send link"
          goBack
          onSubmit={handleSubmit(sendLinkHandler)}
        >
          <S.Input placeholder="Email" {...register("email")} />
        </Form>
      </S.Container>
    </PublicScreen>
  );
}
