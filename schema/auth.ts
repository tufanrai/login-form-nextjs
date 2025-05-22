import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email("enter valid email").required(),
  password: yup.string().required("Password is required"),
});

export const SignUpData = yup
  .object({
    full_name: yup.string().required("please enter your full name"),
    email: yup.string().email().required("please enter a valid email"),
    password: yup
      .string()
      .required("please enter your password")
      .min(6, "password should be of at lease 6 characters"),
    Confirm_password: yup.string().required("please re enter your password"),
  })
  .required();
