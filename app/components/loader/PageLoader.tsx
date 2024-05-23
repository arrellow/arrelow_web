import React from "react";
import style from "./loader.module.css";

const PageLoader = () => {
  return (
    <div className="overflow-text-white flex h-screen w-full items-center justify-center bg-black opacity-80">
      <div className={style.ring}>
        Loading
        <span className={style.myspan}></span>
      </div>
    </div>
  );
};

export default PageLoader;
