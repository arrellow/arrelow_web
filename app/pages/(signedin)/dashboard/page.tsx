"use client";
import React from "react";
import DashBoardTop from "./modules/DashBoardTop";
import DashboardBottom from "./modules/DashboardBottom";

const Dashboard = () => {
  return (
    <main className=" mx-auto  bg-[#FAF9FF] pb-28 pt-20 md:w-4/5 ">
      <h1 className="text-4xl font-extrabold leading-10">Dashboard</h1>
      <DashBoardTop />
      <DashboardBottom />
    </main>
  );
};

export default Dashboard;
