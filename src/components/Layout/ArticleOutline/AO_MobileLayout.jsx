import React, { useState } from "react";

const AO_MobileLayout = () => {
  const [toggleLayout, setToggleLayout] = useState(false);

  function handleToggleLayout() {
    setToggleLayout(!toggleLayout);
  }
  return (
    <div className="px-[10%]">
      {toggleLayout ? (
        <section className="w-[80vw]  border bg-yellow-300">Content</section>
      ) : (
        <section className="w-[80vw] border bg-gray-600">Form</section>
      )}
      <button onClick={handleToggleLayout}>Toggle</button>
    </div>
  );
};

export default AO_MobileLayout;
