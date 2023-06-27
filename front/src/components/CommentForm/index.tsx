import { useContext, useState } from "react";
import { ContextComment } from "../../contexts/CommentContex/CommentContex";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentSchema, TCommentFormProps } from "./commentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IComment, CommentsFormProps } from "../../interfaces/CommentInterface";

const CommentsForm = ({advertsId}: CommentsFormProps) => {

    const { createComment } = useContext(ContextComment);
    const [commentText, setCommentText] = useState("");

    const {
        register,
        handleSubmit,
        setValue,
        reset
    } = useForm<IComment>({
        resolver: zodResolver(CommentSchema)
    });

    const submit: SubmitHandler<TCommentFormProps> = (formData) => {
        createComment(advertsId, formData);
        reset();
    };

    const handleButtonClick = (buttonText: string) => {
        setCommentText((prevCommentText) => prevCommentText + buttonText);
        setValue("comment", commentText + buttonText);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <textarea
                    id="comment"
                    placeholder="Escreva um comentário..."
                    {...register("comment")}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <button id="postCommentButton" type="submit">Comentar</button>
            </form>
            <div id="autoCommentButtons">
              <button id="likeCommentButton" onClick={() => handleButtonClick("Gostei muito!")} >Gostei muito!</button>
              <button id="incredibleCommentButton" onClick={() => handleButtonClick("Incrível")} >Incrível</button>
              <button id="recommendCommentButton" onClick={() =>handleButtonClick("Recomendarei para meus amigos!")} >
                Recomendarei para meus amigos!
              </button>
            </div>
        </>
    )
};

export { CommentsForm };