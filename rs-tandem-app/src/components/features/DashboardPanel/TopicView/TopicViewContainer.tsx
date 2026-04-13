import { useParams, useNavigate } from "react-router-dom";
import TopicView from "./TopicView";
import EXERCISES_DATA from "../../../../data/dataArrayTopics";
import type { Topic } from "../../../../types/Dashboard/Topic";

export const TopicViewContainer = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

 let foundTopic: Topic | null = null;
  for (const cat of EXERCISES_DATA.categories) {
    const match = cat.topics.find((t) => t.id === topicId);
    if (match) {
      foundTopic = match as Topic;
      break;
    }
  }
  return (
    <TopicView 
      topic={foundTopic!}
      onBack={() => navigate("/learn")}
    />
  );
};

export default TopicViewContainer;