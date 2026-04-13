import { cn } from "../../../../utils";
import type { Round } from "../../../../types/Dashboard/RoundType";

type RoundColor = "teal" | "purple" | "amber" | "blue";
const ROUND_LABEL: Record<
  "drag_order" | "fill_blank" | "block_builder" | "quiz",
  string
> = {
  drag_order: "drag & drop",
  fill_blank: "fill in the blank",
  block_builder: "block builder",
  quiz: "quiz",
};
const ROUND_BADGES: Record<RoundColor, string> = {
  teal: "bg-teal-100 text-teal-700",
  purple: "bg-purple-100 text-purple-700",
  amber: "bg-amber-100 text-amber-700",
  blue: "bg-blue-100 text-blue-700",
};

const CardHeader = ({ round, color }: { round: Round; color: RoundColor }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <h2 className="text-base font-bold text-gray-900 leading-snug flex-1">
        {round.question}
      </h2>
      <span
        className={cn(
          "text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap",
          ROUND_BADGES[color],
        )}
      >
        {ROUND_LABEL[round.type]}
      </span>
    </div>
  );
};

export default CardHeader;
