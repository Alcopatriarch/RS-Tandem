import { useMemo, useState, useCallback } from "react";
import { CodeLineItem } from "./CodeLineItem";
import useRoundLogic from "../../useRoundLogic";
import type { RoundProps } from "../../../../../types/Dashboard/RoundProps";
import { CardFooter } from "../../CardElements/CardFooter";

export const FillBlank = ({ round, onComplete, onReveal }: RoundProps) => {
  const { done, revealed, attempts, submit, reset } = useRoundLogic(
    round.points,
    onComplete,
    onReveal,
  );

  const allBlanks = useMemo(
    () => (round.codeLines ?? []).flatMap((l) => l.blanks ?? []),
    [round.codeLines],
  );
  const initValues = useMemo(
    () => Object.fromEntries(allBlanks.map((b) => [b.id, ""])),
    [allBlanks],
  );

  const [values, setValues] = useState<Record<string, string>>(initValues);
  const [states, setStates] = useState<Record<string, "ok" | "err">>({});

  const isDoneOrRevealed = revealed || done;
  const display = isDoneOrRevealed
    ? Object.fromEntries(allBlanks.map((b) => [b.id, b.answer]))
    : values;

  const handleInputChange = useCallback(
    (id: string, val: string) => {
      if (!isDoneOrRevealed) {
        setValues((v) => ({ ...v, [id]: val }));
      }
    },
    [isDoneOrRevealed],
  );

  const check = () => {
    const newStates: Record<string, "ok" | "err"> = {};
    let allOk = true;
    allBlanks.forEach(({ id, answer }) => {
      const isOk =
        (values[id] ?? "").trim().toLowerCase() ===
        String(answer).toLowerCase();
      newStates[id] = isOk ? "ok" : "err";
      if (!isOk) allOk = false;
    });
    setStates(newStates);
    submit(allOk);
  };

  const handleReset = () => {
    setValues(initValues);
    setStates({});
    reset();
  };

  return (
    <>
      <div className="bg-gray-50 rounded-xl p-4 font-mono text-[13px] text-gray-800 border border-gray-200">
        {(round.codeLines ?? []).map((line, i) => (
          <CodeLineItem
            key={i}
            line={line}
            displayValues={display}
            states={states}
            isDoneOrRevealed={isDoneOrRevealed}
            onInputChange={handleInputChange}
          />
        ))}
      </div>
      <CardFooter
        onCheck={check}
        onReset={handleReset}
        disabled={done}
        revealed={revealed}
        attempts={attempts}
        done={done}
      />
    </>
  );
};

export default FillBlank;
