import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import ArticleDetails from "./ArticleDetails";
import toast, { Toaster } from "react-hot-toast";

const TopicInput = () => {
  const [topic, setTopic] = useState("");
  const [outline, setOutline] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_REACT_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setIsLoading(true);
    validateInput(topic);
    //clear inputs
    setTopic("");
  };

  function validateInput(input) {
    const regExp = /Write an article outline/g;
    const result = regExp.test(input);
    if (!result) {
      inputErrorNotification();
    } else {
      return fetchData(input);
    }
  }

  async function fetchData(input) {
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setOutline(result.data.choices[0].text);
      setIsLoading(false);
      setHasResponse(true);
    } catch (error) {
      console.log(error);
    }
  }

  //error notification
  const inputErrorNotification = () => {
    toast.error("Please use the format in the text input");
  };
  return (
    <>
      <div className="mt-10">
        {/* <button onClick={notify} className="bg-red-50">
          Make a toast
        </button> */}
        <Toaster />
      </div>
      <form className="w-full mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <input
            className="w-full outline-dashed outline-pink-500 p-4 mb-2 bg-white rounded text-md focus:outline md:w-5/6"
            type="text"
            placeholder="Eg. Write an article outline for Functions in JavaScript"
            value={topic}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="bg-red-500	hover:bg-opacity-80 w-full bg-opacity-90 flex-1 p-2 rounded text-white text-lg capitalize disabled:cursor-not-allowed disabled:bg-opacity-75 md:w-1/6 md:ml-8 "
          >
            Generate
          </button>
        </div>
      </form>
      {isLoading && <p>Fetching outline</p>}
      {/* Details  */}
      {hasResponse ? <ArticleDetails outline={outline} /> : ""}
    </>
  );
};

export default TopicInput;
