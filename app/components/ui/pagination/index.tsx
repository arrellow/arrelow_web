"use client";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from "./style.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div
      className={`item-center mt-14 flex justify-center gap-5 text-center ${styles.circle}`}
    >
      <div
        onClick={handleBack}
        className={currentPage === 0 ? "hidden" : "block"}
      >
        <FaArrowLeft />
      </div>
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`cursor-pointer ${index === currentPage ? "bg-[#023c63] text-white" : ""}`}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </div>
      ))}
      <div
        onClick={handleNext}
        className={currentPage === totalPages - 1 ? "hidden" : "block"}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
