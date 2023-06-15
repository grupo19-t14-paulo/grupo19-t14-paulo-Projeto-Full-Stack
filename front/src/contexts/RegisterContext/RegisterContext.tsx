import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  IUserContextRegister,
  IUserProviderProps,
} from "../../interfaces/UserInterfaces";
import { IRegisterFormData } from "../../interfaces/RegisterInterfaces";

const ContextRegister = createContext({} as IUserContextRegister);

const AuthRegisterProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState<"Cliente" | "Vendedor">();
  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);

      if (formData.type === "Vendedor") {
        setSeller(formData.type);
      }

      toast.success("Cadastro realizado com sucesso!");

      if (formData.type === "Cliente") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ContextRegister.Provider
      value={{ userRegister, loading, seller, setSeller }}
    >
      {children}
    </ContextRegister.Provider>
  );
};

export { ContextRegister, AuthRegisterProvider };
