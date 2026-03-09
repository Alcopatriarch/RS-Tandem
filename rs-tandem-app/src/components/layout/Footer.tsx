import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="border-t border-[var(--color-american-silver)]"></div>
      <div
        className={`h-[80px] bg-[var(--color-dark-gunmetal)] dark:bg-[var(--color-milk)] flex flex-col items-center justify-center text-center px-7`}
      >
        <span className="text-[32px] text-[var(--color-american-silver)] dark:text-[var(--color-dark-gunmetal)] font-figtree">
          About us
        </span>
      </div>
    </footer>
  );
};
