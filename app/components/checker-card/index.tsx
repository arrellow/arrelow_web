import Image from "next/image";
import React from "react";
import arrow from "@/app/assets/arrowup.svg";

export const CheckCard = ({head}) => {
  const greyBg: string =
    "bg-[#f6f4f4] text-[#948d8d] p-3 border-[0.5px] border-[#948D8D] rounded-[10px]";

  return (
    <div>
      <div className="rounded-[10px] border-[1.5px] border-[#948D8D] p-3">
        <div className="flex justify-between border-b border-[#D1D1D5] px-8 py-3">
          <p className="text-[22px] font-semibold text-black">{head.title}</p>
          <Image src={arrow} alt="" />
        </div>
        <div className="m-auto flex w-[90%] justify-between p-3">
          <p className="text-[#345ECB]">All {head.title}</p>
          <p>Most used</p>
        </div>

        <div className="rounded-[10px] border-[1.5px] border-[#948D8D] p-[28px]">
          {head.options.map((each, i) => {
            return (
              <label key={i}>
                <input type="checkbox" className="my-3 py-8" />
                <span className="ml-4">{each}</span><br />
              </label>
            );
          })}

          <button className={`${greyBg} flex h-[50px] items-center`}>
            <span className="mr-3 text-[2rem]">+ </span> ADD NEW
          </button>
        </div>
      </div>
    </div>
  );
};
