"use client";

import { createContext, useContext } from "react";
import { IUserContext } from "../types/types";

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("context not found");
  }

  return context;
};
