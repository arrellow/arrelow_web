import React from "react";
import Dream from "@/app/assets/dreamhome.svg";
import Image from "next/image";

const DreamHome = () => {
  return (
    <section>
      <header className="flex flex-col items-center gap-7 pt-20 md:flex-row">
        <div className="md:w-[45%]">
          <Image src={Dream} alt="" />
        </div>
        <div className="md:w-[45%]">
          <h1 className="pb-3 font-bold">Vision</h1>
          <p className="leading-[24px] text-[16x]">
            To transform the landscape of real estate in Nigeria by creating an
            inclusive and transparent platform, empowering individuals to
            achieve their property goals without financial barriers.
          </p>
        </div>
      </header>
      <main className="py-24">
        <h1 className="text-center text-[43px] font-medium leading-[44px] text-[#F6901B] md:leading-[24px]">
          FIND YOUR DREAM HOME
        </h1>
        <div className="flex flex-col items-center gap-7 pt-20 md:flex-row">
          <div className="md:w-[45%]">
            <h1 className="pb-3 font-bold">Vision</h1>
            <p className="leading-[24px] text-[16x]">
              To build a real estate company that unifies and create big market
              opportunity for both buyers and sellers of houses across Nigeria.
              - Enable buyers to access a diverse range of properties without
              incurring additional fees, making property ownership more
              attainable. - Provide a user-friendly and cost-free platform for
              real estate agents to list and sell properties, fostering
              collaboration and growth within the industry.
            </p>
          </div>
          <div className="md:w-[45%]">
            <Image src={Dream} alt="" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default DreamHome;
