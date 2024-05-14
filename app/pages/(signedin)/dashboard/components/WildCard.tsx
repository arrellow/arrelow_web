import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const WildCard = ({
  cardText,
  cardIcon,
  cardNumber,
  cardTitle,
  cardImage,
  className,
}: any) => {
  return (
    <main className={` bg-white px-10 py-10 shadow-md rounded-md ${className}`}>
      <section className="flex flex-col gap-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p>{cardText}</p>
            <p>{cardIcon}</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">{cardNumber}</h2>
            <h3 className="font-medium">{cardTitle}</h3>
          </div>
        </div>
        <div className="flex w-full flex-col items-end">
          <Image src={cardImage} alt="" />
          <div className="flex items-center gap-4 pt-4">
            <p className="font-medium ">More Info</p>
            <FaArrowRight />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WildCard;
