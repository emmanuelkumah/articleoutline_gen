import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import ArticleDetails from "./ArticleDetails";
import toast, { Toaster } from "react-hot-toast";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { db } from "../utils/firebase";
import { ref, push, get } from "firebase/database";

const TopicInput = () => {
  const [topic, setTopic] = useState("");
  const [outline, setOutline] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [hasError, setHasError] = useState("");

  // create reference to the database
  const outlineInDB = ref(db);

  useEffect(() => {
    get(outlineInDB).then((snapshot) => {
      if (snapshot.exists()) {
        const arrData = Object.values(snapshot.val());
        console.log(arrData.slice(-1));
      } else {
        console.log("does not exist");
      }
    });
  }, []);

  //  push(outlineInDB, outline);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_REACT_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateInput(topic);

    //clear inputs
    setTopic("");
  };

  function validateInput(topic) {
    if (topic.length < 5) {
      inputErrorNotification();
    } else {
      setIsLoading(true);
      return fetchData(topic);
    }
  }

  //error notification
  const inputErrorNotification = () => {
    toast.error("Topic should be more than 5 characters");
  };

  const sendToDB = (response) => {
    push(outlineInDB, {
      content: response,
    });
  };

  async function fetchData(input) {
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate a maximum of 10 points article outline from:${input}`,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const response = result.data.choices[0].text;
      // send data to DB
      sendToDB(response);
      setOutline(response);

      //fetch data from DB
      // getOutlineFromDB(outlineInDB);
      //getOutlineFromDB();

      //setOutline(outlineInDB);

      setIsLoading(false);
      setHasResponse(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setHasError(error);
    }
  }

  return (
    <>
      <div className="mt-10">
        <Toaster />
      </div>
      <form className="w-full mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <input
            className="w-full outline-dashed outline-pink-500 p-4 mb-2 bg-white rounded text-md focus:outline md:w-5/6"
            type="text"
            placeholder="Enter topic"
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
      {isLoading && <Loader />}
      {/* Details  */}
      {hasResponse ? (
        <ArticleDetails outline={outline} />
      ) : (
        <code>{hasError}</code>
      )}
    </>
  );
};

export default TopicInput;
