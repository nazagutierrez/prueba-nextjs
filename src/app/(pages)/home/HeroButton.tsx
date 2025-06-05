import React from "react";
import { mainFont } from "@/app/fonts";
import Link from "next/link";

const HeroButton = () => {
  return (
    <Link
      href="/crypto"
      className={`${mainFont.className} w-fit mt-4 px-7 py-1 button border-b bg-neutral-900/80 rounded-t shadow-[0px_21px_45px_-5px_#736317] hover:shadow-[0px_21px_45px_-5px_#ad9524] hover:border-yellow-400/70 transition-all border-yellow-400/40 `}
    >
      Get started
    </Link>
  );
};

export default HeroButton;
