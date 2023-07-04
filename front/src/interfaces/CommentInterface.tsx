export interface IProviderProps {
  children: React.ReactNode;
}

export interface ICommentFormData {
  comment: string;
}

export interface IContextComment {
  createComment: (advertsId: string, formData: ICommentFormData) => Promise<void>;
  comment: { comment: string; } | undefined;
  setComment: React.Dispatch<React.SetStateAction<{ comment: string; } | undefined>>;
  listCommentsProduct: (advertsId: string) => Promise<void>;
  listComments: ICommentList[] | undefined;
  deleteComment: (commentId: string) => Promise<void>;
  toEdit: (data: INewCommentData) => Promise<void>;
  steCommentId: React.Dispatch<React.SetStateAction<string | undefined>>;
  commentId: string | undefined;
  retiveComment: (commentId: string) => Promise<void>;
  retiveComments: INewCommentData | undefined
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

export interface ICommentList {
  id: string;
  comment: string;
  created_at: string;
  user: {
    id: string;
    name: string;
  };
  advert?: {
    id: string;
  };
}

export interface INewCommentData {
  id?: string;
  comment?: string;
  created_at?: string;
  user?: {
    id?: string;
    name?: string;
  };
  advert?: {
    id?: string;
  };
}

export interface CommentsFormProps {
  advertsId: string;
}
