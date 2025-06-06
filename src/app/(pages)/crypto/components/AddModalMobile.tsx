"use client";

import React, { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import FormInput from "../FormInput";

export default function AddModalMobile({
  open,
  onClose,
  handleFormSubmit,
}: {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  handleFormSubmit: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed font-medium text-white mx-4 inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px] bg-opacity-50">
      <div className="bg-neutral-800 rounded-lg shadow-xl w-full max-w-[400px]">
        <div className="flex items-center p-4 pb-6">
          <CiEdit className="h-8 w-8 text-sky-400" />
          <h3 className="ml-3 text-lg">Edit your crypto</h3>
        </div>
        <table>
          <tbody>
            <tr className="flex flex-col px-4 justify-center items-center">
              <FormInput name="cryptoName" type="text" classname="w-full" />
              <FormInput name="tickler" type="text" classname="w-full" />
              <FormInput name="price" type="number" classname="w-full" />
              <FormInput name="amount" type="number" classname="w-full" />
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end gap-2 p-4 pt-0">
          <button
            onClick={handleFormSubmit}
            form="editForm"
            className="px-4 py-2 text-sm text-black bg-amber-300/70 rounded transition-all cursor-pointer"
          >
            Add
          </button>
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 text-sm bg-neutral-700 rounded hover:bg-neutral-600 transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
