import React from "react";
import Layout from "../components/Layout/Layout";
import Dropdown from "../components/UI/Dropdown";
import Content from "../components/UI/Content";

const ArticleOutline = () => {
  return (
    <>
      <Layout>
        <section className="px-5 mt-4">
          <div>
            <div className="flex justify-between">
              <label htmlFor="articleTitle">Article Title</label>
              <p>0/200</p>
            </div>

            <input
              className="input_text"
              type="text"
              name="articleTitle"
              id=""
              placeholder="Enter topic"
            />
          </div>
          <div>
            <label htmlFor="keyword">Keyword</label>
            <input
              className="input_text"
              type="text"
              placeholder="Add any related keyword"
              name="keyword"
            />
          </div>
          <div>
            <Dropdown />
          </div>
        </section>
        <section>
          <Content/>
        </section>
      </Layout>
    </>
  );
};

export default ArticleOutline;
