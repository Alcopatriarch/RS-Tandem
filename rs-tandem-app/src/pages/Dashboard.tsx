import TasksPanel from "../components/features/DashboardPanel/TasksPanel";

const Dashboard = () => {
  return (
    <div className="h-screen w-full flex items-center flex-col">
      <h2 className="text-[black] text-[25px]">
        Choose a topic to start learning
      </h2>
      <div className="w-full ">
        <div className="w-full">
          <TasksPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
