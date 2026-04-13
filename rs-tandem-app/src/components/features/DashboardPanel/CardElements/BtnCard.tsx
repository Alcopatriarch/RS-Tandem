import { cn } from "../../../../utils";

export const BtnCard = ({
  onClick,
  ghost,
  disabled,
  children,
}: {
  onClick: () => void;
  ghost?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "text-sm cursor-pointer font-bold px-4 py-2 rounded-xl border transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
      ghost
        ? "border-gray-200 bg-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50"
        : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50",
    )}
  >
    {children}
  </button>
);
