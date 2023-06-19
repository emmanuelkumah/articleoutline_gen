import React from "react";
import Form from "../../UI/ArticleOutline/Form";
import OutlineContainer from "../../UI/ArticleOutline/OutlineContainer";

const AO_WebLayout = () => {
  return (
    <div>
      <div className="flex">
        <section className="w-[40%] border border-fuchsia-400">
          <Form />
        </section>
        <section className="w-[60%]">
          <OutlineContainer />
        </section>
      </div>
    </div>
  );
};

export default AO_WebLayout;
