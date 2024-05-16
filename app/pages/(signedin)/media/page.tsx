import React from "react";
import { LuDownload } from "react-icons/lu";
import {
  MdOutlineKeyboardArrowDown,
  MdNoteAdd,
  MdPhotoLibrary,
} from "react-icons/md";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoIosRefresh } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import Card from "./Card";

const Advertise = () => {
  return (
    <main className="border-primary mx-auto w-[90%] border-[1px]">
      <header className=" border-b-primary flex items-center gap-5 border-[1px] px-7 py-5 text-2xl text-white">
        <div className="flex h-[60px] w-fit items-center justify-center gap-3 rounded-lg bg-[#023C63] px-5  py-3">
          <LuDownload />
          <p>flex</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className=" bg-primary flex h-[60px]  items-center justify-center rounded-lg px-5  ">
          <MdNoteAdd />
        </div>
        <div className="bg-primary flex h-[60px] items-center justify-center rounded-lg px-4 py-3">
          <IoIosRefresh />
        </div>{" "}
        <div className="bg-primary flex h-[60px] items-center justify-center gap-3 rounded-lg px-4 py-3">
          <IoEyeSharp />
          <p>All Media</p>
          <MdOutlineKeyboardArrowDown />
        </div>
      </header>
      <div className="text-primary flex items-center gap-1 px-4 py-3 text-sm">
        <HiOutlinePhoto />
        <h3>All Media</h3>
      </div>
      <section className="border-t-primary grid gap-5 border-[1px] px-4 py-5 md:grid-cols-4">
        <Card text="Properties" /> <Card text="Properties" />{" "}
        <Card text="News" /> <Card text="General" /> <Card text="Accounts" />{" "}
        <Card text="Logo" /> <Card text="Cities" /> <Card text="Users" />{" "}
        <Card text="Banners" />
      </section>
    </main>
  );
};

export default Advertise;
