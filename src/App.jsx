import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MainApp from "./pages/MainApp";
import ArticleOutline from "./pages/ArticleOutline";
import ArticleIdeas from "./pages/ArticleIdeas";
import Summarizer from "./pages/Summarizer";
import Grammer from "./pages/Grammer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="/app/outline" element={<ArticleOutline />} />
          <Route path="/app/ideas" element={<ArticleIdeas />} />
          <Route path="/app/summary" element={<Summarizer />} />
          <Route path="/app/grammer" element={<Grammer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
