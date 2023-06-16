import { ILoginFormData } from "./LoginInterfaces";
import { IRegisterFormData } from "./RegisterInterfaces";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  id: number;
  cpf: string;
  birthDate: string;
  description: string;
  type: "Cliente" | "Vendedor";
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  cep: string;
}

export interface IUserContextRegister {
  userRegister: (formData: IRegisterFormData) => Promise<void>;
  loading: boolean;
  seller: "Cliente" | "Vendedor" | undefined;
  setSeller: React.Dispatch<
    React.SetStateAction<"Cliente" | "Vendedor" | undefined>
  >;
}

export interface IUserContextLogin {
  userLogin: (data: ILoginFormData) => Promise<void>;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
