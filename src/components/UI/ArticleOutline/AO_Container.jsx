import React, { useContext } from "react";
import { ReactComponent as Loader } from "../../../assets/loader.svg";
import { FormOptionsContext } from "../../../Context/Context";
import AO_Response from "./AO_Response";
import AO_Placeholder from "./AO_Placeholder";

const AO_Container = () => {
  const { status } = useContext(FormOptionsContext);

  const isSending = status === "sending";
  const hasData = status === "received";
  const isTyping = status === "typing";

  return (
    <>
     
      {isTyping && (
        <AO_Placeholder
          heading="Let's start generating content"
          subHeading="Everytime you click on the 'Generate' button, our AI goes to work to
        fetch the desired result"
        />
      )}
      {isSending && (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}
      {hasData && <AO_Response />}
    </>
  );
};

export default AO_Container;
