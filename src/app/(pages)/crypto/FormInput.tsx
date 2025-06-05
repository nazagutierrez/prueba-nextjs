import React from "react";

const FormInput = ({
  name,
  type,
  classname,
  children,
  submitFunc,
}: {
  name: string;
  type: string;
  classname?: string;
  children?: React.ReactNode;
  submitFunc?: () => void;
}) => {
  return (
    <th
      className={`px-6 py-4 font-medium whitespace-nowrap text-white ${classname}`}
    >
      <input
        onKeyDown={(e) =>
          e.key === "Enter" &&
          submitFunc?.() &&
          e.preventDefault() &&
          console.log(e)
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
