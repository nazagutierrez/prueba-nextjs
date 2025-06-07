"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { UseMutationResult } from "@tanstack/react-query";
import { ICrypto } from "@/types/types";

const ListCryptoRow = ({
  cryptos,
  setSelectedCrypto,
  setIsEditModalOpen,
  deleteCryptoMutation,
}: {
  cryptos: ICrypto[] | undefined;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<ICrypto | null>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCryptoMutation: UseMutationResult<string, Error, string, unknown>;
}) => {
  return (
    <>
      {cryptos?.map((crypto) => (
        <tr key={crypto.name} className="relative border-b border-neutral-700">
          <th
            scope="row"
            className="relative px-6 py-4 font-medium whitespace-nowrap text-white"
          >
            <button
              onClick={() => {
                setSelectedCrypto(crypto);
                setIsEditModalOpen(true);
              }}
              className="absolute text-xl justify-items-center rounded-r cursor-pointer text-sky-400 hover:text-sky-200 w-7 -left-8 h-[65%] content-center transition-colors"
              style={{ alignSelf: "anchor-center" }}
            >
              <CiEdit />
            </button>
            {crypto.name}
          </th>
          <td className="px-3 py-4 text-center">{crypto?.ticker}</td>
          <td className="px-3 py-4 text-center">
            ${crypto?.price?.toLocaleString()}
          </td>
          <td className="px-3 py-4 text-center">{crypto?.amount}</td>
          <td>
            <button
              onClick={() => deleteCryptoMutation.mutate(crypto.id)}
              className="absolute justify-items-center rounded-r cursor-pointer text-red-400/70 hover:text-red-400 w-7 -right-7 h-[65%] content-center transition-colors"
              style={{ alignSelf: "anchor-center" }}
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListCryptoRow;
