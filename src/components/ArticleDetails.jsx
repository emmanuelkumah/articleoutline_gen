import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineCopy } from "react-icons/ai";


const ArticleDetails = ({ outline }) => {
  const [copied, setCopied] = useState(false);

  // useEffect(() => {
  //   const outlineInDB = ref(db);

  //   push(outlineInDB, outline);
  // }, []);

  const handleCopy = () => {
    setCopied(true);
    copyToClipboardMsg();
  };
  const copyToClipboardMsg = () => {
    toast.success("Content successfully copied to clipboard");
  };

  return (
    <>
      <section>
        <h2 className="text-2xl mt-9">Here you go, your outline is ready !</h2>
        <div className="flex overflow-y-auto">
          <article className="flex gap-8 w-[320px] bg-indigo-100 rounded md:w-full px-9 ">
            {outline}
          </article>
          <CopyToClipboard text={outline} onCopy={handleCopy}>
            <div>
              <AiOutlineCopy className="text-3xl" />
            </div>
          </CopyToClipboard>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default ArticleDetails;
