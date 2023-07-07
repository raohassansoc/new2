import React from "react";

const PriceCard = () => {
  return (
    <div className="flex justify-between box-border max-lg:flex-wrap">
      <div className="w-[33.33%] px-1 max-lg:w-[50%] max-md:w-[100%] max-lg:mt-2">
        <div className="h-28 bg-[#161616] rounded flex justify-between items-center py-3 px-4">
          <div className="text-white">
            <div className="text-xs">BTC/USD</div>
            <div className="text-lg">
              30,801.88{" "}
              <span className="text-xs text-[#7B849B]">$30,0801,88</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs">-0.73</span>
              <span className="text-xs text-[#7B849B]">Vol 12.525,777.56</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[33.33%] px-1 max-lg:w-[50%] max-md:w-[100%] max-lg:mt-2">
        <div className="h-28 bg-[#161616] rounded flex justify-between items-center py-3 px-4">
          <div className="text-white">
            <div className="text-xs">BTC/USD</div>
            <div className="text-lg">
              30,801.88{" "}
              <span className="text-xs text-[#7B849B]">$30,0801,88</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs">-0.73</span>
              <span className="text-xs text-[#7B849B]">Vol 12.525,777.56</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[33.33%] px-1 max-lg:w-[100%] max-lg:mt-2">
        <div className="h-28 bg-[#161616] rounded flex justify-between items-center py-3 px-4">
          <div className="text-white">
            <div className="text-xs">BTC/USD</div>
            <div className="text-lg">
              30,801.88{" "}
              <span className="text-xs text-[#7B849B]">$30,0801,88</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs">-0.73</span>
              <span className="text-xs text-[#7B849B]">Vol 12.525,777.56</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
