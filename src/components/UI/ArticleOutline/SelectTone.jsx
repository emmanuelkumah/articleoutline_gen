import React from "react";
import Select from "react-select";

const SelectTone = ({ articleDetails, setArticleDetails }) => {
  const options = [
    { value: "Professional", label: "Pro" },
    { value: "Informal", label: "Informal" },
    { value: "Casual", label: "Casual" },
  ];
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

  //change tone selection
  const handleSelectTone = (selectedTone) => {
    console.log(selectedTone.value);
    setArticleDetails({ ...articleDetails, tone: selectedTone.value });
  };
  return (
    <div>
      <div className="mt-5 w-[100%] bg-transparent border border-emerald-400 rounded-full">
        <Select
          defaultValue={""}
          options={options}
          onChange={handleSelectTone}
          autoFocus={true}
          styles={customStyles}
          placeholder="Select Tone"
        />
      </div>
    </div>
  );
};

export default SelectTone;
