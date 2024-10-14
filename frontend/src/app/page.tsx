import React from "react";
import Logo from "./components/HomeComponents/Logo/logo";
import "tailwindcss/tailwind.css";
import IntroSignPost from "./components/HomeComponents/introsignpost";
import LandingImage from "./components/LandingImage";


export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-1/2 hidden sm:hidden md:block h-screen">
        <LandingImage />
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-20 max-h-100">
        <Logo />
        <IntroSignPost />
      </div>
    </main>
  );
}
