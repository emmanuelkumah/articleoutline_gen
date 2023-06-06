import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineCopy } from "react-icons/ai";

const CopyToClip = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    setCopied(true);
    copyToClipboardMsg();
  };
  const copyToClipboardMsg = () => {
    toast.success("Content successfully copied to clipboard");
  };
  return (
    <>
      <div className="my-6">
        <CopyToClipboard text={content} onCopy={handleCopyToClipboard}>
          <div>
            <AiOutlineCopy className="text-3xl text-emerald-600" />
          </div>
        </CopyToClipboard>
        <Toaster />
      </div>
    </>
  );
};

export default CopyToClip;
