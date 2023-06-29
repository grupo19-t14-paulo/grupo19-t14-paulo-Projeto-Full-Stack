import { useContext, useState } from "react";
import { IModalMenuProfile } from "../../interfaces/ModalInterfaces";
import { ContainerMenu } from "./style";
import { ModalEditUser } from "../ModalEditUser";
import { ModalEditAddress } from "../ModalEditAddress";
import { useNavigate } from "react-router-dom";
import { ModalDelete } from "../ModalDelete";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { api } from "../../services/api";
import { AxiosRequestHeaders } from "axios";

const ModalMenuProfile = ({modalOpenMenuProfile }: IModalMenuProfile)=> {

    const { user, setUser } = useContext(ContextLogin);
    const [modalOpenEdit, setModalOpenEdit] = useState(false);
    const [modalOpenEditAddress, setModalOpenEditAddress] = useState(false);
    const [modalOpenDelete, setModalOpenDelete] = useState(false);

    const navigate = useNavigate();

    const logoutUser = () => {
      localStorage.removeItem("@token");
  
      setUser(null);
      api.defaults.headers.authorization = undefined as AxiosRequestHeaders["authorization"];
    
      navigate("/");
    };

    const adverts = () => {
        navigate("/advertiser")
    }

    const handleOpenDeleteModal = () => {
        setModalOpenDelete(true);
    };

    const handleButtonClick = (modalName: string) => {
        switch (modalName) {
          case "edit":
            setModalOpenEdit(true);
            break;
          case "editAddress":
            setModalOpenEditAddress(true);
            break;
          case "delete":
            setModalOpenDelete(true);
            break;
          default:
            break;
        }
    
        const containerMenu = document.getElementById("container-menu");

        if (containerMenu) {
          containerMenu.style.display = "none";
        }

      };

    if(!modalOpenMenuProfile) return null;

    return (
        <>
            <ModalEditUser modalOpenEdit={modalOpenEdit} setModalOpenEdit={setModalOpenEdit} openDeleteModal={handleOpenDeleteModal}
            />
            <ModalEditAddress modalOpenEditAddress={modalOpenEditAddress} setModalOpenEditAddress={setModalOpenEditAddress} 
            />
            <ModalDelete modalOpenDelete={modalOpenDelete} setModalOpenDelete={setModalOpenDelete} 
            />
            <ContainerMenu id="container-menu">
                <button onClick={() => handleButtonClick("edit")}>Editar Perfil</button>
                <button onClick={() => handleButtonClick("editAddress")}>
                Editar endereço
                </button>
                {user?.type === "Vendedor" && <button onClick={() => {adverts()}}>Meus Anúncios</button>}
                <button onClick={() => {logoutUser()}}>Sair</button>
            </ContainerMenu>
        </>
    );
    
};

export {
    ModalMenuProfile
};