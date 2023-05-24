import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center w-full mt-5">
        <div className="flex flex-row">
          <h1>Outliner</h1>
          <span className="ml-2">pencil</span>
        </div>

        <button type="button" className="black_btn">
          Github
        </button>
      </nav>
    </>
  );
};

export default NavBar;
