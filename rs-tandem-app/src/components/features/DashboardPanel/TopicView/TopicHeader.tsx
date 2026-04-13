import { useTranslation } from "react-i18next";

interface TopicHeaderProps {
  label: string;
  allFinished: boolean;
  onBack: () => void;
}

export const TopicHeader = ({ label, allFinished, onBack }: TopicHeaderProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <button
          onClick={onBack}
          className="text-xs text-gray-400 hover:text-[#273B4A] mb-2 flex items-center gap-1 transition-colors font-bold"
        >
          ← {t("common.back")}
        </button>
        <h1 className="text-2xl font-black text-[#11212D] tracking-tight">
          {label}
        </h1>
      </div>
      {allFinished && (
        <span className="text-sm font-bold bg-teal-100 text-teal-700 px-3 py-1 rounded-full shrink-0 self-start mt-7">
          {t("lesson.completion.status")}
        </span>
      )}
    </div>
  );
};