"use client";
import Footer from "@/app/components/common/Footer";
import NavBar from "@/app/components/common/Navbar";
import OverviewMain from "@/app/components/overview/OverviewMain";
import React, {useState} from "react";

const page = () => {
  const [isload, isLoadSet] = useState(true);
  return (
    <div>
      {isload ? (
        <div className="main-bg">
          <NavBar />
          <div className="bg-[#232323] p-1 box-border"></div>
          <OverviewMain />
          <div className="bg-[#232323] p-1 box-border"></div>
          <Footer />
        </div>
      ) : (
        <div class="loader"></div>
      )}
    </div>
  );
};

export default page;
