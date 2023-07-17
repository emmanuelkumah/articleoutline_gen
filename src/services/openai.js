import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_REACT_OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);
//fetch response
export async function fetchOpenAIData(data) {
  try {
    const result = await openai.createCompletion({
      model: "text-davinci-003",

      prompt: `Write ${data.number} article outlines in the selected language, and write each outline on a new line
      ###
      caption: Outline on how to build a successful career
      keyword: Career development
      langauge: English
      tone: Professional
      outline:

      Blog Post Outline

      Title: Habits of Highly Successful People

      Introduction:
      - Overview of the topic
      - Introduce the key takeaway: Habits successful people use to achieve greatness
      - Describe the tone of the post: Professional

      Body:
      - Categorize the habits into the following areas:
        - Time management
        - Goal setting
        - Self-discipline
        - Self-awareness
        - Networking
        - Positive attitude
      - Describe each habit in detail
      - Provide examples of successful people who have implemented these habits

      Conclusion:
        - Summarize the key takeaway
        - Describe how implementing the habits of successful people can help individuals achieve their goals

      Article Post Outline:

      I. Introduction
      
      A. Definition of a successful career
      B. Benefits of having a successful career
      
      II. Tips on How to Build a Successful Career
      
      A. Develop a Positive Mindset
      B. Utilize Your Strengths
      C. Network and Build Connections
      D. Pursue Education and Training
      E. Set Realistic Goals
       
      III. Conclusion
      
      A. Summary
      B. Final Thoughts and Takeaways

      
      ###
       caption: ${data.topic}
       language: ${data.language}
       keyword: ${data.keyword}
       tone: ${data.tone}
       outline:
      `,
      temperature: 0.5,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      n: 1,
    });

    return result.data.choices[0].text.trim();
  } catch (error) {
    console.log(error);
  }
}
