import { ICrypto } from "../types/types";

const BASE_URL = "/api/cryptos";

export async function getCryptos(): Promise<ICrypto[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error fetching cryptos");
  const { data } = await res.json();
  return data;
}

export async function createCrypto(crypto: ICrypto): Promise<ICrypto> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(crypto),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Error creating crypto");
  }

  return await res.json();
}

export async function deleteCryptoById(cryptoID: ICrypto["id"]): Promise<ICrypto["id"]> {
  const res = await fetch(BASE_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: cryptoID }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Error deleting crypto");
  }

  return cryptoID;
}
