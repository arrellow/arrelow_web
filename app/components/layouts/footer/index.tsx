import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/landingLogo.svg";
import Linkedln from "@/app/assets/LinkedIn.svg";
import Twitter from "@/app/assets/Twitter.svg";
import FaceBook from "@/app/assets/Facebook.svg";
import instagram from "@/app/assets/Instagram.svg";
import ArrowBlue from "@/app/assets/arrowBlue.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col px-20 pt-24 max-sm:py-8  md:flex-row md:justify-around">
      <div className=" ">
        <Image src={Logo} alt="logo" />
        <div className="pt-4 text-sm leading-[40px] ">
          <p>info@arellow.com</p>
          <p>76 Chime Avenue, New Haven, Enugu, Nigeria.</p>
          <p>+234 903 984 2672</p>
          <p>Social Media</p>
        </div>
        <div className="flex gap-8 py-3 pb-6">
          <Image src={FaceBook} alt="facebook" />
          <Image src={Twitter} alt="facebook" />
          <Image src={instagram} alt="facebook" />
          <Image src={Linkedln} alt="facebook" />
        </div>
        <small className="pt-7 font-normal">
          &amp;2024 . Arellow Home is Proudly Powered by Arellow Team
        </small>
      </div>

      <div className="font-normal leading-[43px]">
        <h3 className="pt-6 text-[20px] font-bold">About Us</h3>
        <p>
          {" "}
          <Link href="">Home</Link>
        </p>
        <p>
          {" "}
          <Link href="">Properties</Link>
        </p>
        <p>
          {" "}
          <Link href="">About Us</Link>
        </p>
        <p>
          {" "}
          <Link href="">Contact Us</Link>
        </p>
      </div>
      <div className="font-normal leading-[43px]">
        <h3 className="pt-6 text-[20px] font-bold">News</h3>
        <p>
          {" "}
          <Link href="">Latest News</Link>
        </p>
        <p>
          {" "}
          <Link href="">House Architecture</Link>
        </p>
        <p>
          {" "}
          <Link href="">House Design</Link>
        </p>
        <p>
          {" "}
          <Link href="">Building Materials</Link>
        </p>
      </div>
      <div className="pt-6 font-normal leading-[43px]">
        <h3 className="text-[20px] font-bold">More Info</h3>
        <p>
          {" "}
          <Link href=""> All Properties</Link>
        </p>
        <p>
          {" "}
          <Link href="">Arellow Project</Link>
        </p>
        <p>
          {" "}
          <Link href=""> House Sold</Link>
        </p>
        <p>
          {" "}
          <Link href="">House Selling</Link>
        </p>
        {/* <p className="font-normal tracking-[1px]">
          Subscribe to get latest property, blog news from us
        </p>
        <div className="relative">
          <input
            type="text"
            className="h-[50px] w-[97%] rounded-[15px] border-[1px] border-black"
          />
          <Image
            src={ArrowBlue}
            alt="arrowBlue"
            className="absolute right-[20px] top-[10px] h-[30px] w-[30px]"
          />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
