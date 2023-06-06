import React from "react";
import SelectLang from "../SelectLang";

const Form = ({
  handleSubmission,
  handleKeyWord,
  handleTopic,
  articleDetails,
  charCount,
  setSelectedLang,
  setArticleDetails,
  selectedLang,
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
            onChange={handleTopic}
            value={articleDetails.topic}
            maxLength={200}
          />
        </div>
        <div>
          <div className="mt-8">
            <label htmlFor="keyword">Keyword</label>
          </div>
          <input
            className="input_text"
            type="text"
            placeholder="Add any related keyword"
            name="keyword"
            onChange={handleKeyWord}
            value={articleDetails.keyword}
          />
        </div>
        <div>
          <p className="mt-8">Select Language</p>
          <SelectLang
            setArticleDetails={setArticleDetails}
            articleDetails={articleDetails}
            setSelectedLang={setSelectedLang}
            selectedLang={selectedLang}
          />
        </div>
        <button className="button_cta">Generate</button>
      </form>
    </div>
  );
};

export default Form;
