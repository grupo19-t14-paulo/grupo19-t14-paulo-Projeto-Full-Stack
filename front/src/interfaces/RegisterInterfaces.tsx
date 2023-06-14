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
}

export interface IUserRegisterResponse{
    user: IUser;
}