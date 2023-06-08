import React from "react";
import { Card } from "flowbite-react";
import { assets } from "../../utils/images";

const Card_Main = () => {
  return (
    <>
      <section className="flex flex-row flex-wrap justify-center gap-6 mt-[5%] px-10">
        <Card className="flex cursor-none hover:cursor-pointer  hover:transition-all hover:bg-slate-200 md:basis-[30%]">
          <div className="flex">
            <img src={assets[8]} className="w-[20%]" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Article Outline
            </h2>
          </div>

          <p className="font-poppins text-gray-700">
            <p>
              Generate outline of article in seconds, using our powerful AI
              outline generator
            </p>
          </p>
        </Card>
        <Card className="flex border-2 border-emerald-500 hover:border-y-4 cursor-pointer hover:transition-all hover:bg-slate-200 md:basis-[30%]">
          <div className="flex">
            <img src={assets[10]} className="w-[20%]" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Grammar Check
            </h2>
          </div>

          <p className="font-poppins text-gray-700">
            <p>
              Generate outline of article in seconds, using our powerful AI
              outline generator
            </p>
          </p>
        </Card>
        <Card className="flex border-2 border-emerald-500 hover:border-y-4 cursor-pointer hover:transition-all hover:bg-slate-200 md:basis-[30%]">
          <div className="flex">
            <img src={assets[11]} className="w-[20%]" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Article Ideas
            </h2>
          </div>

          <p className="font-poppins text-gray-700">
            <p>
              Generate outline of article in seconds, using our powerful AI
              outline generator
            </p>
          </p>
        </Card>
        <Card className="flex border-2 border-emerald-500 hover:border-y-4 cursor-pointer hover:transition-all hover:bg-slate-200 md:basis-[30%]">
          <div className="flex">
            <img src={assets[9]} className="w-[20%]" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Paragraph Rewrite
            </h2>
          </div>

          <p className="font-poppins text-gray-700">
            <p>
              Generate outline of article in seconds, using our powerful AI
              outline generator
            </p>
          </p>
        </Card>
        <Card className="flex border-2 border-emerald-500 hover:border-y-4 cursor-pointer  hover:bg-slate-200 md:basis-[30%]">
          <div className="flex">
            <img src={assets[9]} className="w-[20%]" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Comming Soon
            </h2>
          </div>

          <p className="font-poppins text-gray-700">
            <p>
              Generate outline of article in seconds, using our powerful AI
              outline generator
            </p>
          </p>
        </Card>
        <Card className="flex border-2 border-emerald-500 hover:border-y-4 cursor-pointer hover:transition-all hover:bg-slate-200 md:basis-[30%]">
          <div className="flex">
            <img src={assets[9]} className="w-[20%]" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Coming Soon
            </h2>
          </div>

          <p className="font-poppins text-gray-700">
            <p>
              Generate outline of article in seconds, using our powerful AI
              outline generator
            </p>
          </p>
        </Card>
      </section>
    </>
  );
};

export default Card_Main;
