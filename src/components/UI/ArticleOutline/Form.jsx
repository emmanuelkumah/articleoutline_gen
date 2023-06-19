import React from "react";
import SelectLang from "../SelectLang";
import Toggle from "../Toggle";
import SelectTone from "./SelectTone";
import SelectNumResults from "./SelectNumResults";

const Form = ({
  handleSubmission,
  handleKeyWord,
  handleTopic,
  articleDetails,
  charCount,
  setSelectedLang,
  setArticleDetails,
  selectedLang,
  selectTone,
  setSelectTone,
  isToggled,
  setIsToggled,
  noResults,
  setNoResults,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmission} className="px-4 py-6">
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
        {/* show advanced options */}
        <Toggle onToggle={setIsToggled} isToggled={isToggled} />

        <section>
          {isToggled ? (
            <div>
              <p className="mt-8">Select Language</p>
              <SelectLang
                setArticleDetails={setArticleDetails}
                articleDetails={articleDetails}
                setSelectedLang={setSelectedLang}
                selectedLang={selectedLang}
              />
              <p className="pt-8">Select Tone</p>
              <SelectTone
                selectTone={selectTone}
                setSelectTone={setSelectTone}
                articleDetails={articleDetails}
                setArticleDetails={setArticleDetails}
              />
              <p className="pt-8">Number of results</p>
              <SelectNumResults
                noResults={noResults}
                setNoResults={setNoResults}
                articleDetails={articleDetails}
                setArticleDetails={setArticleDetails}
              />
            </div>
          ) : (
            ""
          )}
        </section>

        <button className="button_cta">Generate</button>
      </form>
    </div>
  );
};

export default Form;
