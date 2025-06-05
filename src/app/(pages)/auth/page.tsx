import Image from "next/image";
import React from "react";

const Auth = () => {
  return (
    <div className="relative w-full flex items-center justify-center h-screen">
      <div className='absolute mx-auto h-[330px] w-[150px] bg-yellow-400/20 blur-3xl -z-10'></div>
      
      <div className="bg-[#222222] border border-[#2f2500] relative w-fit flex items-center justify-center mx-16">
        <div className="w-1/2">
          <Image src="/login.png" alt="crypto market" className='h-[700px] object-cover aspect-square border border-r-yellow-500/40 rounded-sm overflow-hidden z-20' width={1000} height={500} />
        </div>
        <div className="w-1/2 pl-20 h-full">
          <div className="h-full flex flex-col items-start justify-center">
            <div className="gap-5 mb-4 flex flex-col items-start justify-center">
              <h1 className="text-3xl">Create an account</h1> 
              <div className="flex gap-1">
                <h3>Already have an account?</h3>
                <button className="underline underline-offset-4 decoration-yellow-500/70 cursor-pointer hover:decoration-yellow-500/90 transition-all">
                  Login
                </button> 
              </div>
            </div>
            <div className="flex gap-5 w-full flex-wrap">
              <div className="flex flex-col items-start">
                <label htmlFor="username" className="mb-2 text-sm">Username</label>
                <input name="username" placeholder="User" className="border-b border-b-yellow-500/70 px-2 rounded mb-5 py-0.5 outline-none hover:border-yellow-500/90 transition-all focus:border-yellow-500/90" type="email" />
              </div>
              
              <div className="flex flex-col items-start">
                <label htmlFor="username" className="mb-2 text-sm">Password</label>
                <input placeholder="Password" className="border-b border-b-yellow-500/70 px-2 rounded py-0.5 outline-none hover:border-yellow-500/90 transition-all focus:border-yellow-500/90" type="password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
