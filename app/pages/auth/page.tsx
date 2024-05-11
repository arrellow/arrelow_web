"use client";
import React from "react";
import Image from "next/image";
import useAuthStore from "@/app/store";
import { useRouter } from "next/navigation";
import { useForm} from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import styles from "./auth.module.css";
import SignUp from "./signup";
import Login from "./signin";

const Auth = () => {
  const router = useRouter();
  const [isSignuUp, setIsSignUp] = useState(false);
  const signIn = useAuthStore((state) => state.signIn);
  const handleSignIn = () => {
    setIsSignUp(false);
  };

  const handleSignUp = () => {
    setIsSignUp(true);
  };
  const handleClick = async () => {
    await signIn();
    router.push("/");
  };

  const { register, handleSubmit, control } = useForm();

  return (
    <div className={`flex items-center justify-center py-8 ${styles.hero}`}>
      <div className="min-h-[500px] w-[95%] rounded-lg bg-white px-6 py-8 md:w-[35%]">
        <span className="flex cursor-pointer justify-end">
          <IoCloseSharp fontSize={30} onClick={handleClick} />
        </span>
        <h1 className="pb-6 text-center text-[16px] font-bold leading-[22px]">
          Welcome to Arellow
        </h1>
        <div className="relative flex gap-5 pb-6 ">
          <div className="absolute top-[27px] w-full border-b-4 border-[#D1D1D5]"></div>
          <span
            className="z-10 cursor-pointer pb-1"
            style={{ borderBottom: isSignuUp ? "" : "4px solid #023C63" }}
            onClick={handleSignIn}
          >
            Sign in
          </span>
          <span
            className="z-10 cursor-pointer pb-1"
            style={{ borderBottom: isSignuUp ? "4px solid #023C63" : "" }}
            onClick={handleSignUp}
          >
            New account
          </span>
        </div>
        <section>{isSignuUp ? <SignUp /> : <Login />}</section>
      </div>
    </div>
  );
};

export default Auth;
