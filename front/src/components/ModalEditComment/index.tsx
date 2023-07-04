import useOutClick from "../../hook/useOutClick";
import { IModalEditComment } from "../../interfaces/ModalInterfaces";
import { BackgroundModal } from "../ModalSuccessRegister/style";
import { ContainerModalEditComment } from "./style";
import { ButtonColorGrey6, ButtonColorBrand1 } from "../../styles/buttons";
import { useContext } from "react";
import { ContextComment } from "../../contexts/CommentContex/CommentContex";
import { useForm } from "react-hook-form";
import { INewCommentData } from "../../interfaces/CommentInterface";
import { useKeydowns } from "../../hook/useKeydown";

const ModalEditComment = ({modalOpenEditComment, setModalOpenEditComment}: IModalEditComment) => {

    const {handleSubmit, register} = useForm()
    const { toEdit, retiveComments } = useContext(ContextComment)

    const modalRef = useOutClick(() => {
        setModalOpenEditComment(false);
    });

    const buttonRef = useKeydowns("Escape", (element) => {
        element?.click();
    });

    const submit = async (data: INewCommentData) => {
        await toEdit(data);
        setModalOpenEditComment(false);
    }

    if(!modalOpenEditComment) return null;

    return (
        <BackgroundModal>
            <ContainerModalEditComment ref={modalRef}>
                <div id="container-titile-modal">
                    <h2>Editar Comentário</h2>
                    <button ref={buttonRef} onClick={() => {setModalOpenEditComment(false)}}>
                        X
                    </button>
                </div>
            
                <form onSubmit={handleSubmit(submit)}>
                    <textarea id="comment" {...register("comment")} defaultValue={retiveComments?.comment}>
                    </textarea>
                    <div id="container-buttons">
                        <ButtonColorGrey6 onClick={() => {setModalOpenEditComment(false)}}>Cancelar</ButtonColorGrey6>
                        <ButtonColorBrand1 type="submit" >Salvar alterações</ButtonColorBrand1>
                    </div>
                </form>
            </ContainerModalEditComment>
        </BackgroundModal>
    )
};

export { ModalEditComment };