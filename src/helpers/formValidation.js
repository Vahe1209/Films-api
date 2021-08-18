import * as yup from "yup";

export const validationLogin = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
});

export const validationSignUp = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
  firstName: yup
    .string("Enter your firstName")
    .min(3, "Firstname should be of minimum 3 characters length")
    .required("Firstname is required"),
  lastName: yup
    .string("Enter your lastName")
    .min(3, "Lastname should be of minimum 3 characters length")
    .required("Lastname is required"),
});
