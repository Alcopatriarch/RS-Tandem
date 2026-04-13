import { useTranslation } from "react-i18next";

const AboutUsTop: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 text-center bg-milk dark:bg-dark-gunmetal">
      <h1 className="text-5xl text-dark-gunmetal  dark:text-american-silver font-bold mb-6">
        {t("about.title")}
      </h1>
      <p className="max-w-1x1 whitespace-pre-wrap text-2xl text-dark-gunmetal dark:text-american-silver">
        {t("about.descriptionLine1")} <br></br>
        {t("about.descriptionLine2")}
      </p>
    </section>
  );
};

export default AboutUsTop;
