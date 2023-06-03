import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-[5%]">
      <p className="flex justify-center">
        Copyright. All rights reserved
        <span className="px-2">Built by efkumah</span>
      </p>
      <p className="flex justify-center gap-6 text-3xl py-4">
        <AiOutlineGithub />
        <AiOutlineLinkedin />
      </p>
    </div>
  );
};

export default Footer;
