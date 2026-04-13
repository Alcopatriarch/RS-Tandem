import type { Round } from "./RoundType";

export type RoundProps = {
  round: Round;
  onComplete: (points: number) => void;
  onReveal: () => void;
};
