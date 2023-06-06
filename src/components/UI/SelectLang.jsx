import React from "react";
import Select from "react-select";

const SelectLang = ({ articleDetails, setArticleDetails, selectedLang }) => {
  const options = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Dutch", label: "Dutch" },
  ];

  const handleChange = (selectedOption) => {
    setArticleDetails({ ...articleDetails, language: selectedOption.value });
  };
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#2F4858" : "#000",
      backgroundColor: state.isSelected ? "#97D8C4" : "#E0E0CE",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  return (
    <>
      <div className="mt-5 w-[100%] bg-transparent border border-emerald-400 rounded-full">
        <Select
          defaultValue={selectedLang}
          options={options}
          onChange={handleChange}
          autoFocus={true}
          styles={customStyles}
          placeholder="select language"
        />
      </div>
    </>
  );
};

export default SelectLang;
