import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "phosphor-react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Screen, Logo } from "@components";
import { registrationSchema, formatErrorMessage } from "@utils";
import { useNavigate } from "react-router-dom";
import { auth } from "@services";
import * as S from "./styles";

type FormType = {
  email: string;
  password: string;
};

export function Registration() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
    }
  }, [errors]);

  const registerUser = async ({ email, password }: FormType) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account successfully created!");
      navigate("/", { replace: true });
    } catch (e: any) {
      if ("Firebase: Error (auth/email-already-in-use).") {
        toast.error("This user already exists.");
        return;
      }
      toast.warn("The account could not be created.");
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
