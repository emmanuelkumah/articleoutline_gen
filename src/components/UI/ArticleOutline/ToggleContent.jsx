import React, { useState } from "react";

const ToggleContent = ({
  showContent,
  setShowInput,
  setShowContent,
  showInput,
}) => {
  const handleShowContent = () => {
    console.log("content");
    setShowContent(true);
    setShowInput(false);
  };

  const handleShowInput = () => {
    console.log("input");
    setShowInput(!showInput);
    setShowContent(false);
  };
  return (
    <div>
      <div className="flex items-center mb-6">
        <button
          className="bg-slate-400 relative inline-flex flex-1 h-12 w-48 rounded-full cursor-pointer"
          id="headlessui-switch-:rj:"
          role="switch"
          type="button"
          tabindex="0"
          aria-checked="false"
          data-headlessui-state=""
        >
          <div className="absolute w-full h-full grid grid-cols-2 place-content-center place-items-center font-bold text-base text-gray-6 transition-colors">
            <p
              className={`${
                showInput && "bg-emerald-500 px-6 py-3 rounded-l-full"
              }`}
              onClick={handleShowInput}
            >
              Inputs
            </p>
            <p
              className={`${
                showContent && "bg-emerald-500 px-4 py-3 rounded-r-full"
              }`}
              onClick={handleShowContent}
            >
              Content
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ToggleContent;
