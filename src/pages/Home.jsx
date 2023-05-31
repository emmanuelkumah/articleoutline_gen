import React from "react";
import Hero from "../components/Hero2";
import Reviews from "../components/Reviews";
import Layout from "../components/Layout/Layout2";

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
