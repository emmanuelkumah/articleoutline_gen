import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Outliner from "./pages/Outliner";

function App() {
  //https://openai-179fb-default-rtdb.firebaseio.com/
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outliner" element={<Outliner />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
