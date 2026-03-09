import { Header } from "./components/layout/Header";
import { Welcome } from "./pages/Welcome";
import { Footer } from "./components/layout/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <div className="absolute top-0 left-0 w-[1440px] h-[986px] bg-[#11212D] font-figtree">
      <div className={isDark ? "dark" : ""}>
        <Header darkMode={isDark} lang="RU" onThemeChange={toggleTheme} />
        <Welcome darkMode={isDark} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
