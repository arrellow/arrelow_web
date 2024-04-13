"use client";
import React, { useEffect } from "react";
import useAuthStore from "@/app/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import LandingLogo from "@/app/assets/landingLogo.svg";
import HomeLogo from "@/app/assets/HomePage.svg";
import Link from "next/link";
import Button from "../../ui/buttons";

const NavBar = () => {
  const router = useRouter();
  const MENU_LIST_SIGNED_OUT = [
    { text: "HOME", href: "/pages/landing" },
    { text: "PROPERTIES", href: "/pages/properties" },
    { text: "ABOUT US", href: "/pages/about" },
    { text: "CONTACT US", href: "/pages/contactus" },
    { text: "BLOG", href: "/pages/blog" },
    // { text: "Sign in", href: "/signin" },
  ];

  // const signedIn = useAuthStore((state) => state.signedIn);
  // const signOut = useAuthStore((state) => state.signOut);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  const handleMenuItemClick = (idx: any) => {
    setActiveIdx(idx);
  };
  const handleClick = () => {
    router.push("/pages/auth");
  };
  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-white py-4 md:pl-11">
      <header className="h-[70px] w-full  max-sm:h-[50px] md:px-7">
        <nav
          className={`flex items-center justify-between px-4 md:px-8 md:py-4`}
        >
          <Link href={"/"}>
            <div onClick={() => setActiveIdx(-1)} className="">
              <Image
                src={LandingLogo}
                alt="logo"
                className=" max-sm:h-[50px] max-sm:w-[90px]"
                height={50}
                width={150}
              />
            </div>
          </Link>
          <div
            className={`flex w-full cursor-pointer justify-end md:hidden`}
            onClick={toggleMenu}
          >
            <p className="text-[30px]">
              {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </p>
          </div>
          <ul>
            <div className={`hidden gap-4 md:flex md:items-center`}>
              {MENU_LIST_SIGNED_OUT.map((menu, idx) => (
                <div
                  key={menu.href}
                  onClick={() => handleMenuItemClick(idx)}
                  className={`ml-4 cursor-pointer ${
                    idx === activeIdx ? "font-bold text-[#95CFEC]" : ""
                  }`}
                >
                  <Link href={menu.href}>
                    <li className="text-sm font-normal leading-[29px] tracking-[20%]">
                      {menu.text}
                    </li>
                  </Link>
                </div>
              ))}
              <Button
                className="flex items-center justify-center text-sm font-normal leading-[29px] tracking-[20%]"
                variant="primary"
                onClick={handleClick}
                size="sm"
                disabled={false}
                text="SIGN IN"
              />
            </div>
          </ul>
        </nav>
        {isMenuOpen && (
          <ul className="flex h-[100vh] w-full justify-center overflow-hidden bg-white px-0 pt-7">
            <div className={`gap-4  md:hidden md:items-center`}>
              {MENU_LIST_SIGNED_OUT.map((menu, idx) => (
                <div
                  key={menu.href}
                  onClick={() => handleMenuItemClick(idx)}
                  className={`ml-4 flex cursor-pointer flex-col gap-y-12 ${
                    idx === activeIdx ? "font-bold text-[#95CFEC]" : ""
                  }`}
                >
                  <Link href={menu.href} onClick={() => setMenuOpen(false)}>
                    <li className="py-9 text-sm font-normal leading-[29px] tracking-[20%]">
                      {menu.text}
                    </li>
                  </Link>
                </div>
              ))}
              <Button
                className="flex items-center justify-center text-sm font-normal leading-[29px] tracking-[20%]"
                variant="primary"
                onClick={handleClick}
                size="sm"
                disabled={false}
                text="SIGN IN"
              />
            </div>
          </ul>
        )}
      </header>
    </div>
  );
};

export default NavBar;
