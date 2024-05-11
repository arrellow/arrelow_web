"use client";
import { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "@/app/components/ui/buttons";
import TextField from "@/app/components/ui/inputs/custominput";
import { changePassword } from "@/app/types/interface";
import useMutateLogin from "@/app/services/auth-controller/login-controller/use-mutate-login";
import { Modal } from "@/app/components/ui/modal";
import styles from "../auth.module.css";

const ChangePassword = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const router = useRouter();
  const handleClick = async () => {
    router.back();
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<changePassword>();
  const loginMutation = useMutateLogin();

  const onSubmit: SubmitHandler<changePassword> = async (data) => {
    if (data?.password === data.confirmPassword) {
      toast.error("Passwords do not match");
    }
    setIsSuccessModalOpen(true);
    console.log("my data is", data);
    // try {
    //   const res = await loginMutation.mutateAsync(data);
    //   console.log(res);
    //   toast.success(res?.message);
    //   router.push("/pages/dashboard");
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     console.log(error);
    //     toast.error(error?.response?.data?.message);
    //     setIsErrorModalOpen(true);
    //   }
    // }
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className={`flex items-center justify-center py-8 ${styles.hero}`}
    >
      <ToastContainer />
      <div className="min-h-[500px] w-[95%] rounded-lg bg-white px-6 py-8 md:w-[35%] ">
        <div>
          <span className="flex cursor-pointer justify-end">
            <IoCloseSharp fontSize={30} onClick={handleClick} />
          </span>
          <h1 className="pb-6 text-center text-[16px] font-bold leading-[22px]">
            Welcome to Arellow
          </h1>
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Enter New Password
          </label>
          <TextField
            control={control}
            name="password"
            placeholder="Enter password"
            isPassword={true}
            rules={{
              required: {
                value: true,
                message: "password is reuired",
              },
              // minLength: {
              //   value: 4,
              //   message: "Password must be at least 4 characters long",
              // },
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"|,.<>?]).*$/,
              //   message:
              //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              // },
            }}
            className="mb-5 border-[1px] border-[#D1D1D5]"
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Confirm Password
          </label>
          <TextField
            control={control}
            name="confirmPassword"
            placeholder="Confirm password"
            isPassword={true}
            rules={{
              required: {
                value: true,
                message: "password is reuired",
              },
              // minLength: {
              //   value: 4,
              //   message: "Password must be at least 4 characters long",
              // },
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"|,.<>?]).*$/,
              //   message:
              //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              // },
            }}
            className="mb-5 border-[1px] border-[#D1D1D5]"
          />
        </div>
        <Button
          variant="add"
          type="submit"
          size="md"
          disabled={false}
          text={isSubmitting ? "Loading....." : "Update"}
          className="mt-6 w-[100%] rounded-none"
        />
      </div>
      {/* Success Modal */}
      <Modal isOpen={isSuccessModalOpen} setIsOpen={setIsSuccessModalOpen}>
        Success Message
      </Modal>

      {/* Error Modal */}
      <Modal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen}>
        Error Message
      </Modal>
    </form>
  );
};

export default ChangePassword;
