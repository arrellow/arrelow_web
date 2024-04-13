"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface SessionParams {
  children: React.ReactNode;
}

const NextAuthProvider: React.FC<SessionParams> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
