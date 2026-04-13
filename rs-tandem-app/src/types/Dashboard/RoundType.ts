import type { Block } from "./Block";
import type { CodeLine } from "./CodeLine";
import type { OrderItem } from "./OrderItem";
import type { QuizOption } from "./QuizOption";

export type RoundType = "drag_order" | "fill_blank" | "block_builder" | "quiz";

export type Round = {
  round: number;
  type: RoundType;
  points: number;
  question: string;
  items?: OrderItem[];
  codeLines?: CodeLine[];
  blocks?: Block[];
  correctOrder?: number[];
  options?: QuizOption[];
};
