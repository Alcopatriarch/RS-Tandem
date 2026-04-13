import type { OrderItem } from "./OrderItem";

export type DragOrderItemProps = {
  item: OrderItem;
  index: number;
  status?: "ok" | "err" | "revealed";
  done: boolean;
  revealed: boolean;
  onDragStart: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragEnd: () => void;
};
