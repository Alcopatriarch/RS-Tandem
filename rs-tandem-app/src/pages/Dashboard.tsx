import TopicCard from "../components/features/DashboardCard/DashboardCard";
// import Card from "../components/features/game/card";
import Quiz from "../components/features/game/quiz";

const Dashboard = () => {
  return <div className="h-screen w-full flex items-center flex-col">
    <h2 className="text-[black] text-[25px]">Choose a topic to start learning</h2>
    <div className="w-full ">
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-full justify-items-center">
   <TopicCard 
    title="Promise"
    category="JS"
    level="Medium"
    xpReward={100}
    totalTasks={10}
    completedTasks={7}
    onActionClick={() => console.log('Continue Promise')}
  />
  <Quiz/>
  </div>
  </div>
  </div>;
};

export default Dashboard;
