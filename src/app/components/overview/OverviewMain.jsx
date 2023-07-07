"use client";
import React from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import MyAsset from "./overviewMain/MyAsset";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const OverviewMain = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      <div className="w-[20%] text-white main-bg-sec max-sm:w-14 max-sm:overflow-hidden">
        <div className="border-b py-5 pl-4 flex items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-semibold max-sm:invisible">
            Home
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Trading Bot
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Funding
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Option
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Earn
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Future
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Home
          </span>
        </div>
        <div className="py-5 pl-4 flex  items-center">
          <PreviewIcon />
          <span className="pl-5 text-sm font-normal max-sm:invisible">
            Home
          </span>
        </div>
      </div>
      <div className="w-[90%] text-white">
        <h1 className="text-3xl py-7 pl-6 main-bg-sec">Wallet Overview</h1>
        <div className="flex max-lg:flex-wrap">
          <div className="w-[65%] max-lg:w-[100%]">
            <div className="p-6 pb-0 max-sm:p-2 max-sm:pb-0">
              <div className="border-b">
                <div>
                  <span className="text-base font-semibold">
                    Estimated Balance
                  </span>
                  icon
                </div>
                <div className="text-2xl flex mt-2 mb-6">
                  <span>0.00BTC</span>
                  <span className="ml-4">$0.000000</span>
                </div>
              </div>
            </div>
            <div className="p-6 max-sm:p-2">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Fund Your Wallet</div>
                <div className="border-b">Skip Guide</div>
              </div>
              <p className="text-xs mt-2">
                Binace support multiple wallet option to fund your account. Find
                a method that suit you the best
              </p>
              <div className="mt-6">
                {/* row */}
                {array.map((wallet, index) => {
                  return (
                    <div
                      className="flex justify-between items-center mb-1 p-5 max-md:p-2 bg-[#161616]"
                      key={index}
                    >
                      <div className="flex items-center">
                        <div className="bg-[#e50914] rounded-[50%] p-5 max-md:p-2">
                          <CrisisAlertIcon />
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="rounded-3xl bg-[#e50914] px-2 font-extralight mr-2">
                              Hot
                            </span>
                            <span className="text-base mr-2">Buy Crypto</span>
                            <span className="text-[#e50914]">
                              <PlayCircleIcon /> Video Tutorial
                            </span>
                          </div>
                          <div>
                            <span className="font-light">
                              Buy crypto directly with cash hassle-free and
                              suggested for new user
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="p-2 px-7 mr-1 bg-[#e50914] rounded-sm text-white font-bold text-xs">
                          Buy
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* My Asset */}
            <div className="p-6 pt-0 max-sm:p-2 max-sm:pt-0">
              <MyAsset />
            </div>
          </div>
          <div className="w-[35%] border-t-2 border-[#232323] max-lg:w-[100%] max-lg:m-6 pb-6 max-sm:m-2 ">
            <div className="main-bg-sec h-[100%] ">
              <div className="flex justify-between items-center py-2 px-4">
                <div className="text-base">Recent Transaction</div>
                <div>View All</div>
              </div>
              <div className="flex justify-center items-center h-[50%]">
                <span className="flex items-center">
                  <TextSnippetIcon />
                  No Recent Transactions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewMain;
