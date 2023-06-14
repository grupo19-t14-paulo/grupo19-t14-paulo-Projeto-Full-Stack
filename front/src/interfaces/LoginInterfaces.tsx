export interface ILoginFormData {
    email: string
    password: string
}

export interface IUserLoginResponse{
    token: string
    email: string
    id: number
}
