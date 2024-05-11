"use client";
import TextField from "@/app/components/ui/inputs/custominput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMutateForgotPassword from "@/app/services/auth-controller/forgot-password-controller/use-mutate-forgot-password";
import { AxiosError } from "axios";
import { forgotPasswordProps } from "@/app/types/interface";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "@/app/components/ui/buttons";
import { useState } from "react";
import { Modal } from "@/app/components/ui/modal";

const ForgotPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<forgotPasswordProps>();
  const forgotPasswordMutation = useMutateForgotPassword();

  const onSubmit: SubmitHandler<forgotPasswordProps> = async (data) => {
    router.push("change-password");
    // console.log("my data is", data);
    // try {
    //   const res = await forgotPasswordMutation.mutateAsync(data);
    //   console.log(res);
    //   toast.success(res?.message);
    //   router.push("/pages/dashboard");
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     console.log(error);
    //     toast.error(error?.response?.data?.message);
    //   }
    // }
  };
  return (
    <main className="flex h-screen items-center justify-center">
      <ToastContainer />
      <form
        action=""
        className=" py-6 shadow-lg md:h-[600px] md:w-[50%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <main className="mx-auto w-4/5">
          <header className="flex flex-col gap-y-6 pb-10 pt-10 text-center">
            <h1 className="text-4xl  text-[#F6901B] ">
              Did you forget your password?
            </h1>
            <p className="text-base text-[#948D8D]">
              Enter your e-mail address below and we will <br /> send you an
              e-mail reset link
            </p>
          </header>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
              <label
                htmlFor=""
                className=" text-[14px] font-bold leading-[20px]"
              >
                E-mail Address
              </label>
              <TextField
                control={control}
                name="email"
                placeholder="Enter email *"
                type="text"
                rules={{
                  required: {
                    value: true,
                    message: "Email is reuired",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                }}
                className="mb-2 border-[1px] border-[#D1D1D5]"
              />
            </div>
            <Button
              variant="add"
              type="submit"
              size="md"
              disabled={false}
              text={isSubmitting ? "Loading....." : "Request Reset Link"}
              className="mt-6 w-[100%] rounded-none"
            />
          </div>
        </main>
      </form>
    </main>
  );
};

export default ForgotPassword;
