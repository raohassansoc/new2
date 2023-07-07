"use client";
import Footer from "@/app/components/common/Footer";
import NavBar from "@/app/components/common/Navbar";
import React from "react";
import PageHeader from "@/app/components/exchange/PageHeader";
import Chart from "@/app/components/exchange/Chart";

const page = () => {
 
  return (
    <div className="main-bg">
      <div className="bg-[#232323] p-1 box-border"></div>
      <NavBar />
      <div className="">
        <div>
          <PageHeader />
        </div>
        <div>
          {/* <ChartComponent data={initialData} /> */}
          <Chart />
        </div>
        <div></div>
      </div>
      <div className="bg-[#232323] p-1 box-border"></div>
      <Footer />
    </div>
  );
};

export default page;
