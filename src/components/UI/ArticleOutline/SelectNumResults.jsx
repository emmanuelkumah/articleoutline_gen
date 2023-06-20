import React, { useContext } from "react";
import Select from "react-select";
import { FormOptionsContext } from "../../../Context/Context";

const SelectNumResults = () => {
  const { formFields, handleNumResultsInput } = useContext(FormOptionsContext);
  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
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

  return (
    <div>
      <div className="mt-5 w-[100%] bg-transparent border border-emerald-400 rounded-full">
        <Select
          defaultValue={formFields.numResults}
          options={options}
          onChange={handleNumResultsInput}
          autoFocus={true}
          styles={customStyles}
          placeholder="Number of results"
        />
      </div>
    </div>
  );
};

export default SelectNumResults;
