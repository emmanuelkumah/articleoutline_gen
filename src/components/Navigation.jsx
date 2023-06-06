import React, { useState } from "react";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";

const Navigation = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //handle display of Nav items
  const displayNavItems = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <>
      <nav className="bg-transparent border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center text-4xl text-emerald-500">
            <TfiWrite />
            <span className="self-center  px-4 font-satoshi font-semibold whitespace-nowrap">
              ScriptLabz
            </span>
          </a>
          <div
            className={
              isMenuClicked
                ? `block absolute top-[10%] w-[90%] bg-black border rounded-lg `
                : `hidden w-full md:block md:w-auto`
            }
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 bg-emerald-500 rounded-lg md:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav_items">
                  About{" "}
                </a>
              </li>
              <li>
                <a href="#" className="nav_items">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav_items">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav_items">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div onClick={displayNavItems} className="md:hidden">
            {isMenuClicked ? <AiFillCloseSquare /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
