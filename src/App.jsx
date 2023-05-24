import "./App.css";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import TopicInput from "./components/TopicInput";

function App() {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
          <TopicInput />
          <Reviews />
        </div>
      </main>
    </>
  );
}

export default App;
