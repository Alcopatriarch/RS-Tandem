import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import type { DragOrderItemProps } from "../../../../../types/Dashboard/DragOrderItemType";
import { getStatusStyle } from "./statusStyle";

export const DragOrderItem = ({
  item,
  index,
  status,
  done,
  revealed,
  onDragStart,
  onDragOver,
  onDragEnd,
}: DragOrderItemProps) => {
  const statusClasses = getStatusStyle(status);
  const isDraggable = !revealed && !done;
  return (
    <div
      draggable={isDraggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border select-none transition-all ${statusClasses}`}
    >
      <div className="flex flex-col gap-[3px] opacity-30 shrink-0">
        {[0, 1, 2].map((n) => (
          <span key={n} className="block w-3.5 h-0.5 bg-current rounded" />
        ))}
      </div>
      <span className="text-xs text-gray-400 font-bold w-5 shrink-0">
        {index + 1}.
      </span>
      <code className="font-mono text-[13px] text-gray-800 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {item.text}
      </code>
      {(status === "ok" || done) && (
        <span className="text-teal-500 text-xs font-bold shrink-0">
          <CheckIcon />
        </span>
      )}
      {status === "err" && (
        <span className="text-red-400 text-xs font-bold shrink-0">
          <CloseIcon />
        </span>
      )}
    </div>
  );
};
