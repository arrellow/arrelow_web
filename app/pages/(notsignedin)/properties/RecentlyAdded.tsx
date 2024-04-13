import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LagosPic from "@/app/assets/Lagos.svg";
import { Card } from "@/app/components/cards";
import SilverHouse from "@/app/assets/silverHouse.svg";
import Love from "@/app/assets/love.svg";
import House1 from "@/app/assets/house1.svg";
import House2 from "@/app/assets/house2.svg";
import Location from "@/app/assets/location.svg";
import Cart from "@/app/assets/cart.svg";
import Car from "@/app/assets/car.svg";
import El from "@/app/assets/el.svg";

const CardContent = [
  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },

  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
];
const RecentlyAdded = () => {
  const router = useRouter();
  const handleClick = (Id: any) => {
    router.push(`/pages/properties/${Id}`);
  };
  return (
    <div className="mt-12 bg-[#F4FBFF] px-4 pt-[40px] md:px-12  ">
      <div className="flex flex-wrap justify-around gap-y-5  overflow-hidden py-10 ">
        {CardContent.map((item, idx) => (
          <div
            key={idx}
            className=" w-[95%] cursor-pointer md:w-[23%]"
            onClick={() => handleClick(idx)}
          >
            <Card
              isBackground
              backgroundImage={item.bg.src}
              className=" relative  gap-4 overflow-hidden"
            >
              <div className="float-right mr-7 mt-5 flex h-[30px] w-[100px] items-center justify-center bg-[#2C9FD9] text-base font-semibold text-white">
                Selling
              </div>
              <div className="absolute bottom-0 w-full rounded-small">
                <div className="flex">
                  <div className="flex h-[35px] w-[120px] items-center justify-center bg-[#023C63] text-center text-white">
                    <span>{item.text1}</span>
                  </div>
                  <div className="flex h-[35px] w-[120px] items-center justify-center rounded-tr-[33.42px] bg-[#FEFEFE] text-center">
                    <span>{item.text2}</span>
                  </div>
                </div>
                <div className="flex min-h-[50px] w-full justify-between bg-white  px-4 py-3 pb-2 opacity-70">
                  <div>
                    <h4 className="text-[24px] font-bold leading-[30px] tracking-[-4%] text-[#023C63]">
                      2 Bedroom Terrace
                    </h4>
                    <div className="flex items-center gap-3">
                      <Image src={Location} height={20} width={20} alt="" />
                      <p className="text-[17px] font-normal tracking-tight">
                        Eti-Osa, Lekki, Lagos
                      </p>
                    </div>
                  </div>
                  <div>
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
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
