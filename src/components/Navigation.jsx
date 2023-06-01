import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
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
          <a href="" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="ScripterLogo"
              className="h-8 mr-3"
            />
            <span className="self-center text-2xl font-satoshi font-semibold whitespace-nowrap">
              Scripter
            </span>
          </a>
          <div
            className={
              isMenuClicked
                ? `block absolute top-[10%] w-[90%] bg-slate-500 rounded-lg `
                : `hidden w-full md:block md:w-auto`
            }
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 bg-red-500 rounded-lg md:bg-transparent"
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
