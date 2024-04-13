"use client";
import MyTextArea from "@/app/components/ui/inputs/textarea";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@/app/components/ui/inputs/custominput";
import Button from "@/app/components/ui/buttons";

const Subscribe = () => {
  const { register, handleSubmit, control } = useForm();
  return (
    <div className="  mt-14 bg-[#F2F9FB]  pt-16">
      <div className="text-center flex flex-col gap-y-7">
        <h1 className="font-bold text-[48px] leading-[42px]">
          Subscribe to Our Newsletter
        </h1>
        <p className="font-normal">Enter your email address to get listed</p>
      </div>
      <div className="flex  w-[40%] items-center  mx-auto py-14">
        <TextField
          control={control}
          name="text"
          placeholder="Enter email address"
          type="text"
          rules={{
            required: {
              value: true,
              message: "email address  is reuired",
            },
          }}
          className="rounded-none bg-white  w-[70%] border-none h-[40px]"
        />
        <Button
          variant="orange"
          size="md"
          text="Get listed"
          disabled={false}
          className=" w-[30%] h-[36px]  rounded-none "
        />
      </div>
    </div>
  );
};

export default Subscribe;
