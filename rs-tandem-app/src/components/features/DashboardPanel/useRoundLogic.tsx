import { useState } from "react";
import { MAX_ATTEMPTS } from "../../../constants/DashboardConstants";

const useRoundLogic = (
  points: number,
  onComplete: (pts: number) => void,
  onReveal: () => void,
) => {
  const [done, setDone] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const submit = (isCorrect: boolean) => {
    if (done || revealed) return;
    if (isCorrect) {
      setDone(true);
      onComplete(points);
      return;
    }
    const next = attempts + 1;
    setAttempts(next);
    if (next >= MAX_ATTEMPTS) {
      setRevealed(true);
      onReveal();
    }
  };

  const reset = () => {
    setAttempts(0);
    setRevealed(false);
  };

  return { done, revealed, attempts, submit, reset };
};
export default useRoundLogic;
