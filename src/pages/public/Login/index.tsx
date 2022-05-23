// import { useEffect, useState } from "react";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Eye, EyeClosed } from "phosphor-react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// import { Logo, PublicScreen, Form } from "@components";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { auth } from "@services";
// import { formatErrorMessage, loginSchema } from "@utils";

// import * as S from "./styles";

// type FormType = {
//   email: string;
//   password: string;
// };

// export function Login() {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm<FormType>({
//     resolver: yupResolver(loginSchema),
//   });

//   useEffect(() => {
//     if (errors.email?.message) {
//       toast.warn(formatErrorMessage(errors.email.message));
//       return;
//     }
//     if (errors.password?.message) {
//       toast.warn(formatErrorMessage(errors.password.message));
//     }
//   }, [errors]);

//   const loginHandler = async ({ email, password }: FormType) => {
//     setIsLoading(true);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("You are logged in!");
//     } catch ({ message }) {
//       if (message === "Firebase: Error (auth/user-not-found).") {
//         toast.error("Email or password is invalid. Try it again!");
//         return;
//       }
//       toast.error("An error has ocurred. Try to reload the page.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <PublicScreen>
//       <S.Container>
//         <Logo />
//         <Form
//           isLoading={isLoading}
//           onSubmit={handleSubmit(loginHandler)}
//           title="Authentication"
//           submitText="Log In"
//           navigationButton={{ path: "/registration", text: "Sign Up" }}
//           forgotPassword
//         >
//           <S.Input
//             placeholder="Email"
//             {...register("email")}
//             autoCapitalize="off"
//           />
//           <S.PasswordContainer>
//             <S.Input
//               autoCapitalize="off"
//               placeholder="Password"
//               type={isPasswordVisible ? "text" : "password"}
//               maxLength={20}
//               {...register("password")}
//             />
//             <S.EyeButton
//               type="button"
//               onClick={() => setIsPasswordVisible((prev) => !prev)}
//             >
//               {isPasswordVisible ? <Eye size={32} /> : <EyeClosed size={32} />}
//             </S.EyeButton>
//           </S.PasswordContainer>
//         </Form>
//       </S.Container>
//     </PublicScreen>
//   );
// }

import * as S from "./styles";

export function Login() {
  return <S.Container />;
}
