import React from "react";
// import { ReactComponent as Loader } from "../../assets/loader.svg";
// import { ReactComponent as Relax } from "../../assets/relax.svg";

import { assets } from "../../utils/images";

const OutlineContainer = ({ content, loading, hasResponse }) => {
  return (
    <>
      {hasResponse ? (
        <section className="overflow-y-scroll">
          <h4 className="text-center text-red-600 text-3xl pt-9 font-satoshi">
            Heya! Please find the generated outline
          </h4>
          <article className="flex flex-col flex-wrap justify-center py-[3%] px-[3%] text-slate-900 text-2xl whitespace-pre-line font-satoshi">
            {content}
          </article>
        </section>
      ) : (
        <section>
          <h4 className="text-center text-red-600 text-3xl pt-9 font-satoshi">
            The Generated outline will show here
          </h4>
          <div className="mt-[10%]">
            <img
              src={assets[5]}
              alt="placeholder"
              className="mx-auto w-[70%]"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default OutlineContainer;
