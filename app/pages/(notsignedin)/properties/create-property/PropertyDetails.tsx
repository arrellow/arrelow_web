"use client";
import React from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "@/app/components/ui/buttons";
import TextField from "@/app/components/ui/inputs/custominput";
import { propertyDetailsProps } from "@/app/types/interface";
import MyTextArea from "@/app/components/ui/inputs/textarea";
import useMutateSignup from "@/app/services/auth-controller/signup-controller/use-mutate-signup";
import Selecfield from "@/app/components/ui/inputs/selectinput";

const PropertyDetails = () => {
  const router = useRouter();

  interface optType {
    value: string;
    label: string;
  }
  const options: optType[] = [
    { value: "Bungalow", label: "bungalow" },
    { value: "Detached", label: "detached" },
    { value: "Detached", label: "detached" },
    { value: "Detached", label: "detached" },
  ];

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = useForm<propertyDetailsProps>();
  const signupMutation = useMutateSignup();
  const onSubmit: SubmitHandler<propertyDetailsProps> = async (data) => {
    console.log(data);
    // try {
    //   const res = await signupMutation.mutateAsync(data);
    //   console.log(res);
    //   toast.success("Sign Up Successful");
    //   router.push("/pages/dashboard");
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     console.log(error);
    //     toast.error(error?.response?.data?.message);
    //   }
    // }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto flex w-[90%] flex-col gap-y-4 md:w-[50%]">
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Category <span className="text-[#F6901B]">*</span>
          </label>
          <Controller
            control={control}
            name="category"
            rules={{
              required: {
                value: true,
                message: "category is reuired",
              },
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Selecfield
                value={options.find((c) => c.value === value)}
                onChange={(val: any) => onChange(val.value)}
                options={options}
                className="border-[1px] border-[#948D8D] bg-[#F6F4F4]"
              />
            )}
          />
          {errors.category && (
            <span className="text-xs text-red-500">
              {errors?.category?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Title <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="title"
            placeholder="Title *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2  border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Description <span className="text-[#F6901B]">*</span>
          </label>
          <Controller
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Name is required",
            //   },
            // }}
            defaultValue=""
            name="description"
            render={({ field: { onChange, onBlur, value }, formState }) => (
              <MyTextArea
                placeholder="Short descriptions with house features*"
                cols={20}
                rows={5}
                className="border-[1px] border-[#948D8D] bg-[#F6F4F4]"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Features <span className="text-[#F6901B]">*</span>
          </label>
          <Controller
            control={control}
            name="feature"
            rules={{
              required: {
                value: true,
                message: "feature is reuired",
              },
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Selecfield
                value={options.find((c) => c.value === value)}
                onChange={(val: any) => onChange(val.value)}
                options={options}
                className="border-[1px] border-[#948D8D] bg-[#F6F4F4]"
              />
            )}
          />
          {errors.feature && (
            <span className="text-xs text-red-500">
              {errors?.feature?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Property Location <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="location"
            placeholder="Address *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2 border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Number of bedrooms <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="title"
            placeholder="Number of bedroom *"
            type="bedroom"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2 border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Number of bathrooms <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="bathroom"
            placeholder="Number of bathrooms *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2 border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Number of floors <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="floor"
            placeholder="Number of floors  *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2 border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Square (m2) <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="square"
            placeholder="Square (m2)  *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2 border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Price <span className="text-[#F6901B]">*</span>
          </label>
          <TextField
            control={control}
            name="price"
            placeholder="Naira *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "fullname is reuired",
              },
            }}
            className="mb-2 border-[1px] border-[#948D8D] bg-[#F6F4F4]"
          />
        </div>{" "}
        <div className="flex w-full items-center justify-between">
          <Button
            variant="add"
            type="submit"
            size="md"
            disabled={false}
            text={"Previous"}
            className="mt-6 w-[200px] rounded-none"
          />{" "}
          <Button
            variant="add"
            type="submit"
            size="md"
            disabled={false}
            text={"Next"}
            className="mt-6 w-[200px] rounded-none"
          />
        </div>
      </div>
    </form>
  );
};

export default PropertyDetails;
