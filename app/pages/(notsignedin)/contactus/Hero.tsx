import React from "react";
import styles from "./contact.module.css";

const Hero = () => {
  return (
    <div className={`flex items-center justify-center ${styles.hero}`}>
      <header className="  mt-10 flex h-[70px] items-center justify-center bg-[#023C63] px-7  text-white md:w-[20%]">
        <h1 className="text-[24px] font-bold leading-[33px]">CONTACT US</h1>
      </header>
    </div>
  );
};

export default Hero;
