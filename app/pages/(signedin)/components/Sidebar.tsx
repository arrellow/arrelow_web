"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import Link from "next/link";
import Logo from "@/app/assets/landingLogo.svg";

const navList = [
  {
    name: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
    link: "/pages/dashboard",
  },
  {
    name: "View profile",
    icon: <MdOutlineMoreHoriz />,
    link: "/pages/profile",
  },
  {
    name: "Media",
    icon: <MdOutlineSettings />,
    link: "/pages/media",
  },
  {
    name: "Properties",
    icon: <MdOutlineIntegrationInstructions />,
    link: "/pages/property",
  },
  {
    name: "Pages",
    icon: <MdOutlineAnalytics />,
    link: "/pages/pages",
  },
  {
    name: "Your Profile",
    icon: <MdOutlineIntegrationInstructions />,
    link: "/pages/my-profile",
  },
];
function SideNavbar() {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  const onLogOut = () => {
    // Handle logout
  };

  return (
    <div>
      <Disclosure as="nav">
        {({ open, close }) => (
          <>
            <div className="fixed z-10 h-[60px] w-full bg-white lg:hidden">
              <Disclosure.Button className="group peer  absolute right-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
                <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>

            {/* SMALL SCREEN */}
            <div
              className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-all duration-200 ease-out ${
                open ? "block" : "hidden"
              } lg:hidden`}
            >
              <div className="w-7/10 fixed left-0 top-0 h-screen bg-white p-6">
                <div className="flex flex-col justify-start">
                  {/* <div className="pb-7 pt-7">
                    <Image src={Logo} alt="Logo" />
                  </div> */}
                  <div className="my-4 flex flex-col gap-y-8 border-b border-gray-100">
                    {navList.map((menu, idx) => (
                      <Link
                        key={idx}
                        href={menu.link}
                        onClick={(e) => {
                          setActiveLink(menu.link);
                          close();
                        }}
                      >
                        <div
                          className={`group m-auto mb-2 flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 pl-5 ${
                            pathname === menu.link || activeLink === menu.link
                              ? " bg-[#023C63] text-white shadow-lg"
                              : "hover:[#023C63] text-gray-600 hover:text-white hover:shadow-lg"
                          }`}
                        >
                          <p>{menu.icon}</p>
                          <h3>{menu.name}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LARGE SCREEN */}
            <div className="hidden h-screen overflow-auto bg-[#023C63] lg:flex lg:w-60 lg:flex-col">
              <div className="flex flex-col justify-start">
                {/* <div className="pb-7 pt-7">
                  <Image src={Logo} alt="" />
                </div> */}
                <div className="my-4 flex flex-col gap-y-8 border-b border-gray-100">
                  {navList.map((menu, idx) => (
                    <Link
                      key={idx}
                      href={menu.link}
                      onClick={(e) => {
                        setActiveLink(menu.link);
                      }}
                    >
                      <div
                        className={`group m-auto mb-2 flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 pl-5 ${
                          pathname === menu.link || activeLink === menu.link
                            ? "bg-white text-gray-600 shadow-lg"
                            : "text-white hover:bg-white hover:text-gray-600 hover:shadow-lg"
                        }`}
                      >
                        <p>{menu.icon}</p>
                        <h3>{menu.name}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
