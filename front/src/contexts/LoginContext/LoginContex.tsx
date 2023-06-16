import { createContext } from "react";
import { IUserContextLogin, IUserProviderProps } from "../../interfaces/UserInterfaces";
import { ILoginFormData, IUserLoginResponse } from "../../interfaces/LoginInterfaces";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ContextLogin = createContext({} as  IUserContextLogin);

const AuthLoginProvider = ({ children }: IUserProviderProps) => {

    const navigate = useNavigate();

    const userLogin = async(data: ILoginFormData) => {

        try {
            
            const res = await api.post<IUserLoginResponse>("/login", data);

            localStorage.setItem("token", res.data.token);

            toast.success("Login realizado com sucesso!");
            navigate("/");

        } catch (error) {
            toast.error("Ops! Algo deu errado");
        }
    };

    return (
        <ContextLogin.Provider value={{userLogin}}>
            {children}
        </ContextLogin.Provider>
    );
};

export {
    ContextLogin,
    AuthLoginProvider
}