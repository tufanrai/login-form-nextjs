import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email("enter valid email").required(),
  password: yup.string().required("Password is required"),
});
