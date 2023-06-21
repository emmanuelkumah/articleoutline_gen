import React, { useState } from "react";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";

import logo from "../assets/images/ecrire.png";

const Navigation = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //handle display of Nav items
  const displayNavItems = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <>
      <nav className="sticky top-0 bg-transparent border-b border-slate-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-0">
          <img
            src={logo}
            alt="logo"
            className=" ml-7 w-[20%] md:ml-0 md:w-[10%]"
          />

          <div
            className={
              isMenuClicked
                ? `block absolute top-[70%] left-[10%] w-[80%] bg-purple-700 border rounded-lg`
                : `hidden w-full md:block md:w-auto`
            }
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-2  md:flex-row md:space-x-8 md:mt-0 md:border-0">
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
          <div onClick={displayNavItems} className="mx-5 md:hidden">
            {isMenuClicked ? <AiFillCloseSquare /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
