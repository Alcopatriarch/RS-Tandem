import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 w-full">
      <div className="border-t border-american-silver"></div>
      <div
        className={`h-20 bg-dark-gunmetal dark:bg-milk flex flex-col items-center justify-center text-center px-7`}
      >
        <span className="text-[32px] text-american-silver dark:text-dark-gunmetal font-figtree">
          About us
        </span>
      </div>
    </footer>
  );
};
