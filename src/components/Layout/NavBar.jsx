import React from "react";
import { TfiPencilAlt } from "react-icons/tfi";
const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center w-full mt-5">
        <div className="flex flex-row">
          <h1 className="font-poppins text-3xl">Outliner.ai</h1>
          <span className="ml-2 text-lg">
            <TfiPencilAlt />
          </span>
        </div>

        <button type="button" className="black_btn">
          Github
        </button>
      </nav>
    </>
  );
};

export default NavBar;
