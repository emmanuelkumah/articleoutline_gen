import React, { useContext } from "react";
// import CopyToClip from "./CopyToClip";
import { FormOptionsContext } from "../../../Context/Context";
FormOptionsContext;

const AO_Response = () => {
  const { showResponse } = useContext(FormOptionsContext);
  const delimiter = "\n\n"; // Replace with your desired delimiter

  const sections = showResponse.split(delimiter);

  console.log(sections.length);

  return (
    <>
      <section className="pl-7 pt-10 overflow-y-scroll">
        <article className="flex flex-col flex-wrap justify-center py-[3%] text-slate-100 text-2xl whitespace-pre-line font-satoshi">
          {/* {showResponse} */}
          <div className="border border-slate-300 rounded-lg mb-10 p-4">
            <h2>{sections[0]}</h2>
            <p className="text-xl pt-7">{sections[1]}</p>
          </div>
          <div className="border border-slate-300 mb-10 rounded-lg p-4">
            <h2>{sections[2]}</h2>
            <p className="text-xl pt-7">{sections[3]}</p>
          </div>
        </article>
        {/* <CopyToClip /> */}
      </section>
    </>
  );
};

export default AO_Response;
