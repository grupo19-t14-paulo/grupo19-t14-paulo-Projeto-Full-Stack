import { useContext } from "react";
import { IModalMenuProfile } from "../../interfaces/ModalInterfaces";
import { ContainerMenu } from "./style";
import { useNavigate } from "react-router-dom";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";

const ModalMenuProfile = ({modalOpenMenuProfile }: IModalMenuProfile)=> {

    const { user } = useContext(ContextLogin);

    const navigate = useNavigate();

    const LogoutUser = () => {
        window.localStorage.clear();
        navigate("/");
    };

    if(!modalOpenMenuProfile) return null;

    return (
        <>
            <ContainerMenu>
                 <button>Editar Perfil</button>
                 <button>Editar endereço</button>
                 {user?.type === "Vendedor" && <button>Meus Anúncios</button>}
                 <button onClick={() => {LogoutUser()}}>Sair</button>
             </ContainerMenu>
        </>
    );
    
};

export {
    ModalMenuProfile
};