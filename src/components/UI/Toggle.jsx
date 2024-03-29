import React, { useContext } from "react";
import { ArticleOutlineCtx } from "../../Context/articleOutlineCtx";

const Toggle = () => {
  const { showOptions, setShowOptions } = useContext(ArticleOutlineCtx);

  const handleChange = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <div className="flex flex-col my-7">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleChange}
            checked={showOptions}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
          <span className="ml-3 text-sm font-medium text-slate-200 dark:text-gray-300">
            Advanced options
          </span>
        </label>
      </div>
    </>
  );
};

export default Toggle;
