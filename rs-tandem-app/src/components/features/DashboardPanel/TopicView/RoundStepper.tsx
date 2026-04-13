import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import type { Round } from "../../../../types/Dashboard/RoundType";
interface RoundStepperProps {
  rounds: Round[],
  current: number;
}

export const RoundStepper = ({ rounds, current }: RoundStepperProps) => {
  return (
    <div className="flex items-center gap-2">
      {rounds.map((r, i) => {
        const isComplete = i < current ;
        return (
          <React.Fragment key={r.round}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${isComplete ? "bg-teal-800 text-white" : i===current ? "bg-[#273B4A] text-white" : "bg-gray-100 text-gray-400"}`}>
              {isComplete ? <CheckIcon /> : r.round}
            </div>
            {i < rounds.length - 1 && (
              <div className={`flex-1 h-0.5 rounded-full transition-all ${isComplete ? "bg-teal-800" : "bg-gray-200"}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};