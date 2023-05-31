import React from "react";
import "../../src/App.css";

const Hero = () => {
  return (
    <div>
      <section className="grid place-items-center py-9 px-4">
        <h1 className="text-white text-5xl text-center">
          Better AI Writer for creating{" "}
        </h1>
        <h2 className="text-white text-3xl py-3">Article Ideas</h2>
        <p className="text-slate-200 text-justify mt-7">
          Create SEO optimized and plagirism free content for your blogs, emails
          and website
        </p>
        <div className="flex gap-6 mt-7 text-slate-200">
          <p>No Sign ups</p>
          <p>No credit card required</p>
        </div>
        <button className="bg-red-700 rounded-full mt-9 text-3xl text-white  px-3 py-2">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Hero;
