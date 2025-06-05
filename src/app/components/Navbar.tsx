import Link from "next/link";
import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed text-white-main w-full flex items-center justify-center z-20">
      <div className="w-full mx-5 sm:mx-0 sm:w-fit mt-3 h-14 bg-neutral-800 rounded-full flex items-center justify-center">
        <Link
          href="/"
          className="group relative bg-neutral-600/50 hover:bg-neutral-800 border border-yellow-600/20 gap-2 w-[30%] sm:w-[80px] h-[80%] px-4 content-center justify-items-center text-center rounded-l-full m-2 transition-all duration-300 ease-in-out"
        >
          <MdHomeFilled className="text-xl text-yellow-100 opacity-0 translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
          <h2 className="absolute h-full inset-0 content-center opacity-100 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
            Home
          </h2>
        </Link>
        <Link
          href="/crypto"
          className="relative group bg-neutral-600/50 hover:bg-neutral-800 border border-yellow-600/20 gap-2 w-[60%] sm:w-[150px] h-[80%] px-4 content-center justify-items-center text-center rounded-sm m-2 transition-all duration-300 ease-in-out"
        >
          <BsGraphUp className="text-lg text-yellow-100 opacity-0 translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
          <h2 className="absolute h-full inset-0 content-center opacity-100 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
            Crypto viewer
          </h2>
        </Link>
        <Link
          href="/auth"
          className="relative group bg-neutral-600/50 hover:bg-neutral-800 border border-yellow-600/20 gap-2 w-[30%] sm:w-[80px] h-[80%] content-center justify-items-center text-center rounded-r-full m-2 transition-all duration-300 ease-in-out"
        >
          <IoLogInOutline className="text-xl text-yellow-100 opacity-0 translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
          <h2 className="absolute h-full inset-0 content-center opacity-100 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
            Login
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
