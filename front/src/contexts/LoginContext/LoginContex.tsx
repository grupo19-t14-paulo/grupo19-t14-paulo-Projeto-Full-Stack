import { createContext, useState } from "react";
import {
  IUser,
  IUserContextLogin,
  IUserProviderProps,
} from "../../interfaces/UserInterfaces";
import {
  ILoginFormData,
  IUserLoginResponse,
} from "../../interfaces/LoginInterfaces";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ContextLogin = createContext({} as IUserContextLogin);

const AuthLoginProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userLogin = async (data: ILoginFormData) => {
    try {
      const res = await api.post<IUserLoginResponse>("/login", data);

      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <ContextLogin.Provider value={{ userLogin, setUser, user }}>
      {children}
    </ContextLogin.Provider>
  );
};

export { ContextLogin, AuthLoginProvider };
