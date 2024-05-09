"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../landing.module.css";
import SearchInput from "@/app/components/molecules/searchinput";

interface searchProps {
  text: string;
}
const Hero = () => {
  const { register, handleSubmit, control } = useForm<searchProps>();
  return (
    <div className={`px-4 pb-10 pt-40 md:px-20 md:pt-40 ${styles.hero}`}>
      <div className={`${styles.textContainer} w-full tracking-wider`}>
        <h1 className="text-[32px] font-bold leading-[56px] tracking-[1px] text-[#023C63] md:text-[47px]">
          One Stop to Finding a Perfect Property with{" "}
          <span className="text-[#67C8FD]">Arellow Homes.</span>
        </h1>
        <p className="pt-[12px] text-[18px] font-medium leading-[34px] md:text-[22px]">
          We provide a complete service for the sale and purchase of houses.
        </p>
      </div>
      <div className="mt-[37px] pt-12">
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center bg-white px-9 py-3">
            SELLING
          </span>
          <span className="text-[#8F90A6]">SOLD</span>
        </div>
        <SearchInput className="mb-[47px]  md:w-[60%]" />
      </div>
    </div>
  );
};

export default Hero;
