import type { BlankInputType } from "../../../../../types/Dashboard/BlankInput";
export const BlankInput = ({
  blank,
  value,
  status,
  isReadOnly,
  onChange,
}: BlankInputType) => {
  const width =
    Math.max((blank.answer?.length ?? 4) + 2, blank.placeholder?.length ?? 4) +
    "ch";
  let statusClasses = "";
  switch (status) {
    case "ok":
      statusClasses = "border-teal-500 text-teal-700";
      break;
    case "err":
      statusClasses = "border-red-500 text-red-600";
      break;
    default:
      statusClasses = "border-purple-400 text-gray-800";
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(blank.id, e.target.value)}
      readOnly={isReadOnly}
      placeholder={blank.placeholder ?? "?"}
      spellCheck={false}
      style={{ width }}
      className={`inline-block font-mono text-[13px] text-center border-0 border-b-2 bg-transparent outline-none px-1 mx-0.5 transition-colors ${statusClasses}`}
    />
  );
};
