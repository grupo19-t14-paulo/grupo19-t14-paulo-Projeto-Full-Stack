import { useContext } from "react";
import { ContextComment } from "../../contexts/CommentContex/CommentContex";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentSchema, TCommentFormProps } from "./commentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IComment, CommentsFormProps } from "../../interfaces/CommentInterface";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { useNavigate } from "react-router-dom";

const CommentsForm = ({advertsId}: CommentsFormProps) => {

    const { createComment } = useContext(ContextComment);
    const { user } = useContext(ContextLogin);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        reset
    } = useForm<IComment>({
        resolver: zodResolver(CommentSchema),
        defaultValues: { comment: "" }, 
    });

    const submit: SubmitHandler<TCommentFormProps> = (formData) => {
        const commentText = formData.comment.trim();
        
        if(!commentText){
            return;
        }

        createComment(advertsId, formData);
        reset();
    };

    const handleButtonClick = (buttonText: string) => {
        setValue("comment", buttonText);
    };

    return (
        <>       
            <form onSubmit={handleSubmit(submit)}>
                <textarea
                    id="comment"
                    placeholder="Escreva um comentário..."
                    {...register("comment")}
                    disabled={!user}
                ></textarea>
                {
                    user ? (
                        <button id="postCommentButton" type="submit">Comentar</button>
                    ):
                    (
                        <button onClick={() => {navigate("/login")}} id="postCommentButtonNotLogged">Comentar</button>
                    )
                }  
            </form>
            <div id="autoCommentButtons">
              <button id="likeCommentButton" onClick={() => handleButtonClick("Gostei muito!")} disabled={!user}>Gostei muito!</button>
              <button id="incredibleCommentButton" onClick={() => handleButtonClick("Incrível")} disabled={!user}>Incrível</button>
              <button id="recommendCommentButton" onClick={() =>handleButtonClick("Recomendarei para meus amigos!")} disabled={!user}>
                Recomendarei para meus amigos!
              </button>
            </div>
        </>
    )
};

export { CommentsForm };