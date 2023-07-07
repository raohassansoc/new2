import React from "react";
import PriceCard from "./marketOverview/PriceCard";
import Filter from "./marketOverview/Filter";
import MarketTable from "./marketOverview/MarketTable";

const MarketOverview = () => {
  return (
    <div>
      <h2 className="text-white text-2xl">Markets</h2>
      <div className="flex my-8">
        <button className="text-[#e50914] text-xs rounded-2xl border border-[#e50914] py-2 px-5 mr-4 max-sm:py-1 max-sm:px-2">
          Spot
        </button>
        <button className="text-white text-sm  py-2 px-5 mr-4 max-sm:mr-1 max-sm:py-1 max-sm:px-2">
          Pepertual
        </button>
        <button className="text-white text-sm  py-2 px-5 mr-4 max-sm:mr-1 max-sm:py-1 max-sm:px-2">
          Future
        </button>
        <button className="text-white text-sm  py-2 px-5 mr-4 max-sm:mr-1 max-sm:py-1 max-sm:px-2">
          Warrants
        </button>
      </div>
      <PriceCard />
      <Filter />
      <MarketTable />
    </div>
  );
};

export default MarketOverview;
