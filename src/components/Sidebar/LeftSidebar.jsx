import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineFileWord } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { FaSpellCheck } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { AiOutlineFileWord } from "react-icons/ai";

const LeftSidebar = ({ openSidebar, setOpenSidebar }) => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineFileWord },
    { name: "messages", link: "/", icon: FiMessageSquare },
    {
      name: "Article Outline",
      link: "/",
      icon: AiOutlineFileWord,
    },
    { name: "Grammer Check", link: "/", icon: FaSpellCheck },
    { name: "Phrase Rewrite", link: "/", icon: GiOpenBook },
    { name: "Article Ideas", link: "/", icon: RiPagesLine },
    { name: "Contact", link: "/", icon: RiSettings4Line, margin: true },
  ];

  return (
    <>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          openSidebar ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        <div>Ecrit</div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`  font-poppins  whitespace-pre duration-500 ${
                  !openSidebar && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  openSidebar && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
