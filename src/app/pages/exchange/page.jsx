"use client";
import Footer from "@/app/components/common/Footer";
import NavBar from "@/app/components/common/Navbar";
import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";
import ChartComponent from "@/app/components/exchange/ChartComponent";
import PageHeader from "@/app/components/exchange/PageHeader";
import Chart from "@/app/components/exchange/Chart";

const page = () => {
  useEffect(() => {}, []);

  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];
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
