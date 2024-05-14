import React from "react";
import DashBoardTop from "./modules/DashBoardTop";

const Dashboard = () => {
  return (
    <main className="mx-auto bg-[#FAF9FF] pt-20 md:w-4/5">
      <h1 className="text-4xl font-extrabold leading-10">Dashboard</h1>
      <DashBoardTop />
    </main>
  );
};

export default Dashboard;
