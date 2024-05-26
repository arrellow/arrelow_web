import React from "react";
import style from "./loader.module.css";
import house from "@/app/assets/house.gif"
import Image from "next/image";

const ComponentLoader = () => {
  return (
    <div>
      {/* <div className={style.loader}></div> */}
      <Image src={house} alt="" className="w-[100px]"/>
      <p>loading...</p>;
    </div>
  );
};

export default ComponentLoader;
