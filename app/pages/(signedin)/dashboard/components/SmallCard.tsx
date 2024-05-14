import React from "react";
import Image from "next/image";

const SmallCard = ({ cardImage, cardNumber, cardText, className }: any) => {
  return (
    <main
      className={`flex gap-6 rounded-lg border-[1px] border-gray-600 ${className}`}
    >
      <section>
        <Image src={cardImage} alt="" />
      </section>
      <section>
        <p>{cardText}</p>
        <h2 className="text-2xl font-extrabold">{cardNumber}</h2>
      </section>
    </main>
  );
};

export default SmallCard;
