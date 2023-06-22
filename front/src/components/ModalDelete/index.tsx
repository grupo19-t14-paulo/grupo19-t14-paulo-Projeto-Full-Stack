import { IModalDelete } from "../../interfaces/ModalInterfaces";
import { BackgroundModal } from "../ModalSuccessRegister/style";
import { ContainerModalDelete, ContainerTitleButtonModalDelete, ContainerButtonModalDelete} from "./style";
import { ButtonColorAlert2, ButtonColorGrey6 } from "../../styles/buttons";
import useOutClick from "../../hook/useOutClick";
import { useKeydowns } from "../../hook/useKeydown";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ModalDelete = ({modalOpenDelete, setModalOpenDelete}: IModalDelete) => {

    const navigate = useNavigate()

    const modalRef = useOutClick(() => {
        setModalOpenDelete(false);
    });

    const buttonRef = useKeydowns("Escape", (element) => {
        element?.click();
    });

    const deleteUser = async () => {

        const token = window.localStorage.getItem("@token")

        try {
            await api.delete(`/users`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            toast.success("Perfil excluido com sucesso!");
            window.localStorage.clear();
            navigate("/");

        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
    };

    if(!modalOpenDelete) return null;

    return (
        <BackgroundModal>
            <ContainerModalDelete ref={modalRef}>
                <ContainerTitleButtonModalDelete>
                    <h2>Excluir Perfil</h2>
                    <button ref={buttonRef} onClick={() => {setModalOpenDelete(false)}}>x</button>
                </ContainerTitleButtonModalDelete>
                <p>Tem certeza de que deseja excluir seu perfil?</p>
                <p>Essa ação será irreversível e resultará na perda de todos os seus dados.</p>
                <ContainerButtonModalDelete>
                    <ButtonColorGrey6 onClick={() => {setModalOpenDelete(false)}}>Cancelar</ButtonColorGrey6>
                    <ButtonColorAlert2 onClick={() => {deleteUser()}}>Sim, Excluir Perfil</ButtonColorAlert2>
                </ContainerButtonModalDelete>
            </ContainerModalDelete>
        </BackgroundModal>
    )
}

export { ModalDelete };