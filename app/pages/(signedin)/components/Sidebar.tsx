"use client";
import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Link from "next/link";
import Logo from "@/assets/multiplify-logo.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
const SideBar = () => {
  const navList = [
    {
      name: "Dashboard",
      icon: <GrHomeRounded />,
      link: "/pages/dashboard",
    },
    {
      name: "View profile",
      icon: <IoChatboxEllipsesOutline />,
      link: "/pages/profile",
    },
    {
      name: "Media",
      icon: <GrHomeRounded />,
      link: "/pages/media",
    },
    {
      name: "Properties",
      icon: <IoChatboxEllipsesOutline />,
      link: "/pages/property",
    },
    {
      name: "Pages",
      icon: <IoChatboxEllipsesOutline />,
      link: "/pages/pages",
    },
    {
      name: "Your Profile",
      icon: <IoChatboxEllipsesOutline />,
      link: "/pages/my-profile",
    },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  const handleMenuItemClick = (idx: any) => {
    setActiveIdx(idx);
  };

  return (
    <div className="border-r-gray-light min-h-screen w-full  border-2 bg-[#023C63]  pt-7 text-white ">
      {/* <div className="pb-7 pt-7">
        <Image src={Logo} alt="" />
      </div> */}
      <ul className="flex h-screen flex-col  justify-around">
        {navList.map((menu, idx) => (
          <div
            key={idx}
            onClick={() => handleMenuItemClick(idx)}
            className={`cursor-pointer ${idx === activeIdx ? "bg-[#D9D9D933]  text-white" : ""} rounded-xl py-5 `}
          >
            <div className="flex  items-center gap-4 pl-3">
              <p>{menu.icon}</p>
              <Link href={menu.link}>
                <li>{menu.name}</li>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
