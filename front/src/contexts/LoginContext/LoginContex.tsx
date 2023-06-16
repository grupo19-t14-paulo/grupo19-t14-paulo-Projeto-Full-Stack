import { createContext, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      setLoading(false);

      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;
    setLoading(true);
  });

  const userLogin = async (data: ILoginFormData) => {
    try {
      const res = await api.post<IUserLoginResponse>("/login", data);

      api.defaults.headers.authorization = `Bearer ${res.data.token}`;
      localStorage.setItem("@token", res.data.token);

      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <ContextLogin.Provider
      value={{ userLogin, setUser, user, loading, setLoading }}
    >
      {children}
    </ContextLogin.Provider>
  );
};

export { ContextLogin, AuthLoginProvider };
