import React, { useContext } from "react";
import { ReactComponent as Loader } from "../../../assets/loader.svg";
import { FormOptionsContext } from "../../../Context/Context";
import AO_Response from "./AO_Response";
import AO_Placeholder from "./AO_Placeholder";

const AO_Container = () => {
  const { hasResponse, loading } = useContext(FormOptionsContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : hasResponse ? (
        <AO_Response />
      ) : (
        <AO_Placeholder
          heading="Let's start generating content"
          subHeading="Everytime you click on the 'Generate' button, our AI goes to work to
        fetch the desired response"
        />
      )}
    </>
  );
};

export default AO_Container;
