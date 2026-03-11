import { Header } from "./components/layout/Header";
// import { Welcome } from "./pages/Welcome";
import { Footer } from "./components/layout/Footer";
import "./App.css";
import { useState } from "react";
import Auth from "./pages/Auth";

function App() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <div className="absolute top-0 left-0 w-[100%] min-h-screen bg-[#11212D] font-figtree">
     <div className={`${isDark ? "dark" : ""} flex flex-col min-h-screen`}>
        <Header darkMode={isDark} lang="RU" onThemeChange={toggleTheme} />
        {/* <Welcome darkMode={isDark} /> */}
        <main className="flex-1 flex items-center justify-center p-1">
        <Auth />
        {/* <Welcome darkMode={isDark} /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
