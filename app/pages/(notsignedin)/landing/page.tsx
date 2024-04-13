import React from "react";
import Hero from "./_components/Hero";
import Availability from "./_components/Availability";
import Recommended from "./_components/Recommended";
import RecentlyAdded from "./_components/RecentlyAdded";
import GetArrellow from "./_components/GetArrellow";

const LandingPage = () => {
  return (
    <div className="z-1">
      <Hero />
      <Recommended />
      <RecentlyAdded />
      <Availability />
      <GetArrellow />
    </div>
  );
};

export default LandingPage;
