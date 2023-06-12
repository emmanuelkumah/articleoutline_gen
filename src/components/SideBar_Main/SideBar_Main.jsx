import React from "react";
import Card_Main from "../Cards/Card_Main";

const SideBar_Main = () => {
  return (
    <>
      <div className="p-5">
        <div className="grid place-items-center">
          <h2 className="sub_heading_gradient">The Writers toolkit</h2>
          <p className="text-2xl pl-[15%]">Let's empower your ideas with AI</p>
          <p className="mt-4">What do you want to create?</p>
        </div>
        <Card_Main />
      </div>
    </>
  );
};

export default SideBar_Main;
