import React from "react";
import { assets } from "../../../utils/images";

const OutlinePlaceholder = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={assets[7]} alt="placeholder" className="w-[10%]" />
          <h2 className="sub_heading_gradient">
            Let's start generating the outline now, enter your inputs
          </h2>
        </div>
      </section>
    </>
  );
};

export default OutlinePlaceholder;
