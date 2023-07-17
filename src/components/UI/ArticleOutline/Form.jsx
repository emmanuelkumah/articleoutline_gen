import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormOptionsContext } from "../../../Context/Context";
import SelectLang from "../SelectLang";
import Toggle from "../Toggle";
import SelectNumResults from "./SelectNumResults";
import AO_StartNew from "./AO_StartNew";

const Form = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    showOptions,

    formFields,

    loading,
    status,
    setSubmittedData,
    handleformSubmit,
    fetchOpenAIData,
  } = useContext(FormOptionsContext);

  //submitform
  const onSubmit = (data) => {
    handleformSubmit(data);
    reset({
      topic: "",
      keyword: "",
      tone: "",
      language: "",
    });
  };

  //destructuring fields
  const { topic, keyword } = formFields;
  const clearResponse = status === "receive";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4">
          <label htmlFor="articleTitle">Article Topic</label>
          <input
            type="text"
            className="input_text"
            name="topic"
            placeholder="Enter topic"
            {...register("topic", {
              required: "Please enter topic",
              minLength: {
                value: 10,
                message: "Topic should be more than 10 characters",
              },
            })}
          />
          {errors.topic && (
            <p className="text-sm text-red-600 py-3 bg-clip-padding">
              {errors.topic.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="articleKeyWord">
            Keyword <span className="text-sm">(optional)</span>{" "}
          </label>
          <input
            type="text"
            className="input_text"
            name="keyword"
            placeholder="Enter keyword"
            {...register("keyword")}
          />
        </div>
        <Toggle />
        {showOptions && (
          <section>
            <div>
              <p>Language</p>
              <select
                value={"English"}
                {...register("language")}
                className="mt-5 w-[100%] bg-transparent border border-emerald-400 rounded-full"
              >
                <option value="English">🇺🇸 English</option>
                <option value="French">🇫🇷 French</option>
                <option value="Dutch">🇳🇱 Dutch</option>
              </select>
            </div>
            <div>
              <p className="pt-4">Tone</p>
              <select
                {...register("tone")}
                value={"Professional"}
                className="mt-5 w-[100%] bg-transparent border border-emerald-400 rounded-full"
              >
                <option value="Professional">Professional</option>
                <option value="Informative">Informative</option>
                <option value="Informative">Enthusiastic</option>
              </select>
            </div>
          </section>
        )}

        <button className="button_cta">Generate</button>
      </form>
    </div>
    // <div>
    //   <h2 className="sub_heading_gradient">AI Article Outline</h2>
    //   <form
    //     className="w-[100%] border rounded-md border-cyan-900 px-4 py-6"
    //     onSubmit={handleFormSubmission}
    //   >
    //     <div>
    //       <div className="flex justify-between mb-3">
    //         <label htmlFor="articleTitle">Article Title</label>
    //         <p className={charCount === 200 ? "text-red-500 text-xl" : ""}>
    //           {charCount}/200
    //         </p>
    //       </div>

    //       <input
    //         className="input_text"
    //         type="text"
    //         name="topic"
    //         id=""
    //         placeholder="Enter topic"
    //         required
    //         value={topic}
    //         onChange={handleChange}
    //         onKeyDown={handleKeyDown}
    //         maxLength={200}
    //       />
    //     </div>
    //     <div>
    //       <div className="my-4">
    //         <label htmlFor="keyword">Keyword</label>
    //         <span className="text-sm text-slate-400 px-3">(optional)</span>
    //       </div>
    //       <input
    //         className="input_text"
    //         type="text"
    //         placeholder="Add any related keyword"
    //         name="keyword"
    //         value={keyword}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <Toggle />
    //     {showOptions && (
    //       <div>
    //         <SelectLang />
    //         <SelectNumResults />
    //       </div>
    //     )}
    //     {loading ? (
    //       <button className="button_cta">
    //         <svg
    //           aria-hidden="true"
    //           className="w-5 h-5  text-gray-200 animate-spin  fill-blue-600"
    //           viewBox="0 0 100 101"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //             fill="currentColor"
    //           />
    //           <path
    //             d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //             fill="currentFill"
    //           />
    //         </svg>
    //         Loading...
    //       </button>
    //     ) : (
    //       <button className="button_cta">Generate</button>
    //     )}
    //   </form>
    //   {clearResponse && <AO_StartNew />}
    // </div>
  );
};

export default Form;
