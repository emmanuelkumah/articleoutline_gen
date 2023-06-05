import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SelectLang from "../components/UI/SelectLang";
import Content from "../components/UI/OutlineContent";
import { Configuration, OpenAIApi } from "openai";
import toast, { Toaster } from "react-hot-toast";
import OutlineContent from "../components/UI/OutlineContent";
import { ReactComponent as Loader } from "../assets/loader.svg";

const ArticleOutline = () => {
  const [charCount, setCharCount] = useState(0);
  const [articleDetails, setArticleDetails] = useState({
    topic: "",
    keyword: "",
    language: "",
  });
  const [selectedLang, setSelectedLang] = useState("English");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);

  const handleTopic = (e) => {
    const count = e.target.value;
    setArticleDetails({ ...articleDetails, topic: e.target.value });
    setCharCount(count.length);
  };

  const handleKeyWord = (e) => {
    setArticleDetails({ ...articleDetails, keyword: e.target.value });
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submitted");

    const formData = {
      topic: articleDetails.topic,
      keyword: articleDetails.keyword,
      language: articleDetails.language,
    };
    console.log(formData);
    //clear inputs
    setArticleDetails({
      ...articleDetails,
      topic: "",
      keyword: "",
      language: "",
    });
    setLoading(true);
    //send data to openai
    fetchData(formData);
  };

  //open ai config
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_REACT_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  async function fetchData(input) {
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate blog outline on ${input.topic} in ${input.language} with ${input.keyword} as keyword`,
        temperature: 0.5,
        max_tokens: 140,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const response = result.data.choices[0].text;
      // send data to DB
      console.log(response);
      setContent(response);
      setLoading(false);
      setHasResponse(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmission}>
          <section className="px-5 mt-4">
            <div>
              <div className="flex justify-between mb-5">
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
              <div className="my-5">
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
          </section>
          <section>
            {loading &&  <Loader />}
           
            <OutlineContent content={content} hasResponse={hasResponse} />
          </section>
        </form>
      </Layout>
    </>
  );
};

export default ArticleOutline;
