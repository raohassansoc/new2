import Footer from "@/app/components/common/Footer";
import NavBar from "@/app/components/common/Navbar";
import CardSlider from "@/app/components/home/CardSlider";
import MarketOverview from "@/app/components/home/MarketOverview";
import React from "react";

const page = () => {
  return (
    <div className="main-bg">
      <NavBar />
      <div className="bg-[#232323] p-1 box-border"></div>
      <div className="px-[70px] py-[30px] max-sm:px-[20px] max-sm:py-[10px]">
        <CardSlider />
        <MarketOverview />
      </div>
      <div className="bg-[#232323] p-1 box-border"></div>
      <Footer />
    </div>
  );
};

export default page;
