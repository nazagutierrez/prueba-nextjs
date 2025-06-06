import { ICrypto } from "@/app/types/types";
import { UseMutationResult } from "@tanstack/react-query";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";

// Mobile view

const MobileTable = ({
  cryptos,
  setSelectedCrypto,
  setIsAddModalOpen,
  setIsEditModalOpen,
  deleteCryptoMutation,
  isLoading,
}: {
  cryptos: ICrypto[] | undefined;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<ICrypto | null>>;
  setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCryptoMutation: UseMutationResult<string, Error, string, unknown>;
  isLoading: boolean;
}) => {
  return (
    <>
      <button
        onClick={() => {
          setIsAddModalOpen(true);
        }}
        className="border py-1 border-yellow-400/50 text-x mb-8 px-4 flex items-center justify-center rounded-r cursor-pointer h-[65%] content-center transition-colors lg:hidden block"
        style={{ alignSelf: "anchor-center" }}
      >
        Add crypto 
        <i className="text-yellow-300 text-xl ms-2">
        <IoAddOutline />
        </i>
      </button>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
        {
          isLoading && (
            <CgSpinner className="animate-spin absolute -bottom-52 inset-0 mx-auto h-10 text-yellow-400/80 text-2xl" />
          )
        }
        {cryptos?.map((crypto) => (
          <div
            key={crypto.name}
            className="w-[220px] h-[220px] flex flex-col justify-between items-start relative border border-neutral-700 rounded p-4 text-neutral-300"
          >
            <div>
              <p>
                <span className="text-yellow-100/60">Crypto name:</span> {crypto.name}
              </p>
              <p>
                <span className="text-yellow-100/60">Ticker:</span> {crypto.ticker}
              </p>
              <p>
                <span className="text-yellow-100/60">Price:</span> ${crypto.price}
              </p>
              <p>
                <span className="text-yellow-100/60">Amount:</span> {crypto.amount}
              </p>
            </div>
            <div className="flex gap-3 w-full h-1/3 pt-4">
              <button
                onClick={() => {
                  setSelectedCrypto(crypto);
                  setIsEditModalOpen(true);
                }}
                className="border py-1 border-sky-400/30 text-2xl w-1/2 flex items-center justify-center rounded-r cursor-pointer text-sky-300 hover:text-sky-200 h-[65%] content-center transition-colors"
                style={{ alignSelf: "anchor-center" }}
              >
                <CiEdit />
              </button>
              <button
                onClick={() => deleteCryptoMutation.mutate(crypto.id)}
                className="border py-2 border-red-400/30 w-1/2 flex items-center justify-center rounded-r cursor-pointer text-red-400/70 hover:text-red-400 h-[65%] content-center transition-colors"
                style={{ alignSelf: "anchor-center" }}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileTable;
