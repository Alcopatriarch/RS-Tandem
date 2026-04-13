import React, { useMemo, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { DraggableBlock } from "./DraggableBlock";
import useRoundLogic from "../../useRoundLogic";
import type { Block } from "../../../../../types/Dashboard/Block";
import { CardFooter } from "../../CardElements/CardFooter";
import type { RoundProps } from "../../../../../types/Dashboard/RoundProps";

export const BlockBuilder = ({ round, onComplete, onReveal }: RoundProps) => {
  const { t } = useTranslation();
  const { done, revealed, attempts, submit, reset } = useRoundLogic(
    round.points,
    onComplete,
    onReveal,
  );

  const [pool, setPool] = useState<Block[]>(() => [...(round.blocks ?? [])]);
  const [zone, setZone] = useState<Block[]>([]);
  const dragRef = useRef<{ id: string | null; from: "pool" | "zone" | null }>({
    id: null,
    from: null,
  });

  const isLocked = revealed || done;
  const displayZone = useMemo(() => {
    if (!isLocked) return zone;
    return [...(round.blocks ?? [])]
      .filter((b) => b.order !== null)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, [isLocked, zone, round.blocks]);

  const check = () => {
    const ok =
      JSON.stringify(zone.map((b) => b.order)) ===
      JSON.stringify(round.correctOrder);
    submit(ok);
  };

  const handleDrop = (e: React.DragEvent, target: "pool" | "zone") => {
    e.preventDefault();
    const { id, from } = dragRef.current;
    if (!from || from === target) return;
    const b = (round.blocks ?? []).find((x) => x.id === id);
    if (!b) return;
    if (target === "zone") {
      setPool((p) => p.filter((x) => x.id !== b.id));
      setZone((z) => [...z, b]);
    } else {
      setZone((z) => z.filter((x) => x.id !== b.id));
      setPool((p) => [...p, b]);
    }
    dragRef.current = { id: null, from: null };
  };

  const handleDragStart = useCallback((id: string, from: "pool" | "zone") => {
    dragRef.current = { id, from };
  }, []);

  const handleRemoveFromZone = useCallback((block: Block) => {
    setZone((z) => z.filter((x) => x.id !== block.id));
    setPool((p) => [...p, block]);
  }, []);

  const handleReset = () => {
    setPool([...(round.blocks ?? [])]);
    setZone([]);
    reset();
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(max-content)_minmax(max-content)] gap-4 overflow-x-auto pb-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
            {t("lesson.blockBuilder.availableBlocks")}
          </p>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "pool")}
            className={`min-h-36 border border-dashed rounded-xl p-2.5 flex flex-wrap gap-2 content-start transition-colors border-gray-300 ${
              isLocked ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            {!isLocked &&
              pool.map((b) => (
                <DraggableBlock
                  key={b.id}
                  block={b}
                  from="pool"
                  revealed={revealed}
                  done={done}
                  onDragStart={handleDragStart}
                  onRemove={handleRemoveFromZone}
                />
              ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
            {isLocked
              ? t("lesson.blockBuilder.correctSolution")
              : t("lesson.blockBuilder.yourSolution")}
          </p>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "zone")}
            className={`min-h-36 border border-dashed rounded-xl p-2.5 flex flex-col gap-2 transition-colors ${
              isLocked ? "border-teal-300 bg-teal-50/50" : "border-teal-300"
            }`}
          >
            {displayZone.length === 0 && (
              <p className="m-auto text-sm text-gray-400 text-center">
                {t("lesson.blockBuilder.dragHere")}
              </p>
            )}
            {displayZone.map((b) => (
              <DraggableBlock
                key={b.id}
                block={b}
                from="zone"
                revealed={revealed}
                done={done}
                onDragStart={handleDragStart}
                onRemove={handleRemoveFromZone}
              />
            ))}
          </div>
        </div>
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

export default BlockBuilder;
