import React, { useState } from "react";
import AO_MobileLayout from "./AO_MobileLayout";
import AO_WebLayout from "./AO_WebLayout";
import { FormOptionsContext } from "../../../Context/Context";
import { fetchData } from "../../../api/openai";
import toast, { Toaster } from "react-hot-toast";

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
  const [showResponse, setShowResponse] = useState("");

  const verifyTopicInputLength = (topicInput) => {
    if (topicInput.length < 5) {
      toast.error("Topic should be more than 5 characters");
      setFormFields({ ...formFields, topic });
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
    //push form data
    // fetchFormData(data);
    // fetchData(data);
    //clear forms
    setFormFields({
      ...formFields,
      topic: "",
      keyword: "",
    });
  };

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
        setShowResponse,
        showResponse,
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
        <AO_WebLayout />
      </div>
    </FormOptionsContext.Provider>
  );
};

export default AO_Home;
