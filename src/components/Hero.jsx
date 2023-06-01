import React from "react";
import "../../src/App.css";
import { assets } from "../utils/images";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <section className="grid place-items-center py-9 px-4">
        <div className="text-center mt-10">
          <p className="text-slate-200 text-xl py-6 font-thin">
            Generate quality content swiftly
          </p>
          <h1 className="text-white text-5xl md:text-7xl">
            Best AI Generator for creating
          </h1>
        </div>
        {/* hero images */}
        <div>
          <div className="invisible md:visible absolute top-[10%] left-[15%]">
            <img
              src={assets[0]}
              alt="hero1"
              className="w-[40%] relative left-5"
            />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Freelancer
            </p>
          </div>
          <div className="invisible md:visible absolute top-[50%] left-[5%]">
            <img
              src={assets[1]}
              alt="hero2"
              className="w-[40%] relative left-5"
            />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Marketter
            </p>
          </div>
          <div className="invisible md:visible absolute top-[35%] right-[7%]">
            <img
              src={assets[2]}
              alt="hero3"
              className="w-[40%] relative left-10"
            />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Technical writer
            </p>
          </div>
          <div className="invisible md:visible absolute top-[56%] right-[20%]">
            <img
              src={assets[3]}
              alt="hero4"
              className="w-[40%] relative left-5"
            />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Publisher
            </p>
          </div>
        </div>
        <h2 className="text-white text-4xl py-3 orange_gradient">
          Product Description
        </h2>
        <p className="font-poppins font-thin leading-6 text-l text-slate-200 text-justify mt-7">
          No more struggling with writer's block, generate high quality AI
          driven content for your blogs, brochure, emails and website
        </p>
        <div className="flex gap-10 mt-7 text-slate-200">
          <div className="flex gap-2 font-thin border-l-4 border-red-500 rounded-lg px-3 py-2">
            <p>
              <BsKeyFill />
            </p>
            <p>No Sign ups </p>
          </div>
          <div className="flex gap-2 font-thin border-r-4 border-red-500 rounded-lg px-3 py-2">
            <p>No credit card</p>
            <p>
              <AiOutlineCreditCard />
            </p>
          </div>
        </div>
        <button className="bg-red-700 rounded-full mt-9 font-poppins font-thin text-2xl text-white px-5 py-2 animate-bounce ">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Hero;
