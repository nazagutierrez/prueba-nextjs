import { ICrypto } from "../types/types";

const BASE_URL = "/api/cryptos";
const JSON_HEADERS = {
  "Content-Type": "application/json",
};

// Controllers for CRUD

export async function getCryptos(): Promise<ICrypto[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error fetching cryptos");
  const { data } = await res.json();
  return data;
}

export async function createCrypto(crypto: ICrypto): Promise<ICrypto> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: JSON_HEADERS,
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
    headers: JSON_HEADERS,
    body: JSON.stringify({ id: cryptoID }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Error deleting crypto");
  }

  return cryptoID;
}

export async function editCryptoById(crypto: ICrypto): Promise<ICrypto> {
  const res = await fetch(BASE_URL, {
    method: "PATCH",
    headers: JSON_HEADERS,
    body: JSON.stringify({ crypto }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Error deleting crypto");
  }

  return crypto;
}
