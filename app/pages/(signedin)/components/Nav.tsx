"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react"; // Import useSession
import { getCookie } from "typescript-cookie";
import LandingLogo from "@/app/assets/landingLogo.svg";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import SearchInput from "@/app/components/molecules/searchinput";
import { getFirstLetter } from "@/app/utils/helper";
import TextField from "@/app/components/ui/inputs/custominput";
import { FaArrowRightLong } from "react-icons/fa6";
import useMutateLogout from "@/app/services/auth-controller/logout-controller/use-mutate-logout";
import { IoSearchOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Nav = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm();
  const { data: session, status } = useSession();
  const user = getCookie("user");
  let userDetails;
  if (typeof window !== "undefined") {
    const user = getCookie("user");
    if (user) {
      userDetails = JSON.parse(user);
    } else {
      userDetails = null;
    }
  }
  console.log("my user detail is", userDetails);
  const first_letter = userDetails
    ? getFirstLetter(userDetails?.data?.username)
    : "";
  // console.log("My session is", session);
  const logOutMutation = useMutateLogout();
  console.log(logOutMutation);
  const onSubmit = async () => {
    try {
      const res = await logOutMutation.mutate();
      console.log(res);
      toast.success("Logout Successful");
      router.push("/pages/auth");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <section className="flex items-center justify-between px-9">
        <div>
          <Image
            src={LandingLogo}
            alt="logo"
            className=" max-sm:h-[50px] max-sm:w-[90px]"
            height={50}
            width={150}
          />
        </div>
        <div className="flex items-center gap-3 text-base font-extrabold">
          <p>Property Detail</p>
          <FaArrowRightLong />
        </div>
        <div className="relative">
          <TextField
            name="text"
            placeholder="enter your search term"
            type="text"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Matric Number is reuired",
              },
            }}
            className=" h-[36px] w-[500px] rounded-lg border-[1px] border-black"
          />
          <IoSearchOutline className="absolute right-4 top-3" />
        </div>
        {/* <button onClick={onSubmit} type="submit">
          Log out
        </button> */}
        <div className="flex items-center gap-6">
          <h1>
            Welcome
            <span className="pl-3">
              {session ? session?.user?.name : userDetails?.data?.username}
            </span>
          </h1>
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt="profile"
              height={100}
              width={100}
              className="h-[30px] w-[30px] rounded-[50%]"
            />
          ) : (
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border-2 border-black">
              <p className="text-3xl font-extrabold capitalize">
                {first_letter}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Nav;
