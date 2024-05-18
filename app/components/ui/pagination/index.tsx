import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./style.module.css";

const Pagination = () => {
  return (
    <div
      className={`item-center mt-14 flex justify-center gap-5 text-center ${styles.circle}`}
    >
      <div className="bg-[#023c63] text-white">1</div>
      <div>2</div>
      <div>3</div>
      <div>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
