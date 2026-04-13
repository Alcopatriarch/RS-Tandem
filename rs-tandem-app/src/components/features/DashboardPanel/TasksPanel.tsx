import { useState } from "react";
import TopicCard from "./DashboardCard";
import EXERCISES_DATA from "../../../data/dataArrayTopics";
import type { Topic } from "../../../types/Dashboard/Topic";
import TopicView from "./TopicView/TopicView";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type FilterType = "All" | "javascript" | "typescript" | "algorithms";

const TasksPanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  const catIconMap: Record<string, "JS" | "TS" | "Algorithms"> = {
    javascript: "JS",
    typescript: "TS",
    algorithms: "Algorithms",
  };

  if (activeTopic) {
    return (
      <TopicView topic={activeTopic} onBack={() => setActiveTopic(null)} />
    );
  }

  const filteredCategories = EXERCISES_DATA.categories.filter((cat) => {
    if (activeFilter === "All") return true;
    return cat.id === activeFilter;
  });

 return (
    <div className="h-screen flex flex-col bg-[#F8F9FA] w-full font-figtree">
      <div className="max-w-5xl mx-auto w-full flex flex-col h-full px-4">
        <div className="flex flex-wrap gap-2 pt-8 mb-6 shrink-0">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${
              activeFilter === "All"
                ? "bg-[#273B4A] text-white"
                : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {t("dashboard.filters.all")}
          </button>

          {EXERCISES_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as FilterType)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${
                activeFilter === cat.id
                  ? "bg-[#273B4A] text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {catIconMap[cat.id] ?? cat.label}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCategories.map((cat) =>
              cat.topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  idCard={topic.id}
                  title={topic.label}
                  category={catIconMap[cat.id] ?? "Algorithms"}
                  level="Basic"
                  xpReward={topic.totalPoints}
                  totalTasks={topic.rounds.length}
                  onActionClick={() => navigate(`/learn/${topic.id}`)}
                />
              ))
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPanel;
