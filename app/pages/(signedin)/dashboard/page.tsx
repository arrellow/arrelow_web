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

const Dashboard = () => {
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
      <button onClick={onSubmit} type="submit">
        Log out
      </button>
      <h1> hello {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt="profile"
          height={100}
          width={100}
        />
      )}
    </div>
  );
};

export default Dashboard;
