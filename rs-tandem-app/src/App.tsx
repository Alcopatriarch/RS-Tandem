import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import AppContent from "./AppContent";

function App() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };
  return (
    <BrowserRouter>
     <AppContent isDark={isDark} toggleTheme = {toggleTheme}/>
    </BrowserRouter>
  );
}

export default App;
