import type { FieldConfigType } from "../../../../../types/LoginType/AuthPropsType";
import type { LoginType } from "../../../../../types/LoginType/LoginType";

export const passwordFieldConfig: FieldConfigType<LoginType> = {
  name: "authPassword",
  label: "Password",
  id: "auth_password",
  type: "password",
  placeholder: "Enter a password",
  rules: {
    required: "Password is required",
    minLength: {
      value: 7,
      message: "The password must contain at least 7 characters",
    },
    validate: {
      hasUpperCase: (value) =>
        /[A-Z]/.test(value || "") || "Must contain ONE uppercase letter",
      hasNumber: (value) =>
        /[0-9]/.test(value || "") || "Must contain ONE number",
    },
  },
};
