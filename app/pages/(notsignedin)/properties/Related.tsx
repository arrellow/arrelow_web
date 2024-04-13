"use client";
import React, { useState } from "react";
import Button from "@/app/components/ui/buttons";
import RecentlyAdded from "./RecentlyAdded";

const MENU = [
  { text: "All", content: <RecentlyAdded /> },
  { text: "Detached", content: <RecentlyAdded /> },
  { text: "Duplex", content: <RecentlyAdded /> },
  { text: "Terraces", content: <RecentlyAdded /> },
  { text: "Bungalow", content: <RecentlyAdded /> },
];
const Related = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const handleClick = (idx: number) => {
    setActiveIdx(idx);
  };
  return (
    <div className="pt-20">
      <header className="flex justify-between px-6  pb-14 text-[28px] font-semibold leading-[34px] tracking-[-4%] md:px-20">
        <h1>Properties</h1>
        <h2>See All</h2>
      </header>
      <div className="mx-auto flex justify-center gap-5 max-sm:flex-wrap md:w-[70%]  ">
        {MENU.map((item, idx) => (
          <Button
            onClick={() => handleClick(idx)}
            key={idx}
            variant="primary"
            size="md"
            disabled={false}
            text={item.text}
            className={`min-w-[15%] cursor-pointer ${
              idx === activeIdx ? " bg-[#023C63] text-white" : ""
            }`}
          />
        ))}
      </div>

      <div>{activeIdx !== -1 && <p>{MENU[activeIdx].content}</p>}</div>

      {/* {MENU.map(
        (item, idx) =>
          activeIdx === idx && (
            <div key={idx} className="mx-auto max-w-[70%]">
              <p>{item.content}</p>
            </div>
          ),
      )} */}
    </div>
  );
};

export default Related;
