import { createContext, useState } from "react";
import { api } from "../../services/api";
import { TCommentFormProps } from "../../components/CommentForm/commentFormSchema";
import { ICommentFormData, ICommentList, IContextComment, IProviderProps } from "../../interfaces/CommentInterface";
import { toast } from "react-toastify";

const ContextComment = createContext({} as IContextComment);

const AuthCommentProvider = ({children}: IProviderProps) => {
    const [comment, setComment] = useState<TCommentFormProps | undefined>();
    const [listComments, setListComments] = useState<ICommentList[] | undefined>(undefined);

    const createComment = async (advertsId: string, data: ICommentFormData) => {

        try {
            const res = await api.post(`/comments/${advertsId}`, data);

            const { id, comment, created_at, user } = res.data;
            const commentData = { id, comment, created_at, user };

            toast.success("Comentário adicionado com sucesso!");
            setComment(commentData); 
            addCommentToList(commentData);

        } catch (error) {
            console.log(error);
        }
    };

    const addCommentToList = (comment: any) => {
        setListComments((prevListComments) => {
          if (prevListComments) {
            return [...prevListComments, comment];
          } else {
            return [comment];
          }
        });
    };   

    const listCommentsProduct = async (advertsId: string) => {
        try {
            const res = await api.get(`/comments/${advertsId}`)

            setListComments(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContextComment.Provider value={{createComment, comment, setComment, listCommentsProduct, listComments}}>
            {children}
        </ContextComment.Provider>
    );
};

export { ContextComment, AuthCommentProvider};