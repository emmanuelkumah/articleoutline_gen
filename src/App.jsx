import Hero from "./components/Hero";
import Layout from "./components/Layout/Layout";
import Reviews from "./components/Reviews";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Layout>
          <Hero />
          <Reviews />
        </Layout>
      </div>
    </>
  );
}

export default App;
