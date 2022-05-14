import * as yup from "yup";

const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])");

export const registrationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, "the min length to password is 6")
    .matches(
      passwordRegex,
      "the password must contains lowercase letters, uppercase letters and numbers"
    ),
});

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
