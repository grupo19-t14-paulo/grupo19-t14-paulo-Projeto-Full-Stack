import { useContext, useState } from "react";
import { IModalMenuComment } from "../../interfaces/ModalInterfaces"
import { ContainerMenuComment } from "./style"
import { ContextComment } from "../../contexts/CommentContex/CommentContex";
import { ModalEditComment } from "../ModalEditComment";
import { css } from "styled-components";

const ModalMenuComment = ({modalOpenMenuComment, setModalOpenMenuComment, setSelectedCard, selectedCard, menuModalStyle, setMenuModalStyle}: IModalMenuComment) => {

    const { deleteComment } = useContext(ContextComment)
    const [modalOpenEditComment, setModalOpenEditComment] = useState(false);

    const handleCloseModal = () => {
        setModalOpenMenuComment(false);
        setSelectedCard(null);
    };

    const handleEditClick = () => {
        setModalOpenEditComment(true);

        setMenuModalStyle({ display: "none" });
    };

    const combinedStyle = css`
        ${menuModalStyle}
    `;

    if(!modalOpenMenuComment) return null

    return (
        <>
            <ModalEditComment modalOpenEditComment={modalOpenEditComment} setModalOpenEditComment={setModalOpenEditComment}/>
            <ContainerMenuComment  styledCSS={combinedStyle}>
                <div>
                    <button onClick={() => {handleCloseModal()}}>x</button>
                </div>
                <button onClick={() => {handleEditClick()}}>Editar</button>
                <button onClick={() => {deleteComment(selectedCard)}}>Excluir</button>
            </ContainerMenuComment>
        </>
    )
};

export { ModalMenuComment };