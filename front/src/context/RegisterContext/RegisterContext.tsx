import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"
import { toast } from "react-toastify"

const ContextRegister = createContext( {} );

const AuthRegisterProvider = ({children}: ) => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const userRegister = async (formData: ) => {
      
        try {
          setLoading(true);
          await api.post("/users ", formData);

          toast.success("Cadastro realizado com sucesso!");
          navigate("/");

        } catch (error) {
          console.log(error);
          toast.error("Ops! Algo deu errado");
          
        } finally {
          setLoading(false);
        }
    };
    return (
        <ContextRegister.Provider value={{userRegister, loading}}>
            {children}
        </ContextRegister.Provider>
    );
};

export {
    ContextRegister,
    AuthRegisterProvider
};