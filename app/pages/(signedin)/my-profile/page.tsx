"use client";

import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Checkbox } from "@/app/components/ui/inputs/checkbox";
import ProfileImage from "@/app/assets/propertyTwo.png";
import TextField from "@/app/components/ui/inputs/custominput";
import Button from "@/app/components/ui/buttons";
import MyTextArea from "@/app/components/ui/inputs/textarea";

interface Inputs {
  fname: string;
  lname: string;
}
const YourProfile = () => {
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
        <div>
          <label htmlFor="">Published</label>
        </div>
      </section>
    </main>
  );
};

export default YourProfile;
