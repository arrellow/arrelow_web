"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import styles from "./property.module.css";
import AddProperty from "@/app/assets/addproperty.svg";
import SearchInput from "@/app/components/molecules/searchinput";
import Button from "@/app/components/ui/buttons";

interface searchProps {
  text: string;
}
const Hero = () => {
  const { register, handleSubmit, control } = useForm<searchProps>();
  return (
    <div className={`${styles.hero}`}>
      <div className="flex items-center gap-4 py-20 pt-48">
        <div className="w-[80%] pl-4 md:pl-20">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center bg-white px-9 py-3">
              SELLING
            </span>
            <span className="text-[#8F90A6]">SOLD</span>
          </div>
          <SearchInput />
        </div>
        <Button
          variant="add"
          size="md"
          disabled={false}
          isicon
          icon={<IoMdAdd />}
          text="Property"
          className="mt-12 h-[60px] w-[10%] text-white"
        />
      </div>

      {/* <div className="pt-10 mx-10 w-full">
        <div className="w-full flex gap-4 items-center">
          <SearchInput className="mt-[37px] mb-[47px] border-4 border-black" />
         
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
