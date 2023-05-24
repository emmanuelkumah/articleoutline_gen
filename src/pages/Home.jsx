import React from "react";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Reviews />
      </Layout>
    </>
  );
};

export default Home;
