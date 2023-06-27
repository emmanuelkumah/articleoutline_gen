import React from "react";
import swing from "../../../assets/images/swing.gif";

const AO_Placeholder = ({ heading, subHeading }) => {
  return (
    <>
      <section className="flex flex-col px-4 py-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={swing}
            alt="placeholder"
            className="w-[35%] md:w-[20%] pb-7"
          />
          <h2 className="outline_heading_gradient">{heading}</h2>
        </div>
        <div className="text-xl font-satoshi font-thin mt-3">{subHeading}</div>
      </section>
    </>
  );
};

export default AO_Placeholder;
