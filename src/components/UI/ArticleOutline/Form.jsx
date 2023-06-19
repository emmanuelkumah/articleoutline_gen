import React, { useContext } from "react";
import { AdvancedOptionsContext } from "../../../Context/Context";
import SelectLang from "../SelectLang";
import Toggle from "../Toggle";
import SelectTone from "./SelectTone";
import SelectNumResults from "./SelectNumResults";

const Form = ({}) => {
  const { showOptions, setShowOptions } = useContext(AdvancedOptionsContext);
  return (
    <div>
      <form className="px-4 py-6">
        <div>
          <div className="flex justify-between mb-3">
            <label htmlFor="articleTitle">Article Title</label>
            {/* <p className={charCount === 200 ? "text-red-500 text-xl" : ""}>
              {charCount}/200
            </p> */}
          </div>

          <input
            className="input_text"
            type="text"
            name="articleTitle"
            id=""
            placeholder="Enter topic"
            required
            // onChange={handleTopic}
            // value={articleDetails.topic}
            maxLength={200}
          />
        </div>
        <div>
          <div className="my-4">
            <label htmlFor="keyword">Keyword</label>
            <span className="text-sm text-slate-400 px-3">(optional)</span>
          </div>
          <input
            className="input_text"
            type="text"
            placeholder="Add any related keyword"
            name="keyword"
            // onChange={handleKeyWord}
            // value={articleDetails.keyword}
          />
        </div>
        <Toggle />
        {showOptions && (
          <div>
            <SelectLang />
            <SelectNumResults />
            <SelectTone />
          </div>
        )}

        <button className="button_cta">Generate</button>
      </form>
    </div>
  );
};

export default Form;
