export interface IUserProviderProps {
    children: React.ReactNode;
}

export interface IUser {
    name: string;
    email: string;
    phone: string;
    id: number;
    cpf: string;
    birthDate: Date;
    description: string;
    type: string;
}