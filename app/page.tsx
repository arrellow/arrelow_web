"use client";
import React from "react";
import LandingPage from "./pages/(notsignedin)/landing/page";
import NavBar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import useAuthStore from "./store";

const Home = () => {
  const signIn = useAuthStore((state) => state.signIn);
  return (
    <div>
      <NavBar />
      {signIn ? (
        <div>
          <LandingPage />
          <Footer />
        </div>
      ) : (
        <div>
          <p className="pt-40">Dashboard</p>
        </div>
      )}
    </div>
  );
};

export default Home;
