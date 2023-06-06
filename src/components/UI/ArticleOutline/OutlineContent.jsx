import React from "react";
import CopyToClip from "./CopyToClip";

const OutlineContent = ({ content }) => {
  return (
    <>
      <section className="pl-7 pt-10 overflow-y-scroll">
        <article className="flex flex-col flex-wrap justify-center py-[3%] text-slate-900 text-2xl whitespace-pre-line font-satoshi">
          {content}
        </article>
        <CopyToClip content={content} />
      </section>
    </>
  );
};

export default OutlineContent;
