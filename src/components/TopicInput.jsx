import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const TopicInput = () => {
  const [topic, setTopic] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_REACT_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(topic);
  };

  async function fetchData(input) {
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate a detailed blog post outline using: ${input}`,
      });
      console.log(result.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form className="w-full mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <input
            className="w-full outline-dashed outline-pink-500 p-4 mb-2 bg-white rounded text-md focus:outline md:w-5/6"
            type="text"
            placeholder="Eg. Write an outline for DOM Manipulation "
            value={topic}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-red-500	hover:bg-opacity-80 w-full bg-opacity-90 flex-1 p-2 rounded text-white text-lg capitalize disabled:cursor-not-allowed disabled:bg-opacity-75 md:w-1/6 md:ml-8 "
          >
            Generate
          </button>
        </div>
      </form>
      <code>{JSON.stringify(import.meta.env.VITE_REACT_OPENAI_KEY)}</code>
    </>
  );
};

export default TopicInput;
