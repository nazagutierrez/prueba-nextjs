"use client";

import { editCryptoById } from "@/api";
import { ICrypto, ModalProps } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

// Modal for editing a crypto

export default function Modal({ open, onClose, crypto }: ModalProps) {
  const inputName = useRef<HTMLInputElement>(null);
  const inputTicker = useRef<HTMLInputElement>(null)
  const inputPrice = useRef<HTMLInputElement>(null)
  const inputAmount = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient();

  const editCryptoMutation = useMutation({
    mutationFn: (cryptoEdit: ICrypto) => editCryptoById(cryptoEdit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cryptos'] });
    },
  });

  const handleFormSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if(!inputName.current || !inputTicker.current || !inputPrice.current || !inputAmount.current) return;

    const newCrypto: ICrypto = {
      id: crypto.id,
      name: inputName?.current?.value?.trim(),
      ticker: inputTicker?.current?.value?.trim(),
      price: parseFloat(inputPrice?.current?.value),
      amount: parseFloat(inputAmount?.current?.value),
    };

    if (!newCrypto.name || !newCrypto.ticker || isNaN(newCrypto.price) || isNaN(newCrypto.amount)) {
      toast('Por favor, completá todos los campos correctamente.', { type: 'error', style: { backgroundColor: '#00000045', color: '#e5e5e5', borderLeft: '1px solid #e53935', fontSize: '0.9rem' } });
      return
    }

    editCryptoMutation.mutate(newCrypto, {
    onSuccess: () => {
      onClose();
    },
      onError: () => {
        toast("Ha ocurrido un error", { type: 'error', style: { backgroundColor: '#00000045', color: '#e5e5e5', borderLeft: '1px solid #e53935', fontSize: '0.9rem' } });      
      },
    });
  };

  if (!open) return null;

  return (
    <div className="fixed font-medium text-white inset-0 px-6 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px] bg-opacity-50">
      <div className="bg-neutral-800 rounded-lg shadow-xl w-full max-w-[400px]">
        <div className="flex items-center p-4 pb-6">
          <CiEdit className="h-8 w-8 text-sky-400" />
          <h3 className="ml-3 text-lg">Edit your crypto</h3>
        </div>
        <form className="flex flex-col mx-2" onSubmit={handleFormSubmit} id="editForm">
          <label htmlFor="name" className="mx-4 text-xs">Crypto name</label>
          <input name="name" ref={inputName} type="text" defaultValue={crypto?.name} className="px-6 py-4 text-sm border-b border-yellow-400/30 rounded-md outline-none" />
          
          <label htmlFor="tickler" className="mx-4 text-xs mt-4">Tickler</label>
          <input name="tickler" ref={inputTicker} type="text" defaultValue={crypto?.ticker} className="px-6 py-4 text-sm border-b border-yellow-400/30 rounded-md outline-none" />
          
          <label htmlFor="price" className="mx-4 text-xs mt-4">Price</label>
          <input name="price" ref={inputPrice} type="number" defaultValue={crypto?.price} className="px-6 py-4 text-sm border-b border-yellow-400/30 rounded-md outline-none" />
         
          <label htmlFor="amount" className="mx-4 text-xs mt-4">Amount</label>
          <input name="amount" ref={inputAmount} type="number" defaultValue={crypto?.amount} className="px-6 py-4 text-sm border-b border-yellow-400/30 rounded-md outline-none" />
        </form>

        <div className="flex justify-end gap-2 p-4 pt-6">
          <button
            form="editForm"
            className="px-4 py-2 text-sm text-black bg-sky-400 rounded hover:bg-sky-300 transition-all cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-neutral-700 rounded hover:bg-neutral-600 transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}