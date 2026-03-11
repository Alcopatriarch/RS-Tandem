import type { FieldConfigType } from "../../../../../types/LoginType/AuthPropsType";
import type { LoginType } from "../../../../../types/LoginType/LoginType";

export const emailFieldConfig: FieldConfigType<LoginType> = {
  name: "authEmail",
  label: "Email",
  id: "authEmail",
  type: "email",
  placeholder: "Enter your email",
  rules: {
    required: "Email is required",
  },
};
