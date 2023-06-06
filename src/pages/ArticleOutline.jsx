import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SelectLang from "../components/UI/SelectLang";
import { Configuration, OpenAIApi } from "openai";
import toast, { Toaster } from "react-hot-toast";
import OutlineContainer from "../components/UI/OutlineContainer";

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
        prompt: `Use the topic and keyword to generate an article outline in the selected language,and write each outline on a new line.
        ### 
        caption: Outline on how to build a successful career
        keyword: Career development
        langauge: English
        outline: 
        Outline on building a successful career

        1. Identify your goals

        2. Keep track of progress

        3. Make a plan 

        4. Stay positive 

        5. Reflect often 

        6. Network effectively

        7. Know your strengths. 

        8. Practice minfulness 

        9. Conclusion
        ###
         caption: ${input.topic}
         language: ${input.language}
         keyword: ${input.keyword}
         outline:
        `,
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
      });
      const response = result.data.choices[0].text.trim();
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
        <div>
          <div className="flex flex-row flex-wrap px-10 mt-[5%]">
            <section className="w-full mb-10 border-[5px] border-red-400 rounded-2xl p-[2%] md:w-[25%] h-[50%]">
              <form onSubmit={handleSubmission} className="px-4 py-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <label htmlFor="articleTitle">Article Title</label>
                    <p
                      className={
                        charCount === 200 ? "text-red-500 text-xl" : ""
                      }
                    >
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
            </section>

            <section
              className={`${
                hasResponse ? "flex" : "hidden"
              } md:w-[70%] h-[100vh] border rounded-lg bg-slate-300 md:ml-10`}
            >
              <OutlineContainer
                content={content}
                hasResponse={hasResponse}
                loading={loading}
              />
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArticleOutline;
