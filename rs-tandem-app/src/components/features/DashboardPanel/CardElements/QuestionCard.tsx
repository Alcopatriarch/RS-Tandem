import { type ReactNode } from "react";

export const QuestionCard = ({ children }: { children: ReactNode }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
    {children}
  </div>
);
