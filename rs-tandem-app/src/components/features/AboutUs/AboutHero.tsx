import AboutCard from "./AboutCard";
import { team } from "../../../types/index";
import { useTranslation } from "react-i18next";

const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-milk dark:bg-dark-gunmetal pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-american-silver">
          {t("about.teamTitle")}
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member) => (
            <AboutCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
