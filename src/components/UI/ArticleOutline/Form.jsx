import React, { useContext } from "react";
import { FormOptionsContext } from "../../../Context/Context";
import SelectLang from "../SelectLang";
import Toggle from "../Toggle";
import SelectTone from "./SelectTone";
import SelectNumResults from "./SelectNumResults";

const Form = ({}) => {
  const {
    showOptions,
    charCount,
    formFields,
    handleTopicInput,
    handleKeywordInput,
    handleFormSubmission,
  } = useContext(FormOptionsContext);

  //destructuring fields
  const { topic, keyword } = formFields;

  return (
    <div>
      <form className="px-4 py-6" onSubmit={handleFormSubmission}>
        <div>
          <div className="flex justify-between mb-3">
            <label htmlFor="articleTitle">Article Title</label>
            <p className={charCount === 200 ? "text-red-500 text-xl" : ""}>
              {charCount}/200
            </p>
          </div>

          <input
            className="input_text"
            type="text"
            name="articleTitle"
            id=""
            placeholder="Enter topic"
            required
            value={topic}
            onChange={handleTopicInput}
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
            value={keyword}
            onChange={handleKeywordInput}
          />
        </div>
        <Toggle />
        {showOptions && (
          <div>
            <SelectLang />
            <SelectNumResults />
          </div>
        )}

        <button className="button_cta">Generate</button>
      </form>
    </div>
  );
};

export default Form;
