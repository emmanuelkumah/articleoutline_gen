import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex justify-between  bg-slate-800 w-full mt-[10%] px-7 py-5">
      <p> © 2023. All Rights Reserved.</p>
      <div className="flex gap-7 justify-around">
        <div>
          <AiOutlineGithub />
        </div>
        <div>
          <AiOutlineLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
