import React, { useState, useEffect } from "react";
import AO_MobileLayout from "./AO_MobileLayout";
import AO_WebLayout from "./AO_WebLayout";
import { FormOptionsContext } from "../../../Context/Context";
import toast, { Toaster } from "react-hot-toast";
import { openai } from "../../../api/openai";
import { database } from "../../../api/firebase";
import { set, ref, get } from "firebase/database";

const AO_Home = () => {
  const [formFields, setFormFields] = useState({
    topic: "",
    keyword: "",
    language: "",
    numResults: "",
  });
  const [showOptions, setShowOptions] = useState(false);
  const [switchView, setSwitchView] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [hasResponse, setHasResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState("");
  const [copied, setCopied] = useState(false);
  const [startNew, setStartNew] = useState(false);
  const [fetchData, setFetchData] = useState("Hi");

  //Fetch data from Database on render
  useEffect(() => {
    readData();
  }, []);

  //write user data to DB
  function writeOutlineData(data) {
    set(ref(database, "response"), {
      details: data,
    });
  }

  //read from database
  // const readOutlineData = () => {
  //   const detailsRef = ref(database, "response/details");
  //   onValue(detailsRef, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);

  //     setFetchData(data);
  //   });
  // };
  // readOutlineData();

  async function readData() {
    const snapshot = await get(ref(database, "response"));
    const data = snapshot.val();
    console.log(data);
    setShowResponse(data);
  }

  const verifyTopicInputLength = (topic) => {
    if (topic.length < 5) {
      toast.error("Topic should be more than 5 characters");
      console.log(topic);
      setFormFields({ ...formFields, topic: topic });
    }
  };

  const resetCharCount = () => {
    setCharCount(0);
  };

  const handleTopicInput = (e) => {
    const topic = e.target.value;
    setFormFields({ ...formFields, topic });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setCharCount((charCount) => charCount - 1);
      if (e.target.value < 1) {
        resetCharCount();
      }
    } else {
      setCharCount((charCount) => charCount + 1);
    }
  };

  const handleKeywordInput = (e) => {
    const keyword = e.target.value;
    setFormFields({ ...formFields, keyword });
  };

  const handleLanguageSelection = (selectedLanguage) => {
    const language = selectedLanguage.value;
    setFormFields({ ...formFields, language });
  };

  const handleNumResultsInput = (numResultsSelected) => {
    const numResults = numResultsSelected.value;
    setFormFields({ ...formFields, numResults });
  };

  //copy to clipboard
  const handleCopyToClip = () => {
    setCopied(true);
    copyToClipboardMsg();
  };

  const copyToClipboardMsg = () => {
    toast.success("Content successfully copied to clipboard");
  };
  //handle reset of result

  const handleResetResponse = () => {
    setHasResponse(false);
  };

  //handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    verifyTopicInputLength(formFields.topic);

    const data = {
      topic: formFields.topic,
      keyword: formFields.keyword,
      language: formFields.language,
      number: formFields.numResults,
    };
    //send data to openai
    generateResponse(data);
    //show loader
    setLoading(true);
    //clear forms
    setFormFields({
      ...formFields,
      topic: "",
      keyword: "",
    });
  };

  //fetch response
  async function generateResponse(input) {
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",

        prompt: `Write ${input.number} article outlines in the selected language, and write each outline on a new line
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
         results: ${input.number}
         outline:
        `,
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        n: 2,
      });

      const openAiResult = result.data.choices[0].text.trim();
      setHasResponse(true);
      setLoading(false);
      //push response to db
      writeOutlineData(openAiResult);

      //setShowResponse(openAiResult);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormOptionsContext.Provider
      value={{
        showOptions,
        setShowOptions,
        switchView,
        setSwitchView,
        charCount,
        formFields,
        handleTopicInput,
        handleKeywordInput,
        handleKeyDown,
        handleFormSubmission,
        handleLanguageSelection,
        handleNumResultsInput,
        handleResetResponse,
        handleCopyToClip,
        setShowResponse,
        showResponse,
        hasResponse,
        loading,
      }}
    >
      <div className="md:hidden">
        <div>
          <Toaster position="top-center" />
        </div>
        <AO_MobileLayout
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
      </div>
      <div className="hidden md:block">
        {/* <div>
          <Toaster position="top-center" />
        </div> */}
        <AO_WebLayout />
      </div>
    </FormOptionsContext.Provider>
  );
};

export default AO_Home;
