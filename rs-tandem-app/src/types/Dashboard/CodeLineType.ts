import type { CodeLine } from "./CodeLine";

export type CodeLineItemType = {
  line: CodeLine;
  displayValues: Record<string, string>;
  states: Record<string, "ok" | "err">;
  isDoneOrRevealed: boolean;
  onInputChange: (id: string, val: string) => void;
};
