import React from "react";
import FormInput from "../FormInput";
import { IoAddOutline } from "react-icons/io5";

const AddCryptoRow = ({ handleFormSubmit }: { handleFormSubmit: () => void }) => {
  return (
    <tr>
      <FormInput name="cryptoName" type="text" classname="pl-3" />
      <FormInput name="tickler" type="text" classname="text-center" />
      <FormInput name="price" type="number" classname="text-center" />
      <FormInput
        submitFunc={handleFormSubmit}
        name="amount"
        type="number"
        classname="text-center relative"
      >
        <button
          form="myform"
          className="absolute justify-items-center rounded-r text-2xl cursor-pointer bg-amber-300/70 w-14 text-black -right-14 h-full content-center"
          style={{ alignSelf: "anchor-center" }}
        >
          <IoAddOutline />
        </button>
      </FormInput>
    </tr>
  );
};

export default AddCryptoRow;
