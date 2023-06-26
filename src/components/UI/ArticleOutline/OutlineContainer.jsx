import React, { useContext } from "react";
import { ReactComponent as Loader } from "../../../assets/loader.svg";
import OutlinePlaceholder from "./OutlinePlaceholder";
import OutlineContent from "./OutlineContent";
import { FormOptionsContext } from "../../../Context/Context";

const OutlineContainer = () => {
  const { hasResponse, loading } = useContext(FormOptionsContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : hasResponse ? (
        <OutlineContent />
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
