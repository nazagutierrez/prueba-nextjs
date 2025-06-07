"use client";

import { useState } from "react";
import { UserContext } from "../../context/userContext";
import { IUser } from "../../types/types";

type Props = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<IUser>({ username: "", password: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
