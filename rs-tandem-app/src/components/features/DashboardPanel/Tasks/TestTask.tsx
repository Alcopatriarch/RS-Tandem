import { useMemo, useState } from "react";
import type { RoundProps } from "../../../../types/Dashboard/RoundProps";
import useRoundLogic from "../useRoundLogic";
import { CardFooter } from "../CardElements/CardFooter";
import { cn } from "../../../../utils";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
export const TestTask = ({ round, onComplete, onReveal }: RoundProps) => {
  const { done, revealed, attempts, submit, reset } = useRoundLogic(
    round.points,
    onComplete,
    onReveal,
  );
  const [selected, setSelected] = useState<string | null>(null);
  const correctId = useMemo(
    () => (round.options ?? []).find((o) => o.correct)?.id,
    [round.options],
  );
  const isLocked = done || revealed;

  const check = () => {
    if (!selected) return;
    const ok = selected === correctId;
    if (!ok) setSelected(null);
    submit(ok);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {(round.options ?? []).map((opt) => {
          const isSel = selected === opt.id;
          const isCorrectOpt = opt.id === correctId;
          const showCorrect = isLocked && isCorrectOpt;
          const showWrong = isLocked && isSel && !isCorrectOpt;

          const cls = showCorrect
            ? "border-teal-400 bg-teal-50 cursor-default"
            : showWrong
              ? "border-red-400 bg-red-50 cursor-default"
              : isLocked
                ? "border-gray-200 bg-gray-50 opacity-40 cursor-default"
                : isSel
                  ? "border-purple-400 bg-purple-50 cursor-pointer"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer";

          const dotCls = showCorrect
            ? "border-teal-500 bg-teal-500"
            : showWrong
              ? "border-red-400 bg-red-400"
              : isSel
                ? "border-purple-500 bg-purple-500"
                : "border-gray-300";

          return (
            <div
              key={opt.id}
              onClick={() => !isLocked && setSelected(opt.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl border select-none transition-all",
                cls,
              )}
            >
              <div
                className={cn(
                  "w-4 h-4 rounded-full border-2 shrink-0 transition-all",
                  dotCls,
                )}
              />
              <span className="text-[13px] text-gray-800 flex-1">
                {opt.text}
              </span>
              {showCorrect && (
                <span className="text-teal-600 text-xs font-bold shrink-0">
                  <CheckIcon />
                </span>
              )}
              {showWrong && (
                <span className="text-red-500 text-xs font-bold shrink-0">
                  <CloseIcon />
                </span>
              )}
            </div>
          );
        })}
      </div>
      <CardFooter
        onCheck={check}
        onReset={() => {
          setSelected(null);
          reset();
        }}
        disabled={!selected || done}
        revealed={revealed}
        attempts={attempts}
        done={done}
      />
    </>
  );
};
