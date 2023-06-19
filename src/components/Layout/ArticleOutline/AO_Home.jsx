import React, { useState } from "react";
import AO_MobileLayout from "./AO_MobileLayout";
import AO_WebLayout from "./AO_WebLayout";
import { AdvancedOptionsContext } from "../../../Context/Context";

const AO_Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [toggleLayout, setToggleLayout] = useState(false); //remove later
  const [switchView, setSwitchView] = useState(false);

  return (
    <AdvancedOptionsContext.Provider
      value={{ showOptions, setShowOptions, switchView, setSwitchView }}
    >
      <div className="md:hidden">
        <AO_MobileLayout
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          toggleLayout={toggleLayout}
          setToggleLayout={setToggleLayout}
        />
      </div>
      <div className="hidden md:block">
        <AO_WebLayout />
      </div>
    </AdvancedOptionsContext.Provider>
  );
};

export default AO_Home;
