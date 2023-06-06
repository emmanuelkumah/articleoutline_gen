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
        <OutlinePlaceholder />
      )}
    </>
  );
};

export default OutlineContainer;
