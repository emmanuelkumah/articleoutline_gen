import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { FormOptionsContext } from "../../../Context/Context";
FormOptionsContext;

const AO_Response = () => {
  const { fetchedData, handleCopyToClip } = useContext(FormOptionsContext);

  const showData = fetchedData.map((item) => {
    const { outline, id } = item;
    return <p key={id}>{outline}</p>;
  });

  return (
    <>
      <section className="border border-emerald-300 rounded-lg overflow-y-auto h-[80vh]">
        <article className="flex flex-col flex-wrap justify-center py-[8%] px-[5%] text-slate-100 text-xl whitespace-pre-line font-satoshi">
          {showData}
          <div className="mt-[2%]">
            <CopyToClipboard
              className="text-slate-200 hover:text-teal-500"
              onCopy={handleCopyToClip}
            >
              <AiOutlineCopy />
            </CopyToClipboard>
          </div>
        </article>
      </section>
    </>
  );
};

export default AO_Response;
