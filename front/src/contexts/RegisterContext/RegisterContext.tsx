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
import randomColor from "randomcolor";

const ContextRegister = createContext({} as IUserContextRegister);

const AuthRegisterProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [seller, setSeller] = useState<"Cliente" | "Vendedor">();
  const [userColors, setUserColors] = useState<{ [key: string]: string }>({});
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

  const getUserColor = (userName: string) => {
    if (userColors[userName]) {
        return userColors[userName];
    } else {
        const color = randomColor();
        setUserColors((prevColors) => ({
            ...prevColors,
            [userName]: color,
        }));
        return color;
    }
  };

  const createInitials = (userName: string) => {
    const trimnedName = userName.trim();

    let initials = "";

    let splitedName = [];

    if (trimnedName.indexOf(" ") === -1) {
        initials = initials + trimnedName.charAt(0);
    } else {
        splitedName = trimnedName.split(" ");
        initials =
            splitedName[0].charAt(0) +
            splitedName[splitedName.length - 1].charAt(0);
    }

    return initials.toUpperCase();
};

  return (
    <ContextRegister.Provider
      value={{ userRegister, loading, seller, setSeller, getUserColor, createInitials}}
    >
      {children}
    </ContextRegister.Provider>
  );
};

export { ContextRegister, AuthRegisterProvider };
