import { Header } from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Footer } from "./components/layout/Footer";
import "./App.css";
import { useState } from "react";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <BrowserRouter>
      <div className="absolute top-0 left-0 w-[100%] min-h-screen bg-[#11212D] font-figtree">
        <div className={`${isDark ? "dark" : ""} flex flex-col min-h-screen`}>
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
    </BrowserRouter>
  );
}

export default App;
