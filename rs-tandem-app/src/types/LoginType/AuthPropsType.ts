import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

export type AuthPropsType = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export type FieldConfigType<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  rules?: RegisterOptions<T, Path<T>>;
};
