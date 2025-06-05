"use client";

import { titleFont } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import HeroButton from "./HeroButton";
import { useUserContext } from "@/app/context/userContext";

const HomePage = () => {
  const { user } = useUserContext();
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-52 h-[70vh]">
        <div className="absolute top-1/4 sm:right-60 h-10 sm:h-32 w-10 sm:w-32 bg-white/50 sm:bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 sm:left-60 h-10 sm:h-32 w-10 sm:w-32 bg-white/50 sm:bg-white/10 blur-3xl"></div>
        <h1
          className={`${titleFont.className} animate-fade-in-up text-4xl sm:text-6xl mb-4`}
        >
          Crypto tracker
        </h1>
        <h2 className="mb-20 animate-fade-in-bottom text-sm sm:text-base">
          Track{" "}
          <span className="underline underline-offset-4 decoration-yellow-500/80">
            all
          </span>{" "}
          your cryptos in one list
        </h2>
        {user?.username && (
          <h2 className="mb-5">
            Welcome{" "}
            <span className="underline underline-offset-4 decoration-yellow-500/80">
              {user.username}
            </span>
          </h2>
        )}
        <HeroButton />
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen">
        <Image
          src="/image.avif"
          alt="crypto market"
          className="aspect-auto object-cover border border-t-yellow-500/40 border-[#2f2500] rounded-sm overflow-hidden z-20 mx-4 sm:mx-14 w-[90%] sm:w-[60%] h-[600px]"
          width={1000}
          height={500}
        />
        <div className="absolute mx-auto h-[630px] w-[150px] sm:w-[350px] bg-yellow-400/20 blur-3xl"></div>
        <h2 className="mt-5 text-white">Preview of the tool</h2>
      </div>
    </>
  );
};

export default HomePage;
