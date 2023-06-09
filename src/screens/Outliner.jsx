import React from "react";
import Layout from "../components/Layout/Layout2";
import "../App.css";
import TopicInput from "../components/TopicInput";

const Outliner = () => {
  return (
    <div className="app">
      <Layout>
        <TopicInput />
      </Layout>
    </div>
  );
};

export default Outliner;
