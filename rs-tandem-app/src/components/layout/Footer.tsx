import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className="shrink-0 w-full">
      <div className="border-t border-american-silver"></div>
      <div
        className={`h-20 bg-milk dark:bg-dark-gunmetal flex flex-col items-center justify-center text-center px-7`}
      >
        <span
          className="text-[32px] text-dark-gunmetal dark:text-american-silver font-figtree cursor-pointer"
          onClick={() => navigate("/about")}
        >
          {t("common.aboutUs")}
        </span>
      </div>
    </footer>
  );
};
