import { ICrypto } from "@/app/types/types";
import { UseMutationResult } from "@tanstack/react-query";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

// Mobile view

const MobileTable = ({
  cryptos,
  setSelectedCrypto,
  setIsModalOpen,
  deleteCryptoMutation,
}: {
  cryptos: ICrypto[] | undefined;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<ICrypto | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCryptoMutation: UseMutationResult<string, Error, string, unknown>;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
      {cryptos?.map((crypto) => (
        <div
          key={crypto.name}
          className="w-[220px] relative border border-neutral-700 rounded p-4 text-neutral-300"
        >
          <p>
            <strong>Crypto name:</strong> {crypto.name}
          </p>
          <p>
            <strong>Ticker:</strong> {crypto.ticker}
          </p>
          <p>
            <strong>Price:</strong> ${crypto.price}
          </p>
          <p>
            <strong>Amount:</strong> {crypto.amount}
          </p>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                setSelectedCrypto(crypto);
                setIsModalOpen(true);
              }}
              className="border py-1 border-sky-400/50 text-2xl w-1/2 flex items-center justify-center rounded-r cursor-pointer text-sky-300 hover:text-sky-200 h-[65%] content-center transition-colors"
              style={{ alignSelf: "anchor-center" }}
            >
              <CiEdit />
            </button>
            <button
              onClick={() => deleteCryptoMutation.mutate(crypto.id)}
              className="border py-2 border-red-400/40 w-1/2 justify-items-center rounded-r cursor-pointer text-red-400/70 hover:text-red-400 h-[65%] content-center transition-colors"
              style={{ alignSelf: "anchor-center" }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTable;
