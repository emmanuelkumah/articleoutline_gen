import React, { useState, useRef } from "react";
import AO_MobileLayout from "./AO_MobileLayout";
import AO_WebLayout from "./AO_WebLayout";
import { FormOptionsContext } from "../../../Context/Context";

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

  const handleTopicInput = (e) => {
    const topic = e.target.value;
    setFormFields({ ...formFields, topic });
    setCharCount((charCount) => charCount + 1);
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

    console.log(
      formFields.topic,
      formFields.keyword,
      formFields.language,
      formFields.numResults
    );
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
        handleFormSubmission,
        handleLanguageSelection,
        handleNumResultsInput,
      }}
    >
      <div className="md:hidden">
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
