import React from "react";

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-neutral-800/80 flex flex-col items-center justify-center p-4 rounded-sm">
        <h1 className="text-2xl mb-4">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-2 text-sm">Username</label>
          <input name="username" placeholder="User" className="bg-white px-2 rounded mb-5 py-0.5 text-black" type="email" />
          
          <label htmlFor="username" className="mb-2 text-sm">Password</label>
          <input placeholder="Password" className="bg-white px-2 rounded py-0.5 text-black" type="password" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
