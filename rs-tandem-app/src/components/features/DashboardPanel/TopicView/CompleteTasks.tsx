import { t } from "i18next";
import { QuestionCard } from "../CardElements/QuestionCard";

interface CompletionScreenProps {
  totalScore: number;
  totalPoints: number;
  onBack: () => void;
  onRestart: () => void;
}

export const CompletionScreen = ({ totalScore, totalPoints, onBack, onRestart }: CompletionScreenProps) => {
  const isPerfect = totalScore === totalPoints;

  return (
    <div className="animate-in fade-in duration-500">
      <QuestionCard>
        <div className="text-center py-8 space-y-4">
          <h2 className="text-xl font-black text-[#11212D]">
            {isPerfect ? t("lesson.completion.perfectTitle") : t("lesson.completion.title")}
          </h2>
          
          <p className="text-gray-500 text-sm">
            {t("lesson.completion.score", {
              score: totalScore,
              total: totalPoints,
            })}
          </p>

          <div className="flex flex-col gap-2 max-w-[240px] mx-auto pt-4">
            <button
              onClick={onRestart}
              className="w-full px-6 py-3 bg-teal-500 text-white text-sm font-bold rounded-xl hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              Try again
            </button>

            <button
              onClick={onBack}
              className="w-full px-6 py-3 bg-[#273B4A] text-white text-sm font-bold rounded-xl hover:bg-[#1A2A35] transition-colors"
            >
              ← {t("lesson.backToTopics")}
            </button>
          </div>
        </div>
      </QuestionCard>
    </div>
  );
};