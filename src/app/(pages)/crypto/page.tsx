'use client';

import React from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCryptos, createCrypto, deleteCryptoById } from '@/app/services/cryptoService';
import { ICrypto } from "@/app/types/types";
import { IoAddOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { titleFont } from "@/app/fonts";
import Skeleton from "@/app/utils/Skeleton";
import FormInput from "./FormInput";
import { Slide, ToastContainer, toast } from 'react-toastify';

const Crypto = () => {
  const queryClient = useQueryClient();

  const { data: cryptos, isLoading, isError } = useQuery({
    queryKey: ['cryptos'],
    queryFn: getCryptos,
  });

  const createCryptoMutation = useMutation({
    mutationFn: (newCrypto: ICrypto) => createCrypto(newCrypto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cryptos'] });
    },
  });

  const deleteCryptoMutation = useMutation({
    mutationFn: (cryptoIdDelete: ICrypto["id"]) => deleteCryptoById(cryptoIdDelete),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cryptos'] });
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

    createCryptoMutation.mutate(newCrypto, {
      onSuccess: () => {
        cryptoName.value = '';
        tickler.value = '';
        price.value = '';
        amount.value = '';
      },
      onError: (error: any) => {
        toast(error);
      },
    });
  };


  if (isError) return <p>Hubo un error cargando los datos.</p>;

  const tableHeads = ["Tickler", "Price", "Amount"];

  return (
    <div className="relative flex flex-col items-center justify-start p-20 pt-32 h-full">
      <h1 className={`${titleFont.className} text-4xl py-5`}>Listed cryptos</h1>
      <form onSubmit={handleFormSubmit} id="myform"></form>
      <div className='absolute mx-auto h-full w-[350px] bg-neutral-600/5 blur-3xl -z-20'></div>
      <table className="w-3/4 text-sm text-left my-12 text-neutral-300">
        <thead className="text-xs uppercase bg-[#645f1a54] border-b border-[#645f1a88] text-neutral-400">
          <tr>
            <th scope="col" className="px-3 sm:px-6 py-3">
              Crypto name
            </th>
            {
              tableHeads.map((head) => (
                <th key={head} scope="col" className="px-3 sm:px-6 py-3 text-center">
                  {head}
                </th>
              ))
            }
          </tr>
        </thead>
        {  isLoading && <Skeleton /> }
        <tbody>
          {
            cryptos?.map((crypto) => (
              <tr key={crypto.name} className="relative border-b border-neutral-700">
                <th
                  scope="row"
                  className="px-3 sm:px-6 py-4 font-medium whitespace-nowrap text-white"
                > 
                  {crypto.name}
                </th>
                <td className="px-3 sm:px-6 py-4 text-center">{crypto.ticker}</td>
                <td className="px-3 sm:px-6 py-4 text-center">${crypto.price.toLocaleString()}</td>
                <td className="px-3 sm:px-6 py-4 text-center">{crypto.amount}</td>
                <td>
                  <button onClick={() => deleteCryptoMutation.mutate(crypto.id)} className="absolute justify-items-center rounded-r cursor-pointer text-red-400/70 hover:text-red-400 w-7 -right-7 h-[65%] content-center transition-colors" style={{ alignSelf: "anchor-center"}}>
                    <FaTrash />
                  </button> 
                </td>
              </tr>
            ))
          }
          <tr className="border-b border-neutral-700">
            <FormInput name="cryptoName" type="text" />
            <FormInput name="tickler" type="text" classname="text-center" />
            <FormInput name="price" type="number" classname="text-center" />
            <FormInput submitFunc={handleFormSubmit} name="amount" type="number" classname="text-center relative" submitFunc={handleFormSubmit}>
              <button form="myform" className="absolute justify-items-center rounded-r text-2xl cursor-pointer bg-amber-300 w-14 text-black -right-14 h-full content-center" style={{ alignSelf: "anchor-center"}}>
                <IoAddOutline />
              </button> 
            </FormInput>
          </tr>
        </tbody>
      </table>
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
