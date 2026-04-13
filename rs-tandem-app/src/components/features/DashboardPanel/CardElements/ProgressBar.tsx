import type { ProgressBarType } from "../../../../types/Dashboard/ProgressBarType";

export const ProgressBar = ({
  tasks,
  total,
  type = "inline",
}: ProgressBarType) => {
  const pct = total > 0 ? Math.round((tasks / total) * 100) : 0;

  if (type === "card") {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-[14px] font-bold text-[#11212D]">
          <span>{total} tasks</span>
          <span>{pct}%</span>
        </div>
        <div className="w-full h-[6px] bg-[#C1C8CE] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#273B4A] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          ></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-bold text-gray-400 whitespace-nowrap">
        {tasks} / {total} pts
      </span>
    </div>
  );
};
