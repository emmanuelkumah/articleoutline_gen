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
      n: 2,
    });

    const openAiData = result.data.choices[0].text.trim();
    // console.log(openAiData);

    return openAiData;
    //add data to Database
    //addToDatabase(openAiData);
  } catch (error) {
    console.log(error);
  }
}
