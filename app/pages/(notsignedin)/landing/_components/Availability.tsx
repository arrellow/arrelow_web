import { Card } from "@/app/components/cards";
import React from "react";
import AbujaPic from "@/app/assets/Abuja.svg";
import LagosPic from "@/app/assets/Lagos.svg";
import OwerrePic from "@/app/assets/owerre.svg";
import Enugu from "@/app/assets/Enugu.svg";

const CardContent = [
  {
    bg: LagosPic,
    text: "Lagos",
  },
  {
    bg: AbujaPic,
    text: "Abuja",
  },
  {
    bg: Enugu,
    text: "Enugu",
  },
  {
    bg: OwerrePic,
    text: "Owerre",
  },
];
const Availability = () => {
  return (
    <div className="px-6 pt-[60px] md:px-24">
      <h1 className="mx-auto pb-10 text-center text-[30px] font-semibold tracking-[-3%] max-sm:gap-y-7 md:w-[40%]">
        We are available in all the states in Nigeria
      </h1>
      <div className="flex justify-between gap-4 max-sm:flex-wrap">
        {CardContent.map((item, idx) => (
          <Card
            key={idx}
            isBackground
            backgroundImage={item.bg.src}
            className="w-full text-center transition-all duration-200 ease-linear hover:scale-[102%]"
          >
            <h2 className="pt-10 font-bold leading-[20%]">{item.text}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Availability;
