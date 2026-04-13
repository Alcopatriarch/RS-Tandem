import { t } from "i18next";
import { MAX_ATTEMPTS } from "../../../../constants/DashboardConstants";

export const AttemptsInfo = ({ attempts }: { attempts: number }) => {
  const left = MAX_ATTEMPTS - attempts;

  return (
    <div className="flex items-center">
      <span className="text-xs font-bold text-red-500">
        {t("lesson.attemptsLeft")} {left}
      </span>
    </div>
  );
};
