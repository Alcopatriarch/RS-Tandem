import type { Block } from "./Block";

export type DraggableBlockType = {
  block: Block;
  from: "pool" | "zone";
  revealed: boolean;
  done: boolean;
  onDragStart: (id: string, from: "pool" | "zone") => void;
  onRemove: (block: Block) => void;
};
