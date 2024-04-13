import React from "react";
import Image from "next/image";
import Google from "@/app/assets/google.png";
import Apple from "@/app/assets/apple.png";
import Phone from "@/app/assets/GroupPhone.svg";

const GetArrellow = () => {
  return (
    <div className=" relative mx-auto mt-32 min-h-[400px] bg-[#E7F6FF] pb-4 pt-2 md:w-[87%]">
      <div className="ml-10 flex flex-col py-12 max-sm:ml-3 md:w-[45%] md:flex-row md:gap-7 md:px-10">
        <div>
          <h1 className="text-[45px] font-normal leading-[53px]">
            Get <span className="text-[#1DAEFF]">Arellow</span> App
          </h1>
          <p className="py-3 font-medium">
            We will send you a link, open it on your phone to download the app.
          </p>
          <section className="flex gap-3 py-3 font-medium">
            <div className="flex gap-2">
              <input type="radio" name="option" value="phone" />
              <p>Phone</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="option" value="email" />
              <p>Email</p>
            </div>
          </section>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder=" Your Phone Number"
              className="h-[47px] px-5 "
            />
            <button className="h-[47px] bg-[#1DAEFF] px-8 py-3 text-white">
              Submit
            </button>
          </div>
          <p className="py-4 font-medium">Download App From</p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Image
              src={Google}
              height={60}
              width={200}
              alt="google"
              style={{ height: "50px" }}
              className="max-sm:w-[170px]"
            />
            <Image
              src={Apple}
              height={60}
              width={200}
              alt="apple"
              className="max-sm:w-[170px]"
              style={{ height: "50px" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[-30px] mt-4 h-[300px] w-[90%] pr-8 max-sm:relative max-sm:mx-auto md:h-[490px] md:w-[45%] ">
        <Image src={Phone} alt="phone" className="h-full object-cover  " />
      </div>
    </div>
  );
};

export default GetArrellow;
