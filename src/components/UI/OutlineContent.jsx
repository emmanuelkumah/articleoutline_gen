import React from "react";

const OutlineContent = ({ content, hasResponse }) => {
  return (
    <div>{hasResponse ? <h2>Content goes here</h2> : "nothing to show"}</div>
  );
};

export default OutlineContent;
  