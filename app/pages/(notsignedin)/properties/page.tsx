import React from "react";
import Hero from "./Hero";
import Recommended from "./Recommended";
import Related from "./Related";
import RecentlyAdded from "./RecentlyAdded";
import GetArrellow from "./GetArrellow";

const Propertse = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Recommended />
      <Related />
      {/* <RecentlyAdded /> */}
      <GetArrellow />
    </div>
  );
};

export default Propertse;
