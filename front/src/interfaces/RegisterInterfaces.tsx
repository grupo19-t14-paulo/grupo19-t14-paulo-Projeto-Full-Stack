import { IUser } from "./UserInterfaces";

export interface IRegisterFormData {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    birthDate: Date;
    description: string;
    password: string;
    confirm: string;
    type: string;
}

export interface IUserRegisterResponse{
    user: IUser;
}