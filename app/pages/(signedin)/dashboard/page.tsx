"use client";
import React from "react";
import DashBoardTop from "./modules/DashBoardTop";
import DashboardBottom from "./modules/DashboardBottom";

const Dashboard = () => {
  return (
    <main className="   mx-auto w-[90%] pb-28   ">
      <h1 className="text-4xl font-extrabold leading-10">Dashboard</h1>
      <DashBoardTop />
      <DashboardBottom />
    </main>
  );
};

export default Dashboard;
