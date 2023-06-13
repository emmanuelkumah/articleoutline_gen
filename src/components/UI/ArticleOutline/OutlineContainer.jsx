import React from "react";
import { ReactComponent as Loader } from "../../../assets/loader.svg";
import OutlinePlaceholder from "./OutlinePlaceholder";
import OutlineContent from "./OutlineContent";

const OutlineContainer = ({ content, loading, hasResponse }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : hasResponse ? (
        <OutlineContent content={content} />
      ) : (
        <OutlinePlaceholder
          heading="Let's start generating content"
          subHeading="Everytime you click on the 'Generate' button, our AI goes to work to
        fetch the desired response"
        />
      )}
    </>
  );
};

export default OutlineContainer;
