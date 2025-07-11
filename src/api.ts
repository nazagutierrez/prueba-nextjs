import axios from "axios";
import { ICrypto } from "./types/types";

const BASE_URL = process.env.EXTERNAL_API_BASE_URL || "/api/cryptos";

// Controllers for CRUD made with Axios

export async function getCryptos(): Promise<ICrypto[]> {
  try {
    const res = await axios.get(BASE_URL);
    const { data } = await res.data;
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error getting cryptos");
    }
    throw new Error("Unexpected error");
  }
}

export async function createCrypto(crypto: ICrypto): Promise<ICrypto> {
  try {
    const res = await axios.post(BASE_URL, crypto);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error creating crypto");
    }
    throw new Error("Unexpected error");
  }
}

export async function deleteCryptoById(cryptoID: ICrypto["id"]): Promise<ICrypto["id"]> {
  try {
    const res = await axios.delete(BASE_URL, {
      data: { id: cryptoID },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error deleting crypto");
    }
    throw new Error("Unexpected error");
  }
}

export async function editCryptoById(crypto: ICrypto): Promise<ICrypto> {
  try {
    const res = await axios.patch(BASE_URL, crypto);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error editing crypto");
    }
    throw new Error("Unexpected error");
  }
}
