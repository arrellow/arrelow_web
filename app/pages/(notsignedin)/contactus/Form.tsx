"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@/app/components/ui/inputs/custominput";
import Button from "@/app/components/ui/buttons";
import MyTextArea from "@/app/components/ui/inputs/textarea";
import { InputsContactUs } from "@/app/types/interface";
import useMutateContactUs from "@/app/services/contactus-controller/use-mutate-contactus";
import { setCookie } from "typescript-cookie";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
// interface searchProps {
//     name: string;
//     message: string
// }
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
    reset,
  } = useForm<InputsContactUs>();
  const contactUsMutation = useMutateContactUs();
  const onSubmit: SubmitHandler<InputsContactUs> = async (data) => {
    console.log(data);

    try {
      const res = await contactUsMutation.mutateAsync(data);
      console.log(res);
      reset();
      toast.success("Message Sent Successfully");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <section className="mx-auto min-h-[500px] pt-9 md:w-[90%]">
      <div className=" w-full  bg-[#023C63] md:flex p-4 md:p-0">
        <div className="bg-[#023C63] pl-10 py-14 text-white md:w-[50%]">
          <p className="pb-8">
            Address: 79 Chime Avenue, New Haven, Enugu, Nigeria.
          </p>
          <p className="pb-9">Hotline: +234 903 984 2672</p>
          <p>Email: info@arellow.com</p>
        </div>
        <div className="h-full pl-6 max-md:pr-6 max-md:py-8 md:w-[50%] bg-white">
          <h1 className="pb-6 text-[26px] font-bold leading-[38px]">
            CONTACT US
          </h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              control={control}
              name="name"
              placeholder="Name *"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: "Name is reuired",
                },
              }}
              className="mb-5 border-[1px] border-[#D1D1D5]"
            />{" "}
            <TextField
              control={control}
              name="email"
              placeholder="Email *"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: "Email is reuired",
                },
              }}
              className="mb-5 border-[1px] border-[#D1D1D5]"
            />{" "}
            <TextField
              control={control}
              name="phone"
              placeholder="Phone *"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: "Phone Number is reuired",
                },
              }}
              className="mb-5 border-[1px] border-[#D1D1D5]"
            />
            <div className="mb-5">
              <Controller
                control={control}
                // rules={{
                //   required: {
                //     value: true,
                //     message: "Name is required",
                //   },
                // }}
                defaultValue=""
                name="message"
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
            <Button
              variant="add"
              size="md"
              disabled={false}
              text="Send Message"
              className="rounded-none md:w-[40%]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
