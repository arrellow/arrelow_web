import React from "react";
import style from "./loader.module.css";

const PageLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black opacity-50">
      <div className={style.loader}></div>
    </div>
  );
};

export default PageLoader;
