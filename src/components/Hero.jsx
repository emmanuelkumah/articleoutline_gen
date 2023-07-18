import React from "react";
import { Button } from "flowbite-react";
import "../../src/App.css";
import { TypeAnimation } from "react-type-animation";
import img1 from "../assets/images/img-1.svg";
import img2 from "../assets/images/img-2.svg";
import marketter from "../assets/images/icon-26.svg";
import copywriting from "../assets/images/copywriting-1.svg";

const Hero = () => {
  return (
    <div>
      <section className="grid place-items-center py-9 px-4">
        <div className="text-center mt-[10%]">
          <h1 className="text-white text-3xl font-bold md:text-5xl">
            Optimize your content strategy
            <span className="relative mx-2 whitespace-nowrap">
              swiftly
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-3/4 left-0 h-[0.6em] w-full fill-emerald-500/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>
          </h1>
        </div>
        {/* hero images */}
        <div>
          <div className="invisible md:visible absolute top-[20%] left-[25%]">
            <img src={img1} alt="hero1" className="w-[40%] relative left-7" />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Freelancer
            </p>
          </div>
          <div className="invisible md:visible absolute top-[50%] left-[5%]">
            <img src={img2} alt="hero2" className="w-[40%] relative left-7" />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Marketer
            </p>
          </div>
          <div className="invisible md:visible absolute top-[20%] right-[7%]">
            <img
              src={copywriting}
              alt="hero3"
              className="w-[40%] relative left-10"
            />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Article Outline
            </p>
          </div>
          <div className="invisible md:visible absolute top-[66%] right-[10%]">
            <img
              src={marketter}
              alt="hero4"
              className="w-[50%] relative left-7"
            />
            <p className="bg-slate-400 text-slate-950 rounded-full w-fit px-4 mt-2">
              Copywriting
            </p>
          </div>
        </div>
        <div className="my-10">
          <span className="text-3xl text-center capitalize md:text-4xl">
            Écrire helps you{" "}
          </span>
          <span className="typewriter_gradient">
            <TypeAnimation
              sequence={[
                "check grammar",
                1000,
                "paraphrase words",
                1000,
                "generate article outline",
                1000,
                "generate article ideas",
                1000,
                "write short poems",
                1000,
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="my-5">
          <p className="font-poppins font-thin leading-8 text-xl text-slate-200 text-center  md:px-[17%]">
            No more struggling with writer's block. Generate high quality AI
            driven content. Get free content for your blogs, brochure, emails
            and websites.
          </p>
        </div>

        <Button className="app_button">Start writing for free</Button>
        <div>
          <p>No Credit card required </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
