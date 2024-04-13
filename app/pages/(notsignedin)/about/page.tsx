import React from "react";
import Hero from "./Hero";
import CompanyProfile from "./CompanyProfile";
import DreamHome from "./DreamHome";

const About = () => {
  return (
    <div>
      <Hero />
      <div className="w-[90%] mx-auto">
        <CompanyProfile />
        <DreamHome />
      </div>
    </div>
  );
};

export default About;
