import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BiImport } from "react-icons/bi";
import { CgExport } from "react-icons/cg";

const Header = () => {
  return (
    <header className=" border-b-primary flex items-center gap-5 border-[1px] px-7 py-5 text-lg font-bold">
      <div className="border-primary flex h-[60px] w-fit items-center justify-center gap-3 rounded-lg border-[1px]  px-5  py-3">
        <p>Bulk Actions</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <div className=" border-primary flex h-[60px] items-center  justify-center rounded-lg border-[1px] px-5  ">
        <p>Filters</p>
      </div>
      <div className="border-primary flex h-[60px] items-center justify-center rounded-lg border-[1px] px-4 py-3">
        <p>Search</p>
      </div>{" "}
      <div className="bg-primary flex h-[60px] w-fit items-center justify-center gap-3 rounded-lg px-4 py-3 text-white">
        <p>Create +</p>
      </div>
      <div className="border-primary flex h-[60px] w-fit items-center justify-center gap-3 rounded-lg border-[1px]  px-5  py-3">
        <BiImport />
        <p>Import Properties</p>
      </div>
      <div className="border-primary flex h-[60px] w-fit items-center justify-center gap-3 rounded-lg border-[1px]  px-5  py-3">
        <CgExport />
        <p>Export Properties</p>
      </div>
    </header>
  );
};

export default Header;
