import * as yup from "yup";

const passwordRegex = new RegExp(
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])"
);

export const registrationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, "The min length to password is 6.")
    .matches(passwordRegex, "nao"),
});
