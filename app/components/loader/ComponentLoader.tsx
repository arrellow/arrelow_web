import React from "react";
import style from "./loader.module.css";

const ComponentLoader = () => {
  return (
    <div>
      <div className={style.loader}></div>
      <p>loading................</p>;
    </div>
  );
};

export default ComponentLoader;
