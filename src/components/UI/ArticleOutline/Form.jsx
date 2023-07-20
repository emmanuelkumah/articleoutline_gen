import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ArticleOutlineCtx } from "../../../Context/articleOutlineCtx";
import Toggle from "../Toggle";

const Form = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { showOptions, setStatus, handleformSubmit } =
    useContext(ArticleOutlineCtx);

  //submitform
  const onSubmit = (data) => {
    setStatus("sending");
    handleformSubmit(data);
    reset({
      topic: "",
      keyword: "",
      tone: "",
      language: "",
    });
  };

  return (
    <div>
      <h2 className="sub_heading_gradient">AI Article Outline</h2>

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
  );
};

export default Form;
