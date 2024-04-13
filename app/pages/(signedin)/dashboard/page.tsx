"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react"; // Import useSession
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session status
  console.log("My session is", session);

  const handleLogOut = async () => {
    await signOut({ redirect: false });
    router.push("/pages/auth");
  };

  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
      <h1> hello {session?.user?.name}</h1>
      {session?.user?.image && (
        <img
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
