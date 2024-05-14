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
      name: "Finance Matching",
      icon: <IoChatboxEllipsesOutline />,
      link: "/funding/finance-matching",
    },
    {
      name: "Marketplace",
      icon: <GrHomeRounded />,
      link: "/funding/marketplace",
    },
    {
      name: "Inbox",
      icon: <IoChatboxEllipsesOutline />,
      link: "/funding/inbox",
    },
    {
      name: "Inbox",
      icon: <IoChatboxEllipsesOutline />,
      link: "/funding/inbox",
    },
    {
      name: "Inbox",
      icon: <IoChatboxEllipsesOutline />,
      link: "/funding/inbox",
    },
    {
      name: "Inbox",
      icon: <IoChatboxEllipsesOutline />,
      link: "/funding/inbox",
    },
    {
      name: "Inbox",
      icon: <IoChatboxEllipsesOutline />,
      link: "/funding/inbox",
    },
  ];
  const [activeIdx, setActiveIdx] = useState(-1);

  const handleMenuItemClick = (idx: any) => {
    setActiveIdx(idx);
  };

  return (
    <div className="border-r-gray-light min-h-screen w-full  border-2 bg-[#023C63] pl-4 pr-4 pt-7 text-white ">
      {/* <div className="pb-7 pt-7">
        <Image src={Logo} alt="" />
      </div> */}
      <ul className="flex h-screen flex-col justify-around">
        {navList.map((menu, idx) => (
          <div
            key={idx}
            onClick={() => handleMenuItemClick(idx)}
            className={`cursor-pointer ${idx === activeIdx ? "bg-opacity-50 text-white" : ""} rounded-xl `}
          >
            <div className="flex items-center gap-4">
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
