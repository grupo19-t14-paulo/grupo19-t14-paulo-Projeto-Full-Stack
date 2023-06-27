export interface IProviderProps {
  children: React.ReactNode;
}

export interface ICommentFormData {
  comment: string;
}

export interface IContextComment {
  createComment: (advertsId: string, formData: ICommentFormData) => Promise<void>;
  comment: {
      comment: string;
  } | undefined;
  setComment: React.Dispatch<React.SetStateAction<{
      comment: string;
  } | undefined>>;
  listComent: (advertsId: string) => Promise<void>
}

export interface IComment {
    id: string;
    comment: string;
    created_at: string;
    user: {
      id: string;
      name: string;
    };
}

export interface CommentsFormProps {
  advertsId: string;
}