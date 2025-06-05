import { Dispatch, SetStateAction } from "react";

export interface ICrypto {
  id: string;
  name: string;
  ticker: string;
  price: number;
  amount: number;
}

export interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export interface IUser {
  username: string;
  password: string;
}

export interface ModalProps {
  open: boolean;
  crypto: ICrypto;
  onClose: () => void;
}
export interface FormProps {
  name: string;
  type: string;
  classname?: string;
  children?: React.ReactNode;
  submitFunc?: () => void;
}
