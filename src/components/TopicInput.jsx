import React, { useState } from "react";

const TopicInput = () => {
  const [topic, setTopic] = useState("");

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(topic);
  };
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
    </>
  );
};

export default TopicInput;
