import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type AuthPropsType = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};
