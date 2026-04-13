import type { DraggableBlockType } from "../../../../../types/Dashboard/DraggableBlockType";

export const DraggableBlock = ({
  block,
  from,
  revealed,
  done,
  onDragStart,
  onRemove,
}: DraggableBlockType) => {
  const isLocked = revealed || done;
  return (
    <div
      draggable={!isLocked}
      onDragStart={() => onDragStart(block.id, from)}
      className={`flex items-center justify-between gap-2 border rounded-lg px-3 py-2 select-none transition-all group ${
        isLocked
          ? "bg-teal-50 border-[--color-japanese-indigo] cursor-default"
          : "bg-white border-gray-200 cursor-grab active:cursor-grabbing hover:border-gray-300"
      }`}
    >
      <code className="font-mono text-[12px] text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
        {block.text}
      </code>

      {from === "zone" && !isLocked && (
        <button
          onClick={() => onRemove(block)}
          className="text-gray-300 group-hover:text-red-400 transition-colors text-base leading-none ml-1 shrink-0"
        >
          ×
        </button>
      )}
    </div>
  );
};
