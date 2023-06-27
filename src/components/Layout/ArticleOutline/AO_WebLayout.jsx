import React from "react";
import Form from "../../UI/ArticleOutline/Form";
import AO_Container from "../../UI/ArticleOutline/AO_Container";

const AO_WebLayout = () => {
  return (
    <div>
      <div className="flex justify-around">
        <section className="w-[40%]">
          <Form />
        </section>
        <section className="w-[40%]">
          <AO_Container />
        </section>
      </div>
    </div>
  );
};

export default AO_WebLayout;
