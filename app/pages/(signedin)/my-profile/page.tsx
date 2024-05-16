"use client";

import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Card } from "@/app/components/cards";
import Love from "@/app/assets/love.svg";
import Location from "@/app/assets/location.svg";
import Cart from "@/app/assets/cart.svg";
import Car from "@/app/assets/car.svg";
import El from "@/app/assets/el.svg";
import { Checkbox } from "@/app/components/ui/inputs/checkbox";
import ProfileImage from "@/app/assets/propertyTwo.png";
import TextField from "@/app/components/ui/inputs/custominput";
import Button from "@/app/components/ui/buttons";
import { beautify } from "@/app/utils/helper";
import MyTextArea from "@/app/components/ui/inputs/textarea";
import { MdDelete } from "react-icons/md";
import useGeAllPost from "@/app/services/post-controller/all-post-controller/use-get-all-post";

interface Inputs {
  fname: string;
  lname: string;
}
const YourProfile = () => {
  const { data: post, isLoading } = useGeAllPost();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    //   try {
    //     const res = await signupMutation.mutateAsync(data);
    //     console.log(res);
    //     toast.success("Sign Up Successful");
    //     router.push("/pages/dashboard");
    //   } catch (error) {
    //     if (error instanceof AxiosError) {
    //       console.log(error);
    //       toast.error(error?.response?.data?.message);
    //     }
    //   }
  };
  return (
    <main className="mx-auto w-[90%]">
      <h1 className="  text-center text-3xl font-extrabold">YOUR DASHBOARD </h1>
      <section className="flex flex-col gap-y-5 md:w-1/2">
        <div>
          <label htmlFor="">Name</label>
          <div className="flex items-center gap-4 ">
            <TextField
              type="text"
              placeholder="Chelsea"
              control={control}
              name="fname"
            />{" "}
            <TextField
              type="text"
              placeholder="Chelsea"
              control={control}
              name="lname"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="">Gender</label>
          <Checkbox text="Male" /> <Checkbox text="Feale" />{" "}
          <Checkbox text="Others" />
        </div>
        <div>
          <label htmlFor="" className="my-12 pb-8">
            {" "}
            Profile picture
          </label>
          <div className="flex items-center gap-5 pt-9">
            <Image
              src={ProfileImage}
              alt=""
              className="h-[150px] w-[150px] rounded-[50%]"
            />
            <div className="flex flex-col gap-y-4">
              <Button
                variant="orange"
                size="sm"
                text="Remove"
                className="flex h-[50px] w-[100px] items-center justify-center text-xs"
              />{" "}
              <Button
                variant="orange"
                size="sm"
                text="Change picture"
                className="flex h-[50px] w-[100px] items-center justify-center text-xs"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="">City & Country</label>
          <div className="flex items-center gap-4 ">
            <TextField
              type="text"
              placeholder="Lagos State"
              control={control}
              name="fname"
            />{" "}
            <TextField
              type="text"
              placeholder="Nigeria"
              control={control}
              name="lname"
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Biography</label>

          <Controller
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Name is required",
            //   },
            // }}
            defaultValue=""
            name="fname"
            render={({ field: { onChange, onBlur, value }, formState }) => (
              <MyTextArea
                placeholder="Message *"
                cols={30}
                rows={10}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                className=""
              />
            )}
          />
        </div>
      </section>
      <div>
        <label htmlFor="">Published</label>
        <div className="flex flex-col justify-around gap-y-5 ">
          {post?.map((item: any, idx: any) => (
            <div
              key={idx}
              className=" flex cursor-pointer items-center justify-between"
            >
              <Card
                isBackground
                backgroundImage={item?.banner}
                className=" relative  w-[30%] gap-4 overflow-hidden"
              >
                <div className="float-right mr-7 mt-5 flex h-[30px] w-[100px] items-center justify-center bg-[#2C9FD9] text-base font-semibold text-white">
                  {item?.status}
                </div>
                <div className="absolute bottom-0 w-full rounded-small">
                  <div className="flex">
                    <div className="flex h-[35px] w-[120px] items-center justify-center bg-[#023C63] text-center text-white">
                      <span>&#8358;{beautify(item.price)}</span>
                    </div>
                    <div className="flex h-[35px] w-[120px] items-center justify-center rounded-tr-[33.42px] bg-[#FEFEFE] text-center">
                      <span>{item?.category}</span>
                    </div>
                  </div>
                  <div className="flex min-h-[50px] w-full justify-between bg-white  px-4 py-3 pb-2 opacity-70">
                    <div>
                      <h4 className="text-[24px] font-bold leading-[30px] tracking-[-4%] text-[#023C63]">
                        {item?.number_of_bedrooms} Bedroom Terrace
                      </h4>
                      <div className="flex items-center gap-3">
                        <Image src={Location} height={20} width={20} alt="" />
                        <p className="text-[17px] font-normal tracking-tight">
                          {item?.property_location}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image src={Love} height={20} width={20} alt="" />
                      <p>1,000</p>
                    </div>
                  </div>
                  <div className=" inner font-sm inset-0 flex h-[50px] w-full items-center gap-5  bg-[#7F8184] bg-cover pl-4 text-sm text-white">
                    <div className="flex items-center gap-1">
                      <p className="font-sm text-base">
                        {item?.number_of_floors}
                      </p>
                      <Image src={Car} height={20} width={20} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-sm text-base">
                        {item?.number_of_bathrooms}
                      </p>
                      <Image src={Cart} height={20} width={20} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p>{item?.square} m²</p>
                      <Image src={El} height={20} width={20} alt="" />
                    </div>
                  </div>
                </div>
              </Card>
              <div>
                <h3 className="text-xl font-bold">
                  Top Selling Properties in Lekki Phase 1
                </h3>
                <p className="font-bold">May 17, 2022</p>
              </div>
              <span className="rounded-md border-2  border-black p-2">
                + Edit Post
              </span>
              <MdDelete className="text-[28px] text-[#948A8ACC]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default YourProfile;
