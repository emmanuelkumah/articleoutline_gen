import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  return (
    <div className="w-72 bg-white  rounded-xl duration-500 hover:scale-105 hover:border-4 hover:border-dotted hover:border-lime-600  cursor-pointer">
      <Link to={item.url}>
        <div className="grid  place-items-center mt-7">
          <img src={item.icon} alt="icon" class="h-16 w-16" />
        </div>

        <div className="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3  text-xs">Tool</span>
          <p class="text-lg font-bold text-black capitalize">{item.heading}</p>
          <div class="flex items-center">
            <p class="text-lg font-thin text-black cursor-auto my-3">
              {item.content}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
