import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SelectLang from "../components/UI/SelectLang";
import { Configuration, OpenAIApi } from "openai";
import toast, { Toaster } from "react-hot-toast";
import OutlineContainer from "../components/UI/ArticleOutline/OutlineContainer";
import Form from "../components/UI/ArticleOutline/Form";
import Toggle from "../components/UI/Toggle";
import ToggleContent from "../components/UI/ArticleOutline/ToggleContent";

const ArticleOutline = () => {
  const [charCount, setCharCount] = useState(0);
  const [articleDetails, setArticleDetails] = useState({
    topic: "",
    keyword: "",
    language: "",
    tone: "",
    numResults: "",
  });
  const [selectedLang, setSelectedLang] = useState("English");
  const [selectTone, setSelectTone] = useState("Professional");
  const [numResults, setnumResults] = useState(1);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showInput, setShowInput] = useState(true);

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
      tone: articleDetails.tone,
      numResults: articleDetails.numResults,
    };
    console.log(formData);
    //clear inputs
    setArticleDetails({
      ...articleDetails,
      topic: "",
      keyword: "",
      language: "",
      tone: "",
      numResults: "",
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

        prompt: `Write ${input.numResults} article outlines in the selected language, and write each outline on a new line
        ### 
        caption: Outline on how to build a successful career
        keyword: Career development
        langauge: English
        tone: Professional
        results: 2
        outline: 
        
        Tips on building a successful career

        1. Overview
        2. Identify your goals
        3. Keep track of progress
        4. Make a plan 
        5. Stay positive 
        6. Reflect often 
        7. Network effectively
        8. Know your strengths. 
        9. Practice minfulness 
        10. Conclusion

        Strategies  on building a successful career

        1. It all begins with your purpose
        2. Have a clear vision
        3. Set career goals
        4. Develop the skills, attitude and competence
        5. Find a mentor 
        6. Build professional networks
        7. Read and study anything related to your career path
        8. Sieze opportunities to expand yourself
        9. Conclusion 
        ###
         caption: ${input.topic}
         language: ${input.language}
         keyword: ${input.keyword}
         tone: ${input.tone}
         results: ${input.numResults}
         outline:
        `,
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        n: 2,
      });
      console.log(result.data.choices[0].text.trim());
      // const response = result.data.choices[0].text.trim();
      // // send data to DB
      // console.log(response);
      // setContent(response);
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
            <section className="w-full mb-10 border-[3px] border-slate-200 rounded-2xl p-[2%] md:w-[25%] h-[50%]">
              {showInput ? (
                <Form
                  handleSubmission={handleSubmission}
                  handleTopic={handleTopic}
                  handleKeyWord={handleKeyWord}
                  charCount={charCount}
                  articleDetails={articleDetails}
                  setArticleDetails={setArticleDetails}
                  selectedLang={selectedLang}
                  selectTone={selectTone}
                  setSelectTone={setSelectTone}
                  isToggled={isToggled}
                  setIsToggled={setIsToggled}
                  numResults={numResults}
                  setnumResults={setnumResults}
                />
              ) : (
                <section>
                  <OutlineContainer />
                </section>
              )}
            </section>
            <ToggleContent
              showContent={showContent}
              showInput={showInput}
              setShowInput={setShowInput}
              setShowContent={setShowContent}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArticleOutline;
