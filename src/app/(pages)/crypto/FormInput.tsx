import { FormProps } from "@/app/types/types";
import React from "react";

const FormInput = ({
  name,
  type,
  classname,
  children,
  submitFunc,
}: FormProps) => {
  return (
    <th
      className={`py-4 font-medium whitespace-nowrap text-white ${classname}`}
    >
      <input
        onKeyDown={(e) =>
          e.key === "Enter" && submitFunc?.() && e.preventDefault()
        }
        name={name}
        type={type}
        placeholder="Add"
        className={`px-2 rounded py-0.5 text-white outline-none ${classname}`}
      />
      {children}
    </th>
  );
};

export default FormInput;
