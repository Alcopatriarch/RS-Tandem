import React, { useRef, useState } from "react";
import type { RoundProps } from "../../../../../types/Dashboard/RoundProps";
import useRoundLogic from "../../useRoundLogic";
import type { OrderItem } from "../../../../../types/Dashboard/OrderItem";
import { CardFooter } from "../../CardElements/CardFooter";
import { DragOrderItem } from "./DragOrderItem";

export const DragOrderRound = ({ round, onComplete, onReveal }: RoundProps) => {
  const { done, revealed, attempts, submit, reset } = useRoundLogic(
    round.points,
    onComplete,
    onReveal,
  );
  const [items, setItems] = useState<OrderItem[]>(() => [
    ...(round.items ?? []),
  ]);
  const [states, setStates] = useState<Record<string, "ok" | "err">>({});
  const dragIdx = useRef<number | null>(null);

  const display = revealed
    ? [...(round.items ?? [])].sort((a, b) => a.correctIndex - b.correctIndex)
    : items;

  const onDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault();
    if (dragIdx.current === null || dragIdx.current === i) return;
    const next = [...items];
    const [moved] = next.splice(dragIdx.current, 1);
    next.splice(i, 0, moved);
    dragIdx.current = i;
    setItems(next);
  };

  const check = () => {
    const newStates: Record<string, "ok" | "err"> = {};
    let allOk = true;

    items.forEach((item, i) => {
      const isOk = item.correctIndex === i;
      newStates[item.id] = isOk ? "ok" : "err";
      if (!isOk) allOk = false;
    });

    setStates(newStates);
    submit(allOk);
  };

  const handleReset = () => {
    setItems([...(round.items ?? [])].sort(() => Math.random() - 0.5));
    setStates({});
    reset();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {display.map((item, i) => {
          const status = revealed ? "revealed" : states[item.id];

          return (
            <DragOrderItem
              key={item.id}
              item={item}
              index={i}
              status={status}
              done={done}
              revealed={revealed}
              onDragStart={() => {
                dragIdx.current = i;
              }}
              onDragOver={(e) => onDragOver(e, i)}
              onDragEnd={() => {
                dragIdx.current = null;
              }}
            />
          );
        })}
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

export default DragOrderRound;
