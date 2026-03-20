import type { FieldConfigType } from "../../../../../types/LoginType/AuthPropsType";
import type { LoginType } from "../../../../../types/LoginType/LoginType";

export const nameFieldConfig: FieldConfigType<LoginType> = {
  name: "authName",
  label: "Name",
  id: "authName",
  type: "text",
  placeholder: "Enter your name",
  rules: { required: "Name is required" },
};
