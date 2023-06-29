import { useContext } from "react";
import { Input } from "../Input";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { BackgroundModal } from "../ModalSuccessRegister/style";
import { IModalEdit } from "../../interfaces/ModalInterfaces";
import { ContainerFormEditProfile , ContainerButtonEditProfile, ContainerTitleButton} from "../../styles/Form";
import { ButtonColorGrey6, ButtonColorAlert2, ButtonColorBrand1 } from "../../styles/buttons"
import { api } from "../../services/api";
import useOutClick from "../../hook/useOutClick";
import { useKeydowns } from "../../hook/useKeydown";
import { toast } from "react-toastify";
import axios from "axios";

const ModalEditUser = ({modalOpenEdit, setModalOpenEdit, openDeleteModal}: IModalEdit) => {

    const { user, setUser } = useContext(ContextLogin);

    const modalRef = useOutClick(() => {
        setModalOpenEdit(false);
    });

    const buttonRef = useKeydowns("Escape", (element) => {
        element?.click();
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUser({ ...user!, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const token = localStorage.getItem("@token");

        try {
            await api.patch(`/users`, user, {
            headers: {
                authorization: `Bearer ${token}`,
            }
          });
        
            setModalOpenEdit(false);
        } catch (error) {
            console.log(error);

            if (axios.isAxiosError(error)) {

                if (error.response) {
                 
                  if (error.response.data) {
                    const errorKey = Object.keys(error.response.data.message)[0];

                    if(errorKey === "name"){
                        toast.error(`Ops algo de errado, revise o campo de nome!`)
                    }

                    if(errorKey === "email"){
                        toast.error(`Ops algo de errado, revise o campo de email!`)
                    }

                    if(errorKey === "0"){
                        toast.error(`Ops algo de errado, revise o campo de data de nascimento!`)
                    }

                  } 
                } 
            }   
        }
    };


    if(!modalOpenEdit) return null;
      
    return (
        <>
            <BackgroundModal>
                <ContainerFormEditProfile ref={modalRef}>
                    <ContainerTitleButton>
                    <h2>Editar Perfil</h2>
                    <button ref={buttonRef} type="button" onClick={() => { setModalOpenEdit(false) }}>X</button>
                    </ContainerTitleButton>
                    <form onSubmit={handleSubmit}>
                        <h2>Informações pessoais</h2>
                        <Input label="Nome" name="name" value={user?.name || ""} onChange={handleInputChange}/>

                        <Input label="Email" name="email" value={user?.email || ""} onChange={handleInputChange}/>

                        <Input label="CPF" name="cpf" value={user?.cpf || ""} onChange={handleInputChange}/>

                        <Input label="Celular" name="phone" value={user?.phone || ""} onChange={handleInputChange}/>

                        <Input label="Data de nascimento" name="birthDate" value={user?.birthDate || ""} onChange={handleInputChange}/>

                        <div>
                            <label id="description">Descrição</label>
                            <textarea id="description" name="description" value={user?.description || ""} onChange={handleInputChange}/>
                        </div>

                        <ContainerButtonEditProfile>
                            <ButtonColorGrey6 onClick={() => {setModalOpenEdit(false)}}>Cancelar</ButtonColorGrey6>
                            <ButtonColorAlert2 onClick={() => {openDeleteModal();}}>Excluir Perfil</ButtonColorAlert2>
                            <ButtonColorBrand1 type="submit">Salvar alterações</ButtonColorBrand1>
                        </ContainerButtonEditProfile>
                    </form>
            </ContainerFormEditProfile>
        </BackgroundModal>
        </>
        
    );
};

export { ModalEditUser };