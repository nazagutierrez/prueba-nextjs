import Image from "next/image";
import React from "react";

const Auth = () => {
  return (
    <div className="relative w-full flex items-center justify-center sm:h-screen">
      <div className='absolute mx-auto h-[330px] w-[150px] bg-yellow-400/20 blur-3xl -z-10'></div>
      
      <div className="bg-[#222222] mb-14 mt-32 sm:mt-0 sm:mb-0 border border-[#2f2500] relative w-fit flex-col-reverse sm:flex-row flex items-center justify-center mx-4 sm:mx-16"> 
        <div className="sm:w-1/2">
          <Image src="/login.png" alt="crypto market" className='h-[700px] object-cover aspect-square border border-t-yellow-500/40 sm:border-t-0 sm:border-r-yellow-500/40 rounded-sm overflow-hidden z-20' width={1000} height={500} />
        </div>
        <div className="sm:w-1/2 pl-5 md:pl-20 pr-5 h-full">
          <div className="h-full py-20 sm:py-0 flex flex-col items-start justify-center">
            <div className="gap-5 mb-4 flex flex-col items-start justify-center">
              <h1 className="text-3xl">Create an account</h1> 
              <div className="flex gap-1">
                <p>
                  Already have an account? {" "}
                  <button className="underline underline-offset-4 decoration-yellow-500/70 cursor-pointer hover:decoration-yellow-500/90 transition-all">
                    Login
                  </button> 
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
              <div className="flex  flex-col items-start">
                <label htmlFor="username" className="mb-2 text-sm">Username</label>
                <input name="username" placeholder="User" className="w-full border-b border-b-yellow-500/70 rounded mb-5 py-0.5 outline-none hover:border-yellow-500/90 transition-all focus:border-yellow-500/90" type="email" />
              </div>
              
              <div className="flex  flex-col items-start">
                <label htmlFor="username" className="mb-2 text-sm">Password</label>
                <input placeholder="Password" className="w-full border-b border-b-yellow-500/70 rounded py-0.5 outline-none hover:border-yellow-500/90 transition-all focus:border-yellow-500/90" type="password" />
              </div>

              <button className="flex h-13 w-full items-center justify-center gap-3 border border-neutral-700 hover:bg-neutral-800 transition-all cursor-pointer px-4 rounded-sm">
                <Image src="/google.svg" width={20} height={20} alt="oauth" />
                Google
              </button>
              <button className="flex h-13 w-full items-center justify-center gap-3 border border-neutral-700 hover:bg-neutral-800 transition-all cursor-pointer px-4 rounded-sm">
                <Image src="/github.svg" width={20} height={20} alt="oauth" />
                Github
              </button>
              
              <button className="h-13 w-1/2 justify-self-center md:col-span-2 gap-3 border border-yellow-500/40 hover:bg-neutral-700/60 transition-all cursor-pointer px-4 rounded-sm">
                Sign in
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
