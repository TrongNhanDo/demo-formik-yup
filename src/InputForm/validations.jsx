import * as yup from "yup";

export function validationSchema() {
  return yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
}
