"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Filter = () => {
  return (
    <div className="flex justify-between my-11 max-lg:flex-wrap">
      <div className="text-white flex items-center max-md:flex-wrap">
        <div>
          <span className="text-sm">Favorites</span>
          <span className="text-sm ml-7 border-b-2 border-[#e50914] pb-2">
            All
          </span>
          <span className="text-sm ml-7 text-[#A0A9BE] max-sm:ml-[6px]">USD</span>
          <span className="text-sm ml-7 text-[#A0A9BE] max-sm:ml-[6px]">USDT</span>
          <span className="text-sm ml-7 text-[#A0A9BE] max-sm:ml-[6px]">BTC</span>
          <span className="text-sm ml-7 text-[#A0A9BE] max-sm:ml-[6px]">CRO</span>
          <span className="text-sm ml-7 text-[#A0A9BE] max-sm:ml-[6px]">EUR</span>
        </div>
        <div className="border-l border-white ml-7 max-md:mt-2 max-md:border-0 max-md:ml-0 max-md:w-full"> 
          <span className="text-sm ml-7 text-[#A0A9BE] max-md:ml-0">Category</span>
        </div>
      </div>
      <div className="max-lg:mt-4 max-lg:w-full">
        <div className="flex justify-between items-center border border-[#2f3746] p-1 max-lg:w-full">
          <div className="text-[#788197]">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent pl-2 text-sm outline-none text-[#788197] max-lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
