import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(6)
    .matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/g, "invalid name!"),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
