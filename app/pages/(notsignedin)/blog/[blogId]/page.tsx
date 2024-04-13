"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Card } from "../itemcard";
import Image from "next/image";

const BlogId = ({ params }: { params: { blogId: string } }) => {
  console.log("My param ID is", params.blogId);
  const card = Card.find((item) => item.id === parseInt(params.blogId));
  console.log({ card });
  return (
    <div className="pt-36 md:px-20">
      <div>
        {card ? (
          <div>
            <div className="h-[400px] w-full">
              <Image
                src={card.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-6 pb-8 pt-5  ">
              <Image
                src={card.profile}
                alt=""
                className="mr-8 h-[76px] w-[76px]"
              />
              <h3 className="font-semibold">By Admin</h3>
              <span className="h-[40px] border-2 border-black"></span>
              <div className="flex items-center gap-2">
                <Image src={card.customImage} alt="" />
                <p>{card.date}</p>
              </div>
            </div>
            <div>
              <h1 className="pb-7 pt-4 text-center text-[24px] font-bold leading-[32px]">
                {card.topic}
              </h1>
              <div className="font-normal leading-[24px]">
                <p>
                  Arellow Homes is a pioneering real estate company in Nigeria,
                  established in 2022 with a commitment to revolutionize the
                  local real estate market. Our online platform,
                  www.arellow.com, serves as a dynamic hub for property
                  transactions, distinguishing itself by offering a unique and
                  fee-free experience for both sellers and buyers.Since our
                  inception, we have dedicated ourselves to continuous
                  innovation and improvement, ensuring that Arellow Homes
                  remains at the forefront of the real estate industry in
                  Nigeria.
                </p>
                <p className="pt-5">
                  Arellow Homes is a pioneering real estate company in Nigeria,
                  established in 2022 with a commitment to revolutionize the
                  local real estate market. Our online platform,
                  www.arellow.com, serves as a dynamic hub for property
                  transactions, distinguishing itself by offering a unique and
                  fee-free experience for both sellers and buyers.Since our
                  inception, we have dedicated ourselves to continuous
                  innovation and improvement, ensuring that Arellow Homes
                  remains at the forefront of the real estate industry in
                  Nigeria. Our commitment to creativity and user-centric
                  solutions has transformed the company into a trusted and
                  efficient platform for all our users.Join us at Arellow Homes
                  as we redefine real estate in Nigeria, offering a
                  cost-effective and user-friendly experience that sets new
                  standards in the industry.Arellow is constantly connecting
                  between buyers and sellers in the field of Real estate,
                  bringing people closer together, over the distance of time and
                  space. Arellow Homes is a pioneering real estate company in
                  Nigeria, established in 2022 with a commitment to
                  revolutionize the local real estate market. Our online
                  platform, www.arellow.com, serves as a dynamic hub for
                  property transactions, distinguishing itself by offering a
                  unique and fee-free experience for both sellers and
                  buyers.Since our inception, we have dedicated ourselves to
                  continuous innovation and improvement, ensuring that Arellow
                  Homes remains at the forefront of the real estate industry in
                  Nigeria. Our commitment to creativity and user-centric
                  solutions has transformed the company into a trusted and
                  efficient platform for all our users.Join us at Arellow Homes
                  as we redefine real estate in Nigeria, offering a
                  cost-effective and user-friendly experience that sets new
                  standards in the industry.Arellow is constantly connecting
                  between buyers and sellers in the field of Real estate,
                  bringing people closer together, over the distance of time and
                  space.
                </p>
                <p className="pt-5">
                  Arellow Homes is a pioneering real estate company in Nigeria,
                  established in 2022 with a commitment to revolutionize the
                  local real estate market. Our online platform,
                  www.arellow.com, serves as a dynamic hub for property
                  transactions, distinguishing itself by offering a unique and
                  fee-free experience for both sellers and buyers.Since our
                  inception, we have dedicated ourselves to continuous
                  innovation and improvement, ensuring that Arellow Homes
                  remains at the forefront of the real estate industry in
                  Nigeria. Our commitment to creativity and user-centric
                  solutions has transformed the company into a trusted and
                  efficient platform for all our users.Join us at Arellow Homes
                  as we redefine real estate in Nigeria, offering a
                  cost-effective and user-friendly experience that sets new
                  standards in the industry.Arellow is constantly connecting
                  between buyers and sellers in the field of Real estate,
                  bringing people closer together, over the distance of time and
                  space. Arellow Homes is a pioneering real estate company in
                  Nigeria, established in 2022 with a commitment to
                  revolutionize the local real estate market. Our online
                  platform, www.arellow.com, serves as a dynamic hub for
                  property transactions, distinguishing itself by offering a
                  unique and fee-free experience for both sellers and
                  buyers.Since our inception, we have dedicated ourselves to
                  continuous innovation and improvement, ensuring that Arellow
                  Homes remains at the forefront of the real estate industry in
                  Nigeria. Our commitment to creativity and user-centric
                  solutions has transformed the company into a trusted and
                  efficient platform for all our users.Join us at Arellow Homes
                  as we redefine real estate in Nigeria, offering a
                  cost-effective and user-friendly experience that sets new
                  standards in the industry.Arellow is constantly connecting
                  between buyers and sellers in the field of Real estate,
                  bringing people closer together, over the distance of time and
                  space.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Card not found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogId;
