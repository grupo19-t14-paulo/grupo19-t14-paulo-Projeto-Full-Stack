import { createContext, useState } from "react";
import { api } from "../../services/api";
import { TCommentFormProps } from "../../components/CommentForm/commentFormSchema";
import { ICommentFormData, ICommentList, IContextComment, INewCommentData, IProviderProps } from "../../interfaces/CommentInterface";
import { toast } from "react-toastify";

const ContextComment = createContext({} as IContextComment);

const AuthCommentProvider = ({children}: IProviderProps) => {
    const [comment, setComment] = useState<TCommentFormProps | undefined>();
    const [listComments, setListComments] = useState<ICommentList[] | undefined>(undefined);
    const [commentId, steCommentId] = useState<string>();
    const [retiveComments, setRetiveComments] = useState<INewCommentData>();


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

    const addCommentToList = (comment: ICommentList) => {
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

    const deleteComment = async (commentId: string) => {
        
        const token = window.localStorage.getItem("@token");

        try {
            await api.delete(`/comments/${commentId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            const filterList = listComments?.filter((comment) => comment.id !== commentId)
            setListComments(filterList)
            
            toast.success("Comentário excluido com sucesso!");
            
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado");
        }
    };

    const retiveComment = async (commentId: string) => {
        try {
            const res = await api.get(`/comments/users/${commentId}`);
            setRetiveComments(res.data)
        }catch (error) {
            console.log(error)
        }
    };

    const toEdit = async(data: INewCommentData) => {
        const id = commentId;

        const token = window.localStorage.getItem("@token");

        try {
            const res = await api.patch(`/comments/${id}`, data, {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });

            const filter = listComments?.filter((comment) => comment.id !== id);

            setListComments([...filter!, res.data]);
            toast.success("Comentário atualizado com sucesso!");

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <ContextComment.Provider value={{createComment, comment, setComment, listCommentsProduct, listComments, deleteComment, toEdit, steCommentId, commentId, retiveComment, retiveComments}}>
            {children}
        </ContextComment.Provider>
    );
};

export { ContextComment, AuthCommentProvider};