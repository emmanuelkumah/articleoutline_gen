import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setisOpen] = useState(false);
  const [language, setLanguage] = useState("");

  const languages = ["English", "French"];
  const handleDropDownOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div>
          <label htmlFor="languages">Select Language</label>
        </div>
        <select
          name="languages"
          id="languages"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-4 bg-transparent border border-emerald-500 rounded-xl"
        >
          <option value="" />
          {languages.map((lang) => (
            <option value={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
