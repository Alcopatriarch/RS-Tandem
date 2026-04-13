import { useTranslation } from "react-i18next";
import type { TeamMember } from "../../../types/index";

interface Props {
  member: TeamMember;
}

const AboutCard: React.FC<Props> = ({ member }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-american-silver dark:bg-japanese-indigo text-center p-8 rounded-sm shadow-sm w-[320px]">
      <div className="flex justify-center mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover border-8 border-white dark:border-teal"
        />
      </div>

      <h3 className="text-xl pb-3 font-semibold mt-1 dark:text-american-silver">
        {t(member.name)}
      </h3>

      <a
        href={member.git}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition"
      >
        GitHub
      </a>

      <p className="text-dark-gunmetal dark:text-american-silver mt-4 text-2x1">
        {t(member.description)}
      </p>

      <div className="flex justify-center gap-4 mt-5 text-gray-500"></div>
    </div>
  );
};

export default AboutCard;
