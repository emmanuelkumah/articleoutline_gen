import React, { useState } from "react";
import { ToggleSwitch } from "flowbite-react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleChange = () => {
    console.log("toggled");
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="flex flex-col">
        <p>Show Content</p>
        <p>
          <ToggleSwitch
            label="Toggle me"
            checked={isToggled}
            value="Tesing"
            onChange={handleChange}
          />
        </p>
        <p>Show input</p>
      </div>
    </>
  );
};

export default Toggle;
