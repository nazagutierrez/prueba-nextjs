import React from "react";
import { CgSpinner } from "react-icons/cg";

const Skeleton = () => {
  return (
    <thead className="text-xs  relative bg-neutral-600/20 border-b border-[#645f1a88] text-neutral-400">
      <tr>
        <td>
          <CgSpinner className="animate-spin absolute inset-0 mx-auto h-full text-yellow-400/80 text-2xl" />
        </td>
      </tr>
      {
        Array.from({ length: 4 }, (_, i) => (
          <tr key={i} className="border-b border-neutral-700/70">
            <th scope="col" className="px-6 py-4">
              <div className="h-5 w-20 bg-neutral-600/10 rounded-xs"></div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="h-5 w-13 bg-neutral-600/10 justify-self-center rounded-xs"></div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="h-5 w-20 bg-neutral-600/10 justify-self-center rounded-xs"></div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="h-5 w-13 bg-neutral-600/10 justify-self-center rounded-xs"></div>
            </th>
          </tr>
        ))
      }
    </thead>
  );
};

export default Skeleton;
