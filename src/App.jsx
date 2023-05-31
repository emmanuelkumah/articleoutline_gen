import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MainApp from "./pages/MainApp";

function App() {
  //https://openai-179fb-default-rtdb.firebaseio.com/
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<MainApp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
