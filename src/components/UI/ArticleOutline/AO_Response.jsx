import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillDislike, AiFillLike, AiOutlineCopy } from "react-icons/ai";

import { FormOptionsContext } from "../../../Context/Context";
FormOptionsContext;

const AO_Response = () => {
  const { showResponse, handleCopyToClip } = useContext(FormOptionsContext);
  const delimiter = "\n\n";

  const responseSections = showResponse.split(delimiter);

  return (
    <>
      <section className="pl-7 pt-10 overflow-y-scroll">
        <article className="flex flex-col flex-wrap justify-center py-[3%] text-slate-100 text-2xl whitespace-pre-line font-satoshi">
          {/* {showResponse} */}
          <section className="transition-colors duration-0 border border-slate-300 mb-10 rounded-lg shadow-lg p-6 cursor-pointer hover:transition-colors hover:duration-500 hover:border-teal-500  hover:shadow-indigo-500">
            <h2>{responseSections[0]}</h2>
            <p className="text-xl pt-7">{responseSections[1]}</p>
            <div>
              <CopyToClipboard
                text={responseSections[1]}
                onCopy={handleCopyToClip}
              >
                <AiOutlineCopy />
              </CopyToClipboard>
            </div>
          </section>
          <section className="transition-colors duration-0 border border-slate-300 mb-10 rounded-lg shadow-lg p-6 cursor-pointer hover:transition-colors hover:duration-500 hover:border-teal-500  hover:shadow-indigo-500">
            <h2>{responseSections[2]}</h2>
            <p className="text-xl pt-7">{responseSections[3]}</p>
            <div className="flex justify-evenly mt-[10%]">
              <CopyToClipboard
                text={responseSections[3]}
                onCopy={handleCopyToClip}
              >
                <AiOutlineCopy />
              </CopyToClipboard>
              <AiFillLike />
              <AiFillDislike />
            </div>
          </section>
        </article>
      </section>
    </>
  );
};

export default AO_Response;
