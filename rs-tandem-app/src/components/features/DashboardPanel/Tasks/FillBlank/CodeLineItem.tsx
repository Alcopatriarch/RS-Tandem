import React from "react";
import { BlankInput } from "./BlankInput";
import type { CodeLineItemType } from "../../../../../types/Dashboard/CodeLineType";

export const CodeLineItem = ({
  line,
  displayValues,
  states,
  isDoneOrRevealed,
  onInputChange,
}: CodeLineItemType) => {
  if (!line.blanks?.length) {
    return (
      <div className="whitespace-pre leading-[2.4]">
        {line.text || "\u00A0"}
      </div>
    );
  }
  return (
    <div className="whitespace-pre-wrap leading-[2.4] flex flex-wrap items-baseline">
      {line.text.split("_____").map((x, i) => {
        const blank = line.blanks![i];
        const status = isDoneOrRevealed ? "ok" : states[blank?.id];

        return (
          <React.Fragment key={i}>
            {x && <span>{x}</span>}
            {blank && (
              <BlankInput
                blank={blank}
                value={displayValues[blank.id] ?? ""}
                status={status}
                isReadOnly={isDoneOrRevealed}
                onChange={onInputChange}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
