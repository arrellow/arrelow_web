"use client";
import React, { useState } from "react";
import Image from "next/image";
import LagosPic from "@/app/assets/Lagos.svg";
import { Card } from "@/app/components/cards";
import SilverHouse from "@/app/assets/silverHouse.svg";
import Love from "@/app/assets/love.svg";
import Location from "@/app/assets/location.svg";
import Cart from "@/app/assets/cart.svg";
import Car from "@/app/assets/car.svg";
import El from "@/app/assets/el.svg";

const CardContent = [
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },

  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },

  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
  {
    bg: LagosPic,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace House",
    img1: "",
  },
];
const RecentlyAdded = () => {
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [visisble, setVisible] = useState(6);
  const toggleVisibility = () => {
    setIsSeeAll(!isSeeAll);
    if (isSeeAll) {
      setVisible(6);
    } else {
      setVisible(CardContent.length);
    }
  };
  return (
    <div className="mx-auto mt-12 w-[87%] bg-[#F4FBFF] pt-[40px]  md:w-[87%] ">
      <div className="flex justify-between">
        <h1 className=" font-bold md:pl-20 md:text-[28px]">Recently Added</h1>
        <h1
          className="cursor-pointer font-bold leading-[43px] text-[#1DAEFF] md:pr-20 md:text-[35px]"
          onClick={toggleVisibility}
        >
          {isSeeAll ? "See less" : "See all"}
        </h1>
      </div>
      <div className="flex flex-col flex-wrap justify-around gap-y-5 py-10   md:flex-row ">
        {CardContent.slice(0, visisble).map((item, idx) => (
          <div
            key={idx}
            className="h-[220px] overflow-hidden rounded-3xl shadow-custom  max-sm:px-4 md:w-[45%] "
          >
            <Card className=" flex w-full gap-y-8" isBackground={false}>
              <div className="w-[60%]">
                <div
                  className=" relative"
                  style={{
                    backgroundImage: `url(${SilverHouse.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                  }}
                >
                  <div className="float-right mr-7 mt-5 flex h-[30px] w-[100px] items-center justify-center bg-[#2C9FD9] text-base font-semibold text-white">
                    Selling
                  </div>
                  <div className="absolute right-0 top-[168px] flex">
                    <div className="flex h-[50px] w-[120px] items-center justify-center rounded-tl-[33.42px] bg-[#FEFEFE] text-center">
                      <span>{item.text2}</span>
                    </div>
                    <div className="flex h-[50px] w-[120px] items-center justify-center bg-[#023C63] text-center text-white">
                      <span>{item.text1}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-white">
                <div>
                  <h2 className="px-2  text-[24px] font-bold leading-[30px] tracking-[-4%] text-[#023C63]">
                    {item.para1}
                  </h2>
                </div>
                <div className="absolute right-0 top-[127px] w-full">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                      <Image src={Location} height={20} width={20} alt="" />
                      <p className="font-sm text-[14px] tracking-tight">
                        Eti-Osa, Lekki, Lagos
                      </p>
                    </div>
                    <div className="pr-2">
                      <Image src={Love} height={20} width={20} alt="" />
                      <p>1,000</p>
                    </div>
                  </div>
                  <div className=" inner font-sm inset-0 flex h-[50px] w-full items-center gap-5  bg-[#7F8184] bg-cover pl-4 text-sm text-white">
                    <div className="flex items-center gap-1">
                      <p className="font-sm text-base">4</p>
                      <Image src={Car} height={20} width={20} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-sm text-base">4</p>
                      <Image src={Cart} height={20} width={20} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p>500 m²</p>
                      <Image src={El} height={20} width={20} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
