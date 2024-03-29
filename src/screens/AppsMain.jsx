import React from "react";
import { app_content } from "../utils/dashboard-data";
import SingleCard from "../components/Cards/SingleCard";

const AppsMain = () => {
  return (
    <>
      <section>
        <div className="grid place-items-center">
          <h2 className="sub_heading_gradient">The Writers toolkit</h2>
          <p className="text-lg md:text-xl font-thin">
            Let's empower your ideas with AI
          </p>
          <p className="text-xl my-4">What do you want to create?</p>
        </div>
      </section>

      <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-[10%]">
        {app_content.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default AppsMain;
