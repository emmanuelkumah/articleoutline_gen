import React, { useContext } from "react";
import { FormOptionsContext } from "../../../Context/Context";

const AO_StartNew = () => {
  const { handleResetResponse } = useContext(FormOptionsContext);
  return (
    <>
      <div className="flex justify-center" onClick={handleResetResponse}>
        <button className="bg-teal-500 w-[50%] rounded-full mx-auto mt-10 p-4">
          Start Afresh
        </button>
      </div>
    </>
  );
};

export default AO_StartNew;
