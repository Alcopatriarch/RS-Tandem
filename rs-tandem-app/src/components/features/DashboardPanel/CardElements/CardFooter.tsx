import { t } from "i18next";
import { AttemptsInfo } from "./AttemptsInfo";
import { BtnCard } from "./BtnCard";

export const CardFooter = ({
  onCheck,
  onReset,
  disabled,
  revealed,
  attempts,
  done,
}: {
  onCheck: () => void;
  onReset: () => void;
  disabled: boolean;
  revealed: boolean;
  attempts: number;
  done: boolean;
}) => (
  <div className="mt-4 flex items-center gap-3 flex-wrap">
    <BtnCard onClick={onCheck} disabled={disabled || revealed || done}>
      {t("lesson.buttons.check")}
    </BtnCard>
    <BtnCard onClick={onReset} ghost disabled={done || revealed}>
      {t("lesson.buttons.reset")}
    </BtnCard>
    {attempts > 0 && !done && !revealed && <AttemptsInfo attempts={attempts} />}
  </div>
);
