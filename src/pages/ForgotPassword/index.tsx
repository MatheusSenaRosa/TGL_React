import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Form, Logo, Screen } from "@components";
import { forgotPasswordSchema, formatErrorMessage } from "@utils";
import { auth } from "@services";

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
    } catch (e: any) {
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("This email doesn`t exists.");
        return;
      }
      toast.error("An error has ocurred. Try it again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Screen>
      <S.Container>
        <Logo />
        <Form
          isLoading={isLoading}
          title="Reset password"
          submitText="Send link"
          goBack
          onSubmit={handleSubmit(sendLinkHandler)}
        >
          <S.Input placeholder="Email" {...register("email")} />
        </Form>
      </S.Container>
    </Screen>
  );
}
