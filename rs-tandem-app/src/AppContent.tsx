import React from 'react'
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import {Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/features/Sidebar/Sidebar";
import { Welcome } from './pages/Welcome';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import type { AppContentType } from './types/AppContentType';

const AppContent = ({isDark,toggleTheme}:AppContentType) => {
    const location = useLocation();
const showSidebarRoutes= ['/about','/profile'];
const showSidebar = showSidebarRoutes.includes(location.pathname);
  return (
     <div className="absolute top-0 left-0 w-[100%] min-h-screen bg-[#11212D] font-figtree">
       {showSidebar&& <Sidebar/>}
        <div className={`${isDark ? "dark" : ""} flex flex-col min-h-screen ${showSidebar ? "ml-[75px]" : ""}`}>
          <Header darkMode={isDark} lang="RU" onThemeChange={toggleTheme} />
          <main className=" bg-milk dark:bg-dark-gunmetal flex-1 flex items-center justify-center p-1">
            <Routes>
              <Route path="/" element={<Welcome darkMode={isDark} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/signUp" element={<Registration />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
  )
}

export default AppContent