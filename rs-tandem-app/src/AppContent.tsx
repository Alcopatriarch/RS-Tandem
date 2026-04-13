import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import { Welcome } from "./pages/Welcome";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import type { AppContentType } from "./types/AppContentType";
import Dashboard from "./pages/Dashboard";
import TasksPanel from "./components/features/DashboardPanel/TasksPanel";
import TopicViewContainer from "./components/features/DashboardPanel/TopicView/TopicViewContainer";

const AppContent = ({ isDark, toggleTheme }: AppContentType) => {
  return (
    <div className="absolute top-0 left-0 w-[100%] min-h-screen bg-[#11212D] font-figtree">
      <div
        className={`${isDark ? "dark" : ""} flex flex-col min-h-screen }`}
      >
        <Header darkMode={isDark} onThemeChange={toggleTheme} />
        <main className=" bg-milk dark:bg-dark-gunmetal flex-1 flex items-center justify-center p-1">
          <Routes>
            <Route path="/" element={<Welcome darkMode={isDark} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signUp" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<TasksPanel />} />
            <Route path="/learn/:topicId" element={<TopicViewContainer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppContent;
