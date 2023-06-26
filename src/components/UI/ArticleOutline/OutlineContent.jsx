import React, { useContext } from "react";
import CopyToClip from "./CopyToClip";
import { FormOptionsContext } from "../../../Context/Context";
FormOptionsContext;

const OutlineContent = () => {
  const { showResponse } = useContext(FormOptionsContext);
  return (
    <>
      <section className="pl-7 pt-10 overflow-y-scroll">
        <article className="flex flex-col flex-wrap justify-center py-[3%] text-slate-100 text-2xl whitespace-pre-line font-satoshi">
          {showResponse}
        </article>
        <CopyToClip />
      </section>
    </>
  );
};

export default OutlineContent;
