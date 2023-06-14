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
}

export interface IUserContextRegister {
    userRegister: (formData: IRegisterFormData) => Promise<void>;
    loading: boolean;
}