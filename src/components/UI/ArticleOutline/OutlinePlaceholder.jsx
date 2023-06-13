import React from "react";
import { assets } from "../../../utils/images";

const OutlinePlaceholder = ({ heading, subHeading }) => {
  return (
    <>
      <section className="flex flex-col px-4 py-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={assets[7]} alt="placeholder" className="w-[30%]" />
          <h2 className="outline_heading_gradient">{heading}</h2>
        </div>
        <div className="text-xl font-satoshi font-thin mt-3">{subHeading}</div>
      </section>
    </>
  );
};

export default OutlinePlaceholder;
