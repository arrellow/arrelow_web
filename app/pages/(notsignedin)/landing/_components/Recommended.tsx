"use client";
import React from "react";
import Image from "next/image";
import ScrollingBar from "@/app/components/molecules/scrollingcard";
import House1 from "@/app/assets/house1.svg";
import House2 from "@/app/assets/house2.svg";
import SignInBar from "@/app/assets/scrollingImage.svg";
import Love from "@/app/assets/love.svg";
import Location from "@/app/assets/location.svg";
import Cart from "@/app/assets/cart.svg";
import { beautify } from "@/app/utils/helper";
import { Card } from "@/app/components/cards";
import useGeAllRecommendedPost from "@/app/services/post-controller/all-recommended-controller/use-get-all-recommended";
import useGeAllPost from "@/app/services/post-controller/all-post-controller/use-get-all-post";

const CardContent = [
  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },

  {
    bg: House1,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
  {
    bg: House2,
    text1: "N43million",
    text2: "Bungalow",
    para1: "2 Bedroom Terrace",
    img1: "",
  },
];

const Recommended = () => {
  const { data: post, isLoading } = useGeAllPost({categoy: "recommend"});
  console.log("Recommended is", post);
  return (
    <div className=" pt-[110px]  ">
      <div className="">
        <header className="flex justify-between  px-5 pb-14 font-semibold leading-[34px] tracking-[-4%] md:px-20 md:text-[28px]">
          <h1>Recommended Properties</h1>
          <h2>See All</h2>
        </header>
        <div className="bg-[#E7F6FF] px-6 py-4 md:pl-20 ">
          <ScrollingBar>
            <div className="no-scrollbar  flex w-full gap-4 overflow-x-auto pt-10">
              <div
                className="bg-rounded z-0 h-[420px] min-w-96 rounded-[20px]"
                style={{
                  backgroundImage: `url(${SignInBar.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <button className="h-[100px] w-[90%] rounded-[64px] bg-[#E7F6FF] text-[26px] font-bold">
                    Sign In
                  </button>
                  <p className="w-[70%] py-5  pt-4 text-center text-[22px] font-bold tracking-[-4%] text-white">
                    to Sell Properties.
                  </p>
                </div>
              </div>
              {isLoading ? (
                "data is loading"
              ) : post?.length > 0 ? (
                post?.map((item: any, idx: any) => (
                  <div key={idx}>
                    <Card
                      isBackground
                      backgroundImage={item.banner}
                      className=" relative w-96 gap-4 overflow-hidden"
                    >
                      <div className="float-right mr-7 mt-5 flex h-[30px] w-[100px] items-center justify-center bg-[#2C9FD9] text-base font-semibold text-white">
                        Selling
                      </div>
                      <div className="absolute bottom-0  w-full rounded-small">
                        <div className="flex">
                          <div className="flex h-[35px] w-[120px] items-center justify-center bg-[#023C63] text-center text-white">
                            <span>&#8358;{beautify(item.price)}</span>
                          </div>
                          <div className="flex h-[35px] w-[120px] items-center justify-center rounded-tr-[33.42px] bg-[#FEFEFE] text-center">
                            <span>{item.category}</span>
                          </div>
                        </div>
                        <div className="flex min-h-[50px] w-full justify-between bg-white  px-4 py-3 pb-2 opacity-70">
                          <div>
                            <h4 className="text-[24px] font-bold leading-[30px] tracking-[-4%] text-[#023C63]">
                              {item.number_of_bedrooms} Bedroom Terrace
                            </h4>
                            <div className="flex items-center gap-3">
                              <Image
                                src={Location}
                                height={20}
                                width={20}
                                alt=""
                              />
                              <p className="text-[17px] font-normal tracking-tight">
                                {item.property_location}
                              </p>
                            </div>
                          </div>
                          <div>
                            <Image src={Love} height={20} width={20} alt="" />
                            <p>1,000</p>
                          </div>
                        </div>
                        <div className=" inner inset-0 flex h-[50px] w-full items-center gap-10 bg-[#7F8184]  bg-cover pl-4 text-sm font-normal text-white">
                          <span className="text-base font-normal">
                            {item?.number_of_floors}
                          </span>
                          <div className="flex items-center gap-3">
                            <p className="text-base font-normal">
                              {item.number_of_bathrooms}
                            </p>
                            <Image src={Cart} height={30} width={30} alt="" />
                            <p>{item.square} m²</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))
              ) : (
                <p>No data is available</p>
              )}
            </div>
          </ScrollingBar>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
