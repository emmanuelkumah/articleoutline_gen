import React from "react";

const ArticleDetails = ({ outline }) => {
  return (
    <>
      <article className="flex flex-col w-full text-xl mt-10 bg-indigo-100 rounded p-6">
        {outline}
      </article>
    </>
  );
};

export default ArticleDetails;
