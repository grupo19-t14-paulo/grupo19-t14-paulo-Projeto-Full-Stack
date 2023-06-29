import { useContext } from "react";
import { IModalMenuComment } from "../../interfaces/ModalInterfaces"
import { ContainerMenuComment } from "./style"
import { ContextComment } from "../../contexts/CommentContex/CommentContex";

const ModalMenuComment = ({modalOpenMenuComment, setModalOpenMenuComment, setSelectedCard, selectedCard}: IModalMenuComment) => {

    const { deleteComment } = useContext(ContextComment)
    
    const handleCloseModal = () => {
        setModalOpenMenuComment(false);
        setSelectedCard(null);
    };

    if(!modalOpenMenuComment) return null

    return (
        <>
            <ContainerMenuComment>
                <div>
                    <button onClick={() => {handleCloseModal()}}>x</button>
                </div>
                <button onClick={()=> {deleteComment(selectedCard)}}>Excluir</button>
            </ContainerMenuComment>
        </>
    )
}

export { ModalMenuComment }