import { Header } from "./components/layout/Header";
import { Welcome } from "./pages/Welcome";
import { Footer } from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="absolute top-0 left-0 w-[1440px] h-[986px] bg-[#11212D] font-figtree">
      <Header darkMode lang="RU" />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
