import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillDislike, AiFillLike, AiOutlineCopy } from "react-icons/ai";
import { FormOptionsContext } from "../../../Context/Context";
import { limit } from "firebase/firestore";
FormOptionsContext;

const AO_Response = () => {
  const { fetchedData, showResponse, handleCopyToClip } =
    useContext(FormOptionsContext);
  //const delimiter = "\n\n";

  //const responseSections = showResponse;

  //const responseSections = showResponse.split(delimiter);

  const data = showResponse.map((result) => (
    <li key={result.id}>{result.data.query}</li>
  ));
  return (
    <>
      <section className="pl-7 pt-10 md:p-0 overflow-y-scroll">
        <article className="flex flex-col flex-wrap justify-center py-[3%] text-slate-100 text-2xl whitespace-pre-line font-satoshi">
          {/* <section className="transition-colors duration-0 border border-slate-300 mb-10 rounded-lg shadow-lg p-6 cursor-pointer hover:transition-colors hover:duration-500 hover:border-teal-500  hover:shadow-indigo-500">
            <h2>{responseSections[0]}</h2>
            <p className="text-xl pt-7">{responseSections[1]}</p>
            <div className="flex justify-evenly mt-[10%]">
              <CopyToClipboard
                className="text-slate-200 hover:text-teal-500"
                text={responseSections[3]}
                onCopy={handleCopyToClip}
              >
                <AiOutlineCopy />
              </CopyToClipboard>

              <AiFillLike className="text-slate-200 hover:text-teal-500" />

              <AiFillDislike className="text-slate-200 hover:text-teal-500" />
            </div>
          </section> */}
          {/* {responseSections[2] && (
            <section className="transition-colors duration-0 border border-slate-300 mb-10 rounded-lg shadow-lg p-6 cursor-pointer hover:transition-colors hover:duration-500 hover:border-teal-500  hover:shadow-indigo-500">
              <h2>{responseSections[2]}</h2>
              <p className="text-xl pt-7">{responseSections[3]}</p>
              <div className="flex justify-evenly mt-[10%]">
                <CopyToClipboard
                  className="text-slate-200 hover:text-teal-500"
                  text={responseSections[3]}
                  onCopy={handleCopyToClip}
                >
                  <AiOutlineCopy />
                </CopyToClipboard>
                <AiFillLike className="text-slate-200 hover:text-teal-500" />
                <AiFillDislike className="text-slate-200 hover:text-teal-500" />
              </div>
            </section>
          )} */}
          <p>{fetchedData}</p>
        </article>
      </section>
    </>
  );
};

export default AO_Response;
