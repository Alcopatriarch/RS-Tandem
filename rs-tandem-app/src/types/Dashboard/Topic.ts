import type { Round } from "./RoundType";

export type Topic = {
  id: string;
  label: string;
  description: string;
  totalPoints: number;
  rounds: Round[];
};
