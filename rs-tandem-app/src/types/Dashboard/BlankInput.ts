import type { BlankItem } from "./BlankItem";

export type BlankInputType = {
  blank: BlankItem;
  value: string;
  status?: "ok" | "err";
  isReadOnly: boolean;
  onChange: (id: string, val: string) => void;
};
