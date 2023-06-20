import React, { useContext } from "react";
import Select from "react-select";
import { FormOptionsContext } from "../../Context/Context";

const SelectLang = () => {
  const options = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Dutch", label: "Dutch" },
  ];

  const { formFields, handleLanguageSelection } =
    useContext(FormOptionsContext);

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
          defaultValue={formFields.language}
          options={options}
          onChange={handleLanguageSelection}
          autoFocus={true}
          styles={customStyles}
          placeholder="Select language"
        />
      </div>
    </>
  );
};

export default SelectLang;
