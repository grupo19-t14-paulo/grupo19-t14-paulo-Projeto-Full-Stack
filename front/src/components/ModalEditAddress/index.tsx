import { IModalEditAddress } from "../../interfaces/ModalInterfaces";
import { ContainerButtonEditAddress, ContainerFormEditProfile, ContainerTitleButton } from "../../styles/Form";
import { Input } from "../Input";
import { BackgroundModal } from "../ModalSuccessRegister/style";
import { ButtonColorGrey6, ButtonColorBrand3 } from "../../styles/buttons";
import { useContext } from "react";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { api } from "../../services/api";
import { DivInputAddress } from "./style";
import useOutClick from "../../hook/useOutClick";
import { useKeydowns } from "../../hook/useKeydown";
import { toast } from "react-toastify";

const ModalEditAddress = ({modalOpenEditAddress, setModalOpenEditAddress}: IModalEditAddress) => {

    const { user, setUser } = useContext(ContextLogin);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUser({ ...user!, [name]: value });
    };

    const modalRef = useOutClick(() => {
        setModalOpenEditAddress(false);
    });

    const buttonRef = useKeydowns("Escape", (element) => {
        element?.click();
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const token = localStorage.getItem("@token");

        try {
            await api.patch(`/users`, user, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

            toast.success("Endereço atualizado com sucesso!");
            setModalOpenEditAddress(false)
        } catch (error) {
            console.log("Error", error);
            toast.error("Ops algo de errado, revise os campo!");
        }
    };

    if(!modalOpenEditAddress) return null;

    return (
        <>
            <BackgroundModal>
                <ContainerFormEditProfile ref={modalRef}>
                    <ContainerTitleButton>
                        <h2>Editar Endereço</h2>
                        <button ref={buttonRef} type="button" onClick={() => { setModalOpenEditAddress(false) }}>X</button>  
                    </ContainerTitleButton>
                    <form onSubmit={handleSubmit}>
                    <h2>Informações de endereço</h2>
                    <Input label="CEP" name="cep" value={user?.cep || ""} onChange={handleInputChange}/>

                    <DivInputAddress>
                        <Input label="Estado" name="state" value={user?.state || ""} onChange={handleInputChange}/>
                        <Input label="Cidade" name="city" value={user?.city || ""} onChange={handleInputChange}/>
                    </DivInputAddress>

                    <Input label="Rua" name="street" value={user?.street || ""} onChange={handleInputChange}/>

                    <DivInputAddress>
                        <Input label="Número" name="number" value={user?.number || ""} onChange={handleInputChange}/>
                        <Input label="Complemento" name="complement" value={user?.complement || ""} onChange={handleInputChange}/>
                    </DivInputAddress>

                    <ContainerButtonEditAddress>
                        <ButtonColorGrey6 onClick={() => setModalOpenEditAddress(false)}>Cancelar</ButtonColorGrey6>
                        <ButtonColorBrand3 type="submit">Salvar alterações</ButtonColorBrand3>
                    </ContainerButtonEditAddress>

                    </form>
                </ContainerFormEditProfile>
            </BackgroundModal>
        </>
    )
};

export {
    ModalEditAddress
};
