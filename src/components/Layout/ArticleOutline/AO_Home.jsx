import React from "react";
import AO_MobileLayout from "./AO_MobileLayout";
import AO_WebLayout from "./AO_WebLayout";

const AO_Home = () => {
  return (
    <div>
      <div className="md:hidden">
        <AO_MobileLayout />
      </div>
      <div className="hidden md:block">
        <AO_WebLayout />
      </div>
    </div>
  );
};

export default AO_Home;
