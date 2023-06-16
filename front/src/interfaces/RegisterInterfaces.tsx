import { IUser } from "./UserInterfaces";

export interface IRegisterFormData {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
    description: string;
    password: string;
    confirm: string;
    type: "Vendedor" | "Cliente";
    street: string;
    number: string; 
    complement: string;
    city: string;
    state: string;
    cep: string;
}

export interface IUserRegisterResponse{
    user: IUser;
}