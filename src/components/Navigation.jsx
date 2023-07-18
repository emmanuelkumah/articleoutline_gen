import React, { useState } from "react";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "active"
                      : "block py-2 pl-3 pr-4 bg-emerald-500 rounded-lg md:bg-transparent"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav_items"
                  }
                >
                  About{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="products"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav_items"
                  }
                >
                  Products
                </NavLink>
              </li>

              <li>
                <div className="flex gap-8">
                  <NavLink
                    to="signin"
                    className={({ isActive }) =>
                      isActive ? "active" : "auth_items"
                    }
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="signup"
                    className={({ isActive }) =>
                      isActive ? "active" : "auth_items"
                    }
                  >
                    <button>Get Started</button>
                  </NavLink>
                </div>
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
