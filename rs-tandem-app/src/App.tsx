import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-figtree">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  	  <div className="min-h-screen bg-american-silver flex items-center justify-center">
      	<h1 className="text-5xl font-figtree md:text-7xl font-black text-white tracking-tight drop-shadow-2xl animate-pulse">
      	  Tailwind v4 + Vite + React
        </h1>
      </div>
    </>
  );
}

export default App;
