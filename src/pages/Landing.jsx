import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import Main from "../components/Main";
import "../../src/App.css";

const Landing = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Main />
      </Layout>
    </div>
  );
};

export default Landing;
