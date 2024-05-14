"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react"; // Import useSession
import { signOut } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store";
import useMutateLogout from "@/app/services/auth-controller/logout-controller/use-mutate-logout";

const Nav = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
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
      <section className="flex justify-between">
        <button onClick={onSubmit} type="submit">
          Log out
        </button>
        <div className="flex items-center gap-4">
          <h1> {session?.user?.name}</h1>
          {session?.user?.image && (
            <Image
              src={session?.user?.image}
              alt="profile"
              height={100}
              width={100}
              className="h-[30px] w-[30px] rounded-[50%]"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Nav;
