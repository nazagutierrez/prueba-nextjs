import Link from "next/link";
import React from "react";

const Crypto = () => {
  const tableHeads = ["Tickler", "Price", "Amount"];
  const cryptos = [
    {
      name: "Ethereum",
      ticker: "ETH",
      price: 2999,
      amount: 159,
    },
    {
      name: "Bitcoin",
      ticker: "BTC",
      price: 90000,
      amount: 300,
    },
    {
      name: "Litecoin",
      ticker: "LTC",
      price: 140,
      amount: 1000,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start p-20 h-screen">
      <h1 className="text-3xl">Listed cryptos</h1>
      <table className="w-3/4 text-sm text-left my-12 text-neutral-300">
        <thead className="text-xs uppercase bg-neutral-700 text-neutral-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Crypto name
            </th>
            {
              tableHeads.map((head) => (
                <th key={head} scope="col" className="px-6 py-3 text-center">
                  {head}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            cryptos.map((crypto) => (
              <tr key={crypto.name} className="border-b bg-neutral-800 border-neutral-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                > 
                  {crypto.name}
                </th>
                <td className="px-6 py-4 text-center">{crypto.ticker}</td>
                <td className="px-6 py-4 text-center">${crypto.price}</td>
                <td className="px-6 py-4 text-center">{crypto.amount}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link href="/" className="bg-white px-2 rounded py-0.5 text-black">
        Go home
      </Link>
    </div>
  );
};

export default Crypto;
