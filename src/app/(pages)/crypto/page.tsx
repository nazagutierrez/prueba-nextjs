"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCryptos, createCrypto, deleteCryptoById } from "@/app/services/cryptoService";
import { ICrypto } from "@/app/types/types";
import { titleFont } from "@/app/fonts";
import Skeleton from "@/app/utils/Skeleton";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useUserContext } from "@/app/context/userContext";
import Modal from "./Modal";
import AddCryptoRow from "./components/AddCryptoRow";
import ListCryptoRow from "./components/ListCryptoRow";
import TableHead from "./components/TableHead";
import MobileTable from "./components/MobileTable";
import AddModalMobile from "./components/AddModalMobile";

const Crypto = () => {
  const queryClient = useQueryClient();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [selectedCrypto, setSelectedCrypto] = useState<ICrypto | null>(null);
  const { user } = useUserContext();

  // Get cryptos
  const { data: cryptos, isLoading } = useQuery({
    queryKey: ["cryptos"],
    queryFn: getCryptos,
  });

  // React Query mutations for CRUD operations
  const deleteCryptoMutation = useMutation({
    mutationFn: (cryptoIdDelete: ICrypto["id"]) =>
      deleteCryptoById(cryptoIdDelete),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cryptos"] });
    },
  });

  const createCryptoMutation = useMutation({
    mutationFn: (newCrypto: ICrypto) => createCrypto(newCrypto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cryptos"] });
    },
  });

  const handleFormSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const cryptoName = document.querySelector('input[name="cryptoName"]') as HTMLInputElement;
    const tickler = document.querySelector('input[name="tickler"]') as HTMLInputElement;
    const price = document.querySelector('input[name="price"]') as HTMLInputElement;
    const amount = document.querySelector('input[name="amount"]') as HTMLInputElement;

    const newCrypto: ICrypto = {
      id: crypto.randomUUID(),
      name: (cryptoName)?.value.trim(),
      ticker: (tickler)?.value.trim(),
      price: parseFloat((price)?.value),
      amount: parseFloat((amount)?.value),
    };

    if (!newCrypto.name || !newCrypto.ticker || isNaN(newCrypto.price) || isNaN(newCrypto.amount)) {
      toast('Por favor, completá todos los campos correctamente.', { type: 'error', style: { backgroundColor: '#00000045', color: '#e5e5e5', borderLeft: '1px solid #e53935', fontSize: '0.9rem' } });
      return;
    }

    // Create crypto
    createCryptoMutation.mutate(newCrypto, {
      onSuccess: () => {
        cryptoName.value = '';
        tickler.value = '';
        price.value = '';
        amount.value = '';
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
      },
      onError: (error: Error) => {
        toast(error.message);
      },
    });
  };

  return (
    <div className="animate-fade-in-up relative flex flex-col items-center justify-start p-5 lg:p-20 pt-32 h-full">
      <h1 className={`${titleFont.className} text-4xl pb-10 pt-0 sm:py-5`}>Listed cryptos</h1>
      <AddModalMobile open={isAddModalOpen} onClose={setIsAddModalOpen} handleFormSubmit={handleFormSubmit} />
      {user?.username && (
        <h1 className="pb-5">
          Hi{" "}
          <span className="underline underline-offset-4 decoration-yellow-500/80">
            {user.username}
          </span>
          , welcome to your crypto tracker
        </h1>
      )}
      <form onSubmit={handleFormSubmit} id="myform"></form>
      <div className="absolute mx-auto h-full w-[200px] sm:w-[350px] bg-neutral-600/15 sm:bg-neutral-600/5 blur-3xl -z-20"></div>
      {/* Mobile view */}
      <MobileTable
        isLoading={isLoading}
        deleteCryptoMutation={deleteCryptoMutation}
        cryptos={cryptos} 
        setSelectedCrypto={setSelectedCrypto}
        setIsAddModalOpen={setIsAddModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <table className="w-3/4 text-sm text-left my-12 text-neutral-300 hidden lg:table">
        <TableHead />
        {isLoading && <Skeleton />}
        
        {cryptos?.length === 0 && (
          <tr className="border-b w-full border-neutral-700">
            <th
              colSpan={4}
              className="w-full py-4 text-center font-medium  text-neutral-300"
            >
              No cryptos listed
            </th>
          </tr>
        )}

        <tbody>
          <ListCryptoRow
            deleteCryptoMutation={deleteCryptoMutation}
            cryptos={cryptos}
            setSelectedCrypto={setSelectedCrypto}
            setIsEditModalOpen={setIsEditModalOpen}
          />
          <AddCryptoRow handleFormSubmit={handleFormSubmit} />
        </tbody>
      </table>

      {/* Modal for editing a crypto */}
      {selectedCrypto && (
        <Modal
          crypto={selectedCrypto}
          open={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedCrypto(null);
          }}
        />
      )}

      <ToastContainer
        theme="dark"
        transition={Slide}
        autoClose={1500}
        hideProgressBar
        limit={3}
        draggable={true}
      />
    </div>
  );
};

export default Crypto;
