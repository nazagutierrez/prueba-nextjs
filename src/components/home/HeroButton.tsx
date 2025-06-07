import React from "react";
import Link from "next/link";

const HeroButton = () => {
  return (
    <Link
      href="/crypto"
      className="animate-fade-in active:scale-95 transition-all w-fit mt-4 px-7 py-1 button border-b bg-neutral-900/80 rounded-t shadow-[0px_21px_45px_-5px_#736317] hover:shadow-[0px_21px_45px_-5px_#ad9524] hover:border-yellow-400/70 border-yellow-400/40"
    >
      Get started
    </Link>
  );
};

export default HeroButton;
