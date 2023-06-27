import { createContext, useState } from "react";
import { api } from "../../services/api";
import { TCommentFormProps } from "../../components/CommentForm/commentFormSchema";
import { ICommentFormData, IContextComment, IProviderProps } from "../../interfaces/CommentInterface";

const ContextComment = createContext({} as IContextComment);

const AuthCommentProvider = ({children}: IProviderProps) => {
    const [comment, setComment] = useState<TCommentFormProps | undefined>();

    const createComment = async (advertsId: string, formData: ICommentFormData) => {

        try {
            const res = await api.post(`/comments/${advertsId}`, formData);

            const { id, comment, created_at, user } = res.data;
            const commentData = { id, comment, created_at, user };

            setComment(commentData); 

        } catch (error) {
            console.log(error);
        }
    };

    const listComent = async (advertsId: string) => {
        try {
            const res = await api.get(`/comments/${advertsId}`)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <ContextComment.Provider value={{createComment, comment, setComment, listComent}}>
            {children}
        </ContextComment.Provider>
    );
};

export { ContextComment, AuthCommentProvider};